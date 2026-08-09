# Intelsecsul - Segurança Eletrônica e Tecnologia

Projeto React + Vite + TypeScript.

## Configuração do Google Tag Manager (GTM)

O Container ID do Google Tag Manager pode ser configurado via variável de ambiente:

- **Variável**: `VITE_GTM_ID`
- **Valor Padrão (Fallback)**: `GTM-P72K9FKN`

### Configuração no Netlify
Para alterar o Container ID em ambiente de produção hospedado no Netlify:
1. Acesse o painel do Netlify.
2. Vá em **Site settings** > **Environment variables**.
3. Adicione ou edite a variável `VITE_GTM_ID` com o valor desejado (ex: `GTM-P72K9FKN`).
4. Re-deploy do site.
