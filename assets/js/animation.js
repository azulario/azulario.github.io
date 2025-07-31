        const toggleTheme = document.getElementById("toggleTheme");
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
            if (azularioLogo) azularioLogo.src = imagePaths[currentTheme].azulario;
            if (starburstImg) starburstImg.src = imagePaths[currentTheme].starburst;
            if (footerLogo) footerLogo.src = imagePaths[currentTheme].footer;
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
            toggleTheme.classList.toggle("bi-sun");
            toggleTheme.classList.toggle("bi-moon-stars");
        }

        // Adiciona o event listener ao botão
        if (toggleTheme) {
            toggleTheme.addEventListener("click", changeTheme);
        }

        // --- Lógica das Animações de Entrada ---
        document.addEventListener("DOMContentLoaded", () => {
            // Seleciona todos os elementos que devem animar ao carregar
            const elementsToAnimate = document.querySelectorAll(".fade-in-initial-hidden");

            elementsToAnimate.forEach((element, index) => {
                // Usa um pequeno timeout para garantir que o navegador renderizou o estado inicial
                // antes que a classe de animação seja adicionada. Isso ajuda a disparar a animação.
                // Adiciona um pequeno atraso para um efeito escalonado mais agradável.
                setTimeout(() => {
                    element.classList.remove("fade-in-initial-hidden");
                    element.classList.add("fadeInUp-active"); // Adiciona a classe de animação ativa
                }, 50 + (index * 50)); // Começa após 50ms, depois 50ms de atraso por elemento
            });
        });
        // --- Fim da Lógica das Animações de Entrada ---