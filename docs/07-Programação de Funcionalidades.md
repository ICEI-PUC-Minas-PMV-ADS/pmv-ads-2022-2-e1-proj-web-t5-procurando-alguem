# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

<h1>Pedro Henrique da Silva Santos</h1>
Desenvolvi a página de LOGIN, com a possibilidade de CADASTRO na mesma, de acordo com os padrões que criamos para o nosso projeto nos quesitos visuais e funcionais. Fiz uma separação entre o Usuário Comum e o Administrador, logo o administrador terá suas próprias credenciais pré-definidas por nós para acessar toda a parte de administração da nossa aplicação. Foquei em fazer estas funcionalidades, pois o meu grupo vai precisar delas para desenvolver suas próprias funcionalidades na etapa seguinte, ou seja, precisavamos ter isso pronto para poder avançar. 

<h3>Os requisitos atendidos por essas funcionalidades que eu desenvolvi são: RF-20 e RNF-12.</h3>

1 - Tela de Login padrão sem o overlay de cadastro, bastando inserir suas credencias caso já seja cadastrado.
![Tela de Login (Sem Modal Cadastro)](https://user-images.githubusercontent.com/112659128/200725925-4c739b9e-1467-4037-ad3d-4d872221149a.PNG)

2 - Tela de Login padrão, porém com o overlay de cadastro aparante, possibilitando que o novo usuário se cadastre ao clicar no botão "Cadastro de Novo Usuário". OBS: o overlay de cadastro (MODAL) só aparece depois que usuário clicar em "Cadastro de Novo Usuário".
![Tela de Login (Com Modal Cadastro)](https://user-images.githubusercontent.com/112659128/200725936-ec51fb78-2945-421a-a3e1-97a7330fcda3.PNG)

3 - Página de acesso exclusivo do administrador, para gerenciar e visualizar todos os usuários cadastrados.
![Página de Administrador onde ficam listados todos os cadastros de usuários](https://user-images.githubusercontent.com/112659128/200725983-97035160-c6d9-4832-9d52-82643438f773.PNG)

4 - O próprio sistema verifica se a pessoa fazendo login é apenas um usuário comum ou se é um administrador. Caso seja um usuário comum, ao fazer login a aplicatação emitira um alerta "Login Efetuado com Sucesso!" e proseguirá para a HomePage ou para a página de Cadastro de Desaparecidos.
![Validação de Usuário](https://user-images.githubusercontent.com/112659128/200726016-1339222f-b557-4b02-89c9-78d6dfc5101c.PNG)

5 - Já no caso do sistema detectar credenciais de administrador, ao clicar no botão LOGIN, o usuário será redirecionado para as páginas exclusivas de administração.
![Validação de Administrador](https://user-images.githubusercontent.com/112659128/200726033-a55c3d6b-8f73-45f5-a532-87278ef5204d.PNG)

6 - Caso o Usuário e a Senha inseridos no card de login forem inválidos, tanto para usuários comuns, quanto para administradores, o sistema emetirá um alerta de credenciais inválidas.
![Validação de Credenciais](https://user-images.githubusercontent.com/112659128/200728936-819daac4-0e9c-4324-826d-1ba04edbde77.PNG)

7 - Já no caso de novos usuários, basta clicar no botão "Cadastro de Novo Usuário", preencher as informações solicitadas e enviar o formulário clicando no botão "Enviar Cadastro". O sistema vai ler as inforações inseridas e verificar se a Senha e a Senha de Confirmação são iguais. Caso sejam, um alerta será emitido e o cadastro estará concluído, caso não sejam o sistema emetirá um alerta informando que as senhas são inválidas.
![Validação de Cadastro](https://user-images.githubusercontent.com/112659128/200729566-5bd76d00-23ef-41eb-ae8a-8e9ed55bb86a.PNG)


<h1>Daniel Mendes Rufino Silva</h1>
Desenvolvi as páginas de Cadastro de Desaparecidos, Editar Desaparecidos e Excluir Desaparecidos. As páginas desenvolvidas abordam os Requisitos Funcionais RF-01, RF-02, RF-11 e Não Funcionais RNF-01 e RNF-04

<h3>Páginas Usuários</h3>
1- Página de Cadastro de Desaparecidos, onde é possível cadastrar uma pessoa desaparecida. Além disso, é possível acessar outras páginas do site por meio dos botões disponíveis.
![Cadastro Desaparecidos](https://user-images.githubusercontent.com/98750413/200814117-c90653c0-307d-4bbc-a8eb-f065ca596a95.png)

2- Caso algum dos campos do cadastro não tenha sido preenchido, um alerta é emitido- "Preencha todos os campos obrigatórios!"
![Preencha todos os campos obrigatórios!](https://user-images.githubusercontent.com/98750413/200843538-7391ffd1-b804-4cf3-91da-be9186fe6f6a.jpeg)

3- Quando desaparecido é cadastrado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido incluído com sucesso".
![Desaparecido incluído com sucesso](https://user-images.githubusercontent.com/98750413/200842602-4bbbe8cd-3ba7-4345-8ed5-2852d38ac334.jpeg)

4- Ao clicar no botão de alerta, usuário é direcionado para a página -Lista de Desaparecidos- onde é possível visualizar o(s) desaparecido(s) cadastrados pelo úsuário com as devidas informações que foram inseridas. Na página -Lista de Desaparecidos- o usuário tem as opções de Inserir-para cadastrar um novo desaparecido-, Editar-para editar um desaparecido- e Excluir-para excluir um desaparecido. 
![Lista Desaparecidos](https://user-images.githubusercontent.com/98750413/200847578-217866aa-a4bd-4700-a1fa-0511e7912d5b.png)

5- Ao clicar em Inserir, na página-Lista de Desaparecidos, o usuário é direcionado para a página-Cadastro de Desaparecidos.
![Cadastro Desaparecidos](https://user-images.githubusercontent.com/98750413/200814117-c90653c0-307d-4bbc-a8eb-f065ca596a95.png)

6- Ao clicar em Editar, na página-Lista de Desaparecidos-, o usuário é direcionado para a página-Editar Desaparecido, onde é possível modificar qualquer campo do cadastro feito.
![Editar Desaparecido](https://user-images.githubusercontent.com/98750413/200850356-9005f509-2447-4608-93bf-608571f25211.png)

7- Quando desaparecido é editado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido editado com sucesso".
![Desaparecido editado com sucesso!](https://user-images.githubusercontent.com/98750413/200852305-3b7c0381-5dc3-48f4-9823-9adf9511dfcc.jpeg)

8- Ao clicar em Excluir, na página-Lista de Desaparecidos-, o usuário é direcionado para a página-Excluir Desaparecido, onde é possível apenas excluir o cadastro, clicando no botão "Excluir".
![Excluir Desaparecido](https://user-images.githubusercontent.com/98750413/200853143-bf5e4de7-55de-4daa-9ba0-32cb346ebffe.png)

9- Ao clicar em Excluir, na página-Excluir Desaparecidos-, um alerta é emitido, confirmando "Desaparecido excluído com sucesso".
![Desaparecido excluído com sucesso!](https://user-images.githubusercontent.com/98750413/200854170-e196aa9f-c285-4ccd-9928-0218bcdeebbd.jpeg)

10- 

<h3>Páginas Administradores</h3>
1- Página de Cadastro de Desaparecidos-adm, onde é possível cadastrar uma pessoa desaparecida. Além disso, é possível acessar outras páginas do site por meio dos botões disponíveis.
![Cadastro Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201091604-a4182cc3-2cc5-4853-89ee-f1db90a4147c.png)

2- Caso algum dos campos do cadastro não tenha sido preenchido, um alerta é emitido- "Preencha todos os campos obrigatórios!"
![Preencha os campos obrigatório-adm](https://user-images.githubusercontent.com/98750413/201092573-61e9e7af-56c0-445e-a62c-25b3c80cfd0b.png)

3- Quando desaparecido é cadastrado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido incluído com sucesso".
![Desaparecido incluído com sucesso-adm](https://user-images.githubusercontent.com/98750413/201093679-9284243c-2212-4758-9cc3-ecd60531abd0.png)

4- Ao clicar no botão de alerta, usuário é direcionado para a página -Lista de Desaparecidos-adm- onde é possível visualizar o(s) desaparecido(s) cadastrados pelo úsuário com as devidas informações que foram inseridas. Na página -Lista de Desaparecidos-adm- o usuário tem as opções de Inserir-para cadastrar um novo desaparecido-, Editar-para editar um desaparecido- e Excluir-para excluir um desaparecido. 
![Lista Desaparecidos-adm](https://user-images.githubusercontent.com/98750413/201094242-793d5311-35bf-47eb-ba98-e3027bbf7dfc.png)

5- Ao clicar em Inserir, na página-Lista de Desaparecidos-adm, o usuário é direcionado para a página-Cadastro de Desaparecidos-adm.
![Cadastro Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201091604-a4182cc3-2cc5-4853-89ee-f1db90a4147c.png)

6- Ao clicar em Editar, na página-Lista de Desaparecidos-adm-, o usuário é direcionado para a página-Editar Desaparecido-adm, onde é possível modificar qualquer campo do cadastro feito.
![Editar Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201095562-7a19db74-48cb-4234-afb0-3630673e70ba.png)

7- Quando desaparecido é editado e botão Enviar Cadastro é acionado, um alerta é emitido, confirmando "Desaparecido editado com sucesso".
![Desaparecido editado com sucesso-adm!](https://user-images.githubusercontent.com/98750413/201096197-24712aba-618a-4b15-8af8-1c138452ef34.png)

8- Ao clicar em Excluir, na página-Lista de Desaparecidos-, o usuário é direcionado para a página-Excluir Desaparecido, onde é possível apenas excluir o cadastro, clicando no botão "Excluir".
![Excluir Desaparecido-adm](https://user-images.githubusercontent.com/98750413/201105948-e378c4cf-1476-4770-9c38-473c46c10ebb.png)

9- Ao clicar em Excluir, na página-Excluir Desaparecidos-, um alerta é emitido, confirmando "Desaparecido excluído com sucesso".
![Desaparecido excluído com sucesso!](https://user-images.githubusercontent.com/98750413/201096737-15704763-5c84-4346-94cf-fd6ede44c290.png)














> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
