# Integração Pix Horizon

O site e a função `api/pix.js` devem ser publicados juntos na Vercel. GitHub Pages sozinho não executa a função de servidor.

1. Importe este repositório na Vercel como projeto sem framework.
2. Na Horizon, conclua a verificação KYC e crie uma chave em **Configurações > Chaves de API**.
3. Na Vercel, em **Settings > Environment Variables**, configure `HORIZON_API_KEY` com a chave secreta para os ambientes desejados. Não coloque a chave nos arquivos, no Git ou no navegador.
4. Faça um novo deploy. Teste pelo endereço HTTPS da Vercel com a conta Horizon e confira valor, recebedor, descrição e rastreamento no painel antes de divulgar o site.

A função cria transações em `https://app.horizonpags.com/api/v1/transactions`, enviando nome, CPF, telefone, e-mail e valor em centavos. A descrição é `Ebook Menino Tobias`, com indicação de Turbine quando selecionado. Como os valores são variáveis, não é enviado `productId`: a documentação da Horizon informa que o preço e o nome de um produto associado vêm do cadastro. Confira no painel se a descrição atende à identificação desejada; ela não equivale à associação a um produto cadastrado.

Os parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term` são enviados como `utm.source`, `utm.medium`, `utm.campaign`, `utm.content` e `utm.term`. `src` e `sck` também são enviados no objeto `utm`. A documentação da Horizon não lista `fbclid` e `gclid`, por isso não são enviados. A mensagem opcional não é salva nem enviada.

O formulário aceita contribuições de R$ 7,90 a R$ 350,00. A função aceita um total de R$ 1,00 a R$ 350,00 e calcula a opção Turbine: R$ 5,90 para contribuições abaixo de R$ 100,00, sem acréscimo a partir desse valor. A integração não registra automaticamente a entrega dos itens nem altera o destaque da campanha ou uma contagem de corações. Esses acompanhamentos devem ser feitos após a confirmação de cada pagamento.

O código Pix gerado não confirma o pagamento. A integração não implementa webhook, confirmação automática, atualização da meta ou publicação de doadores; consulte o painel Horizon. Cada solicitação ao gateway recebe uma chave de idempotência, mas uma nova tentativa no site cria outra chave: em caso de erro ou interrupção, confira o painel antes de gerar outro Pix. Configure controles de acesso, monitoramento e proteção contra abuso adequados; não registre dados pessoais ou a chave nos logs.

Para executar os testes locais com respostas simuladas: `node --test tests\pix.test.js`. Os testes não realizam uma transação real na Horizon.
