document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        // 🔗 URL do Google Forms (formResponse, não o preview)
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScW3xNaJqio6tcY3yS7fBLpgtcrRCAq7Gp5LK_4CFRIr2150w/formResponse";


        // 📨 Monta os dados
        const formData =
            `entry.1305803274=${encodeURIComponent(servico)}&` +
            `entry.1570079111=${encodeURIComponent(nome)}&` +
            `entry.2040536725=${encodeURIComponent(email)}&` +
            `entry.537648474=${encodeURIComponent(mensagem)}`;

        // 🚀 Envia os dados para o Google Forms
        fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

        // Mostrar balão
        document.getElementById("msg-ok").style.display = "block";

        // Limpa depois de 2 segundos E esconde o balão
        setTimeout(() => {
            form.reset();
            document.getElementById("msg-ok").style.display = "none";
        }, 2000);
    });
});
