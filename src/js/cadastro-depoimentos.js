 // Declaração de um conjunto inicial de Depoimentos para exemplificação!
let db_depoimentos = JSON.parse(localStorage.getItem('db_depoimentos')); 
    
    if (!db_depoimentos || db_depoimentos.length == 0) {
        db_depoimentos = [   
        {
            "id": 1,
            "inputNome": "Pedro Silva",
            "inputDepoimento": "Eu sou um futuro programador!",
             
        },
        {
            "id": 2,
            "inputNome": "Daniel Rufino",
            "inputDepoimento": "Ano passado perdi um familiar, porém o encontrei aqui neste site!",
            
        },
        {
            "id": 3,
            "inputNome": "Stehphanye Castell",
            "inputDepoimento": "Essa plataforma me ajudou a encontrar um conhecido muito querido!",
           
        },
        {
            "id": 4,
            "inputNome": "Andrea Alves",
            "inputDepoimento": "Posso afirmar que esse site já ajudou muitas pessoas!",
            
        },
        {
            "id": 5,
            "inputNome": "José Durcival",
            "inputDepoimento": "Sinto orgulho dos alunos que fizeram este projeto!",
        }
        ]
        localStorage.setItem('db_depoimentos', JSON.stringify(db_depoimentos));
    }