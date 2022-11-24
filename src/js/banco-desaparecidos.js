window.onload = (event) => {
    let db_desaparecidos = JSON.parse(localStorage.getItem('db_desaparecidos'));

    if (!db_desaparecidos || db_desaparecidos.length == 0) {
        db_desaparecidos = [
            {
                "id": 1,
                "nome": "Lucas Santos",
                "idade": 27,
                "sexo": "Masculino",
                "corRaca": "Pardo",
                "altura": 171,
                "cidade": "Juiz de Fora",
                "maisInformacoes": "Foi visto a última vez no dia 18/12/2018, indo para um bar, com calça jeans azul escura, camiseta preta",
                "foto": foto
            },
            {
                "id": 2,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 3,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 4,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 5,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 6,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 7,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 8,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            },
            {
                "id": 9,
                "nome": nome,
                "idade": idade,
                "sexo": sexo,
                "corRaca": corRaca,
                "altura": altura,
                "cidade": cidade,
                "maisInformacoes": maisInformacoes,
                "foto": foto
            }
        ]
        localStorage.setItem('db_desaparecidos', JSON.stringify(db_desaparecidos));
    }
}