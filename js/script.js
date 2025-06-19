document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Cadastro realizado com sucesso!");
        });
    }

    const formAgendamento = document.getElementById("formAgendamento");
    if (formAgendamento) {
        formAgendamento.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Agendamento realizado com sucesso!");
        });
    }

    const horaAtual = document.getElementById("horaAtual");
    if (horaAtual) {
        const now = new Date();
        horaAtual.textContent = now.toLocaleTimeString();
    }
});
