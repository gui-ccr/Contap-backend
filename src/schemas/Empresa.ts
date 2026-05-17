import z from 'zod';

export const criarEmpresaSchema = z.object({
  nome_fantasia: z.string().min(2, "Nome fantasia é obrigatório e precisa ter mais de 2 letras"),
  razao_social: z.string().optional(),
  cnpj: z.string().length(14, "O CNPJ deve ter exatamente 14 números").optional(),
});