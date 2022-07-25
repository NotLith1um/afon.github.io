function logar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    if(usuario.value == "admin@admin.com" && senha.value == "admin"){
    localStorage.setItem(acesso, true);

    window.location.href = "index.html";

    }
    else{
        alert("Usuário ou senha inválidos!")
    }
}
