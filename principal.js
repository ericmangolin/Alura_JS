//Recebe e pesquisa todos os itens na tr com classe 'paciente'
var trpacientes = document.querySelectorAll('.paciente');

var titulo = document.querySelector('.titulo');

for(var i = 0; i < trpacientes.length; i++){
    var pacientes = trpacientes[i];

    var tdPeso = pacientes.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = pacientes.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = pacientes.querySelector('.info-imc');

    var pesoValido = true;
    var alturaValido = true;

    if(peso <= 0 || peso >= 400){
        //console.log('Peso Inválido');
        pesoValido = false;
        //tdPeso.textContent = 'Peso Inválido';
        tdImc.textContent = 'Peso Inválido';
        pacientes.classList.add('pacientes-erro');
    }
    if(altura <= 0 || altura >= 3.00){
        //console.log('Altura Inválida');
        alturaValido = false;
        //tdAltura.textContent = 'Altura Inválida';
        tdImc.textContent = 'Altura Inválida';
        pacientes.classList.add('pacientes-erro');
    }
    if(pesoValido && alturaValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
        //console.log('DADOS VÁLIDOS');
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(1);
}