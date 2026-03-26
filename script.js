// Rolagem suave para os links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura dos dados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whats = document.getElementById('whatsapp').value;
    const msg = document.getElementById('mensagem').value;

    // CONFIGURAÇÃO: Coloque seu número real aqui (Ex: 5516999998888)
    const meuNumero = "5516997354455"; 

    // Formatação da mensagem
    const texto = `*NOVO CONTATO - UP BARBER*%0A%0A` +
                  `*Cliente:* ${nome}%0A` +
                  `*E-mail:* ${email}%0A` +
                  `*WhatsApp:* ${whats}%0A%0A` +
                  `*Dúvida/Serviço:*%0A${msg}`;

    // Monta a URL e abre
    const url = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${texto}`;
    
    window.open(url, '_blank');
});