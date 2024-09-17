function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p style='color: white;'>Você precisa digitar o nome do personagem</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se no dado titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <a href="#" target="_blank">
                    <h2>${dado.titulo}</h2>
                </a>
                <p>${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
        }



        console.log(dado.titulo.includes(campoPesquisa));


    }

    if (!resultados) {
        resultados = "<p style='color: white;'>Nada foi encontrado</p>";
    }

    // Atribui os resultados formatados à seção HTML
    section.innerHTML = resultados;
}






