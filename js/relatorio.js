new Chart(document.getElementById("pizza"),{

type:"doughnut",

data:{

labels:["Sucesso","Falhas"],

datasets:[{

data:[58,3]

}]

},

options:{

plugins:{

legend:{

labels:{

color:"white"

}

}

}

}

});

new Chart(document.getElementById("barra"),{

type:"bar",

data:{

labels:[

"Cardio",

"Neuro",

"Pneumo",

"Reumato"

],

datasets:[{

label:"Consultas",

data:[20,16,15,10]

}]

},

options:{

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

x:{

ticks:{color:"white"}

},

y:{

ticks:{color:"white"}

}

}

}

});

document.getElementById("download").onclick=()=>{

alert("Relatório exportado com sucesso!");

};