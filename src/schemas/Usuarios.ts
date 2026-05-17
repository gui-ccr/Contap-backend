import { z } from "zod";

export const criarUsuariosSchema = z.object({
  id: z.string().uuid("O ID do Supabase Auth precisa ser um UUID válido"),
  empresa_id: z.string().uuid("ID da empresa inválido"),
  nome: z.string().min(2, "O nome é obrigatório"),
  email: z.string().email("Formato de e-mail inválido"),
  cargo: z.enum(['DONO', 'GERENTE', 'CAIXA'],)
})