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

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// Função para exibir o popup
function exibirPopup(popup) {
    console.log(popup.id)
    if(popup.id === 'service1-btn') {
        document.getElementById('popup1').style.display = 'block';
    } else if(popup.id === 'service2-btn') {
        document.getElementById('popup2').style.display = 'block';
    } else {
        document.getElementById('popup3').style.display = 'block';
    }
}

// Função para fechar o popup
function fecharPopup(popupclose) {
    document.getElementById(popupclose).style.display = 'none';
}

// Adiciona um evento de clique ao link
document.getElementById('service1-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    exibirPopup(this); // Exibe o popup ao clicar no link
});
document.getElementById('service2-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    exibirPopup(this); // Exibe o popup ao clicar no link
});
document.getElementById('service3-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    exibirPopup(this); // Exibe o popup ao clicar no link
});

const translations = {
    "en": {"logo": "Developer <span>FULLSTACK</span>",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "hero-hi": "Hi, There!",
        "hero-name": "I'm <span>Whole Nunes</span>",
        "hero-description": "I am a professional with a degree in mechatronic engineering and a focus on programming. I have two years of experience in the workforce, working as a Software Developer. I deal with various technologies, with Python and Flask being the main ones, along with MySQL, JavaScript, HTML, and CSS. Currently, I perform various functions, including implementing new systems, API integration for automated data collection and insertion, website development, networking, servers, and more. I am a curious and proactive individual, always seeking to address efficiency issues through the study of new technologies.",
        "hire-btn": "Hire me",
        "download-cv-btn": "Download CV",
        "about-title": "I'm <span>Developer</span> & Data Scientist",
        "exp1": "Experience: <span>2 Years</span>",
        "exp2": "Specialty: <span>Developer FullStack</span>",
        "exp3": "Address: <span>Santana de Parnaiba, SP (06525-060)</span>",
        "exp4": "Email: <span>whole.nunes@gmail.com</span>",
        "exp5": "Phone: <span>+55 11 94912-8218</span>",
        "view-projects-btn": "View All Projects",
        "myhabilitiessubtitle": "Technical and Profissional",
        "myhabilitiestitle": "My Skills",
        "technicalskills": "Technical",
        "profissionalskillstitle": "Professional",
        "pressional-skill1": "Team Work",
        "pressional-skill2": "Proactivity",
        "pressional-skill3": "Communication",
        "pressional-skill4": "Problem Solving",
        "pressional-skill5": "Adaptability",
        "pressional-skill6": "Leadership",
        "services-title": "My <span>Services</span>",
        "service1-title": "Inventory control",
        "service1-description": "Inventory control system developed in VBA and integrated with the ERP Tiny system, so that you have stock in real time and can add or delete products directly from an Excel spreadsheet.",
        "service1-btn": "See more <i class='bx bx-right-arrow-alt'></i>",
        "service2-title": "Sales Portal",
        "service2-description": "It is an access portal for salespeople from a specific company, where they have various accesses and functionalities, from budget generation to integration with ERP via REST API.",
        "service2-btn": "See more  <i class='bx bx-right-arrow-alt'></i>",
        "service3-title": "Integrations",
        "service3-description": "I carried out several integrations to automate functions, among them I integrated everything from the following companies: Itaú, PayPal, MercadoPago, Jamef, Tiny, Pipefy, RDStation, Whatsapp, Instagram. More focused on payment methods.",
        "service3-btn": "See more  <i class='bx bx-right-arrow-alt'></i>",
        "portfolio-title": "My <span>Portfolio</span>",
        "portfolio1-category": "",
        "portfolio1-title": "",
        "portfolio2-category": "",
        "portfolio2-title": "",
        "portfolio3-category": "",
        "portfolio3-title": "",
        "contact-title": "Contact <span>Me</span>",
        "footer-copyright": "",
        "contact-name": "Your Name",
        "contact-email": "Email Address...",
        "contact-message": "Write Message Here...",
        "send-message-btn": "Send Message"
    },
    "pt": {"logo": "Desenvolvedor <span>FULLSTACK</span>",
        "nav-home": "Inicio",
        "nav-about": "Sobre",
        "nav-services": "Serviços",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contato",
        "hero-hi": "Olá! Seja muito bem vindo(a)",
        "hero-name": "Me chamo <span>Whole</span>",
        "hero-description": "Sou um profissional formado em engenharia mecatrônica com especialização em programação. Tenho dois anos de experiência no mercado de trabalho, atuando como Desenvolvedor de Software. Trabalho com diversas tecnologias, sendo as principais o Python e o Flask, além do MySQL, JavaScript, HTML e CSS. Atualmente, desempenho várias funções, como a implementação de novos sistemas, integração via API para coleta e inserção automatizada de dados, desenvolvimento de sites, redes e servidores, entre outras atividades. Tenho uma mente curiosa e proativa, sempre em busca de soluções para melhorar a eficiência por meio do estudo de novas tecnologias.",
        "hire-btn": "Contate-me",
        "download-cv-btn": "Baixar CV",
        "about-title": "Eu sou um <span>Desenvolvedor</span> & Cientista de Dados",
        "exp1": "Experiência: <span>2 anos</span>",
        "exp2": "Especialidade: <span>Developer FullStack</span>",
        "exp3": "Endereço: <span>Santana de Parnaiba, SP (06525-060)</span>",
        "exp4": "Email: <span>whole.nunes@gmail.com</span>",
        "exp5": "Celular: <span>+55 11 94912-8218</span>",
        "view-projects-btn": "Ver Todos os Projetos",
        "myhabilitiessubtitle": "Técnico e Profissional",
        "myhabilitiestitle": "Minhas Habilidades",
        "technicalskills": "Técnicas",
        "profissionalskillstitle": "Profissionais",
        "pressional-skill1": "Trabalho em Equipe",
        "pressional-skill2": "Proatividade",
        "pressional-skill3": "Comunicação",
        "pressional-skill4": "Resolução de Problemas",
        "pressional-skill5": "Adaptação",
        "pressional-skill6": "Liderança",
        "services-title": "Meus <span>Serviços</span>",
        "service1-title": "Controle de Estoque",
        "service1-description": "Sistema de controle de estoque desenvolvido em VBA e integrado com o sistema ERP Tiny, de modo que tenha o estoque em tempo real e consiga adicionar ou excluir produtos direto de uma planilha excel.",
        "service1-btn": "Saiba mais <i class='bx bx-right-arrow-alt'></i>",
        "service2-title": "Portal de Vendas",
        "service2-description": "Trata-se de um portal de acesso a vendedores de determinada empresa, onde possuem diversos acessos e funcionalidades, desde a geração do orçamento até a integração com ERP via API REST",
        "service2-btn": "Saiba mais <i class='bx bx-right-arrow-alt'></i>",
        "service3-title": "Integrações",
        "service3-description": "Realizei diversas integrações para automatização de funções, dentre elas integrei tudo das seguintes empresas: Itaú, PayPal, MercadoPago, Jamef, Tiny, Pipefy, RDStation, Whatsapp, Instagram. Mais focado em formas de pagamentos.",
        "service3-btn": "Saiba mais <i class='bx bx-right-arrow-alt'></i>",
        "portfolio-title": "Meu <span>Portfolio</span>",
        "portfolio1-category": "",
        "portfolio1-title": "",
        "portfolio2-category": "",
        "portfolio2-title": "",
        "portfolio3-category": "",
        "portfolio3-title": "",
        "contact-title": "<span>Contato</span>",
        "footer-copyright": "",
        "contact-name": "Seu Nome",
        "contact-email": "Endereço de Email",
        "contact-message": "Digite sua mensagem aqui",
        "send-message-btn": "Enviar Mensagem"
    }
  };

  function changeLanguage(language) {
    const logo = translations[language]["logo"];
    const navHome = translations[language]["nav-home"];
    const navAbout = translations[language]["nav-about"];
    const navServices = translations[language]["nav-services"];
    const navPortfolio = translations[language]["nav-portfolio"];
    const navContact = translations[language]["nav-contact"];
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
    const myhabilitiesSub = translations[language]['myhabilitiessubtitle'];
    const myhabilitiesTitle = translations[language]['myhabilitiestitle'];
    const technicalSkills = translations[language]['technicalskills'];
    const profissionalskillsTitle = translations[language]['profissionalskillstitle'];
    const professionalskill1 = translations[language]['pressional-skill1'];
    const professionalskill2 = translations[language]['pressional-skill2'];
    const professionalskill3 = translations[language]['pressional-skill3'];
    const professionalskill4 = translations[language]['pressional-skill4'];
    const professionalskill5 = translations[language]['pressional-skill5'];
    const professionalskill6 = translations[language]['pressional-skill6'];
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
    const contactTitle = translations[language]["contact-title"];
    const footerCopyright = translations[language]["footer-copyright"];
    const contactName = translations[language]['contact-name'];
    const contactEmail = translations[language]['contact-email'];
    const contactMessage = translations[language]['contact-message'];
    const contactBTN = translations[language]['send-message-btn'];

    // Atualize os elementos HTML com os textos traduzidos
    document.getElementById('logo').innerHTML = logo;
    document.getElementById('nav-home').innerHTML = navHome;
    document.getElementById('nav-about').innerHTML = navAbout;
    document.getElementById('nav-services').innerHTML = navServices;
    document.getElementById('nav-portfolio').innerHTML = navPortfolio;
    document.getElementById('nav-contact').innerHTML = navContact;
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
    document.getElementById('myhabilitiessubtitle').textContent = myhabilitiesSub;
    document.getElementById('myhabilitiestitle').textContent = myhabilitiesTitle;
    document.getElementById('technicalskills').textContent = technicalSkills;
    document.getElementById('profissionalskillstitle').textContent = profissionalskillsTitle
    document.getElementById('pressional-skill1').textContent = professionalskill1;
    document.getElementById('pressional-skill2').textContent = professionalskill2;
    document.getElementById('pressional-skill3').textContent = professionalskill3;
    document.getElementById('pressional-skill4').textContent = professionalskill4;
    document.getElementById('pressional-skill5').textContent = professionalskill5;
    document.getElementById('pressional-skill6').textContent = professionalskill6;
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
    document.getElementById('contact-title').innerHTML = contactTitle;
    document.getElementById('footer-copyright').innerHTML = footerCopyright;
    document.getElementById('contact-name').placeholder = contactName
    document.getElementById('contact-email').placeholder = contactEmail
    document.getElementById('contact-message').placeholder = contactMessage
    document.getElementById('send-message-btn').value = contactBTN
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-choose').addEventListener('change', function () {
        changeLanguage(this.value);
    });
});