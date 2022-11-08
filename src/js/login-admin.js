function loginAdmin (username, password) {

    for (var i = 0; i < db_usuarios.usuarios.length; i++){ 
        var username = db_usuarios.usuarios[i];

    // Se encontrou login, carrega usuário e salva
    if (username == 'admin' && password == 'admin') {
        
        return true;
        }
    }   

return false;
}