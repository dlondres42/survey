const json = {
    locale: "pt-br",
    title: 'FICHA DE EXAME SB BRASIL',
    showProgressBar: "bottom",
    pages: [
        {
            title: 'Informações gerais',
            questions: [
                {
                    name: "pergunta intro 1",
                    type: "text",
                    title: "Nº Identificacão",
                    isRequired: "true"
                },
                {
                    name: "pergunta intro 2",
                    type: "dropdown",
                    title: "Estado",
                    isRequired: "true",
                    colCount: 0,
                    choices:[
                        "Acre (AC)",
                        "Alagoas (AL)",
                        "Amapá (AP)",
                        "Amazonas (AM)",
                        "Bahia (BA)",
                        "Ceará (CE)",
                        "Distrito Federal (DF)",
                        "Espírito Santo (ES)",
                        "Goiás (GO)",
                        "Maranhão (MA)",
                        "Mato Grosso (MT)",
                        "Mato Grosso do Sul (MS)",
                        "Minas Gerais (MG)",
                        "Pará (PA)",
                        "Paraíba (PB)",
                        "Paraná (PR)",
                        "Pernambuco (PE)",
                        "Piauí (PI)",
                        "Rio de Janeiro (RJ)",
                        "Rio Grande do Norte (RN)",
                        "Rio Grande do Sul (RS)",
                        "Rondônia (RO)",
                        "Roraima (RR)",
                        "Santa Catarina (SC)",
                        "São Paulo (SP)",
                        "Sergipe (SE)",
                        "Tocantins (TO)"
                    ]
                },
                {
                    name: "pergunta intro 3",
                    type: "text",
                    inputType: "date",
                    title: "Data do exame",
                    isRequired: true,
                },
                {
                    name: "pergunta intro 4",
                    type: "text",
                    title: "Idade do participante (apenas o número)",
                    inputType: "number",
                    isRequired: true,
                },
                {
                    name: "pergunta intro 5",
                    type: "radiogroup",
                    title: "Qual o seu sexo?",
                    choices: [
                        "Masculino", 
                        "Feminino",
                        "Não especificar"
                    ],
                    isRequired: true,
                    colCount: 0
                },
                {
                    name: "pergunta intro 6",
                    type: "radiogroup",
                    title: "Cor/Etnia",
                    choices: [
                        "Branca", 
                        "Preta",
                        "Amarela",
                        "Parda",
                        "Indígena",
                        "Não especificar"
                    ],
                    isRequired: true,
                    colCount: 0
                    },

            ]
        },
        {
            title: "Caracterização socioeconômica da família (responsável adulto do domicílio)",
            questions:[
                {
                    name: "pergunta 1",
                    type: "radiogroup",
                    title: "Algum moradortem alguma limitação nas funções mentais ou intelectuais, ou seja, tem dificuldade permanente para realizar atividades habituais, como se comunicar, realizar cuidados pessoais, trabalhar, ir à escola, brincar, etc? ", 
                    choices: [
                        "Sim",
                        "Não"
                    ],
                    colCount: 0
                },
                {
                    name: "pergunta 2",
                    type: "text",
                    title: "Quantas pessoas, incluindo o(a) sr.(a), residem nesta casa?",
                    inputType: "number",
                    isRequired: true

                },
                {
                    name: "pergunta 3",
                    type: "text",
                    title: "Quantos cômodos estão servindo permanentemente de dormitório para os moradores deste domicílio?",
                    inputType: "number",
                    isRequired: true

                },
                {
                    name: "pergunta 4",
                    type: "text",
                    title: "Quantos bens tem na sua casa? (Considerar como bens: televisão, geladeira, aparelho de som, micro-ondas, telefone fixo/celular, máquina de lavar roupa, computador, carros)",
                    inputType: "number",
                    isRequired: true

                },
                {
                    name: "pergunta 5",
                    type: "text",
                    title: "No mês passado, quanto receberam, em reais, juntas, todas as pessoas que moram na sua casa, incluindo salários, bolsa família, pensão, aluguel, soldo, aposendatoria ou outros rendimentos? (Registrar valor total em reais)",
                    inputType: "number",
                    isRequired: true

                },
                {
                    name: "pergunta 6",
                    type: "radiogroup",
                    title: "Algum orador tem acesso à internet no domicílio por meio de computador, tablet, telefone móvel celular, televisão, ou outro equipamento?", 
                    choices: [
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    colCount: 0,
                    isRequired: true
                },
                {
                    name: "pergunta 7",
                    type: "radiogroup",
                    title: "Algum morador neste domicílio, recebeu no último ano algum rendimento proveniente de Benefício Asisstencial de Programa Bolsa Família?", 
                    choices: [
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    colCount: 0,
                    isRequired: true
                },
                {
                    name: "pergunta 8",
                    type: "radiogroup",
                    title: "Algum morador neste domicílio, recebeu no último ano algum rendimento proveniente de Benefício Asisstencial de Prestação Continuada – BPC – LOAS?", 
                    choices: [
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    colCount: 0,
                    isRequired: true
                },
                {
                    name: "pergunta 9",
                    type: "radiogroup",
                    title: "Algum morador neste domicílio, recebeu no último ano algum rendimento proveniente de Benefício Asisstencial de outros programas sociais do governo?", 
                    choices: [
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    colCount: 0,
                    isRequired: true
                },
                {
                    name: "pergunta 10",
                    type: "radiogroup",
                    title: "A água utilizada neste domicílio chega:", 
                    choices: [
                        "Canalizada em pelo menos um cômodo",
                        "Canalizada só no terreno ou propriedade",
                        "Não canalizada",
                        "Não sei"
                    ],
                    colCount: 0,
                    isRequired: true
                },

            ]

        },
        {
            title: "Escolaridade do participante",
            questions:[
                {
                    name: "pergunta 11",
                    type: "radiogroup",
                    title: "Quem responde a entrevista?",
                    choices: [
                        "Participante na faixa etária de 15 a 75 anos",
                        "Mãe da criança de 5 a 12 anos",
                        "Pai da criança de 5 a 12 anos",
                        "Outro familiar responsável pela criança de 5 a 12 anos"
                    ],
                    isRequired: true

                },
                {
                    name: "pergunta 12.1",
                    title: "Sabe ler e escrever?",
                    type: "radiogroup",
                    visibleIf: "{pergunta 11}= 'Participante na faixa etária de 15 a 75 anos'",
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    isRequired: true

                },
                {
                    name: "pergunta 12.2",
                    title: "Pais ou responsáveis por crianças de 5 a 12 anos: a criança sabe ler e escrever?",
                    type: "radiogroup",
                    visibleIf: "{pergunta 11}= 'Mãe da criança de 5 a 12 anos' or {pergunta 11}= 'Pai da criança de 5 a 12 anos' or {pergunta 11}= 'Outro familiar responsável pela criança de 5 a 12 anos'",
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    isRequired: true

                },
                {
                    name: "pergunta 13",
                    type: "radiogroup",
                    title: "A criança frequenta a pré-escola, escola infantil, creche ou ensino fundamental?",
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei"
                    ],
                    visibleIf: "{pergunta intro 4}= 5"
                },

                {
                    name: "pergunta 14",
                    type: "radiogroup",
                    title: "Qual a escolaridade do participante?",
                    choices:[
                        "Não estudei na escola (zero anos de estudo)",
                        "Fiz curso de alfabetização de adultos",
                        "Ensino fundamental incompleto",
                        "Ensino fundamental completo",
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo",
                        "Não sei"
                    ],
                    isRequired: true
                },
                {
                    name: "pergunta 15",
                    type: "text",
                    inputType: "number",
                    title: "Quantos anos o participante estudou? (Considerando a série ou ano escolar concluído com aprovação. Não contar pré-escola, escola infantil ou creche)",
                    isRequired: true
                }

            ]
        },
        {
            title: "Escolaridade materna",
            visibleIf: "{pergunta intro 4}=5",
            questions: [
                {
                    name: "pergunta 16",
                    type: "radiogroup",
                    title: "Qual foi o curso, a série ou ano escolar mais elevado que a mãe da criança frequentou na escola sem reprovação?",
                    choices:[
                        "Não estudei na escola (zero anos de estudo)",
                        "Fiz curso de alfabetização de adultos",
                        "Ensino fundamental incompleto",
                        "Ensino fundamental completo",
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo",
                        "Não sei"
                    ],
                    isRequired: true
                },
                {
                    name: "pergunta 17",
                    type: "text",
                    inputType: "number",
                    title: "Quantos anos a mãe da criança estudou? ",
                    isRequired: true
                }
            ]
        },
        {
            title: "Morbidade bucal referida e acesso/uso de serviços de saúde bucal",
            questions:[
                {
                    name: "pergunta 18",
                    title: "Nos últimos 6 meses, o participante teve dor de dente?",
                    type: "radiogroup",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 19",
                    type: "rating",
                    title: "Indique o nível da dor",
                    minRateDescription: "Nenhuma dor",
                    maxRateDescription: "Dor muito forte",
                    isRequired: true
                    
                },
                {
                    name: "pergunta 20",
                    type: "radiogroup",
                    title: "No último ano, o participante ou responsável pelo participante procurou algum consultório odontológico, serviço de saúde bucal ou dentista/equipe de saúde bucal para ser atendido?",
                    isRequired: true,
                    choices:[
                        "Não procurei",
                        "Procurei e não fui atendido",
                        "Procurei e fui agendado para outro dia/outro local",
                        "Procurei e fui atendido",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 21",
                    type: "radiogroup",
                    title: "Qual o tipo de consultório odontológico, serviço de saúde bucal ou dentista/equipe de saúde bucal que o participante ou responsável pelo participante procurou?",
                    isRequired: true,
                    choices:[
                        "Não procurei",
                        "Serviço público",
                        "Serviço particular",
                        "Plano de saúde ou convênio",
                        "Outros",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 22",
                    type: "radiogroup",
                    title: "Quando o participante o consultou o dentista pela última vez?",
                    isRequired: true,
                    choices:[
                        "Nunca foi ao dentista",
                        "Até um ano",
                        "De 1 a 2 anos",
                        "De 2 a 3 anos",
                        "Mais de 3 anos",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 23",
                    type: "radiogroup",
                    title: "Onde foi a última consulta do participante com o dentista",
                    isRequired: true,
                    choices:[
                        "Nunca foi ao dentista",
                        "Serviço público",
                        "Serviço particular",
                        "Plano de saúde ou convênio",
                        "Outros",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 24",
                    type: "radiogroup",
                    title: "Qual o motivo da última consulta do participante a um dentista",
                    isRequired: true,
                    choices:[
                        "Nunca foi ao dentista",
                        "Limpeza, prevenção ou revisão",
                        "Dor de dente",
                        "Extração",
                        "Tratamento dentário (obturação, canal, etc);",
                        "Problema de gengiva",
                        "Tratamento de ferida na boca",
                        "Implante dentário",
                        "Colocação/manutenção de aparelho ortodôntico",
                        "Colocação/manutenção de protése ou dentadura",
                        "Outros",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 25",
                    type: "radiogroup",
                    title: "O que o participante ou responsável pelo participante achou do tratamentop na última consulta ao dentista?",
                    isRequired: true,
                    choices:[
                        "Nunca foi ao dentista",
                        "Muito bom",
                        "Bom",
                        "Regular",
                        "Ruim",
                        "Muito ruim",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 26",
                    type: "radiogroup",
                    title: "O participante tem algum plano odontológico particular, de empresa ou órgão público?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
            ]

        },
        {
            title: "Autopercepção em saúde bucal",
            questions: [
                {
                    // seguindo a lógica do .docx enviado, mudei o label para 'pergunta 29'
                    name: "pergunta 29",
                    type: "radiogroup",
                    title: "Como está a saúde bucal (dentes e gengivas) do participante?",
                    isRequired: true,
                    choices:[
                        "Muito boa",
                        "Boa",
                        "Regular",
                        "Ruim",
                        "Muito ruim",
                        "Não sei"
                    ]
            
                },
                {
                    name: "pergunta 30",
                    type: "radiogroup",
                    title: "O participante acha que necessita de tratamento dentário atualmente?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 31",
                    type: "radiogroup",
                    title: "Por qual motivo o participante acha que necessita de tratamento dentário atualmente?",
                    isRequired: true,
                    visibleIf: "{pergunta 30}= 'Sim'",
                    choices:[
                        "Revisão/Prevenção/Rotina/Limpeza",
                        "Sangramento na gengiva",
                        "Dor de dente",
                        "Dor na gengiva",
                        "Colocar aparelho ortodôntico",
                        "Necessidade de prótese (dentadura, coroa, ponte, implante)",
                        "Dor muscular ou próxima do ouvido",
                        "Fazer canal",
                        "Necessidade de fazer restaurações (obturações)",
                        "Mau hálito",
                        "Extrair dente",
                        "Clarear os dentes",
                        "Outros",
                        "Não sei"
                    ]
                },
                {
                    name: "pergunta 32",
                    type: "radiogroup",
                    title: "O participante acha que necessita usar prótese total (dentadura) ou trocar a que está usando atualmente?",
                    isRequired: true,
                    visibleIf: "{pergunta intro 4} >= 35",
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 33",
                    type: "radiogroup",
                    title: "O participante tem algum dente ou prótese com implante na boca?",
                    isRequired: true,
                    visibleIf: "{pergunta intro 4} >= 35",
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },


            ]
        },
        {
            title: "Impacto da saúde bucal nas atividades diárias (perguntas direcionadas para a criança)",
            visibleIf: "{pergunta intro 4}= 5",
            questions: [

                {
                    name: "pergunta 34",
                    type: "radiogroup",
                    title: "Alguma vez foi difícil você comer por causa dos seus dentes/dentinhos?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
                {
                    name: "pergunta 35",
                    type: "radiogroup",
                    title: "Alguma vez foi difícil para você beber por causa dos seus dentes/dentinhos?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
                {
                    name: "pergunta 36",
                    type: "radiogroup",
                    title: "Alguma vez foi difícil para você falar por causa dos seus dentes/dentinhos?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
                {
                    name: "pergunta 37",
                    type: "radiogroup",
                    title: "Alguma vez foi difícil para você brincar por causa dos seus dentes/dentinhos?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
                {
                    name: "pergunta 38",
                    type: "radiogroup",
                    title: "Alguma vez foi difícil para você dormir por causa dos seus dentes/dentinhos?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
                {
                    name: "pergunta 39",
                    type: "radiogroup",
                    title: "Alguma vez você deixou de sorrir porque não gostou dos seus dentes/dentinhos ou porque achou seus dentes/dentinhos feios?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
                {
                    name: "pergunta 40",
                    type: "radiogroup",
                    title: "Alguma vez você deixou de sorrir porque seus dentes/dentinhos estavam doendo?",
                    isRequired: true,
                    choices:[
                        "Não",
                        "Um pouco",
                        "Muito",
                    ]
                },
            ]
        },
        {
            title: "Impacto da saúde bucal nas atividades diárias (perguntas direcionadas para os responsáveis da criança)",
            visibleIf: "{pergunta intro 4}= 5",
            questions: [
                {
                    name: "pergunta 41",
                    type: "radiogroup",
                    title: "Alguma vez na vida, o(a) seu(sua) filho(a) teve dificuldades para comer por causa dos dentes dele(a)?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 42",
                    type: "radiogroup",
                    title: "Alguma vez na vida, o(a) seu(sua) filho(a) teve dificuldades para falar por causa dos dentes dele(a)?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 43",
                    type: "radiogroup",
                    title: "Alguma vez na vida, o(a) seu(sua) filho(a) teve dificuldades para brincar por causa dos dentes dele(a)?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 44",
                    type: "radiogroup",
                    title: "Alguma vez na vida, o(a) seu(sua) filho(a) teve dificuldades em dormir por causa dos dentes dele(a)?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 45",
                    type: "radiogroup",
                    title: "Alguma vez na vida, o(a) seu(sua) filho(a) deixou de sorrir por causa da aparência/estética dos dentes dele(a)?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 46",
                    type: "radiogroup",
                    title: "Alguma vez na vida, o(a) seu(sua) filho(a) deixou de sorrir por causa de buracos nos dentes, cárie ou dor-de-dente?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                {
                    name: "pergunta 47",
                    type: "radiogroup",
                    title: "Alguma vez na vida, a autoconfiança/autoestima do(a) seu(sua) filho(a) foi afetada por causa dos dentes dele(a)?",
                    isRequired: true,
                    choices:[
                        "De forma nenhuma",
                        "Um pouco",
                        "Mais ou menos",
                        "Bastante",
                        "Muita",
                        "Não sei"
                    ]

                },
                

            ]
        },
        {
            title: "Impacto da saúde bucal nas atividades diárias",
            visibleIf: "{pergunta intro 4} > 5",
            questions: [
                {
                    name: "pergunta 48",
                    type: "radiogroup",
                    title: "Teve dificuldade para comer a comida por causa dos dentes?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 49",
                    type: "radiogroup",
                    title: "Teve dificuldade para falar por causa dos dentes?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 50",
                    type: "radiogroup",
                    title: "Os seus dentes incomodaram ao escovar?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 51",
                    type: "radiogroup",
                    title: "Deixou de praticar esportes por causa dos seus dentes?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 52",
                    type: "radiogroup",
                    title: "Os seus dentes o deixaram nervoso(a) ou irritado(a)",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 53",
                    type: "radiogroup",
                    title: "Deixou de sair, se divertir, ir a festas, passeios por causa dos dentes?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 54",
                    type: "radiogroup",
                    title: "Os seus dentes o fizeram sentir vergonha de sorrir ou falar?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                               {
                    name: "pergunta 55",
                    type: "radiogroup",
                    title: "Os seus dentes atrapalharam para estudar/trabalhar ou fazer as tarefas da escola/trabalho",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },
                {
                    name: "pergunta 56",
                    type: "radiogroup",
                    title: "Deixou de dormir ou dormiu mal por causa dos seus dentes?",
                    isRequired: true,
                    choices:[
                        "Sim",
                        "Não",
                        "Não sei",
                    ]
                },

            ]
        }
        


    ]
}


 export default json