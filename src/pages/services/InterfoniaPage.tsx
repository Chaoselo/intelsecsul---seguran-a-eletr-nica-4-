import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const InterfoniaPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Interfone e Vídeo-Porteiro em Curitiba | Instalação | Intelsecsul"
      metaDescription="Instalação de interfone e vídeo-porteiro para residências, condomínios e empresas em Curitiba e região. Integração com a portaria. Peça um orçamento."
      h1="Interfonia em Curitiba e Região Metropolitana"
      introText="Instalamos sistemas de interfone e vídeo-porteiro para residências, condomínios e empresas, integrados à portaria e, quando necessário, ao controle de acesso e às câmeras já existentes no imóvel."
      whenToHireTitle="Quando instalar interfone ou vídeo-porteiro"
      whenToHireText="A interfonia é indicada sempre que é importante identificar visitantes antes de liberar a entrada, seja em uma residência, em um condomínio com portaria remota ou em uma empresa com recepção. O vídeo-porteiro acrescenta a possibilidade de ver quem está chamando antes de atender, o que aumenta a segurança em relação ao interfone tradicional apenas de voz. Também é uma solução comum em condomínios que estão migrando para portaria remota, reduzindo custos com porteiro presencial sem abrir mão do controle de quem entra no local."
      sintomasFrequentes={[
        {
          titulo: "Interfone com chiado forte, zumbido ou áudio muito baixo",
          descricao: "Troca de fiação com interferência, substituição da cápsula receptora/transmissora do fone ou ajuste de ganho do amplificador.",
        },
        {
          titulo: "Botão do painel de rua não toca no apartamento",
          descricao: "Substituição da chave táctil do painel externo, limpeza de contatos oxidados e teste de continuidade do cabo.",
        },
        {
          titulo: "Vídeo-porteiro sem imagem no monitor interno ou tela azul",
          descricao: "Troca da fonte de alimentação de 12V, reparo da câmera do painel externo ou substituição do cabo de vídeo de 4 vias.",
        },
        {
          titulo: "Interfone não aciona a fechadura elétrica do portão social",
          descricao: "Regulagem de voltagem da saída de fechadura (pulsante 12V), troca do botão de acionamento do fone ou conserto da fiação da trava.",
        },
        {
          titulo: "Central de interfonia do condomínio travada (apartamentos não se falam)",
          descricao: "Reset da central Maxcom/Intelbras, reprogramação das placas de ramais e teste de fusíveis da central.",
        },
        {
          titulo: "Painel externo com teclas coladas, quebradas ou vandalizadas",
          descricao: "Troca do painel frontal por modelo anti-vandalismo em alumínio fundido com botões em inox.",
        },
        {
          titulo: "Áudio com microfonia (apito estridente) ao atender o fone",
          descricao: "Regulagem dos trimpots de volume de conversação (microfone/alto-falante) no painel de rua.",
        },
        {
          titulo: "Porteiro eletrônico residencial chamando sem parar sozinho",
          descricao: "Isolamento da fiação exposta a infiltração de água e troca do botão de chamada com curto interno.",
        },
        {
          titulo: "Linha cruzada (ao falar no interfone escuta a conversa do vizinho)",
          descricao: "Separação de pares de fios em curto na tubulação do condomínio e revisão das placas de distribuição.",
        },
        {
          titulo: "Vídeo-porteiro Wi-Fi não envia notificação no celular quando tocam a campainha",
          descricao: "Reconfiguração da rede Wi-Fi de 2.4GHz no app, atualização de firmware e ajuste de permissões no celular.",
        },
        {
          titulo: "Monofone do apartamento caindo do gancho ou com fio espiral partido",
          descricao: "Substituição do cabo espiralado RJ9 ou troca completa do monofone de parede.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Interfone tradicional',
          description: 'Comunicação por voz entre a portaria e as unidades, solução mais simples e econômica.',
        },
        {
          title: 'Vídeo-porteiro',
          description: 'Permite ver e ouvir o visitante antes de liberar o acesso.',
        },
        {
          title: 'Interfone para condomínios',
          description: 'Integrado à central da portaria, com comunicação entre unidades e portaria.',
        },
        {
          title: 'Portaria remota',
          description: 'Combinação de vídeo-porteiro, câmeras e controle de acesso, monitorada à distância.',
        },
      ]}
      segmentLinks={[
        {
          title: 'Interfonia para Condomínios',
          description: 'Comunicação integrada à portaria, vídeo-porteiro e suporte a portaria remota.',
          url: '/servicos/interfonia/condominio',
        },
      ]}
      diferenciais={[
        {
          title: 'Integração com controle de acesso',
          description: 'Libera portas e portões diretamente pelo sistema de interfonia.',
        },
        {
          title: 'Instalação em condomínios',
          description: 'Experiência em projetos que atendem várias unidades ao mesmo tempo.',
        },
        {
          title: 'Suporte pós-instalação',
          description: 'Manutenção disponível para ajustes e reparos futuros.',
        },
      ]}
      faq={[
        {
          question: 'Qual a diferença entre interfone e vídeo-porteiro?',
          answer: 'O interfone permite apenas comunicação por voz; o vídeo-porteiro acrescenta imagem, permitindo ver quem está chamando antes de atender.',
        },
        {
          question: 'É possível instalar interfonia em um condomínio já construído?',
          answer: 'Sim, adaptamos a instalação à estrutura já existente do condomínio.',
        },
        {
          question: 'O vídeo-porteiro funciona pelo celular?',
          answer: 'Em alguns modelos, sim — é possível atender chamadas e liberar o acesso remotamente pelo aplicativo.',
        },
        {
          question: 'Vocês integram a interfonia com o controle de acesso?',
          answer: 'Sim, é possível integrar a interfonia ao controle de acesso para liberar portas e portões pelo mesmo sistema.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para interfonia',
        text: 'Avaliamos o imóvel ou condomínio e indicamos a melhor solução de interfone ou vídeo-porteiro.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="interfonia"
    />
  );
};
