document.addEventListener('DOMContentLoaded', () => {

    // --- MENU HAMBÚRGUER PARA DISPOSITIVOS MÓVEIS ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // --- ANIMAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA (FADE-IN) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    // Observa todas as seções com a classe 'content-section' e '.fade-in'
    document.querySelectorAll('.content-section, .fade-in').forEach(section => {
        observer.observe(section);
    });
    

    // --- DESTAQUE DO LINK ATIVO NA NAVEGAÇÃO AO ROLAR ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // O 81 é a altura do header + 1px de margem
            if (pageYOffset >= sectionTop - 81) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });


    // --- SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        
        // Simplesmente exibe um alerta de sucesso
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpa o formulário
        contactForm.reset();
    });

});