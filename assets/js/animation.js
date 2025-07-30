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

        const toogleTheme = document.getElementById("toggleTheme");
        const rootHtml = document.documentElement;

        // Referências para as imagens que mudam com o tema
        const azularioLogo = document.getElementById("azularioLogo");
        const starburstImg = document.getElementById("starburstImg");
        const footerLogo = document.getElementById("footerLogo");

        // URLs das imagens para cada tema
        const imagePaths = {
            light: {
                azulario: "/assets/imgs/texto-azulario-dia/header.png",
                starburst: "/assets/imgs/starburst/Starburst - Dia.png",
                footer: "/assets/imgs/texto-azulario-dia/footer.png"
            },
            dark: {
                azulario: "/assets/imgs/texto-azulario-noite/header-noite.png",
                starburst: "/assets/imgs/starburst/Starburst - Noite.png",
                footer: "/assets/imgs/texto-azulario-noite/footer-noite.png"
            }
        };

        // Função para aplicar as imagens do tema atual
        function applyThemeImages() {
            const currentTheme = rootHtml.getAttribute("data-theme");
            azularioLogo.src = imagePaths[currentTheme].azulario;
            starburstImg.src = imagePaths[currentTheme].starburst;
            footerLogo.src = imagePaths[currentTheme].footer;
        }

        function changeTheme() {
            const currentTheme = rootHtml.getAttribute("data-theme");
            let newTheme;

            if (currentTheme === "light") {
                newTheme = "dark";
            } else {
                newTheme = "light";
            }

            rootHtml.setAttribute("data-theme", newTheme);

            // Atualiza as imagens após a mudança de tema
            applyThemeImages();

            // A lógica de toggle do ícone já estava correta
            toogleTheme.classList.toggle("bi-sun");
            toogleTheme.classList.toggle("bi-moon-stars");
        }

        // Adiciona o event listener ao botão
        toogleTheme.addEventListener("click", changeTheme);

        // Aplica as imagens do tema inicial quando a página carrega
        document.addEventListener("DOMContentLoaded", applyThemeImages);

        // Placeholder para o arquivo animation.js, caso você o tenha.
        // Se houver animações, você pode adicioná-las aqui ou manter o arquivo separado.
        // Por enquanto, deixei um console.log para indicar que o script está sendo carregado.
        console.log("animation.js loaded (or placeholder)");