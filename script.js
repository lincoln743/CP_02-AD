// pego os elementos do html que vou usar mais de uma vez
const grid = document.getElementById("grid"); // div onde os cards vão ficar
const campoBusca = document.getElementById("campoBusca"); // input de texto da busca
const contador = document.getElementById("contador"); // parágrafo que mostra quantos resultados tem
const semResultado = document.getElementById("semResultado"); // mensagem de "nenhum encontrado"

// a data vem no formato 1979-08-27, essa função deixa no padrão brasileiro 27/08/1979
function formatarData(data) { // recebe a data como texto
    const partes = data.split("-"); // separa pelo traço: [ano, mes, dia]
    return partes[2] + "/" + partes[1] + "/" + partes[0]; // junta de novo na ordem dia/mes/ano
} // fim da formatarData

// função que recebe uma lista de atores e desenha os cards na tela
function renderizarCards(lista) { // lista pode ser o array todo ou só os filtrados
    grid.innerHTML = ""; // limpa o grid antes, senão os cards ficam duplicando

    lista.forEach(function (ator) { // passa por cada ator da lista
        grid.innerHTML += `
            <article class="card"> <!-- caixa do card -->
                <img class="card-foto" src="${ator.foto}" alt="Foto de ${ator.nome}" loading="lazy"> <!-- foto do ator -->
                <div class="card-info"> <!-- parte de texto do card -->
                    <h2 class="card-nome">${ator.nome}</h2> <!-- nome -->
                    <p class="card-dado"><span>País</span> ${ator.pais}</p> <!-- país de origem -->
                    <p class="card-dado"><span>Nascimento</span> ${formatarData(ator.nascimento)}</p> <!-- data já formatada -->
                </div> <!-- fim da parte de texto -->
            </article> <!-- fim do card -->
        `; // monta o card com template string e adiciona no grid (+= pra ir somando os cards)
    }); // fim do forEach

    contador.textContent = lista.length + " de " + atores.length + " exibidos"; // atualiza o contador de resultados

    if (lista.length === 0) { // se o filtro não achou ninguém
        semResultado.style.display = "block"; // mostra a mensagem de vazio
    } else { // se achou pelo menos um
        semResultado.style.display = "none"; // esconde a mensagem
    } // fim do if
} // fim da renderizarCards

// função chamada pelo oninput do campo de busca (roda a cada letra digitada)
function filtrarAtores() { // não recebe nada, pega o valor direto do input
    const texto = campoBusca.value.toLowerCase().trim(); // pega o que foi digitado, em minúsculo e sem espaço nas pontas

    const filtrados = atores.filter(function (ator) { // filter cria um array novo só com quem passar no teste
        return ator.nome.toLowerCase().includes(texto); // includes verifica se o nome tem o texto digitado (minúsculo dos dois lados pra não diferenciar maiúscula)
    }); // fim do filter

    renderizarCards(filtrados); // desenha só os atores que sobraram
} // fim da filtrarAtores

renderizarCards(atores); // quando a página abre, mostra todos os atores do array
