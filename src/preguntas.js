const preguntas = [
    {
        titulo: "¿Cuál es el lenguaje de programación más utilizado en el desarrollo web?",
        opciones: [
           
            { textoRespuesta: "Python", isCorrect: false },
            { textoRespuesta: "Java", isCorrect: false },
            { textoRespuesta: "C++", isCorrect: false },
            { textoRespuesta: "JavaScript", isCorrect: true },
        ]
    },
    {
        titulo: "¿Qué significa CSS?",
        opciones: [
            
            { textoRespuesta: "Creative Style Selector", isCorrect: false },
            { textoRespuesta: "Coding Style System", isCorrect: false },
            { textoRespuesta: "Computer Screen Saver", isCorrect: false },
            { textoRespuesta: "Cascading Style Sheets", isCorrect: true },
        ]
    },
    {
        titulo: "¿Cuál de los siguientes NO es un tipo de variable en JavaScript?",
        opciones: [
            { textoRespuesta: "Number", isCorrect: false },
            { textoRespuesta: "Boolean", isCorrect: false },
            { textoRespuesta: "String", isCorrect: false },
            { textoRespuesta: "Integer", isCorrect: true }
        ]
    },
    {
        titulo: "¿Qué significa HTML?",
        opciones: [
            { textoRespuesta: "Hyper Text Markup Language", isCorrect: true },
            { textoRespuesta: "Hyperlinks and Text Markup Language", isCorrect: false },
            { textoRespuesta: "Home Tool Markup Language", isCorrect: false },
            { textoRespuesta: "Hyperlinks and Text Management Language", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál de los siguientes no es un tipo de bucle en JavaScript?",
        opciones: [
            { textoRespuesta: "for", isCorrect: false },
            { textoRespuesta: "while", isCorrect: false },
            { textoRespuesta: "foreach", isCorrect: true },
            { textoRespuesta: "do...while", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es el método utilizado para detener la propagación de eventos en JavaScript?",
        opciones: [
           
            { textoRespuesta: "preventDefault()", isCorrect: false },
            { textoRespuesta: "stopPropagation()", isCorrect: true },
            { textoRespuesta: "haltPropagation()", isCorrect: false },
            { textoRespuesta: "cancelEvent()", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué hace el método Array.prototype.map() en JavaScript?",
        opciones: [
            { textoRespuesta: "Crea un nuevo array con los resultados de la llamada a una función proporcionada en cada elemento del array original.", isCorrect: true },
            { textoRespuesta: "Filtra los elementos de un array que cumplen con una condición dada.", isCorrect: false },
            { textoRespuesta: "Ordena los elementos de un array alfabéticamente.", isCorrect: false },
            { textoRespuesta: "Reduce los elementos de un array a un solo valor.", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué significa API en el contexto de desarrollo web?",
        opciones: [
            
            { textoRespuesta: "Advanced Programming Interface", isCorrect: false },
            { textoRespuesta: "Automated Programming Interface", isCorrect: false },
            { textoRespuesta: "Application Programming Interface", isCorrect: true },
            { textoRespuesta: "Abstract Programming Interface", isCorrect: false }
        ]
    }
];


export default preguntas;
