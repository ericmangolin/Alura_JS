var btnAdd = document.querySelector('#ad-paciente');
btnAdd.addEventListener('click', function(event){
    event.preventDefault();
    
    //capturando os dados preenchidos no form
    var paciente = obterPaciente(formu);
    console.log(paciente);
    
    var formu = document.querySelector('#form-adiciona');

    //criando novos dados para inserção na tabela
    var pacteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //capturando dados dentros das Td's
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    //inserindo dados dentro das Tds e Tr
    pacteTr.appendChild(nomeTd);
    pacteTr.appendChild(pesoTd);
    pacteTr.appendChild(alturaTd);
    pacteTr.appendChild(gorduraTd);
    pacteTr.appendChild(imcTd);

    //inserindo dados da Tr dentro da tabela principal, exibe os dados
    var tblPcte = document.querySelector('#tabela-pacientes');
    tblPcte.appendChild(pacteTr);

});

function obterPaciente(formu){
    var pacientes = {
        nome: formu.nomes.value,
        peso: formu.pesos.value,
        altura: formu.alturas.value,
        gordura: formu.gorduras.value,
        imc: calculaImc(formu.peso.value, formu.altura.value)
    }
    return pacientes;
}