const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 120);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const translations = {
    "en": {"logo": "Developer <span>FULLSTACK</span>",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "contact-btn": "Contact me",
        "hero-hi": "Hi, There!",
        "hero-name": "I'm <span>Whole Nunes</span>",
        "hero-description": "I am a professional with a degree in mechatronic engineering and a focus on programming. I have two years of experience in the workforce, working as a Software Developer. I deal with various technologies, with Python and Flask being the main ones, along with MySQL, JavaScript, HTML, and CSS. Currently, I perform various functions, including implementing new systems, API integration for automated data collection and insertion, website development, networking, servers, and more. I am a curious and proactive individual, always seeking to address efficiency issues through the study of new technologies.",
        "hire-btn": "Hire me",
        "download-cv-btn": "Download CV",
        "about-title": "I'm <span>Developer</span> & Data Scientist",
        "exp1": "Experience <span>2 Years</span>",
        "exp2": "Specialty <span>Developer FullStack</span>",
        "exp3": "Address <span>São Paulo, SP (08110-030)</span>",
        "exp4": "Email <span>whole.nunes@gmail.com</span>",
        "exp5": "Phone <span>+55 11 94912-8218</span>",
        "view-projects-btn": "View All Projects",
        "services-title": "My <span>Services</span>",
        "service1-title": "",
        "service1-description": "",
        "service1-btn": "Download Now <i class='bx bx-right-arrow-alt'></i>",
        "service2-title": "",
        "service2-description": "",
        "service2-btn": "Download Now <i class='bx bx-right-arrow-alt'></i>",
        "service3-title": "",
        "service3-description": "",
        "service3-btn": "Download Now <i class='bx bx-right-arrow-alt'></i>",
        "portfolio-title": "My <span>Portfolio</span>",
        "portfolio1-category": "",
        "portfolio1-title": "",
        "portfolio2-category": "",
        "portfolio2-title": "",
        "portfolio3-category": "",
        "portfolio3-title": "",
        "portfolio4-category": "",
        "portfolio4-title": "",
        "portfolio5-category": "",
        "portfolio5-title": "",
        "portfolio6-category": "",
        "portfolio6-title": "",
        "contact-title": "Contact <span>Me</span>",
        "footer-copyright": "",
    },
    "pt": {"logo": "Desenvolvedor <span>FULLSTACK</span>",
        "nav-home": "Inicio",
        "nav-about": "Sobre",
        "nav-services": "Serviços",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contato",
        "contact-btn": "MeContate",
        "hero-hi": "Olá! Seja muito bem vindo(a, e)",
        "hero-name": "Me chamo <span>Whole</span>",
        "hero-description": "Sou um profissional formado em engenharia mecatrônica com especialização em programação. Tenho dois anos de experiência no mercado de trabalho, atuando como Desenvolvedor de Software. Trabalho com diversas tecnologias, sendo as principais o Python e o Flask, além do MySQL, JavaScript, HTML e CSS. Atualmente, desempenho várias funções, como a implementação de novos sistemas, integração via API para coleta e inserção automatizada de dados, desenvolvimento de sites, redes e servidores, entre outras atividades. Tenho uma mente curiosa e proativa, sempre em busca de soluções para melhorar a eficiência por meio do estudo de novas tecnologias.",
        "hire-btn": "Contrate-me",
        "download-cv-btn": "Baixar CV",
        "about-title": "Eu sou um <span>Desenvolvedor</span> & Cientista de Dados",
        "exp1": "Experiência <span>2 anos</span>",
        "exp2": "Especialidade <span>Developer FullStack</span>",
        "exp3": "Endereço <span>São Paulo, SP (08110-030)</span>",
        "exp4": "Email <span>whole.nunes@gmail.com</span>",
        "exp5": "Celular <span>+55 11 94912-8218</span>",
        "view-projects-btn": "Ver Todos os Projetos",
        "services-title": "My <span>Services</span>",
        "service1-title": "",
        "service1-description": "",
        "service1-btn": "Download Now <i class='bx bx-right-arrow-alt'></i>",
        "service2-title": "",
        "service2-description": "",
        "service2-btn": "Download Now <i class='bx bx-right-arrow-alt'></i>",
        "service3-title": "",
        "portfolio-title": "My <span>Portfolio</span>",
        "portfolio1-category": "",
        "portfolio1-title": "",
        "portfolio2-category": "",
        "portfolio2-title": "",
        "portfolio3-category": "",
        "portfolio3-title": "",
        "portfolio4-category": "",
        "portfolio4-title": "",
        "portfolio5-category": "",
        "portfolio5-title": "",
        "portfolio6-category": "",
        "portfolio6-title": "",
        "contact-title": "Contact <span>Me</span>",
        "footer-copyright": "",
    }
  };

  function changeLanguage(language) {
    const logo = translations[language]["logo"];
    const navHome = translations[language]["nav-home"];
    const navAbout = translations[language]["nav-about"];
    const navServices = translations[language]["nav-services"];
    const navPortfolio = translations[language]["nav-portfolio"];
    const navContact = translations[language]["nav-contact"];
    const contactBtn = translations[language]["contact-btn"];
    const heroHi = translations[language]["hero-hi"];
    const heroName = translations[language]["hero-name"];
    const heroDescription = translations[language]["hero-description"];
    const hireBtn = translations[language]["hire-btn"];
    const downloadCvBtn = translations[language]["download-cv-btn"];
    const aboutTitle = translations[language]["about-title"];
    const exp1 = translations[language]["exp1"];
    const exp2 = translations[language]["exp2"];
    const exp3 = translations[language]["exp3"];
    const exp4 = translations[language]["exp4"];
    const exp5 = translations[language]["exp5"];
    const viewProjectsBtn = translations[language]["view-projects-btn"];
    const servicesTitle = translations[language]["services-title"];
    const service1Title = translations[language]["service1-title"];
    const service1Description = translations[language]["service1-description"];
    const service1Btn = translations[language]["service1-btn"];
    const service2Title = translations[language]["service2-title"];
    const service2Description = translations[language]["service2-description"];
    const service2Btn = translations[language]["service2-btn"];
    const service3Title = translations[language]["service3-title"];
    const service3Description = translations[language]["service3-description"];
    const service3Btn = translations[language]["service3-btn"];
    const portfolioTitle = translations[language]["portfolio-title"];
    const portfolio1Category = translations[language]["portfolio1-category"];
    const portfolio1Title = translations[language]["portfolio1-title"];
    const portfolio2Category = translations[language]["portfolio2-category"];
    const portfolio2Title = translations[language]["portfolio2-title"];
    const portfolio3Category = translations[language]["portfolio3-category"];
    const portfolio3Title = translations[language]["portfolio3-title"];
    const portfolio4Category = translations[language]["portfolio4-category"];
    const portfolio4Title = translations[language]["portfolio4-title"];
    const portfolio5Category = translations[language]["portfolio5-category"];
    const portfolio5Title = translations[language]["portfolio5-title"];
    const portfolio6Category = translations[language]["portfolio6-category"];
    const portfolio6Title = translations[language]["portfolio6-title"];
    const contactTitle = translations[language]["contact-title"];
    const footerCopyright = translations[language]["footer-copyright"];

    // Atualize os elementos HTML com os textos traduzidos
    document.getElementById('logo').innerHTML = logo;
    document.getElementById('nav-home').innerHTML = navHome;
    document.getElementById('nav-about').innerHTML = navAbout;
    document.getElementById('nav-services').innerHTML = navServices;
    document.getElementById('nav-portfolio').innerHTML = navPortfolio;
    document.getElementById('nav-contact').innerHTML = navContact;
    document.getElementById('contact-btn').innerHTML = contactBtn;
    document.getElementById('hero-hi').innerHTML = heroHi;
    document.getElementById('hero-name').innerHTML = heroName;
    document.getElementById('hero-description').innerHTML = heroDescription;
    document.getElementById('hire-btn').innerHTML = hireBtn;
    document.getElementById('download-cv-btn').innerHTML = downloadCvBtn;
    document.getElementById('about-title').innerHTML = aboutTitle;
    document.getElementById('exp1').innerHTML = exp1;
    document.getElementById('exp2').innerHTML = exp2;
    document.getElementById('exp3').innerHTML = exp3;
    document.getElementById('exp4').innerHTML = exp4;
    document.getElementById('exp5').innerHTML = exp5;
    document.getElementById('view-projects-btn').innerHTML = viewProjectsBtn;
    document.getElementById('services-title').innerHTML = servicesTitle;
    document.getElementById('service1-title').innerHTML = service1Title;
    document.getElementById('service1-description').innerHTML = service1Description;
    document.getElementById('service1-btn').innerHTML = service1Btn;
    document.getElementById('service2-title').innerHTML = service2Title;
    document.getElementById('service2-description').innerHTML = service2Description;
    document.getElementById('service2-btn').innerHTML = service2Btn;
    document.getElementById('service3-title').innerHTML = service3Title;
    document.getElementById('service3-description').innerHTML = service3Description;
    document.getElementById('service3-btn').innerHTML = service3Btn;
    document.getElementById('portfolio-title').innerHTML = portfolioTitle;
    document.getElementById('portfolio1-category').innerHTML = portfolio1Category;
    document.getElementById('portfolio1-title').innerHTML = portfolio1Title;
    document.getElementById('portfolio2-category').innerHTML = portfolio2Category;
    document.getElementById('portfolio2-title').innerHTML = portfolio2Title;
    document.getElementById('portfolio3-category').innerHTML = portfolio3Category;
    document.getElementById('portfolio3-title').innerHTML = portfolio3Title;
    document.getElementById('portfolio4-category').innerHTML = portfolio4Category;
    document.getElementById('portfolio4-title').innerHTML = portfolio4Title;
    document.getElementById('portfolio5-category').innerHTML = portfolio5Category;
    document.getElementById('portfolio5-title').innerHTML = portfolio5Title;
    document.getElementById('portfolio6-category').innerHTML = portfolio6Category;
    document.getElementById('portfolio6-title').innerHTML = portfolio6Title;
    document.getElementById('contact-title').innerHTML = contactTitle;
    document.getElementById('footer-copyright').innerHTML = footerCopyright;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-choose').addEventListener('change', function () {
        changeLanguage(this.value);
    });
});