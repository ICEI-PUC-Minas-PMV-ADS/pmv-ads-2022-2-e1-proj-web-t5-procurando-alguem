window.onload = (event) => {
    let db_noticias = JSON.parse(localStorage.getItem('db_noticias'));

    if (!db_noticias || db_noticias.length == 0) {
        db_noticias = [
            {
                "id": 1,
                "titulo": "Desaparecimentos de crianças e adolescentes ",
                "categoria": "Crianças e Adolescentes",
                "data": "2022-11-15",
                "texto": "Segundo a Organização das Nações Unidas (ONU), existem milhões de crianças e adolescentes desaparecidas e 46 milhões trabalhadores escravos no mundo (40% crianças e adolescentes). O índice de desaparecimento de crianças e adolescentes no mundo vem se elevando a uma taxa a 10% anualmente. No Brasil, são 250 mil pessoas desaparecidas. A cada 15 minutos uma criança ou adolescente desaparece, segundo dados da CPI da Câmara dos Deputados de 2010. <br><br> Quais as causas mais comuns para explicar o desaparecimento? <br> Conflitos familiares, uso de drogas ou álcool, maus tratos e abuso sexual, trabalho escravo, remoção de órgãos e adoção ilegal estão entre as principais causas de desaparecimento."
            },
            {
                "id": 2,
                "titulo": "Tráfico de Pessoas e o Desaparecimento Forçado de Meninas e Mulheres é tema de debate entre magistrados",
                "categoria": "Mulheres",
                "data": "2022-11-16",
                "texto": 'O Fórum Permanente de Violência Doméstica, Familiar e de Gênero do Tribunal de Justiça do Rio de Janeiro (TJRJ) promoveu na manhã desta sexta-feira (17/06) no auditório da Escola da Magistratura (Emerj), o  debate “O Desaparecimento Forçado de Meninas e Mulheres e a Relação com o Tráfico de Pessoas”<br> Participaram da mesa de abertura o desembargador Marcelo Castro Anátocles; a juízaauxiliar da Presidência do TJRJ, Adriana Ramos de Mello; a juíza auxiliar da Corregedoria Geral da Justiça (CGJ/RJ), Regina Lúcia Chuquer de Almeida Costa de Castro Lima; e, como palestrantes convidados, a desembargadora Lídia Maejima, do Tribunal de Justiça do Paraná (TJPR), e o juiz Rinaldo Aparecido Barros, do Tribunal de Justiça de Góias (TJGO). <br> A presidente do Fórum Permanente de Violência Doméstica, Familiar e de Gênero, juíza Adriana Ramos de Mello, abriu o encontro pontuando dados alarmantes em relação ao tráfico de pessoas no país, como este: a cada 11 minutos uma pessoa desaparece no Brasil. <br> “Grande parte dessas crianças, adolescentes e adultos desaparecidos são vítimas de tráfico internacional para exploração sexual, tráfico de órgãos e trabalho escravo. As autoridades públicas não têm um protocolo de atuação integrada para agir de forma eficaz. E ainda existe a necessidade da espera das 24 horas do desaparecimento para que a denúncia possa ser formalizada pelas delegacias,“ disse a juíza Adriana Ramos de Mello. <br> Uma das convidadas para o encontro, a desembargadora do TJPR, Lídia Maejima, apresentou o projeto de sua autoria, “Crianças e Adolescentes Protegidos“, vencedor do XII Prêmio Innovare. O projeto visa à identificação biométrica de todas as crianças e adolescentes do Estado do Paraná, inclusive nas maternidades, a partir do nascimento do bebê. “A identificação biométrica funciona como instrumento fundamental no combate ao desaparecimento de crianças, à prostituição infanto-juvenil, e ao tráfico internacional de pessoas”, disse a desembargadora, e explicou também: “Hoje muitas adolescentes apresentam carteiras de identidade falsas para serem aliciadas na prostituição. O policial ao se deparar com tal situação fará uso da máquina de scanner para identificação das digitais com a leitura biométrica, e terá condições de atestar a menoridade ou não da pessoa”.'
            },
            {
                "id": 3,
                "titulo": "Brasil registra média de 200 desaparecidos por dia, diz Anuário Brasileiro de Segurança Pública",
                "categoria": "Desaparecimentos por dia",
                "data": "2022-11-17",
                "texto": 'Em 2021 o Brasil registrou 65.225 pessoas desaparecidas, aumento de 3,2% em relação a 2020. Promotora afirma que a pandemia acentuou o problema de identificação de pacientes nos hospitais e muitos corpos foram incinerados por determinação de portaria. "Permitimos o desaparecimento eterno da pessoa", diz. <br> Lucineide Damasceno, 55 anos, mãe do menino que estampa a fotografia símbolo dos desaparecimentos na Zona Sul São Paulo, atende ao telefone do g1 dizendo que se esgotaram as possibilidades de encontrar seu filho, desaparecido há 13 anos e 8 meses. <br> Lucineide Damasceno, 55 anos, mãe do menino que estampa a fotografia símbolo dos desaparecimentos na Zona Sul São Paulo, atende ao telefone do g1 dizendo que se esgotaram as possibilidades de encontrar seu filho, desaparecido há 13 anos e 8 meses. <br> Por tantos anos nessa "função de investigadora de desaparecimentos", ela virou um norte para outras mães e familiares que querem saber como buscar seus parentes. São cerca de 18 mil registros de desaparecidos todos os anos só no estado de São Paulo. <br> No ano passado, o Brasil registrou 65.225 pessoas desaparecidas, aumento de 3,2% em relação a 2020, segundo dados do 16ª Anuário Brasileiro de Segurança Pública divulgados nesta terça-feira (28). A taxa é de 30,7 por 100 mil habitantes. Nos últimos cinco anos, ao menos 369.737 registros de pessoas desaparecidas foram feitos no Brasil, uma média de 203 casos diários. O Distrito Federal tem a maior taxa, o Amapá a menor, e Roraima não apresentou números.'
            }
        ]
        localStorage.setItem('db_noticias', JSON.stringify(db_noticias));
    }
}