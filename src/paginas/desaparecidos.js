    
    
    
    
    // declara um conjunto inicial de desaparecidos
var db_exibeDesaparecidos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Abraam Jorge",
            "idade": "33",
            "sexo": "M",
            "corRaca": "Pardo",
            "altura": "1,77",
            "cidade": "Rio de Janeiro-RJ"
        },
        {
            "id": 2,
            "nome": "Emília Vasconcelos",
            "idade": "43",
            "sexo": "F",
            "corRaca": "Preta",
            "altura": "1,55",
            "cidade": "Betim-MG"
        },
        {
            "id": 3,
            "nome": "Cristiane Albuquerque",
            "idade": "19",
            "sexo": "F",
            "corRaca": "Branca",
            "altura": "1,68",
            "cidade": "São Paulo-SP"
        },
        {
            "id": 4,
            "nome": "Patrick Abreu",
            "idade": "14",
            "sexo": "M",
            "corRaca": "Preta",
            "altura": "1,45",
            "cidade": "Ribeirão das Neves-MG"
        },
        {
            "id": 5,
            "nome": "Jack Nick",
            "idade": "88",
            "sexo": "M",
            "corRaca": "Branca",
            "altura": "1,92",
            "cidade": "Carapicuiba-SP"
        },
        {
            "id": 6,
            "nome": "Giselle Barroso",
            "idade": "20",
            "sexo": "F",
            "corRaca": "Parda",
            "altura": "1,60",
            "cidade": "São Gonçalo-RJ"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais

var db = JSON.parse(localStorage.getItem('db_exibeDesaparecidos'));
if (!db) {
    db = db_exibeDesaparecidos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertDesaparecido(desaparecido) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoDesaparecido = {
        "id": novoId,
        "nome": desaparecido.nome,
        "idade" : desaparecido.idade,
        "sexo": desaparecido.sexo,
        "corRaca" : desaparecido.corRaca,
        "altura": desaparecido.altura,
        "cidade": desaparecido.cidade,
        "maisInformacoes": desaparecido.maisInformacoes,
    };

    // Insere o novo objeto no array
    db.data.push(novoDesaparecido);
    displayMessage("Desaperecido inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_desaparecidos', JSON.stringify(db));
}

function updateDesaparecido(id, desaparecido) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = desaparecido.nome,
    db.data[index].idade = desaparecido.idade,
    db.data[index].sexo = desaparecido.sexo,
    db.data[index].corRaca = desaparecido.corRaca,
    db.data[index].altura = desaparecido.altura,
    db.data[index].cidade = desaparecido.cidade,
    db.data[index].maisInformacoes  = desaparecido.maisInformacoes,

    displayMessage("desaparecido alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_desaparecidos', JSON.stringify(db));
}

function deleteDesaparecido(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Desaparecido removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_desaparecidos', JSON.stringify(db));
}