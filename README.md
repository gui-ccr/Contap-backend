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
├── app/                  # Roteamento do Next.js (Páginas e Layouts)
├── components/           # Componentes Globais e UI
│   └── ui/               # Componentes do Shadcn (Button, Input, Card...)
├── features/             # O Coração do Negócio (Feature-based)
│   ├── auth/             # Login e Controle de Acesso
│   ├── accounting/       # Lançamentos e Plano de Contas 
│   │   ├── components/   # Forms de Lançamento, Tabela de Plano de Contas
│   │   ├── hooks/        # Lógica de estado da contabilidade
│   │   └── types.ts      # Definições de Débito/Crédito
│   ├── reports/          # Balanço Patrimonial e DRE 
│   │   └── components/   # Visualização de Relatórios e Gráficos
│   └── dashboard/        # Resumo: Saldos e Índices de Liquidez 
├── hooks/                # Hooks Genéricos (useLocalStorage, useDebounce)
├── lib/                  # Configurações de Libs (supabase-client.ts, utils.ts)
├── services/             # Chamadas de API (Integração com o Backend)
├── types/                # Interfaces Globais do Sistema
└── utils/                # Formatadores (BRL, Datas, Porcentagem)
```
---

## 📋 Como Executar

1.  **Instalação**: `npm install`
2.  **Variáveis de Ambiente**: Configure o seu `.env` com as credenciais do Supabase.
3.  **Desenvolvimento**: `npm run dev`
4.  **Testes de Lógica**: `npm test` (Recomendado para validar as fórmulas de liquidez e balanceamento).

---

### 💡 Dica do Mentor para o Time de Back-end:
Como vocês são os guardiões da lógica, foquem em criar **Testes Unitários** para a função de balanceamento. No fluxo de demonstração final, o professor vai tentar lançar um débito sem crédito correspondente para ver o sistema "reclamar". Se o seu backend estiver bem blindado, o sistema passará com nota máxima.