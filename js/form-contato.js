document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const servicoInput = document.getElementById('servico');
    const mensagemInput = document.getElementById('mensagem');
    const assuntoHidden = document.getElementById('assunto-email');
    const categoria = document.querySelector('h1')?.innerText || 'Serviço';
  
    form.addEventListener('submit', function () {
      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
      const mensagem = mensagemInput.value.trim();
      const servico = servicoInput.value;
  
      // Atualiza o campo de mensagem visível
      mensagemInput.value = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem do cliente:\n${mensagem}`;
  
      // Atualiza o campo oculto do assunto
      assuntoHidden.value = `${categoria} - ${servico}`;
  
      // Mostra mensagem de sucesso
      document.getElementById('msg-ok').style.display = 'block';
    });
  });
  