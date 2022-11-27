# Programação de Funcionalidades

<h1>Pedro Henrique da Silva Santos</h1>
Desenvolvi a página de LOGIN, com a possibilidade de CADASTRO na mesma, de acordo com os padrões que criamos para o nosso projeto nos quesitos visuais e funcionais. Fiz uma separação entre o Usuário Comum e o Administrador, logo o administrador terá suas próprias credenciais pré-definidas por nós para acessar toda a parte de administração da nossa aplicação. Foquei em fazer estas funcionalidades, pois o meu grupo vai precisar delas para desenvolver suas próprias funcionalidades na etapa seguinte, ou seja, precisavamos ter isso pronto para poder avançar. 

<h3>Os requisitos atendidos por essas funcionalidades que eu desenvolvi são: RF-20 e RNF-12.</h3>

<h4>Links Referentes as Funcionalidades que Desenvolvi:<br></h4>
Página de Login e Cadastro = https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/login.html<br><br>
Página de Administrador = https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/login-index.html<br><br>
Arquivo JavaScript utilizado nessas páginas = https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/js/login.js<br><br><br>


1 - Tela de Login padrão sem o overlay de cadastro, bastando inserir suas credencias caso já seja cadastrado.
![Tela de Login (Sem Modal Cadastro)](https://user-images.githubusercontent.com/112659128/200725925-4c739b9e-1467-4037-ad3d-4d872221149a.PNG)

2 - Tela de Login padrão, porém com o overlay de cadastro aparante, possibilitando que o novo usuário se cadastre ao clicar no botão "Cadastro de Novo Usuário". OBS: o overlay de cadastro (MODAL) só aparece depois que usuário clicar em "Cadastro de Novo Usuário".
![Tela de Login (Com Modal Cadastro)](https://user-images.githubusercontent.com/112659128/200725936-ec51fb78-2945-421a-a3e1-97a7330fcda3.PNG)

3 - Página de acesso exclusivo do administrador, para gerenciar e visualizar todos os usuários cadastrados.
![Página de Administrador onde ficam listados todos os cadastros de usuários](https://user-images.githubusercontent.com/112659128/200725983-97035160-c6d9-4832-9d52-82643438f773.PNG)

4 - O próprio sistema verifica se a pessoa fazendo login é apenas um usuário comum ou se é um administrador. Caso seja um usuário comum, ao fazer login a aplicação emitira um alerta "Login Efetuado com Sucesso!" e proseguirá para a HomePage ou para a página de Cadastro de Desaparecidos.
![Validação de Usuário](https://user-images.githubusercontent.com/112659128/200726016-1339222f-b557-4b02-89c9-78d6dfc5101c.PNG)

5 - Já no caso do sistema detectar credenciais de administrador, ao clicar no botão LOGIN, o usuário será redirecionado para as páginas exclusivas de administração.
![Validação de Administrador](https://user-images.githubusercontent.com/112659128/200726033-a55c3d6b-8f73-45f5-a532-87278ef5204d.PNG)

6 - Caso o Usuário e a Senha inseridos no card de login forem inválidos, tanto para usuários comuns, quanto para administradores, o sistema emetirá um alerta de credenciais inválidas.
![Validação de Credenciais](https://user-images.githubusercontent.com/112659128/200728936-819daac4-0e9c-4324-826d-1ba04edbde77.PNG)

7 - Já no caso de novos usuários, basta clicar no botão "Cadastro de Novo Usuário", preencher as informações solicitadas e enviar o formulário clicando no botão "Enviar Cadastro". O sistema vai ler as inforações inseridas e verificar se a Senha e a Senha de Confirmação são iguais. Caso sejam, um alerta será emitido e o cadastro estará concluído, caso não sejam o sistema emitirá um alerta informando que as senhas são inválidas.
![Validação de Cadastro](https://user-images.githubusercontent.com/112659128/200729566-5bd76d00-23ef-41eb-ae8a-8e9ed55bb86a.PNG)


<h1>Daniel Mendes Rufino Silva</h1>
<h2>Desenvolvi as páginas de Cadastro de Desaparecidos, Editar Desaparecidos e Excluir Desaparecidos, páginas dos administradores e dos usuários. As páginas desenvolvidas abordam os Requisitos Funcionais RF-01, RF-02, RF-11 e Não Funcionais RNF-01 e RNF-04</h2>

<h3> Links dos códigos referentes a todas as funcionalidades que eu Desenvolvi: </h3><br>

Cadastro de Desaparecidos (versão de usuário): https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/cadastro-desaparecido.html<br><br>
Editar Desaparecidos (versão de usuário): https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/editar-desaparecido.html<br><br>
Excluir Desaparecidos (versão de usuário): https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/excluir-desaparecido.html<br><br>

Cadastro de Desaparecidos (versão de administrador): https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/cadastro-desaparecidos-adm.html<br><br>
Editar Desaparecidos (versão de administrador): https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/editar-desaparecido-adm.html<br><br>
Excluir Desaparecidos (versão de administrador): https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/excluir-desaparecido-adm.html<br><br>


<h3>Páginas Usuários</h3>

<h4>1- Página de Cadastro de Desaparecidos, onde é possível cadastrar uma pessoa desaparecida. Além disso, é possível acessar outras páginas do site por meio dos botões disponíveis.</h4>

![Cadastro Desaparecidos](https://user-images.githubusercontent.com/98750413/200814117-c90653c0-307d-4bbc-a8eb-f065ca596a95.png)

<h4>2- Caso algum dos campos do cadastro não tenha sido preenchido, um alerta é emitido- "Preencha todos os campos obrigatórios!"</h4>

![Preencha todos os campos obrigatórios!](https://user-images.githubusercontent.com/98750413/200843538-7391ffd1-b804-4cf3-91da-be9186fe6f6a.jpeg)

<h4>3- Quando desaparecido é cadastrado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido incluído com sucesso".</h4>

![Desaparecido incluído com sucesso](https://user-images.githubusercontent.com/98750413/200842602-4bbbe8cd-3ba7-4345-8ed5-2852d38ac334.jpeg)

<h4>4- Ao clicar no botão de alerta, usuário é direcionado para a página -Lista de Desaparecidos- onde é possível visualizar o(s) desaparecido(s) cadastrados pelo úsuário com as devidas informações que foram inseridas. Na página -Lista de Desaparecidos- o usuário tem as opções de Inserir-para cadastrar um novo desaparecido-, Editar-para editar um desaparecido- e Excluir-para excluir um desaparecido. Além disso, consta nesta página se o Desaparecido foi ou não encontrado</h4>

![Lista Desaparecido, usuário](https://user-images.githubusercontent.com/98750413/204157947-7d097307-39cb-42c1-9d92-91872f6a8dd5.png)

<h4>5- Ao clicar em Inserir, na página-Lista de Desaparecidos, o usuário é direcionado para a página-Cadastro de Desaparecidos.</h4>

![Cadastro Desaparecidos](https://user-images.githubusercontent.com/98750413/200814117-c90653c0-307d-4bbc-a8eb-f065ca596a95.png)

<h4>6- Ao clicar em Editar, na página-Lista de Desaparecidos-, o usuário é direcionado para a página-Editar Desaparecido, onde é possível modificar qualquer campo do cadastro feito.</h4>

![Editar Desaparecido](https://user-images.githubusercontent.com/98750413/200850356-9005f509-2447-4608-93bf-608571f25211.png)

<h4>7- Quando desaparecido é editado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido editado com sucesso".</h4>

![Desaparecido editado com sucesso!](https://user-images.githubusercontent.com/98750413/200852305-3b7c0381-5dc3-48f4-9823-9adf9511dfcc.jpeg)

<h4>8- Ao clicar em Excluir, na página-Lista de Desaparecidos-, o usuário é direcionado para a página-Excluir Desaparecido, onde é possível apenas excluir o cadastro, clicando no botão "Excluir".</h4>

![Excluir Desaparecido](https://user-images.githubusercontent.com/98750413/200853143-bf5e4de7-55de-4daa-9ba0-32cb346ebffe.png)

<h4>9- Ao clicar em Excluir, na página-Excluir Desaparecidos-, um alerta é emitido, confirmando "Desaparecido excluído com sucesso".</h4>

![Desaparecido excluído com sucesso!](https://user-images.githubusercontent.com/98750413/200854170-e196aa9f-c285-4ccd-9928-0218bcdeebbd.jpeg)

<h4>10- Ao clicar no botão de alerta, o usuário é direcionado para a página -Lista de Desaparecidos- onde é possível confirmar que Desaparecido excluído não está mais listado.</h4>

![Lista Desaparecidos, usuário, vazia](https://user-images.githubusercontent.com/98750413/204158170-979578eb-0ad6-4587-bfad-ed7773ca483c.png)


<h2>Páginas Administradores</h2>

<h4>1- Página de Cadastro de Desaparecidos-adm, onde é possível que o administrador cadastre uma pessoa desaparecida. Além disso, é possível acessar outras páginas do site por meio dos botões disponíveis.</h4>

![Cadastro Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201091604-a4182cc3-2cc5-4853-89ee-f1db90a4147c.png)

<h4>2- Caso algum dos campos do cadastro não tenha sido preenchido, um alerta é emitido- "Preencha todos os campos obrigatórios!"</h4>

![Preencha os campos obrigatório-adm](https://user-images.githubusercontent.com/98750413/201092573-61e9e7af-56c0-445e-a62c-25b3c80cfd0b.png)

<h4>3- Quando desaparecido é cadastrado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido incluído com sucesso".</h4>

![Desaparecido incluído com sucesso-adm](https://user-images.githubusercontent.com/98750413/201093679-9284243c-2212-4758-9cc3-ecd60531abd0.png)

<h4>4- Ao clicar no botão de alerta, o administrador é direcionado para a página -Lista de Desaparecidos-adm- onde é possível visualizar o(s) desaparecido(s) cadastrados pelo administrador e pelos usuários com as devidas informações que foram inseridas. Na página -Lista de Desaparecidos-adm- o administrador tem as opções de Inserir-para cadastrar um novo desaparecido-, Editar-para editar um desaparecido- e Excluir-para excluir um desaparecido. </h4>


![Lista Desaparecidos, adm](https://user-images.githubusercontent.com/98750413/204158475-782a93cf-ac7c-4596-8d74-723d643453ac.png)
![Cadastrado no usuário](https://user-images.githubusercontent.com/98750413/201182944-d13da4c1-ed7a-44cf-aa4b-343c78b490f1.png)
![Cadastrado no usuário indo para a lista do adm](https://user-images.githubusercontent.com/98750413/204158726-d1a2702f-ae41-4b68-aa66-fabdcf7191d4.png)

<h4>5- Ao clicar em Inserir, na página-Lista de Desaparecidos-adm, o administrador é direcionado para a página-Cadastro de Desaparecidos-adm.</h4>

![Cadastro Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201091604-a4182cc3-2cc5-4853-89ee-f1db90a4147c.png)

<h4>6- Ao clicar em Editar, na página-Lista de Desaparecidos-adm-, o administrador é direcionado para a página-Editar Desaparecido-adm, onde é possível modificar qualquer campo do cadastro feito.</h4>

![Editar Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201095562-7a19db74-48cb-4234-afb0-3630673e70ba.png)


<h4>7- Quando desaparecido é editado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido editado com sucesso".</h4>

![Desaparecido editado com sucesso-adm!](https://user-images.githubusercontent.com/98750413/201096197-24712aba-618a-4b15-8af8-1c138452ef34.png)

<h4>8- Ao clicar em Excluir, na página-Lista de Desaparecidos-, o administrador é direcionado para a página-Excluir Desaparecido, onde é possível apenas excluir o cadastro, clicando no botão "Excluir".</h4>

![Excluir Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201124576-8d20bec8-6512-48ca-93b2-cf4464e8be39.png)

<h4>9- Ao clicar em Excluir, na página-Excluir Desaparecidos,adm-, um alerta é emitido, confirmando "Desaparecido excluído com sucesso".</h4>

![Desaparecido excluído com sucesso!](https://user-images.githubusercontent.com/98750413/201096737-15704763-5c84-4346-94cf-fd6ede44c290.png)

<h4>10- Ao clicar no botão de alerta, o administrador é direcionado para a página -Lista de Desaparecidos-adm- onde é possível confirmar que Desaparecido excluído não está mais listado.</h4> 

![Lista de Desaparecidos-adm vazia](https://user-images.githubusercontent.com/98750413/201127542-81117fcd-7160-444a-a45d-58025a6ad9b4.png)


<h1>Stephanye Castellano</h1>
RF referenciados: RF-05, RF-11, RF-12, RF-18 (esse o intuito era cadastrar noticias do desaparecidos, mas houve uma mudança e resolvemos deixar as atualizações no perfil do usuário e criar na home page as notícias sobre desaparecimentos)

Página de usuário desenvolvida:<br>
Home Page -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/home-page.html <br>
Notícia -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/noticia.html <br>
Perfil do Encontrado -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/perfil-encontrado.html <br>
Perfil do Desaparecido -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/perfil-desaparecido.html <br>
Encontrados -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/encontrados.html <br>
Desaparecidos -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/usuario/desaparecidos.html <br>


Páginas de administrador desenvolvidas:
Listar Notícias -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/lista-noticia.html <br>
Incluir Notícias -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/incluir-noticia.html <br>
Editar Notícias -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/editar-noticia.html <br>
Excluir Notícias -> https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/blob/main/src/paginas/admin/excluir-noticia.html <br>
<h3>1 - Tela de Home Page (usuário)</h3>
<h4> Tela principal do site <h4>
![image](https://user-images.githubusercontent.com/53917285/204163712-e9a17d91-dc3e-48d7-8023-cd78f1ce7d59.png)

<h3>2 - Tela de Notícia(usuário)</h3>
<h4> Tela individual da notícia<h4>
![image](https://user-images.githubusercontent.com/53917285/204163754-26e2d3a2-100a-4a98-8336-b5bd81cb3da1.png)

<h3>3 - Tela de Perfil Encontrado(usuário)</h3>
<h4> Tela perfil de encontrando para qualquer usuário<h4>
![image](https://user-images.githubusercontent.com/53917285/204163842-d6014542-b21e-4b16-823e-0cbac7f7c9c1.png)

<h3>4 - Tela de Perfil Desaparecido(usuário)</h3>
<h4> Tela perfil de desaparecido para qualquer usuário<h4>
![image](https://user-images.githubusercontent.com/53917285/204163878-1b4c672c-8edc-4e71-8dd0-84d5dd5be054.png)

<h3>5 - Tela de Encontrados(usuário)</h3>
<h4> Tela de listagem de encontrados para qualquer usuário<h4>
![image](https://user-images.githubusercontent.com/53917285/204164069-a047f9c4-55ec-4923-87d3-8162ae237bdd.png)
  
<h3>6 - Tela de Desaparecidos(usuário)</h3>
<h4> Tela de listagem de desaparecidos para qualquer usuário<h4>
![image](https://user-images.githubusercontent.com/53917285/204163942-51c598ff-b13b-47e9-92cb-883fadbaeaec.png)

<h3>7 - Listar Notícias (admin)</h3>
<h4>Visão administrador da listagem<h4>
![image](https://user-images.githubusercontent.com/53917285/204163212-187aed97-ddf0-4c90-83f3-877b125173ee.png)
  
<h3>8 - Incluir Notícias (admin)</h3>
<h4>Somente administrador poderá incluir notícias<h4>
![incluirNoticia] (https://user-images.githubusercontent.com/53917285/201239513-66b07c40-b403-4161-ae23-d927c5630ef5.png)
  
<h3>9 - Editar Notícias (admin)</h3>
<h4>Somente administrador poderá editar notícias<h4>
![editarNoticia] (https://user-images.githubusercontent.com/53917285/201239545-ab29c768-423f-4d12-9c20-3f73fd5283d4.png)

<h3>10 - Excluir Notícias (admin)</h3>
<h4>Somente administrador poderá excluir notícias<h4>
![excluirNoticia](https://user-images.githubusercontent.com/53917285/201239567-eb898dda-cca9-4cd8-ab1f-ddfdadc7863c.png)


  
> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
