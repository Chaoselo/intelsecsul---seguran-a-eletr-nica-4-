import React from 'react';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';

export const ChecklistViajarPage: React.FC = () => {
  return (
    <BlogPostTemplate
      title="Checklist de Segurança Antes de Viajar | Blog Intelsecsul"
      metaDescription="Cuidados simples para deixar a casa mais protegida antes de viajar, com ou sem sistema de segurança instalado."
      h1="Checklist de segurança para deixar a casa protegida antes de viajar"
      category="Dicas de Segurança"
      readTime="3 min de leitura"
      publishedDate="[DATA DE PUBLICAÇÃO]"
      intro="Períodos de viagem costumam ser momentos de maior vulnerabilidade para residências, já que o imóvel fica sem ninguém por dias ou semanas. Alguns cuidados simples ajudam a reduzir os riscos."
      sections={[
        {
          h2: 'Evite divulgar a viagem publicamente',
          content:
            'Postar em redes sociais que a casa ficará vazia, com datas específicas, facilita a ação de quem está de olho em imóveis desocupados. O ideal é compartilhar fotos da viagem só depois de voltar.',
        },
        {
          h2: 'Combine com vizinhos ou uma pessoa de confiança',
          content:
            'Pedir para alguém recolher a correspondência e dar uma passada de vez em quando ajuda a manter a aparência de que a casa está ocupada.',
        },
        {
          h2: 'Use temporizadores em luzes',
          content:
            'Timers que acendem e apagam luzes em horários programados ajudam a simular presença durante a noite.',
        },
        {
          h2: 'Teste o sistema de segurança antes de viajar',
          content:
            'Se você já tem câmeras e alarme instalados, vale testar o funcionamento do acesso remoto e confirmar que o monitoramento está ativo antes de sair de viagem.',
        },
      ]}
      ctaFinal={{
        title: 'Vai viajar e quer reforçar a segurança da casa antes?',
        text: 'Fale com a Intelsecsul e avaliamos o que faz sentido para o seu caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
    />
  );
};
