const button = document.getElementById("loginButton");

const statusText = document.getElementById("status");

button.addEventListener("click", function(e){

    e.preventDefault();

    executarLogin();

});

async function executarLogin(){

    button.disabled = true;

    button.innerHTML = "Conectando...";

    const mensagens = [

        "Conectando ao sistema...",

        "Validando credenciais...",

        "Autenticando usuário...",

        "Carregando módulos...",

        "Login realizado com sucesso."

    ];

    for(let mensagem of mensagens){

        statusText.innerHTML = mensagem;

        await esperar(900);

    }

    statusText.style.color="#22c55e";

    await esperar(700);

    window.location="dashboard.html";

}

function esperar(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}