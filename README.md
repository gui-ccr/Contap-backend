# 🛡️ ContaAp - Backend: Núcleo de Inteligência e Validação

Este repositório contém a **Camada de Negócio** do sistema ContaAp. Sua principal função é atuar como o cérebro contábil da aplicação, garantindo que todos os lançamentos financeiros da pizzaria sigam as normas técnicas de contabilidade.

---

## 🚀 Foco Técnico: Validações e Regras de Negócio

Diferente de uma API comum, este backend não apenas salva dados; ele valida a **consistência patrimonial**. Utilizamos Node.js com Express e TypeScript para garantir que nenhuma transação inválida chegue ao banco de dados.

### 🛠️ Tecnologias Principais
* **Node.js & Express**: Processamento de rotas e orquestração de lógica.
* **TypeScript**: Tipagem estrita para entidades contábeis (Lançamentos, Contas, Partidas).
* **Zod/Joi**: Validação de esquema e contratos de entrada.
* **Supabase Client**: Comunicação segura com a camada de persistência.

---

## 🧠 Regras Contábeis Obrigatórias

O Backend é o responsável por implementar e validar os seguintes pontos exigidos pelo projeto:

1.  **Partidas Dobradas (Equilíbrio)**: 
    * Todo lançamento deve validar se a soma dos Débitos é exatamente igual à soma dos Créditos ($Débito = Crédito$). 
    * Caso os valores divirjam, o sistema deve impedir o salvamento e retornar um erro descritivo.
2.  **Estrutura do Plano de Contas**:
    * Gerenciar contas obrigatórias (Ativo, Passivo, PL, Receita e Despesa) e suas respectivas naturezas ($D/C$).
3.  **Cálculo de Indicadores Financeiros**:
    * **Liquidez Corrente**: Cálculo automático de $Ativo Circulante / Passivo Circulante$.
    * **Resultado Líquido**: Apuração de $Receitas - Despesas$ para exibição no Dashboard e na DRE.
4.  **Integridade Patrimonial**:
    * Garantir que os relatórios gerados reflitam sempre a igualdade: $Ativo = Passivo + Patrimônio Líquido$.

---

## 🏗️ Módulos de Lógica (Features)

Para manter o código limpo e organizado (**Clean Code**), o backend está dividido por funcionalidades:

* **`accounting-engine`**: Responsável pelas fórmulas de Balanço Patrimonial e DRE.
* **`entry-validator`**: Middleware que intercepta novos lançamentos para validar o balanceamento automático.
* **`statement-generator`**: Lógica de agregação de saldos por período para gerar o Razão Contábil (Extrato por conta).

```
src/
├── config/          # Conexão com Supabase e carregamento de variáveis de ambiente
├── schemas/         # Regras de validação de entrada usando Zod (A nossa alfândega)
├── domain/          # Interfaces, Tipos e Classes (O coração do sistema)
├── mappers/         # Tradutores de dados (Converte de JSON para Classe e de Classe para DB)
├── usecases/        # Regras de negócio, cálculos contábeis e validações lógicas
├── controllers/     # Recebem a requisição (req), chamam o UseCase e devolvem a resposta (res)
├── routes/          # Definição dos endpoints da API (O catálogo de endereços do Express)
├── middlewares/     # Interceptadores (Tratamento de erros globais, Autenticação)
├── utils/           # Funções reaproveitáveis (Formatadores de moeda, datas, etc.)
└── server.ts        # Ponto de entrada (Inicialização do App Express)
```
---

## 📋 Como Executar

1.  **Instalação**: `npm install`
2.  **Variáveis de Ambiente**: Configure o seu `.env` com as credenciais do Supabase.
3.  **Desenvolvimento**: `npm run dev`
4.  **Testes de Lógica**: `npm test` (Recomendado para validar as fórmulas de liquidez e balanceamento).

---

## 📁 Sobre os arquivos .gitkeep

Você notará arquivos chamados `.gitkeep` em diversas pastas do projeto. 

**Para que servem?**
O Git, por padrão, não consegue rastrear ou "subir" pastas que estão totalmente vazias. Como nossa arquitetura foi planejada para ser **Feature-based** (baseada em funcionalidades), criamos a estrutura de pastas antecipadamente para organizar o trabalho do grupo. O `.gitkeep` é apenas um "espaço reservado" para garantir que a pasta exista no repositório de todos.

**O que fazer com eles?**
* **Não apague agora:** Mantenha o arquivo enquanto a pasta estiver vazia.
* **Pode excluir depois:** Assim que você criar um arquivo real dentro da pasta (um componente, um serviço ou um hook), você **pode e deve** excluir o arquivo `.gitkeep`. Ele não é mais necessário quando a pasta já possui conteúdo.

---

### 💡 Dica do para o Time de Back-end:
Como vocês são os guardiões da lógica, foquem em criar **Testes Unitários** para a função de balanceamento. No fluxo de demonstração final, o professor vai tentar lançar um débito sem crédito correspondente para ver o sistema "reclamar". Se o seu backend estiver bem blindado, o sistema passará com nota máxima.
