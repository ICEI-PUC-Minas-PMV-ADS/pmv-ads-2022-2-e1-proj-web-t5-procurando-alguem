# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

<h1>Daniel Mendes Rufino Silva</h1>
<h2>Desenvolvi testes nas páginas da Stephanye Castellano</h2>

<h3>Casos de Teste:</h3>
 <h5>CT-01 - Verificação se noticia cadastrada pelo administrador consta na Home page e por ter sido a última cadastrada, a notícia deve constar no topo das Notícias sobre desaparecidos.</h5>
 Objetivo do Teste: Verificar se atualizações de uma tela está constando em outra.<br>    
 Passo 1: Acessar o site como administrador.<br>                                              
 Passos 2: Cadastrar/incluir notícia.<br>                                                                
 Passos 3: Visualizar se notícia aparece na Home page.<br>                                      
Critérios de Êxito: Notícia aparecer na Home page, no topo das Notícias sobre desaparecidos.

 <h5>CT-02 - Verificação se na Home page ao clicar em "Ver mais" se o usuário é direcionado para a tela noticia, onde é possível ver a notícia completa.</h5>
 Objetivo do Teste: Verificar se aparece a notícia que foi clicada no ver mais aparece completa.<br>    
 Passo 1: Acessar o site como usuário<br>                                              
 Passos 2: Ir para a Home page.<br>                                                                
 Passos 3: Clicar no "Ver mais" no fim da notícia que está reduzida a poucos caracteres na Home page.<br> 
 Critérios de Êxito: Notícia aparecer completa na tela de notícia.   
 
 <h5>CT-03 - Verificação se após cadastrar um desaparecido, ele aparece no topo da parte onde constam os últimos desaparecidos na tela Home page.</h5>
 Objetivo do Teste: Verificar se desaparecido cadastrado por último aparece no primeiro nome da lista dos últimos desaparecidos.<br>    
 Passo 1: Acessar o site como usuário<br>                                              
 Passos 2: Cadastrar um desaparecido.<br>     
 Passos 3: Acessar a Home page.<br> 
 Critérios de Êxito: Desaparecido cadastrado por último aparecer no primeiro nome da lista dos últimos desaparecidos.
 
  <h5>CT-04 - Verificação se após trocar o status, na tela Editar desaparecido, ele migra da Página de desaparecidos para a tela de Encontrados.</h5>
 Objetivo do Teste: Verificar se após trocar o status, na tela Editar desaparecido, ele migra da Página de desaparecidos para a tela de Encontrados<br>    
 Passo 1: Acessar o site como usuário<br>                                              
 Passos 2: Cadastrar um desaparecido.<br>     
 Passos 3: Verificar que ele está na página de desaparecidos<br> 
 Passos 4: Editar o desaparecido e trocar o status para encontrado<br> 
 Passos 5: Verificar que ele está na página de encontradosdos<br> 
 Critérios de Êxito: Desaparecido cadastrado deve migrar para a página encontrados após a troca de status.

<h1>Stephanye Castellano</h1>
<h2>Desenvolvi testes nas páginas do Pedro Henrique da Silva Santos</h2>

<h3>Casos de Teste da tela de Login</h3>
<h5> Objetivo do Teste: Realizar login com usuário padrão e senha corretos</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Insiro os dados de login e senha de usuário corretamente 
<br> Passo 3: Login será realizado com sucesso
<br> Passo 4: Serei redirecionada para a tela Home Page 
<br> Resultado esperado: login realizado com sucesso, encaminhado para a página Home Page
<br> <br> 

<h5> Objetivo do Teste: Realizar login com usuário admin e senha corretos</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Insiro os dados de login e senha de admin corretamente  
<br> Passo 3: Login será realizado com sucesso
<br> Passo 4: Serei redirecionada para a tela Administrador 
<br> Resultado esperado: login realizado com sucesso, encaminhado para a página que lista usuários na tela de admin 
<br> <br> 

<h5> Objetivo do Teste: Realizar login com senha invalida </h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Insiro usuário correto   
<br> Passo 3: Senha inválida 
<br> Passo 4: Ao clicar em Login deverá aparecer uma mensagem dizendo que Usuário ou Senha incorretos.  
<br> Resultado esperado: Mostrar um alert com mensagem: Usuário ou Senha incorretos!<br> <br> 

<h5> Objetivo do Teste: Realizar login com usuário invalido</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Insiro usuário errado   
<br> Passo 3: Senha correta 
<br> Passo 4: Ao clicar em Login deverá aparecer uma mensagem dizendo que Usuário ou Senha incorretos.  
<br> Resultado esperado: Mostrar um alert com mensagem: Usuário ou Senha incorretos!<br> <br> 

<h5> Objetivo do Teste: Acessar Cadastro de Novo Usuário através do Login</h5>
<br> Passo 1: Clico no botão de Cadastrar Novo Usuário  
<br> Passo 2: Abrirá a modal de Cadastrar Novo Usuário  
<br> Resultado esperado: Mostrar um alert com mensagem: Usuário ou Senha incorretos!<br> <br> 

<h5> Objetivo do Teste: Realizar o Cadastro inserindo Usuário, Nome Completo, E-mail, Senha e Confirmação de Senha Corretamente</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir todos os dados corretamente: usuário, nome completo, e-mail, senha e confirmação de senha iguais 
<br> Passo 4: Clico no botão Cadastrar   
<br> Passo 5: Aparecerá uma mensagem informando que o usuário foi cadastrado com sucesso 
<br> Resultado esperado: Mostrar um alert com mensagem: Cadastro de Usuário Concluído. Prossiga com o login para acessar o site<br> <br>  

<h5> Objetivo do Teste: Tentar realizar cadastro com os campos Senha e Confirmar Senha diferentes</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir todos os dados: usuário, nome completo, e-mail, senha e confirmação de senha diferentes 
<br> Passo 4: Clico no botão Cadastrar   
<br> Passo 5: Aparecerá uma mensagem informando que as senhas são diferentes uma da outra 
<br> Resultado esperado: Mostrar um alert informando que senhas não são compatíveis<br> <br> 

<h5> Objetivo do Teste: Tentar realizar cadastro sem e-mail</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir os dados: usuário, nome completo, senha e confirmação de senha iguais 
<br> Passo 4: Não preencho o e-mail  
<br> Passo 5: Clico no botão Cadastrar   
<br> Passo 6: Aparecerá uma mensagem informando para preencher todos os campos obrigatórios 
<br> Resultado esperado: Mostrar um alert informando que todos os campos são obrigatórios<br> <br> 

<h5> Objetivo do Teste: Tentar realizar cadastro sem senha e confirmação de senha </h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir os dados: usuário, nome completo e e-mail 
<br> Passo 4: Não preencho senha e confirmação de senha iguais  
<br> Passo 5: Clico no botão Cadastrar   
<br> Passo 6: Aparecerá uma mensagem informando para preencher todos os campos obrigatórios 
<br> Resultado esperado: Mostrar um alert informando que todos os campos são obrigatórios<br> <br> 

<h5> Objetivo do Teste: Tentar realizar cadastro sem Nome Completo</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir os dados: usuário, e-mail, senha e confirmação de senha iguais  
<br> Passo 4: Não preencho o nome completo  
<br> Passo 5: Clico no botão Cadastrar   
<br> Passo 6: Aparecerá uma mensagem informando para preencher todos os campos obrigatórios  
<br> Resultado esperado: Mostrar um alert informando que todos os campos são obrigatórios<br> <br> 

<h5> Objetivo do Teste: Tentar realizar cadastro sem Usuário</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir os dados: nome completo, e-mail, senha e confirmação de senha iguais   
<br> Passo 4: Não preencho o usuário   
<br> Passo 5: Clico no botão Cadastrar   
<br> Passo 6: Aparecerá uma mensagem informando para preencher todos os campos obrigatórios  
<br> Resultado esperado: Mostrar um alert informando que todos os campos são obrigatórios<br> <br> 

<h5> Objetivo do Teste: Cadastrar um usuário com o mesmo login que um usuário já cadastrado</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir os dados: nome completo, e-mail, senha e confirmação de senha iguais   
<br> Passo 4: E um usuário o um que já foi cadastrado   
<br> Passo 5: Clico no botão Cadastrar   
<br> Passo 6: Aparecerá uma mensagem informando que usuário já foi cadastrado  
<br> Resultado esperado: Mostrar um alert informando que usuário já foi cadastrado <br> <br> 

<h5> Objetivo do Teste: Cadastrar um usuário com mesmo e-mail que um usuário já cadastrado</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Inserir os dados: usuário, nome completo, e-mail, senha e confirmação de senha iguais    
<br> Passo 4: E um e-mail o um que já foi cadastrado  
<br> Passo 5: Clico no botão Cadastrar   
<br> Passo 6: Aparecerá uma mensagem informando que e-mail já foi cadastrado  
<br> Resultado esperado: Mostrar um alert informando que e-mail já foi cadastrado <br> <br> 

<h5> Objetivo do Teste: Clicar no botão Cancelar</h5>
<br> Passo 1: Acesso a tela Login 
<br> Passo 2: Abrir modal de Cadastrar Novo Usuário    
<br> Passo 3: Clico no botão Cancelar      
<br> Passo 4: Deverá fechar a modal Cadastrar Novo Usuário   
<br> Resultado esperado: Fechar a modal assim que for clicado no botão Cancelar<br> <br> 

<br> <h3>Tela login-index</h3>
<h5> Objetivo do Teste: Listar usuários cadastrados</h5>
<br> Passo 1: Acesso a tela login-index usando um admin 
<br> Passo 2: Consigo visualizar todas as contas cadastradas 
<br> Resultado esperado: Visualizar todos os usuários cadastrados no sistema<br> <br> 

<h5> Objetivo do Teste: Clicar no botão Logout</h5>
<br> Passo 1: Acesso a tela login-index usando um admin  
<br> Passo 2: Clico no botão Logout     
<br> Passo 3: Serei redirecionada para a tela de login 
<br> Resultado esperado: O usuário logado, deverá tem sua sessionStorage encerrada e retornará para a tela de login<br> <br> 
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
