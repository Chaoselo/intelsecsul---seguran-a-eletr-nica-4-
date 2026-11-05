export interface MaintenanceFaqItem {
  question: string;
  answer: string;
}

export const MAINTENANCE_COMMON_FAQ: MaintenanceFaqItem[] = [
  {
    question: 'Qual é o prazo de atendimento em caso de emergência?',
    answer: 'Curitiba e toda a Região Metropolitana contam com atendimento para chamados urgentes em até 12 horas, mediante disponibilidade técnica e taxa de emergência. Para manutenções não emergenciais, o agendamento padrão ocorre em até 48 horas úteis.',
  },
  {
    question: 'Como funciona o diagnóstico e a taxa de visita técnica?',
    answer: 'O primeiro diagnóstico para triagem inicial do problema é gratuito e realizado pelo WhatsApp com nossa equipe técnica. Caso seja necessária a ida de um técnico até o local para inspeção detalhada, medições ou testes elétricos, será informada previamente a taxa de visita técnica correspondente à região.',
  },
  {
    question: 'Os serviços de manutenção e conserto têm garantia?',
    answer: 'Sim. Todos os serviços prestados pela Intelsecsul contam com garantia de 3 meses na mão de obra e nas peças ou componentes eventualmente substituídos no conserto.',
  },
];
