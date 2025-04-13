document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const servicoInput = document.getElementById('servico');
    const mensagemInput = document.getElementById('mensagem');

    const assuntoHidden = document.getElementById('assunto-email');
    const mensagemFinal = document.getElementById('mensagem-final');

    const categoria = document.querySelector('h1')?.innerText || 'Serviço';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const assunto = `${categoria} - ${servicoInput.value}`;
        assuntoHidden.value = assunto;

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        mensagemFinal.value = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem do cliente:\n${mensagem}`;

        // 🔥 Criar um botão "submit" real e clicar nele
        const fakeBtn = document.createElement('button');
        fakeBtn.type = 'submit';
        fakeBtn.style.display = 'none';
        form.appendChild(fakeBtn);
        fakeBtn.click();
        form.removeChild(fakeBtn);

        // Mostrar balão
        document.getElementById('msg-ok').style.display = 'block';

        // Resetar depois
        setTimeout(() => {
            form.reset();
        }, 1000);
    });
});
