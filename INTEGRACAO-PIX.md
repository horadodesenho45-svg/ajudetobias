# Integração Pix Horizon

O site e a função `api/pix.js` devem ser publicados juntos na Vercel. GitHub Pages sozinho não executa a função de servidor.

1. Importe este repositório na Vercel como projeto sem framework.
2. Na Horizon, conclua a verificação KYC e crie uma chave em **Configurações > Chaves de API**.
3. Na Vercel, em **Settings > Environment Variables**, configure `HORIZON_API_KEY` com a chave secreta para os ambientes desejados. Não coloque a chave nos arquivos, no Git ou no navegador.
4. Faça um novo deploy. Teste pelo endereço HTTPS da Vercel com a conta Horizon e confira valor, recebedor, descrição e rastreamento no painel antes de divulgar o site.

A função cria transações em `https://app.horizonpags.com/api/v1/transactions`, enviando nome, CPF, telefone, e-mail e valor em centavos. A descrição é `Ebook Menino Tobias`, com indicação de Turbine quando selecionado. Como os valores são variáveis, não é enviado `productId`: a documentação da Horizon informa que o preço e o nome de um produto associado vêm do cadastro. Confira no painel se a descrição atende à identificação desejada; ela não equivale à associação a um produto cadastrado.

Na página `obrigado.html`, a função também aceita uma quantidade inteira de 5 a 178 corações, calcula R$ 1,90 por coração no servidor e envia uma descrição como `Corações - caso Tobias (5 corações)`. O total deve ser menor que R$ 340,00. A descrição identifica a transação, mas não associa um produto cadastrado na Horizon; confira no painel como ela é exibida. A integração não registra automaticamente os corações nem executa ou comprova o alcance estimado.

Após gerar o Pix da contribuição, nome, CPF, telefone e e-mail são guardados no `sessionStorage` da mesma aba para reutilização na compra de corações por até 30 minutos. Eles permanecem nessa aba até serem removidos ou ela ser fechada; ao acessar após o prazo, são removidos. A página informa o uso dos dados e permite alterá-los. Se não estiverem disponíveis, a pessoa precisa preenchê-los; não são usados dados fictícios.

Os parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term` são enviados como `utm.source`, `utm.medium`, `utm.campaign`, `utm.content` e `utm.term`. `src` e `sck` também são enviados no objeto `utm`. A documentação da Horizon não lista `fbclid` e `gclid`, por isso não são enviados. A mensagem opcional não é salva nem enviada.

O formulário aceita contribuições de R$ 7,90 a R$ 350,00. A função aceita um total de R$ 1,00 a R$ 350,00 e calcula a opção Turbine: R$ 5,90 para contribuições abaixo de R$ 100,00, sem acréscimo a partir desse valor. A integração não registra automaticamente a entrega dos itens nem altera o destaque da campanha ou uma contagem de corações. Esses acompanhamentos devem ser feitos após a confirmação de cada pagamento.

O código Pix gerado não confirma o pagamento. Para contribuições, enquanto a página estiver aberta, o navegador consulta `api/pix-status.js` a cada 10 segundos; essa função consulta a transação na Horizon usando `HORIZON_API_KEY` e só informa pagamento confirmado quando o ID e o valor correspondem e o status é `PAID`. Só então ocorre o redirecionamento para `obrigado.html`. O acompanhamento usa um token assinado no servidor, válido por 24 horas, e é recuperado na mesma aba após recarregar, quando o armazenamento do navegador estiver disponível. Se a aba for fechada, não haverá redirecionamento; falhas e Pix encerrado são informados na página. A página de agradecimento continua acessível diretamente e não constitui comprovante de pagamento.

A integração não implementa webhook, atualização da meta, publicação de doadores ou confirmação automática dos Pix de corações; consulte o painel Horizon. Cada solicitação ao gateway recebe uma chave de idempotência, mas uma nova tentativa no site cria outra chave: em caso de erro ou interrupção, confira o painel antes de gerar outro Pix. Configure controles de acesso, limitação de requisições, monitoramento e proteção contra abuso adequados; não registre tokens, dados pessoais ou a chave nos logs.

Para executar os testes locais com respostas simuladas: `node --test tests\pix.test.js tests\pix-status.test.js tests\dados-sessao.test.js`. Os testes não realizam uma transação real na Horizon; após publicar, confirme também o retorno real de ID, valor e status na sua conta.
