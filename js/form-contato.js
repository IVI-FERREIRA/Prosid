document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form-contato");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nome = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const servico = document.getElementById("servico").value;
      const mensagem = document.getElementById("mensagem").value.trim();
  
      // 🔗 URL do Google Forms (formResponse, não o preview)
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNYVjfrAf1_oA7rN2kUDEdp0BTT3OwGU5ocFUVNDbLtJZljg/formResponse";
  
      // 📨 Monta os dados
      const formData = new URLSearchParams();
      formData.append("entry.1305803274", servico);   // Serviço
      formData.append("entry.1570079111", nome);      // Nome
      formData.append("entry.2040536725", email);     // E-mail
      formData.append("entry.537648474", mensagem);   // Mensagem
  
      // 🚀 Envia os dados para o Google Forms
      fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
  
      // ✅ Exibe mensagem de sucesso "fake"
      document.getElementById("msg-ok").style.display = "block";
  
      // ⏳ Limpa o formulário depois de 1,5s
      setTimeout(() => {
        form.reset();
      }, 1500);
    });
  });
  