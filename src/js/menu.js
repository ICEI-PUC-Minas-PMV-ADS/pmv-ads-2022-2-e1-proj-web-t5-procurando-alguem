function menuPaginaAtual(ondeEstou){
    let menuPrincipal = document.getElementById("menuPrincipal");
    let conteudoHTML = "";
    
    conteudoHTML += `<ul class="nav">`;

    if(ondeEstou != "home-page"){
        conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-item" href="home-page.html">Home Page</a></li>`;
    }

    if(ondeEstou != "desaparecidos"){
        conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-item" href="desaparecidos.html">Desaparecidos</a></li>`;
    }

    if(ondeEstou != "encontrados"){
        conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-item" href="encontrados.html">Encontrados</a></li>`;
    }

    if(ondeEstou != "sobre"){
        conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-item" href="sobre.html">Sobre</a></li>`;
    }
    
    conteudoHTML += ultimoItemMenu();

    menuPrincipal.innerHTML = conteudoHTML;
}

function ultimoItemMenu(){
    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    let conteudoHTML = "";    

    if (usuarioCorrente == null) {
        conteudoHTML += `<li class="nav-item menu-login">`;
        conteudoHTML += `<img src="../../imagens/imagem-perfil.png" width="40" height="50"><a class="dropdown-item menu-imagem" id="loginMenu" href="login.html"> Login /<br>Cadastro</a></a>`;
        conteudoHTML += `</li>`;
        conteudoHTML += `</ul>`;  
    } else {
        conteudoHTML += `<li class="nav-item menu-perfil">`;
        conteudoHTML += `<a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">`;
        conteudoHTML += `<img src="../../imagens/imagem-perfil.png" width="40" height="50"><br>Meu Perfil</a>`;
        conteudoHTML += `<ul class="dropdown-menu" id="subMenu">`;
        conteudoHTML += `<li><a class="dropdown-item" href="meu-perfil.html">Meu Perfil</a></li>`;
        conteudoHTML += `<li><a id="logout" class="dropdown-item" onclick="logoutUsuario()">Logout</a></li>`;
        conteudoHTML += `<li><hr class="dropdown-divider"></li>`;
        conteudoHTML += `<li><a class="dropdown-item" href="cadastro-desaparecido.html">Cadastrar Desaparecido</a></li>`;
        conteudoHTML += `<li><a class="dropdown-item" href="lista-desaparecidos.html">Desaparecidos Cadastrado</a></li>`;
        conteudoHTML += `<li><a class="dropdown-item" href="depoimentos.html">Depoimentos</a></li>`;
        conteudoHTML += `<li><a class="dropdown-item" href="#">Configurações</a></li>`;
        conteudoHTML += `</ul>`;
        conteudoHTML += `</li>`;
        conteudoHTML += `</ul>`;
    }

    return conteudoHTML;
}

function logoutUsuario() {
    sessionStorage.setItem('usuarioCorrente', null);
    window.location.href = "login.html";
}


function menuPaginaTeste(){
    let menuPrincipal = document.getElementById("menuPrincipal");
    let conteudoHTML = "";

    conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-link" href="home-page.html">Home Page</a></li>`;
    conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-link" href="desaparecidos.html">Desaparecidos</a></li>`;
    conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-link" href="encontrados.html">Encontrados</a></li>`;
    conteudoHTML += `<li class="nav-item menu-alinhamento"><a class="nav-link" href="sobre.html">Sobre</a></li>`;

    conteudoHTML += ultimoItemMenu();

    menuPrincipal.innerHTML = conteudoHTML;
}