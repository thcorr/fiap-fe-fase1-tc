# FIAP - Thomas Melachos - Front End Engineering - Fase 1 - Tech Challenge

## Descrição

Projeto referente ao tech challenge da primeira do curso Front End Engineering (FIAP).

Foi desenvolvido um front end simples para um internet banking hipotetico utilizando Next.js

## Funcionalidades/Requisitos implementados

- Home Page - Página inicial de boas vindas.
- Dashboard logado - Simulação de landing page após autenticação de usuário com as seguintes funcionalidades:
  - Saldo atual da conta
  - Extrato das ultimas transações
  - Possibilidade de excluir transação (implementado via modal)
  - Possibilidade de editar transação (implementado via modal)
- Página de listagem de transações com possibilidade de edição e exclusão - Uma página que exibe a lista de transações realizadas, com opções para visualizar detalhes, editar e deletar cada transação (estes ultimos foram implementados via modals).
- Inclusão de nova transação: Possibilidade de incluir nova transação informando o tipo e valor. Incluido como parte da dashboard principal.
- Persistência de dados da transação via .JSON.
- Chamadas que implementam funcionalidades acima manipulam JSON local através de APIs REST.
- Desenvolvimento utilizando Next.js e Tailwind.

## Fora de escopo (conforme documento de projeto da disciplina)

- Autenticação/criação de usuários
- Páginas complementares e não pertinentes ao fluxo acima: "Sobre", "Serviços", etc...

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/thcorr/fiap-fe-fase1-tc.git
   ```
2. npm install
3. npm run dev ou
4. npm run build seguido de npm run start
5. Clicar no botão "Já possuo conta" para iniciar.
