
document.getElementById('lang-en').addEventListener('click', () => {
    translatePage('en');
});
document.getElementById('lang-es').addEventListener('click', () => {
    translatePage('es');
    // Add interactivity to toggle visibility of service details
document.querySelectorAll('.service-title').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        const icon = item.querySelector('i');
        if (details.style.display === "block") {
            details.style.display = "none";
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        } else {
            details.style.display = "block";
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }
    });
});
});
function translatePage(language) {
    const translations = {
        'en': {
            'hero-heading': 'Empowering the Future of Technology',
            'hero-text': 'Your partner in groundbreaking electrical and technology solutions',
            'services-heading': 'Our Services',
            'service-1-title': 'Smart Grid Solutions',
            'service-1-desc': 'Revolutionizing electrical networks for smarter energy distribution.',
            'service-2-title': 'AI-Driven Innovations',
            'service-2-desc': 'Leveraging AI to enhance efficiency and drive innovation.',
            'service-3-title': 'Electrical Infrastructure',
            'service-3-desc': 'Building sustainable and reliable power systems for tomorrow.',
            'contact-heading': 'Contact Us',
            'contact-text': 'Ready to take the next step in technological advancement?',
            'cta-button': 'Contact Us'
        },
        'es': {
            'hero-heading': 'Empoderando el Futuro de la Tecnología',
            'hero-text': 'Tu socio en soluciones tecnológicas y eléctricas innovadoras',
            'services-heading': 'Nuestros Servicios',
            'service-1-title': 'Soluciones de Redes Inteligentes',
            'service-1-desc': 'Revolucionando las redes eléctricas para una distribución de energía más inteligente.',
            'service-2-title': 'Innovaciones Impulsadas por IA',
            'service-2-desc': 'Aprovechando la IA para mejorar la eficiencia e impulsar la innovación.',
            'service-3-title': 'Infraestructura Eléctrica',
            'service-3-desc': 'Construyendo sistemas de energía sostenibles y confiables para el futuro.',
            'contact-heading': 'Contáctanos',
            'contact-text': '¿Listo para dar el siguiente paso en el avance tecnológico?',
            'cta-button': 'Contáctanos'
        }
    };
    // Update text content for translations
    document.querySelector('.hero h1').textContent = translations[language]['hero-heading'];
    document.querySelector('.hero p').textContent = translations[language]['hero-text'];
    document.querySelector('.services h2').textContent = translations[language]['services-heading'];
    document.querySelectorAll('.service-item')[0].querySelector('h3').textContent = translations[language]['service-1-title'];
    document.querySelectorAll('.service-item')[0].querySelector('p').textContent = translations[language]['service-1-desc'];
    document.querySelectorAll('.service-item')[1].querySelector('h3').textContent = translations[language]['service-2-title'];
    document.querySelectorAll('.service-item')[1].querySelector('p').textContent = translations[language]['service-2-desc'];
    document.querySelectorAll('.service-item')[2].querySelector('h3').textContent = translations[language]['service-3-title'];
    document.querySelectorAll('.service-item')[2].querySelector('p').textContent = translations[language]['service-3-desc'];
    document.querySelector('.contact h2').textContent = translations[language]['contact-heading'];
    document.querySelector('.contact p').textContent = translations[language]['contact-text'];
    document.querySelector('.cta-button').textContent = translations[language]['cta-button'];
}
