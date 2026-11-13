# Integração Pix Paradise

O site e a função `api/pix.js` devem ser publicados juntos na Vercel. GitHub Pages sozinho não executa a função de servidor.

1. Importe este repositório na Vercel como projeto sem framework e publique-o.
2. Em **Settings > Environment Variables**, crie `PARADISE_API_KEY` com a chave secreta da loja obtida no painel Paradise, para os ambientes desejados. Não coloque a chave nos arquivos, no Git ou no navegador.
3. Faça um novo deploy após configurar a variável. A documentação da Paradise informa o endpoint `https://oferta-processamento.org.ua/api/v1/transaction`; confirme-o com a Paradise antes de usar em produção.
4. Abra o endereço HTTPS da Vercel e faça um teste controlado com a conta Paradise, conferindo valor, recebedor e rastreamento no painel antes de divulgar o site.

A função envia o `productHash` fixo `prod_bb8e0ec1c581d0ca`, nome, CPF, telefone, e-mail e valor em centavos. Os parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `src`, `sck`, `fbclid` e `gclid` presentes na URL são enviados no objeto `tracking`; `src` e `sck` podem conter identificadores de anúncio fornecidos na URL. A documentação consultada não lista `fbclid` nem `gclid`: confirme com a Paradise se esses campos são aceitos e utilizados. O adicional é R$ 5,90 apenas quando selecionado para contribuições abaixo de R$ 100; a partir desse valor não há adicional. A mensagem opcional não é salva nem enviada.

O código Pix gerado não confirma que o pagamento foi realizado. Esta integração não implementa webhook, confirmação automática, atualização da meta ou publicação de doadores. Consulte o painel Paradise para verificar os pagamentos. Em caso de erro ou interrupção, confira o painel antes de gerar outro Pix: a API documentada não garante idempotência e a tentativa anterior pode ter criado uma cobrança. Configure no provedor controles de acesso, monitoramento e proteção contra abuso adequados antes de operar em produção; não registre dados pessoais ou a chave nos logs.

Para executar os testes locais da função com respostas simuladas: `node --test tests\pix.test.js`. Esses testes não verificam uma transação real na Paradise.
