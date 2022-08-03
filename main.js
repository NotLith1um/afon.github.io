
function logar(){
        var usuario = document.getElementById("usuario");
        var senha = document.getElementById("senha");

        if(usuario.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem(acesso, true);

        window.location.href = "principal.html";

        }
        else{
            alert("Usuário ou senha inválidos!")
        }
}


function registrar(){
    var usuario = document.getElementById("regusuario");
    var email = document.getElementById("regemail")
    var senha = document.getElementById("regsenha");

    if(usuario.value != "" || senha.value != "" || email.value != ""){
    localStorage.setItem(confirma, true);

    window.location.href = "principal.html";

    }
    else{
        alert("Usuário ou senha inválidos!")
    }
}

// Contatos


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}