
const json = {
    locale: "pt-br",
    title: 'PADRÕES DE FERRAMENTA AVALIATIVA DO CEO',
    showProgressBar: "bottom",
    pages: [
    {
        title: "Informações do profissional / da ESB/ESF",
        questions: [
            {
                name: "pergunta 1",
                type: "radiogroup",
                title: "Você atua em que tipo de Equipe de Saúde Bucal da Equipe de Saúde da Família (ESB/ESF)?",
                choices: [
                    "Modalidade 1 (Cirurgião-Dentista + Auxiliar de Saúde Bucal)", 
                    "Modalidade 2 (Cirurgião-Dentista + Técnico em Saúde Bucal + Auxiliar de Saúde Bucal)",
                ],
                isRequired: true,
                colCount: 0

            },
            {
                name: "pergunta 2",
                type: "radiogroup",
                title: "Você tem especialização em Atenção Primária em Saúde/Saúde da Família/Saúde Coletiva?",
                choices: [
                    "Sim", 
                    "Não",
                ],
                colCount: 0
            },
            {
                name: "pergunta 3",
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
                name: "pergunta 4",
                type: "text",
                inputType: "date",
                title: "Idade",
                isRequired: true,
                autoComplete: "bdate"
            },
        ]
    },
    {
        title: "Formação profissional",
        questions: [
            {
                name: "pergunta 5",
                type: "radiogroup",
                title: "Há plano de carreira para o Cirurgião-Dentista da ESB/ESF?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 6",
                type: "radiogroup",
                title: "O município promoveu ações de educação permanente nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 7",
                type: "rating",
                title: "As ações de educação permanente contemplam as demandas e necessidades da equipe?",
                mininumRateDescription: "Não se aplica",
                maximumRateDescription: "Contemplam muito",
                visibleIf: "{pergunta 6}='Sim'"
            },
            {
                name: "pergunta 8",
                type: "radiogroup",
                title: "A equipe profissional utilizou o Telessaúde (teleeducação) nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Estrutura do ambiente de trabalho – infraestrutura do consultório odontológico",
        questions:[
            {
                name: "pergunta 9",
                type: "radiogroup",
                type: "rating",
                title: "Como estão as condições físicas de trabalho: iluminação, ventilação (circulação de ar), conservação de pisos, paredes e teto, instalações elétricas, portas, janelas, vidros e extintor, de acordo com a regulamentação sanitária (instalações físicas, equipamentos e procedimentos) e ainda abastecimento de água, disposição dos resíduos líquidos e sólidos, etc.?",
                mininumRateDescription: "Muito bom (cumpre todas)",
                maximumRateDescription: "Muito ruim (não cumpre 4 ou mais)",
                isRequired: true,
                colCount: 0
                },
            
            {
                name: "pergunta 10",
                type: "radiogroup",
                title: "O consultório odontológico passou por serviços de manutenção das instalações físicas e dos equipamentos odontológicos de forma regular e sistemática nos últimos 6 meses?",
                choices: [
                    "Sim para serviços de instalações físicas", 
                    "Sim para equipamentos",
                    "Sim para ambos",
                    "Não"
                    ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Disponibilidade de insumos, instrumentais e equipamentos",
        questions: [
            {
                name: "pergunta 11",
                type: "radiogroup",
                title: "A ESB/ESF suspendeu algum atendimento por falta de insumos ou instrumentais nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 12",
                type: "radiogroup",
                title: "A ESB/ESF suspendeu algum atendimento por não ter equipamento(s) funcionando adequadamente nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 13",
                type: "radiogroup",
                title: "Houve disponibilidade de Equipamentos de Proteção Individual (EPI) de forma regular e suficiente nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Disponibilidade de recursos tecnológicos",
        questions: [
            {
                name: "pergunta 14",
                type: "radiogroup",
                title: "Há computador em condições de uso para os Dentistas?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 15",
                type: "radiogroup",
                title: "A unidade fornece acesso à internet?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 16",
                type: "radiogroup",
                title: "Existe prontuário eletrônico?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 17",
                type: "radiogroup",
                title: "O prontuário está integrado a rede de dados em saúde?",
                choices: [
                    "Sim", 
                    "Não",
                    "Não se aplica"
                ],
                visibleIf: "{pergunta 16}='Sim'",
                colCount: 0
            },
            {
                name: "pergunta 18",
                type: "radiogroup",
                title: "Você recebeu qualificação ou capacitação para utilização do prontuário eletrônico?",
                choices: [
                    "Sim", 
                    "Não",
                    "Não se aplica"
                ],
                visibleIf: "{pergunta 16}='Sim'",
                colCount: 0
            },
            {
                name: "pergunta 19",
                type: "radiogroup",
                title: "Há disponibilidade de material de educação em saúde para as ações individuais e coletivas?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Territorialização",
        questions: [
            {
                name: "pergunta 20",
                type: "radiogroup",
                title: "A ESB/ESF possui mapa atualizado do território?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 21",
                type: "radiogroup",
                title: "A ESB/ESF utilizou instrumentos de abordagem familiar (Genograma e Ecomapa) nos últimos 6 meses?",
                choices: [
                    "Sim, apenas genograma", 
                    "Sim, apenas ecomapa",
                    "Sim, ambos",
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 22",
                type: "radiogroup",
                title: "A ESB/ESF realizou ações articuladas com outros equipamentos sociais do território nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 23",
                type: "radiogroup",
                title: "A ESB/ESF realizou visita domiciliar de maneira sistemática, programada e oportuna nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 24",
                type: "radiogroup",
                title: "A ESB/ESF investigou o perfil epidemiológico de Saúde Bucal da população do território nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Organização da agenda e oferta de ações da equipe",
        questions: [
            {
                name: "pergunta 25",
                type: "radiogroup",
                title: "Qual é a principal forma de agendamento da primeira consulta odontológica?",
                choices: [
                    "Na recepção da UBS, junto com o agendamento para os demais profissionais", 
                    "No próprio consultório odontológico, pela ESB/ESF",
                    "Pelo Agente Comunitário de Saúde",
                    "Outros"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 26",
                type: "radiogroup",
                title: "A ESB/ESF participou do acolhimento nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 27",
                type: "radiogroup",
                title: "O acolhimento foi realizado em conjunto com a ESF?",
                choices: [
                    "Sim", 
                    "Não",
                    "Não se aplica"
                ],
                visibleIf: "{pergunta 26}='Sim'",
                colCount: 0
            },
            {
                name: "pergunta 28",
                type: "radiogroup",
                title: "A ESB/ESF realizou a coordenação de cuidados em Saúde Bucal aos grupos prioritários (usuários com doenças crônicas não transmissíveis, transtorno mental, deficiência, idosos, gestantes) nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 29",
                type: "radiogroup",
                title: "A ESB/ESF garantiu atendimento aos casos de urgências odontológicas nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 30",
                type: "radiogroup",
                title: "A ESB/ESF realizou discussão de casos e de projetos terapêuticos com a ESF nos últimos 6 meses?",
                choices: [
                    "Sim, apenas discussão de casos", 
                    "Sim, apenas projetos terapêuticos",
                    "Ambos",
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Apoio Matricial à ESB/ESF e relação da ESB/ESF com outros pontos da Rede de Atenção à Saúde",
        questions: [
            {
                name: "pergunta 31",
                type: "radiogroup",
                title: "A ESB/ESF recebeu apoio de outros núcleos profissionais para auxiliar na resolução de casos considerados complexos nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 32",
                type: "checkbox",
                title: "De quais núcleos profissionais?",
                choices: [
                    "Do CEO", 
                    "De especialistas em odontologia da rede (exceto CEO)",
                    "Do NASF",
                    "Do CAPS",
                    "Da vigilância de saúde em saúde",
                    "Outros",
                    "Não se aplica"
                ],
                visibleIf: "{pergunta 31}='Sim'",
                colCount: 2
            },
            {
                name: "pergunta 33",
                type: "radiogroup",
                title: "A ESB/ESF utilizou protocolos que orientassem o encaminhamento dos pacientes a outros níveis de atenção na rede de saúde nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 34",
                type: "radiogroup",
                title: "A ESB/ESF encaminhou os usuários para os especialistas com informações sobre o atendimento nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 35",
                type: "radiogroup",
                title: "A ESB/ESF obteve a contrarreferência dos especialistas para maioria dos usuários encaminhados com informações sobre o atendimento nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Planejamento, monitoramento e avaliação",
        questions: [
            {
                name: "pergunta 36",
                type: "radiogroup",
                title: "Foram desenvolvidas ações de planejamento nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 37",
                type: "radiogroup",
                title: "Com que frequência a ESB/ESF realizou ações de avaliação e/ou monitoramento das metas do cumprimento de indicadores, nos últimos 6 meses?",
                choices: [
                    "Mensal", 
                    "Bimestral",
                    "Trimestral",
                    "Outra",
                    "Não realizou"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 38",
                type: "radiogroup",
                title: "Os resultados do Monitoramento e Avaliação dos indicadores de produção da ESB/ESF são discutidos e considerados no planejamento?",
                choices: [
                    "Sempre", 
                    "Na maioria das vezes",
                    "Às vezes",
                    "Raramente",
                    "Nunca"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 39",
                type: "radiogroup",
                title: "Com que frequência a ESB/ESF realizou reuniões nos últimos 6 meses?",
                choices: [
                    "Mensal", 
                    "Bimestral",
                    "Trimestral",
                    "Outra",
                    "Não realizou"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
    },
    {
        title: "Participação e controle social",
        questions: [
            {
                name: "pergunta 40",
                type: "rating",
                title: "Classifique relevância deste serviço na rede Atenção em Saúde Bucal",
                mininumRateDescription: "Nenhuma relevância",
                maximumRateDescription: "Muito relevante",
                isRequired: true
            
            },
            {
                name: "pergunta 41",
                type: "radiogroup",
                title: "O ESB/ESF realizou ou teve mecanismo de avaliação de satisfação do usuário nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 42",
                type: "radiogroup",
                title: "A ESB/ESF disponibilizou canais de comunicação com os usuários de forma permanente nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
            {
                name: "pergunta 43",
                type: "radiogroup",
                title: "Foram disponibilizadas informações sobre o funcionamento da unidade de saúde e da ESB/ESF de maneira clara e acessível aos usuários nos últimos 6 meses?",
                choices: [
                    "Sim", 
                    "Não"
                ],
                isRequired: true,
                colCount: 0
            },
        ]
        }
        
    
        
    ]
    };
    
 
    
    export default json