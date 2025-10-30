// Gerenciamento de consentimento de cookies
document.addEventListener('DOMContentLoaded', function() {
  const cookieConsent = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');

  // Verifica se já existe consentimento
  const cookieChoice = localStorage.getItem('cookieConsent');

  if (!cookieChoice) {
    // Se não há escolha, mostra o aviso
    cookieConsent.classList.add('show');
  } else if (cookieChoice === 'accepted') {
    // Se aceitou, carrega os scripts de tracking
    loadTrackingScripts();
  }

  // Botão Aceitar
  acceptBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.remove('show');
    loadTrackingScripts();
    console.log('Cookies aceitos - tracking ativado');
  });

  // Botão Rejeitar
  rejectBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieConsent.classList.remove('show');
    console.log('Cookies rejeitados - tracking desativado');
  });

  // Função para carregar scripts de tracking
  function loadTrackingScripts() {
    // O Meta Pixel já está no head, então só precisamos ativar os eventos customizados
    if (typeof fbq !== 'undefined') {
      console.log('Meta Pixel ativado - cookies aceitos');
      
      // Carrega o arquivo tracking.js se ainda não foi carregado
      if (!document.querySelector('script[src="/assets/js/tracking.js"]')) {
        const trackingScript = document.createElement('script');
        trackingScript.src = '/assets/js/tracking.js';
        document.body.appendChild(trackingScript);
      }
    }
  }
});
