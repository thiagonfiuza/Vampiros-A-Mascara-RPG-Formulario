function changeDisciplines() {

    var clanSelect = document.getElementById("clan");

    var selectedClan = clanSelect.value;

    var disciplines01Input = document.getElementById("disciplines01");

    var disciplines02Input = document.getElementById("disciplines02");

    var disciplines03Input = document.getElementById("disciplines03");

 

    // Adicione informações ao input com base no valor selecionado

    if (selectedClan === "Brujah") {

        disciplines01Input.value = "Rapidez";

        disciplines02Input.value = "Potencia";

        disciplines03Input.value = "Presença";

        

    } else if (selectedClan === "Gangrel") {

        disciplines01Input.value = "Animalismo";

        disciplines02Input.value = "Fortitude";

        disciplines03Input.value = "Metarmofose";

        

    } else if (selectedClan === "Malkaviano") {

        disciplines01Input.value = "Auspicios";

        disciplines02Input.value = "Demencia";

        disciplines03Input.value = "Ofuscação";

        

    } else if (selectedClan === "Nosferatu") {

        disciplines01Input.value = "Animalismo";

        disciplines02Input.value = "Ofuscação";

        disciplines03Input.value = "Potencia";

        

    } else if (selectedClan === "Toreador") {

        disciplines01Input.value = "Auspicios";

        disciplines02Input.value = "Rapidez";

        disciplines03Input.value = "Presença";

        

    } else if (selectedClan === "Tremere") {

        disciplines01Input.value = "Auspicios";

        disciplines02Input.value = "Dominação";

        disciplines03Input.value = "Taumaturgia";

        

    } else if (selectedClan === "Ventrue") {

        disciplines01Input.value = "Dominação";

        disciplines02Input.value = "Fortitude";

        disciplines03Input.value = "Presença";

        

    }

    // Adicione mais condições conforme necessário para outros clãs

}






//Comandos para o setor Atributos

// Variáveis originais

let pontosAtributosFisicos = 7;

let pontosAtributosSociais = 5;

let pontosAtributosMentais = 3;


const tituloAtributos = document.getElementById('titulo-Atributos');

const atributosFisicos = document.getElementById('titulo-Fisicos');

const atributosSociais = document.getElementById('titulo-Sociais');

const atributosMentais = document.getElementById('titulo-Mentais');


// Função principal de atualização

function atualizarFicha() {

    // 1. Calculamos o gasto de cada categoria

    // Contamos todos os marcados e subtraímos 3 (os pontos iniciais gratuitos)

    const marcadosFisicos = document.querySelectorAll('.Fisicos input:checked').length - 3;

    const marcadosSociais = document.querySelectorAll('.Sociais input:checked').length - 3;

    const marcadosMentais = document.querySelectorAll('.Mentais input:checked').length - 3;


    // 2. Calculamos o que sobrou para cada H3

    const restateF = pontosAtributosFisicos - marcadosFisicos;

    const restateS = pontosAtributosSociais - marcadosSociais;

    const restateM = pontosAtributosMentais - marcadosMentais;


    // 3. Atualizamos os textos dos H3

    atributosFisicos.innerText = `Físicos ( ${restateF.toString().padStart(2, '0')} )`;

    atributosSociais.innerText = `Sociais ( ${restateS.toString().padStart(2, '0')} )`;

    atributosMentais.innerText = `Mentais ( ${restateM.toString().padStart(2, '0')} )`;


    // 4. Atualizamos o Título Geral (H2)

    // O total disponível é 15 menos a soma de tudo o que foi gasto

    const totalGasto = marcadosFisicos + marcadosSociais + marcadosMentais;

    const saldoGeral = 15 - totalGasto;

    tituloAtributos.innerText = `Atributos ( ${saldoGeral} )`;


    // 5. Feedback visual: se o saldo for negativo, fica vermelho

    [atributosFisicos, atributosSociais, atributosMentais, tituloAtributos].forEach(el => {

        const valor = parseInt(el.innerText.match(/\d+/));

        el.style.color = el.innerText.includes('-') ? 'red' : 'inherit';

    });

}


// Ouvinte de eventos: qualquer clique em checkbox na área de atributos dispara a atualização

document.querySelector('.grupo-atributos').addEventListener('change', atualizarFicha);


// Executa ao carregar para mostrar os valores iniciais (7, 5, 3)

atualizarFicha();










//Comandos para o setor Habilidades

// Variáveis de Configuração

const pontosTalentos = 13;

const pontosPericias = 9;

const pontosConhecimentos = 7;

const totalHabilidadesInicial = pontosTalentos + pontosPericias + pontosConhecimentos; // 29


const tituloGeralHabilidades = document.getElementById('titulo-Habilidades');

const tituloTalentos = document.getElementById('titulo-Talentos');

const tituloPericias = document.getElementById('titulo-Pericias');

const tituloConhecimentos = document.getElementById('titulo-Conhecimentos');


function atualizarHabilidades() {

    // 1. Contagem de marcados por coluna

    const marcadosTalentos = document.querySelectorAll('.Talentos input:checked').length;

    const marcadosPericias = document.querySelectorAll('.Pericias input:checked').length;

    const marcadosConhecimentos = document.querySelectorAll('.Conhecimentos input:checked').length;


    // 2. Cálculo dos saldos individuais

    const restateT = pontosTalentos - marcadosTalentos;

    const restateP = pontosPericias - marcadosPericias;

    const restateC = pontosConhecimentos - marcadosConhecimentos;


    // 3. Atualização dos H3

    tituloTalentos.innerText = `Talentos ( ${restateT.toString().padStart(2, '0')} )`;

    tituloPericias.innerText = `Pericias ( ${restateP.toString().padStart(2, '0')} )`;

    tituloConhecimentos.innerText = `Conhecimentos ( ${restateC.toString().padStart(2, '0')} )`;


    // 4. Cálculo e Atualização do Título Geral (H2)

    const totalGasto = marcadosTalentos + marcadosPericias + marcadosConhecimentos;

    const saldoGeralHabilidades = totalHabilidadesInicial - totalGasto;

    

    tituloGeralHabilidades.innerText = `Habilidades ( ${saldoGeralHabilidades.toString().padStart(2, '0')} )`;


    // 5. Feedback visual de erro

    [tituloTalentos, tituloPericias, tituloConhecimentos, tituloGeralHabilidades].forEach(el => {

        el.style.color = el.innerText.includes('-') ? 'red' : 'inherit';

    });

}


// Ouvinte de eventos

document.querySelector('.Habilidades').addEventListener('change', atualizarHabilidades);


// Inicialização

atualizarHabilidades();








// 1. Configurações iniciais

const pontosAntecedentes = 5;

const pontosDisciplinas = 3;

const pontosVirtudes = 7;

const totalVantagensInicial = pontosAntecedentes + pontosDisciplinas + pontosVirtudes;


// 2. Elementos do DOM (Verifique se esses IDs batem com seu HTML)

const tituloGeralVantagens = document.getElementById('titulo-Vantagens');

const tituloAntecedentes = document.getElementById('titulo-Antecedentes');

const tituloDisciplinas = document.getElementById('titulo-Disciplinas');

const tituloVirtudes = document.getElementById('titulo-Virtudes');


function atualizarVantagens() {

    // Pegamos todos os grupos dentro da div principal "Vantagens"

    const containerVantagens = document.querySelector('.Vantagens');

    

    // Contagem Antecedentes: todas as bolinhas marcadas dentro das divs de classe .Antecedentes

    const marcadosAntecedentes = containerVantagens.querySelectorAll('.Antecedentes input:checked').length;

    

    // Contagem Disciplinas: todas as bolinhas marcadas dentro das divs de classe .Disciplinas

    const marcadosDisciplinas = containerVantagens.querySelectorAll('.Disciplinas input:checked').length;

    

    // Contagem Virtudes: 

    // Em VTM, o 1º ponto de Consciência, Autocontrole e Coragem é grátis.

    // O código conta os marcados e subtrai 3 (os iniciais). 

    const marcadosVirtudesRaw = containerVantagens.querySelectorAll('.Virtudes input:checked').length;

    const marcadosVirtudes = Math.max(0, marcadosVirtudesRaw - 3);


    // 3. Cálculos de saldo

    const saldoA = pontosAntecedentes - marcadosAntecedentes;

    const saldoD = pontosDisciplinas - marcadosDisciplinas;

    const saldoV = pontosVirtudes - marcadosVirtudes;


    // 4. Atualização visual dos H3

    if (tituloAntecedentes) tituloAntecedentes.innerText = `Antecedentes ( ${saldoA.toString().padStart(2, '0')} )`;

    if (tituloDisciplinas) tituloDisciplinas.innerText = `Disciplinas ( ${saldoD.toString().padStart(2, '0')} )`;

    if (tituloVirtudes) tituloVirtudes.innerText = `Virtudes ( ${saldoV.toString().padStart(2, '0')} )`;


    // 5. Atualização do Título Geral (H2)

    const saldoGeral = totalVantagensInicial - (marcadosAntecedentes + marcadosDisciplinas + marcadosVirtudes);

    if (tituloGeralVantagens) tituloGeralVantagens.innerText = `Vantagens ( ${saldoGeral.toString().padStart(2, '0')} )`;


    // 6. Feedback de cor (Vermelho se negativo)

    [tituloAntecedentes, tituloDisciplinas, tituloVirtudes, tituloGeralVantagens].forEach(el => {

        if (el) el.style.color = el.innerText.includes('-') ? 'red' : 'inherit';

    });

}


// 7. Evento: Escuta mudanças na div pai de todas as vantagens

document.querySelector('.Vantagens').addEventListener('change', atualizarVantagens);


// 8. Inicia os valores ao abrir a página

atualizarVantagens();