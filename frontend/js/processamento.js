const pacientes = [

"João Silva",
"Maria Souza",
"Carlos Lima",
"Ana Costa",
"Pedro Rocha",
"Fernanda Alves",
"Lucas Martins",
"Juliana Melo",
"Bruno Santos",
"Larissa Oliveira",
"Ricardo Nunes",
"Paula Ribeiro"

];

const consoleDiv = document.getElementById("console");

const contador = document.getElementById("contador");

const sucesso = document.getElementById("sucesso");

const falhas = document.getElementById("falhas");

const pacienteAtual = document.getElementById("pacienteAtual");

const barra = document.getElementById("bar");

const percentual = document.getElementById("percentual");

const finalizar = document.getElementById("finalizar");

let ok = 0;

let erro = 0;

let atual = 0;

function log(texto, classe="info"){

    const linha=document.createElement("div");

    linha.className=`log ${classe}`;

    linha.innerHTML=texto;

    consoleDiv.appendChild(linha);

    consoleDiv.scrollTop=consoleDiv.scrollHeight;

}

async function esperar(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function executar(){

    log("Inicializando navegador...","info");

    await esperar(1000);

    log("Conectando ao Salutem...","info");

    await esperar(800);

    log("Conectando ao SIRESP...","info");

    await esperar(800);

    for(let nome of pacientes){

        atual++;

        pacienteAtual.innerHTML=nome;

        log(`Buscando paciente ${nome}`,"info");

        await esperar(700);

        if(Math.random()>0.08){

            ok++;

            log(`✔ Consulta marcada com sucesso`,"ok");

        }else{

            erro++;

            log(`⚠ Horário indisponível`,"warn");

        }

        contador.innerHTML=`${atual} / ${pacientes.length}`;

        sucesso.innerHTML=ok;

        falhas.innerHTML=erro;

        let pct=(atual/pacientes.length)*100;

        barra.style.width=pct+"%";

        percentual.innerHTML=Math.round(pct)+"%";

        await esperar(500);

    }

    pacienteAtual.innerHTML="Processamento Finalizado";

    log("====================================","info");

    log("AUTOMAÇÃO FINALIZADA","ok");

    log(`Sucesso: ${ok}`,"ok");

    log(`Falhas: ${erro}`,"warn");

    finalizar.classList.remove("disabled");

}

executar();