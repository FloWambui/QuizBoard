function mySubmissionPage() {
    var score=0;
    var results=document.getElementById('results');
    var quizzes=document.getElementById('quizzes');
    if (document.getElementById('correct1').checked)
    {
        score+=20;
    }
    if (document.getElementById('correct2').checked)
    {
        score+=20;
    }
    if (document.getElementById('correct3').checked)
    {
        score+=20;
    }
    if (document.getElementById('correct4').checked)
    {
        score+=20;
    }
    if (document.getElementById('correct5').checked)
    {
        score+=20;
    }
    results.textContent='${score}';
    quizzes.style.display="none";
    document.write("Your score is:" +score);


    if(score==100){
        correct1.textContent="Your score is $(score). Excellent Perfomance!"
    } else{
        corr.textContent="Your score is $(score). Good, Keep Up"

    }


}