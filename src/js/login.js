
// Código retirado do exemplo para alunos de primeiro período.


// Página inicial de Login
const LOGIN_URL = "login.html";


var db_usuarios = {};


var usuarioCorrente = {};


function generateUUID() { 
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
        { "id": generateUUID (), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
    ]
};



function initLoginApp () {
    
    usuarioCorrente.JSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrente.JSON) {
        usuarioCorrente = JSON.parse (usuarioCorrente.JSON);
    }
    

    var usuariosJSON = localStorage.getItem('db_usuarios');

    // Faz a verificação do localstorage
    if (!usuariosJSON) {  
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        
        db_usuarios = dadosIniciais;

        
        localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
    }
    else  {  
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};


// Verifica se o login do usuário está correto, caso esteja, leva para a página inicial
function loginUser (login, senha) {
    

    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        // Se encontrou login, carrega usuário e salva
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            
            
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            
            return true;
        }
    }


    return false;
}

// Apaga os dados do usuário
function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser (login, nome, email, senha, senha2 ) {
    
    // Cria um objeto de novo usuario 
    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha, "senha2": senha2, "nome": nome, "email": email };
    
    // Adiciona o novo usuário ao banco de dados
    db_usuarios.usuarios.push (usuario);

    // Atualiza o banco de dados com o novo usuário
    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function setUserPass () {

}



initLoginApp ();