# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

<h1>Pedro Henrique da Silva Santos</h1>
Desenvolvi a página de LOGIN, com a possibilidade de CADASTRO na mesma, de acordo com os padrões que criamos para o nosso projeto nos quesitos visuais e funcionais. Fiz uma separação entre o Usuário Comum e o Administrador, logo o administrador terá suas próprias credenciais pré-definidas por nós para acessar toda a parte de administração da nossa aplicação. Foquei em fazer estas funcionalidades, pois o meu grupo vai precisar delas para desenvolver suas próprias funcionalidades na etapa seguinte, ou seja, precisavamos ter isso pronto para poder avançar. 

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
Desenvolvi as páginas de Cadastro de Desaparecidos, Editar Desaparecidos e Excluir Desaparecidos. As páginas desenvolvidas abordam os Requisitos Funcionais RF-01, RF-02, RF-11 e Não Funcionais RNF-01.
1-

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
