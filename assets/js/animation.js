// Adiciona a classe 'fadeInUp' quando o elemento entra na tela
const fadeEls = document.querySelectorAll('.fadeInUp');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.classList.remove('is-visible'); // Garante que começa invisível
  observer.observe(el);
});