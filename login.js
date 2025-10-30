document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById("senhaLogin").value;

    let usuario = JSON.parse(localStorage.getItem(email));

    if (usuario && usuario.senha === senha){
        alert("Login realizado co sucesso! Bem-vindo " + usuario.name);
        window.location.href = "agendamento.html";
    } else {
        alert("! E-mail ou Senha incorretos !");
    }

});
