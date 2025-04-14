document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const servicoInput = document.getElementById('servico');
    const mensagemInput = document.getElementById('mensagem');

    const assuntoHidden = document.getElementById('assunto-email');
    const mensagemFinal = document.getElementById('mensagem-final');

    const categoria = document.querySelector('h1')?.innerText || 'Serviço';

    // Atualiza os campos hidden ao mudar qualquer campo
    form.addEventListener('input', () => {
        const assunto = `${categoria} - ${servicoInput.value}`;
        assuntoHidden.value = assunto;

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        mensagemInput.value = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem do cliente:\n${mensagem}`;
    });

    // Quando o formulário for enviado, só mostra o balão (sem bloquear envio)
    form.addEventListener('submit', () => {
        document.getElementById('msg-ok').style.display = 'block';

        // Limpa depois (opcional)
        setTimeout(() => {
            form.reset();
        }, 2000);
    });
});
