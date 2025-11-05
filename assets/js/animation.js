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

        // Aplica as imagens corretas ao carregar
        applyThemeImages();

        // --- Lógica das Animações de Entrada com Scroll ---
        // Função para inicializar animações com scroll
        function initScrollAnimations() {
            // Seleciona todos os elementos que devem animar ao fazer scroll
            const elementsToAnimate = document.querySelectorAll(".fade-in-initial-hidden");

            console.log(`Encontrados ${elementsToAnimate.length} elementos para animar com scroll`);

            if (elementsToAnimate.length === 0) {
                console.warn("Nenhum elemento com classe 'fade-in-initial-hidden' encontrado");
                return;
            }

            // Cria o Intersection Observer
            const observerOptions = {
                root: null, // usa o viewport
                rootMargin: '0px 0px -100px 0px', // começa a animar 100px antes do elemento aparecer
                threshold: 0.1 // 10% do elemento precisa estar visível
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Adiciona um pequeno delay para o efeito ser mais suave
                        setTimeout(() => {
                            entry.target.classList.remove("fade-in-initial-hidden");
                            entry.target.classList.add("fadeInUp-active");
                            console.log('Elemento animado:', entry.target);
                        }, 100);
                        
                        // Para de observar este elemento após animar
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observa todos os elementos
            elementsToAnimate.forEach((element) => {
                observer.observe(element);
            });
        }

        // Aguarda o DOM estar completamente carregado
        if (document.readyState === 'loading') {
            document.addEventListener("DOMContentLoaded", initScrollAnimations);
        } else {
            // DOM já está carregado
            initScrollAnimations();
        }
        // --- Fim da Lógica das Animações de Entrada ---