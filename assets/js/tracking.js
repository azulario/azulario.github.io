// Script de rastreamento de eventos do Meta Pixel
// Só executa se o usuário aceitou os cookies
const cookieConsent = localStorage.getItem('cookieConsent');

if (cookieConsent === 'accepted' && typeof fbq !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    
    // Rastreia cliques nos botões WhatsApp (Contact - contato iniciado)
    const whatsappButtons = document.querySelectorAll('.cta-button.whatsapp, .fixed-whatsapp-button, .midia-icon.bi-whatsapp');
    whatsappButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        fbq('track', 'Contact');
        console.log('Evento Contact (WhatsApp) enviado para o Meta');
      });
    });

  // Rastreia cliques nos botões Instagram (Lead - interesse demonstrado)
  const instaButtons = document.querySelectorAll('.cta-button.insta, .cta-button.instagram, .midia-icon.bi-instagram');
  instaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      fbq('track', 'Lead');
      console.log('Evento Lead (Instagram) enviado para o Meta');
    });
  });

  // Rastreia visualização de conteúdo importante (portfólio de tattoos)
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          fbq('track', 'ViewContent', {
            content_name: 'Portfolio de Tatuagens',
            content_category: 'Projetos'
          });
          console.log('Evento ViewContent (Projetos) enviado para o Meta');
          observer.unobserve(projectsSection); // Rastreia apenas uma vez
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(projectsSection);
  }

  // Rastreia quando usuário visualiza seção de cuidados (conteúdo educacional)
  const tattooCareSection = document.querySelector('#tattoo-care');
  if (tattooCareSection) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          fbq('trackCustom', 'ViewTattooCare');
          console.log('Evento ViewTattooCare enviado para o Meta');
          observer.unobserve(tattooCareSection);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(tattooCareSection);
  }

  // Rastreia cliques em outras redes sociais (Pinterest, Behance)
  const otherSocialButtons = document.querySelectorAll('.midia-icon.bi-pinterest, .midia-icon.bi-behance');
  otherSocialButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      fbq('trackCustom', 'SocialMediaClick', {
        platform: button.classList.contains('bi-pinterest') ? 'Pinterest' : 'Behance'
      });
      console.log('Evento SocialMediaClick enviado para o Meta');
    });
  });
});
}