// const quizData = [
//     {
//     question: "Qual idioma é executado em um navegador da Web?",
//     a: "Java",
//     b: "C",
//     c: "Python",
//     d: "JavaScript",
//     correct: "d",
//     },
//     {
//     question: "O que significa CSS?",
//     a: "Central Style Sheets",
//     b: "Cascading Style Sheets",
//     c: "Cascading Simple Sheets",
//     d: "Cars SUVs Sailboats",
//     correct: "b",
//     },
//     {
//     question: "O que significa HTML?",
//     a: "Hypertext Markup Language",
//     b: "Hypertext Markdown Language",
//     c: "Hyperloop Machine Language",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "a",
//     },
//     {
//     question: "Qual definição de class abaixo está correta?",
//     a: "class Carro ({ });",
//     b: "public class Carro{ }",
//     c: "class Carro{ }",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     {
//     question: "Qual definição de array está incorreta?",
//     a: "var frutas = new Array('maça', 'uva');",
//     b: "var frutas = ['maça', 'uva'];",
//     c: "var frutas = (array)list('maça', 'uva');",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     {
//     question: "Em que ano o JavaScript foi lançado?",
//     a: "1996",
//     b: "1995",
//     c: "1994",
//     d: "nenhuma das acima",
//     correct: "b",
//     },
//     {
//     question: "Usamos try/catch para:",
//     a: "Tratar instruções que possam gerar erros, e assim, lançar exceções.",
//     b: "Podemos usar essa estrutura quando queremos acessar elementos nativos do navegador.",
//     c: "Funciona como o if/else, verifica se uma operação foi executada.",
//     d: "nenhuma das acima",
//     correct: "a",
//     },
//     {
//     question: "Para utilizar um 'debugador' disponível no browser, usamos:",
//     a: "debug;",
//     b: "debugger; ",
//     c: "pause break;",
//     d: "nenhuma das acima",
//     correct: "a",
//     },
//     {
//     question: "Qual objeto literal abaixo está correto?",
//     a: "var obj = { nome : 'meu nome'}  ",
//     b: "var obj = { nome = 'meu nome'}",
//     c: "var obj = nome => 'Meu nome'",
//     d: "nenhuma das acima",
//     correct: "a",
//     },
//     {
//     question: "Para obtermos o valor de um atributo de um elemento, usamos:",
//     a: "element.getAttribute('atributo');",
//     b: "getAttribute(element, 'atributo');",
//     c: "element.get('atributo'); ",
//     d: "nenhuma das acima",
//     correct: "b",
//     },
//     {
//     question: "Para executarmos uma operação a cada 1 segundo, podemos usar:",
//     a: "function() : 100 {/*Minha operação */}",
//     b: "setInterval(() => { /*Minhaoperação*/ }, 1000);",
//     c: "sleep(1000, ()=>{/* Minha operação */})",
//     d: "nenhuma das acima",
//     correct: "b",
//     },
//     {
//     question: "Para finalizar o loop atual e prosseguir para a próxima iteração, usamos:",
//     a: "break;",
//     b: "exit;",
//     c: "continue;",
//     d: "nenhuma das acima",
//     correct: "a",
//     },
//     {
//     question: "Qual dos códigos a baixos foram introduzidos no Ecma 6?",
//     a: "function(){}",
//     b: "var",
//     c: "let",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     {
//     question: "O valor de uma constante pode ser mudado após a sua declaração?",
//     a: "Sim, uma constante pode ter seu valor mutável.",
//     b: "Não, uma vez declarado o valor não pode ser modificado.",
//     c: "Sim, desde que a constante não tenha sido utilizada.",
//     d: "nenhuma das acima",
//     correct: "b",
//     },
//     {
//     question: "A função getElementsByClassName(), retorna que tipo de conteúdo?",
//     a: "Retorna um array de elementos que contém a classe informada no atributo class.",
//     b: "Retorna um JSON contendo as informações dos elementos.",
//     c: "Retorna um único elemento.",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     {
//     question: "Para exportar uma classe, usamos:",
//     a: "class ClassName : exports {...}",
//     b: "exports class className : default {}",
//     c: "export class ClassName {...}",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     {
//     question: "Para requisitar uma informação usando o protocolo GET, podemos usar:",
//     a: "request_uri('url');",
//     b: "get('url');",
//     c: "fetch('url')",
//     d: "nenhuma das acima",
//     correct: "b",
//     },
//     {
//     question: "Qual definição de função abaixo é inválida?",
//     a: "function minhaFuncao(){}",
//     b: "() => {}",
//     c: "void minhaFuncao(){}",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     {
//     question: "Para acessarmos um elemento através de seu ID, usamos:",
//     a: "document.getelementbyid ('id_do_elemento');",
//     b: "getElementbyid ('id_do_elemento');",
//     c: "document.getElementById ('id_do_elemento');",
//     d: "nenhuma das acima",
//     correct: "c",
//     },
//     ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>Você respondeu ${score}/${quizData.length} perguntas corretamente</h2>
    <button onclick="history.go(0)">Jogar de novo</button>
    ` // location.reload() won't work in CodePen for security reasons;
    }
    }
    });