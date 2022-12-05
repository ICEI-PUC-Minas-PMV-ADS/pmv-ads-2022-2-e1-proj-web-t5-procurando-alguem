/* // declara um conjunto inicial de depoimentos
var db_depoimentos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "depoimento": "...",
            "email": "Sincere@april.biz",
  
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "depoimento": "...",
            "email": "Shanna@melissa.tv",
 
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "depoimento": "...",
            "email": "Nathan@yesenia.net",
 
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "depoimento": "...",
            "email": "Julianne.OConner@kory.org",
 
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "depoimento": "...",
            "email": "Lucio_Hettinger@annie.ca",

        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "depoimento": "...",
            "email": "Karley_Dach@jasper.info",

        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "depoimento": "...",
            "email": "Telly.Hoeger@billy.biz",

        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "depoimento": "...",
            "email": "Sherwood@rosamond.me",

        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "depoimento": "...",
            "email": "Chaim_McDermott@dana.io",

        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "depoimento": "...",
            "email": "Rey.Padberg@karina.biz",

        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_depoimento'));
if (!db) {
    db = db_depoimentos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function inserirDepoimento(depoimento) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoDepoimento = {
        "id": novoId,
        "nome": depoimento.nome,
        "depoimento": depoimento.depoimento,

    };

    // Insere o novo objeto no array
    db.data.push(novoDepoimento);
    displayMessage("Depoimento inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_depoimentos', JSON.stringify(db));
}

function updateDepoimento(id, depoimento) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = depoimento.nome,
    db.data[index].email = depoimento.email,
    db.data[index].depoimento = depoimento.depoimento,

    displayMessage("Depoimento alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_depoimento', JSON.stringify(db));
}

function deleteDepoimento(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Depoimento removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_depoimento', JSON.stringify(db));
} */