const pacientes = [

["125487","João Silva","Cardiologia"],

["125488","Maria Souza","Neurologia"],

["125489","Carlos Lima","Pneumologia"],

["125490","Ana Costa","Reumatologia"],

["125491","Pedro Rocha","Cardiologia"],

["125492","Fernanda Alves","Neurologia"],

["125493","Lucas Martins","Pneumologia"],

["125494","Juliana Melo","Cardiologia"],

["125495","Bruno Santos","Reumatologia"],

["125496","Larissa Oliveira","Cardiologia"],

["125497","Ricardo Nunes","Neurologia"],

["125498","Paula Ribeiro","Pneumologia"]

];

const tbody=document.getElementById("tbody");

pacientes.forEach(p=>{

tbody.innerHTML+=`

<tr>

<td>${p[0]}</td>

<td>${p[1]}</td>

<td>${p[2]}</td>

<td>

<span class="status">

Pronto

</span>

</td>

</tr>

`;

});