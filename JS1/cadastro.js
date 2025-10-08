document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let conf = document.getElementById("conf").value;

    if(senha !== conf){
        alert("! As senhas não coincidem !");
        return;
    }

    let usuario = {nome, email, senha};

    localStorage.setItem(email, JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "";

});