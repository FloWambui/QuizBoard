function mySubmissionPage(){
    document.write("score");
    var score=0;
    var qstn1=document.quizzes.question1.value;
    var qstn2=document.quizzes.question2.value;
    var qstn3=document.quizzes.question3.value;
    var qstn4=document.quizzes.question4.value;
    var qstn5=document.quizzes.question5.value;
    var results=document.getElementsByName("myresults");


    if (qstn1=="Object-Based"){score++};
    if (qstn2=="Declaration Statements") {score++};
    if (qstn3=="Function/Method") {score++};
    if (qstn4=="True") {score++};
    if (qstn5=="Data") {score++};
        document.write(score);
}





// const questions = [
//     {
//         question: "What type of language is JavaScript?",
//         a: "Object-Oriented",
//         b: "Object-Based",
//         c: "Assembly-language",
//         d: "High-level",
//         correct: "b",
//     },
//     {
//         question: "The 'function' and 'var' are known as:",
//         a: "Keywords",
//         b: "Data Types",
//         c: "Declaration statements",
//         d: "Prototypes",
//         correct: "c",
//     },
//     {
//         question: "Which is the correct way of calling the JavaScript code?",
//         a: "Preprocessor",
//         b: "Triggering Event",
//         c: "Variable",
//         d: "Function/Method",
//         correct: "d",
//     },
//     {
//         question: "Is JavaScript a case sensitive language?",
//         a: "True",
//         b: "False",
//         correct: "a",
//     },
//     {
//         question: "Which is the following is not a JavaScript datatype?",
//         a: "Float",
//         b: "String",
//         c: "True",
//         d: "Boolean",
//         correct: "c",
//     },
// ];
// const quizbox= document.getElementById('quizbox')
// const answerE1s = document.querySelectorAll('.answer')
// const questionE1= document.getElementsByClassName('question')
// const a_answ= document.getElementById('a_answ')
// const b_answ= document.getElementById('b_answ')
// const c_answ= document.getElementById('c_answ')
// const d_answ= document.getElementById('d_answ')
// const answerBtn = document.getElementById('answer')

// let currentquizbox = 0
// let score = 0

// loadquizbox()

// function loadquizbox() {
//     deselectAnswers()
//     const currentquestions = questions[currentquizbox]
//     questionE1.innerText = currentquestions.question
//     a_answ.innerText =currentquestions.a
//     b_answ.innerText =currentquestions.b
//     c_answ.innerText =currentquestions.c
//     d_answ.innerText =currentquestions.d

// }

// function deselectAnswers() {
//     answerE1s.forEach(answerE1s => answerE1s.checked = false)
// }

// function getSelected() {
//     let answerE1s
//     answerE1s.forEach(answerE1s => {
//         if(answerE1s.checked) {
//             answer = answerE1s.id
//         }
//     })
//     return answer
// }
// answerBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//         if(answer === questions[currentquizbox].correct){
//             score++
//         }
//         currentquizbox++

//         if(currentquizbox < questions.length) {
//             loadquizbox()
//         } else {
//             quizbox.innerHTML =
        
//         }
//     }
// })