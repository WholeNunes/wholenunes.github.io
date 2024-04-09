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
        "contact-title": "Contact <span>Me</span>",
        "footer-copyright": "",
        "contact-name": "Your Name",
        "contact-email": "Email Address...",
        "contact-message": "Write Message Here...",
        "send-message-btn": "Send Message",
        "h1-services-controledeestoque": "Inventory Control with VBA",
        "p1-services-controledeestoque": "I developed a project as a Freelancer to assist a client with inventory control, integrating it with Tiny ERP via Rest API. I used VBA to create functionalities in an Excel spreadsheet:",
        "li1-services-controledeestoque": "Product Submission: I developed a code that allows registering products in Tiny ERP based on essential information filled out in the spreadsheet and a button click.",
        "li2-services-controledeestoque": "Product Return: I implemented a function that allows bringing back to the spreadsheet the products already registered in the system. Any change, such as in the stock, is updated in the spreadsheet.",
        "li3-services-controledeestoque": "Product Data Modification: I created a table to modify product information, such as stock, name, code, and deactivation.",
        "p2-services-controledeestoque": "To improve visualization, I added the functionality of Automatically Receiving Products, checking for changes in the system items periodically. The only limitation encountered was the lack of resources in the Tiny API, such as Order of Purchases.",
        "p-services-paypal": "The integration with PayPal was developed to better fill in the information contained in your payment link, adding items, additional information, shipping, discounts, company, and customer information, among other details. Here are the functionalities used:",
        "li1-services-paypal": "Payment Link (Invoicing) <b>POST/GET/PUSH/DELETE</b>",
        "li2-services-paypal": "WebHooks <b>POST/GET/PUSH/DELETE</b>",
        "p-services-mercadopago": "Using the Mercado Pago API, I developed an integration that allows generating payment links quickly and personalized. I limited payment options to optimize the user experience and implemented webhooks to receive instant payment confirmation notifications, facilitating financial control and management of the system.",
        "li1-services-mercadopago": "Preferences (with Payment Flow) <b>POST/GET/PUSH/DELETE</b>",
        "li2-services-mercadopago": "Payments <b>GET/DELETE</b>",
        "li3-services-mercadopago": "WebHook (Notification URL)",
        "p-services-itau": "I integrated the Itaú API for PIX and boletos, offering agile and personalized payments. The generated PIX codes have copy and paste or QR Code options, facilitating payments. Similarly, boletos also have these options. I implemented webhooks for real-time payment updates, optimizing financial management.",
        "li1-services-itau": "Immediate PIX <b>POST/PUT/PATCH</b>",
        "li2-services-itau": "Bolecode <b>POST/GET/PATCH</b>",
        "li3-services-itau": "WebHook <b>PUT/DELETE</b>",
        "p-services-tiny": "In Tiny ERP, I carried out a comprehensive integration using its API. This integration included various functionalities such as customer registration, modification, and retrieval, as well as complete order management, from acquisition to inventory and account releases. Additionally, I implemented features related to invoices, accounts payable and receivable, using webhooks for real-time updates of inventory and orders. This integration provided complete and automated management of essential system processes.",
        "li1-services-tiny": "Inventory <b>POST/GET</b>",
        "li2-services-tiny": "Orders <b>POST/GET</b>",
        "li3-services-tiny": "Invoices <b>POST/GET</b>",
        "li4-services-tiny": "Service Invoices <b>POST/GET</b>",
        "li5-services-tiny": "Contacts <b>POST/GET</b>",
        "li6-services-tiny": "Accounts Receivable <b>POST/GET</b>",
        "li7-services-tiny": "Accounts Payable <b>POST/GET</b>",
        "li8-services-tiny": "Separation and Freight Quotation <b>POST/GET</b>",
        "li9-services-tiny": "Ecommerce Integrations and ERP Implementation",
        "li10-services-tiny": "Webhooks",
        "p-services-rdstation": "In RDStation, I developed a comprehensive integration using its API for lead management in CRM. I implemented functionalities to include, delete, move, and update lead information automatically. This provided efficient and organized customer relationship management, optimizing marketing and sales processes.",
        "li1-services-rdstation": "DEALS <b>POST/GET</b>",
        "li2-services-rdstation": "PRODUCTS <b>POST/GET</b>",
        "p-services-pipefy": "In Pipefy, I developed an integration using the specific GraphQL API for creating, inserting, moving, and collecting information in cards. This integration automated workflows, speeding up task creation and management within the system. Through the GraphQL API, I performed operations such as creating new cards, inserting data into cards, moving them between process stages, and collecting relevant card information, providing efficient and organized activity management.",
        "li1-services-pipefy": "GraphQL",
        "p-services-googlesheets": "Using the Google Sheets API, I automated data collection processes efficiently and allowed continuous and accurate updates of product information in the database. This provided agile and accurate management of essential information for the system.",
        "p-services-viacep": "I integrated the ViaCEP service for address inquiries using the CEP. Through the ViaCEP API, I implemented functionalities that allowed automated address inquiries based on the provided CEP. This provided a fast and efficient way to obtain accurate address information, facilitating registration and data update processes within the system.",
        "p-services-jamef": "Using the Jamef API, I integrated the freight calculation functionality into my system. This integration automated the process of checking freight costs for different destinations, providing a more efficient experience for customers during shipment quotes."    },
    "pt": {"logo": "Desenvolvedor <span>FULLSTACK</span>",
        "nav-home": "Inicio",
        "nav-about": "Sobre",
        "nav-services": "Serviços",
        "nav-contact": "Contato",
        "hero-hi": "Olá! Seja muito bem vindo(a)",
        "hero-name": "Me chamo <span>Whole</span>",
        "hero-description": "Formado em engenharia mecatrônica com foco em programação, tenho dois anos de experiência no mercado de trabalho, atuando como Desenvolvedor de Software. Trabalho com diversas tecnologias, sendo as principais o Python e o Flask, além do MySQL, JavaScript, HTML e CSS. Atualmente, desempenho várias funções, como a implementação de novos sistemas, integração via API para coleta e inserção automatizada de dados, desenvolvimento de sites, redes e servidores, entre outras atividades. Tenho uma mente curiosa e proativa, sempre em busca de soluções para melhorar a eficiência por meio do estudo de novas tecnologias.",
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
        "contact-title": "<span>Contato</span>",
        "footer-copyright": "",
        "contact-name": "Seu Nome",
        "contact-email": "Endereço de Email",
        "contact-message": "Digite sua mensagem aqui",
        "send-message-btn": "Enviar Mensagem",
        "h1-services-controledeestoque": "Controle de Estoque em VBA",
        "p1-services-controledeestoque": "Desenvolvi um projeto como Freelancer para auxiliar um cliente no controle de estoque, integrando-o com o Tiny ERP via API Rest. Utilizei VBA para criar funcionalidades em uma planilha Excel:",
        "li1-services-controledeestoque": "Envio de Produtos: Desenvolvi um código que permite cadastrar produtos no Tiny ERP a partir do preenchimento de informações essenciais na planilha e um clique em um botão.",
        "li2-services-controledeestoque": "Retorno de Produtos: Implementei uma função que possibilita trazer de volta para a planilha os produtos já cadastrados no sistema. Qualquer alteração, como no estoque, é atualizada na planilha.",
        "li3-services-controledeestoque": "Alteração de Dados dos Produtos: Criei uma tabela para modificar informações dos produtos, como estoque, nome, código e inativação.",
        "p2-services-controledeestoque": "Para melhorar a visualização, adicionei a funcionalidade de Receber Produtos de forma automática, verificando as alterações nos itens do sistema periodicamente. A única limitação encontrada foi a ausência de recursos na API do Tiny, como a de Ordem de Compras.",
        "p-services-paypal": "A integração com o PayPal foi desenvolvida para ter um melhor preenchimento das informações contidas no seu link de pagamento, adicionando itens, informações adicionais, frete, desconto, informações da empresa e do cliente dentre outras informações. Segue as funcionalidades utilizadas:",
        "li1-services-paypal": "Link de Pagamento (Invoicing) <b>POST/GET/PUSH/DELETE</b>",
        "li2-services-paypal": "WebHooks <b>POST/GET/PUSH/DELETE</b>",
        "p-services-mercadopago": "Utilizando a API do Mercado Pago, desenvolvi uma integração que permite gerar links de pagamento de forma rápida e personalizada. Limitei as opções de pagamento para otimizar a experiência do usuário e implementei webhooks para receber notificações instantâneas de confirmação de pagamento, facilitando o controle e a gestão financeira do sistema.",
        "li1-services-mercadopago": "Preferências (c/ Fluxo de Pagamento) <b>POST/GET/PUSH/DELETE</b>",
        "li2-services-mercadopago": "Pagamentos <b>GET/DELETE</b>",
        "li2-services-mercadopago": "WebHook (Notification URL)",
        "p-services-itau": "Integrei a API do Itaú para PIX e boletos, oferecendo pagamentos ágeis e personalizados. Os códigos PIX gerados têm opções de cópia e cola ou QR Code, facilitando os pagamentos. Da mesma forma, os boletos também possuem essas opções. Implementei webhooks para atualizações em tempo real dos pagamentos, otimizando a gestão financeira.",
        "li1-services-itau": "PIX imediato <b>POST/PUT/PATCH</b>",
        "li2-services-itau": "Bolecode <b>POST/GET/PATCH</b>",
        "li2-services-itau": "WebHook <b>PUT/DELETE</b>",
        "p-services-tiny": "No Tiny ERP, realizei uma integração abrangente utilizando sua API. Esta integração abrangeu diversas funcionalidades, incluindo o cadastro, alteração e obtenção de clientes, assim como a gestão completa de pedidos, desde sua obtenção até o lançamento de estoque e contas. Além disso, implementei funcionalidades relacionadas a notas fiscais, contas a pagar e a receber, utilizando webhooks para atualização em tempo real de estoque e pedidos. Essa integração proporcionou uma gestão completa e automatizada dos processos essenciais do sistema.",
        "li1-services-tiny": "Estoque <b>POST/GET</b>",
        "li2-services-tiny": "Pedidos <b>POST/GET</b>",
        "li3-services-tiny": "Notas Fiscais <b>POST/GET</b>",
        "li4-services-tiny": "Notas Fiscais de Serviços <b>POST/GET</b>",
        "li5-services-tiny": "Contatos <b>POST/GET</b>",
        "li6-services-tiny": "Contas a Receber <b>POST/GET</b>",
        "li7-services-tiny": "Contas a Pagar <b>POST/GET</b>",
        "li8-services-tiny": "Separação e Cotação de Frete <b>POST/GET</b>",
        "li9-services-tiny": "Integrações com Ecommerce e Implementação do ERP",
        "li10-services-tiny": "Webhooks",
        "p-services-rdstation": "No RDStation, desenvolvi uma integração completa utilizando sua API para o gerenciamento de leads no CRM. Implementei funcionalidades que permitiam incluir, excluir, mover e atualizar informações dos leads de forma automatizada. Isso proporcionou uma gestão eficiente e organizada do relacionamento com os clientes, otimizando os processos de marketing e vendas.",
        "li1-services-rdstation": "DEALS <b>POST/GET</b>",
        "li2-services-rdstation": "PRODUCTS <b>POST/GET</b>",
        "p-services-pipefy": "No Pipefy, desenvolvi uma integração utilizando a API GraphQL específica do sistema para criação, inserção, movimentação e coleta de informações em cards. Esta integração permitiu automatizar fluxos de trabalho, agilizando a criação e gestão de tarefas dentro do sistema. Por meio da API GraphQL, pude realizar operações como criar novos cards, inserir dados nos cards, movê-los entre etapas do processo e coletar informações relevantes dos cards, proporcionando uma gestão eficiente e organizada das atividades.",
        "li1-services-pipefy": "GraphQL",
        "p-services-googlesheets": "Utilizando a API do Google Sheets, automatizei processos de coleta de dados de forma eficiente, além de permitir a atualização contínua e precisa das informações dos produtos no banco de dados. Isso proporcionou uma gestão mais ágil e precisa das informações essenciais para o sistema.",
        "p-services-viacep": "Integrei o serviço ViaCEP para consultas de endereço utilizando o CEP. Através da API do ViaCEP, implementei funcionalidades que permitiram realizar consultas automatizadas de endereços a partir do CEP informado. Isso proporcionou uma maneira rápida e eficiente de obter informações precisas de endereços, facilitando processos de cadastro e atualização de dados dentro do sistema.",
        "p-services-jamef": "Utilizando a API da Jamef, integrei a funcionalidade de cálculo de frete em meu sistema. Essa integração permitiu automatizar o processo de consulta de valores de frete para diferentes destinos, proporcionando uma experiência mais eficiente para os clientes durante a cotação de envios.",
    }
  };

  function changeLanguage(language) {
    const logo = translations[language]["logo"];
    const navHome = translations[language]["nav-home"];
    const navAbout = translations[language]["nav-about"];
    const navServices = translations[language]["nav-services"];
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
    const contactTitle = translations[language]["contact-title"];
    const footerCopyright = translations[language]["footer-copyright"];
    const contactName = translations[language]['contact-name'];
    const contactEmail = translations[language]['contact-email'];
    const contactMessage = translations[language]['contact-message'];
    const contactBTN = translations[language]['send-message-btn'];
    const pservicespaypal = translations[language]['p-services-paypal'];
    const li1servicespaypal = translations[language]['li1-services-paypal'];
    const li2servicespaypal = translations[language]['li2-services-paypal'];
    const pservicesmercadopago = translations[language]['p-services-mercadopago'];
    const li1servicesmercadopago = translations[language]['li1-services-mercadopago'];
    const li2servicesmercadopago = translations[language]['li2-services-mercadopago'];
    const li3servicesmercadopago = translations[language]['li3-services-mercadopago'];
    const pservicesitau = translations[language]['p-services-itau'];
    const li1servicesitau = translations[language]['li1-services-itau'];
    const li2servicesitau = translations[language]['li2-services-itau'];
    const li3servicesitau = translations[language]['li3-services-itau'];
    const pservicestiny = translations[language]['p-services-tiny'];
    const li1servicestiny = translations[language]['li1-services-tiny'];
    const li2servicestiny = translations[language]['li2-services-tiny'];
    const li3servicestiny = translations[language]['li3-services-tiny'];
    const li4servicestiny = translations[language]['li4-services-tiny'];
    const li5servicestiny = translations[language]['li5-services-tiny'];
    const li6servicestiny = translations[language]['li6-services-tiny'];
    const li7servicestiny = translations[language]['li7-services-tiny'];
    const li8servicestiny = translations[language]['li8-services-tiny'];
    const li9servicestiny = translations[language]['li9-services-tiny'];
    const li10servicestiny = translations[language]['li10-services-tiny'];
    const pservicesrdstation = translations[language]['p-services-rdstation'];
    const li1servicesrdstation = translations[language]['li1-services-rdstation'];
    const li2servicesrdstation = translations[language]['li2-services-rdstation'];
    const pservicespipefy = translations[language]['p-services-pipefy'];
    const li1servicespipefy = translations[language]['li1-services-pipefy'];
    const pservicesgooglesheets = translations[language]['p-services-googlesheets'];
    const pservicesviacep = translations[language]['p-services-viacep'];
    const pservicesjamef = translations[language]['p-services-jamef'];
    const h1servicescontroledeestoque = translations[language]['h1-services-controledeestoque']
    const p1servicescontroledeestoque = translations[language]['p1-services-controledeestoque']
    const li1servicescontroledeestoque = translations[language]['li1-services-controledeestoque']
    const li2servicescontroledeestoque = translations[language]['li2-services-controledeestoque']
    const li3servicescontroledeestoque = translations[language]['li3-services-controledeestoque']
    const p2servicescontroledeestoque = translations[language]['p2-services-controledeestoque']


    document.getElementById('logo').innerHTML = logo;
    document.getElementById('nav-home').innerHTML = navHome;
    document.getElementById('nav-about').innerHTML = navAbout;
    document.getElementById('nav-services').innerHTML = navServices;
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
    document.getElementById('contact-title').innerHTML = contactTitle;
    document.getElementById('footer-copyright').innerHTML = footerCopyright;
    document.getElementById('contact-name').placeholder = contactName
    document.getElementById('contact-email').placeholder = contactEmail
    document.getElementById('contact-message').placeholder = contactMessage
    document.getElementById('send-message-btn').value = contactBTN
    document.getElementById('p-services-paypal').innerHTML = pservicespaypal
    document.getElementById('li1-services-paypal').innerHTML = li1servicespaypal
    document.getElementById('li2-services-paypal').innerHTML = li2servicespaypal
    document.getElementById('p-services-mercadopago').innerHTML = pservicesmercadopago
    document.getElementById('li1-services-mercadopago').innerHTML = li1servicesmercadopago
    document.getElementById('li2-services-mercadopago').innerHTML = li2servicesmercadopago
    document.getElementById('li3-services-mercadopago').innerHTML = li3servicesmercadopago
    document.getElementById('p-services-itau').innerHTML = pservicesitau
    document.getElementById('li1-services-itau').innerHTML = li1servicesitau
    document.getElementById('li2-services-itau').innerHTML = li2servicesitau
    document.getElementById('li3-services-itau').innerHTML = li3servicesitau
    document.getElementById('p-services-tiny').innerHTML = pservicestiny
    document.getElementById('li1-services-tiny').innerHTML = li1servicestiny
    document.getElementById('li2-services-tiny').innerHTML = li2servicestiny
    document.getElementById('li3-services-tiny').innerHTML = li3servicestiny
    document.getElementById('li4-services-tiny').innerHTML = li4servicestiny
    document.getElementById('li5-services-tiny').innerHTML = li5servicestiny
    document.getElementById('li6-services-tiny').innerHTML = li6servicestiny
    document.getElementById('li7-services-tiny').innerHTML = li7servicestiny
    document.getElementById('li8-services-tiny').innerHTML = li8servicestiny
    document.getElementById('li9-services-tiny').innerHTML = li9servicestiny
    document.getElementById('li10-services-tiny').innerHTML = li10servicestiny
    document.getElementById('p-services-rdstation').innerHTML = pservicesrdstation
    document.getElementById('li1-services-rdstation').innerHTML = li1servicesrdstation
    document.getElementById('li2-services-rdstation').innerHTML = li2servicesrdstation
    document.getElementById('p-services-pipefy').innerHTML = pservicespipefy
    document.getElementById('li1-services-pipefy').innerHTML = li1servicespipefy
    document.getElementById('p-services-googlesheets').innerHTML = pservicesgooglesheets
    document.getElementById('p-services-viacep').innerHTML = pservicesviacep
    document.getElementById('p-services-jamef').innerHTML = pservicesjamef
    document.getElementById('h1-services-controledeestoque').innerHTML = h1servicescontroledeestoque
    document.getElementById('p1-services-controledeestoque').innerHTML = p1servicescontroledeestoque
    document.getElementById('li1-services-controledeestoque').innerHTML = li1servicescontroledeestoque
    document.getElementById('li2-services-controledeestoque').innerHTML = li2servicescontroledeestoque
    document.getElementById('li3-services-controledeestoque').innerHTML = li3servicescontroledeestoque
    document.getElementById('p2-services-controledeestoque').innerHTML = p2servicescontroledeestoque
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('language-choose').addEventListener('change', function () {
        changeLanguage(this.value);
    });
});

function enviarEmail() {
    var nome = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var mensagem = document.getElementById('contact-message').value;
    var numero = '11949128218'

    var assunto = encodeURIComponent("Novo email de contato de " + nome);
    var corpo = encodeURIComponent("Nome: " + nome + "\n" +
                                    "Email: " + email + "\n" +
                                    "Mensagem: " + mensagem);
    var mailtoLink = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + corpo
    window.open(mailtoLink);
}

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video');
}

function pauseVideo() {
    if (player && player.stopVideo) {
        player.stopVideo();
    }
}
window.addEventListener('beforeunload', pauseVideo);