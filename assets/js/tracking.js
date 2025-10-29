// Script de rastreamento de eventos do Meta Pixel
document.addEventListener('DOMContentLoaded', function() {
  // Rastreia cliques nos botões WhatsApp
  const whatsappButtons = document.querySelectorAll('.cta-button.whatsapp, .fixed-whatsapp-button, .midia-icon.bi-whatsapp');
  whatsappButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      fbq('track', 'Contact'); // Evento de contato
      console.log('Evento Contact (WhatsApp) enviado para o Meta');
    });
  });

  // Rastreia cliques nos botões Instagram
  const instaButtons = document.querySelectorAll('.cta-button.insta, .cta-button.instagram, .midia-icon.bi-instagram');
  instaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      fbq('trackCustom', 'InstagramClick'); // Evento customizado
      console.log('Evento InstagramClick enviado para o Meta');
    });
  });
});