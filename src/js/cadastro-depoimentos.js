 // declara um conjunto inicial de depoimentos
let db_depoimentos = JSON.parse(localStorage.getItem('db_depoimentos')); 
    
    if (!db_depoimentos || db_depoimentos.length == 0) {
        db_depoimentos = [   
        {
            "id": 1,
            "nome": "Leanne Graham",
            "depoimento": "AAAAAAAAAAAA",
             
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "depoimento": "...",
            
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "depoimento": "...",
           
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "depoimento": "...",
            
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "depoimento": "...",
        }
        ]
        localStorage.setItem('db_depoimentos', JSON.stringify(db_depoimentos));
    }

    
/*
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