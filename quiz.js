window.onload = function(){
   show(0)
}


const questionArr =
    [
        {
            question: "1. What is the Full Form of CPU?",
            ans1: "Central Processing Unit",
            ans2: "Center Programing Unit",
            ans3: "Cetner Process Unit",
            ans4: "None of these",
            answer: "Central Processing Unit"
        }
        ,
        {
            question: "2.  What is the Full Form of RAM?",
            ans1: "Read Access Memory",
            ans2: "Random Actual Memory",
            ans3: "Random Access Memory",
            ans4: "None of these",
            answer: "Random Access Memory"
        }
        ,
        {
            question: "3.  What is the Full Form of OTP?",
            ans1: "On The Paper",
            ans2: "One Time Protect",
            ans3: "Official Time Place",
            ans4: "None of these",
            answer: "None of these"
        }
        ,
        {
            question: "4.  What is the Full Form of UPI?",
            ans1: "Unified Payment Interface",
            ans2: "Union Indentity of India",
            ans3: "Union Police of India",
            ans4: "None of these",
            answer: "Unified Payment Interface"
        }

    ]

//    console.log();

// Question array end    

// global variables 

let question = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');
let nextBtn = document.getElementById('nextBtn')
let point = 1;





// console.log(options);
ans1.addEventListener('click', () => {
    ans1.classList.add("clicked");
    ans2.classList.remove('clicked');
    ans3.classList.remove('clicked');
    ans4.classList.remove('clicked');
});

ans2.addEventListener('click', () => {
    ans2.classList.add("clicked");
    ans1.classList.remove('clicked');
    ans3.classList.remove('clicked');
    ans4.classList.remove('clicked');
    // console.log('clicked sucessfully..')
});

ans3.addEventListener('click', () => {
    ans3.classList.add("clicked");
    ans2.classList.remove('clicked');
    ans1.classList.remove('clicked');
    ans4.classList.remove('clicked');
    // console.log('clicked sucessfully..')
});

ans4.addEventListener('click', () => {
    ans4.classList.add("clicked");
    ans2.classList.remove('clicked');
    ans3.classList.remove('clicked');
    ans1.classList.remove('clicked');
    // console.log('clicked sucessfully..')
});

let count = 0;
nextBtn.addEventListener('click', nextQuestion);

function nextQuestion() {
    if(questionArr.length-1 == count){
        window.location.href = 'result.html'
    }

    if (ans1.classList.contains('clicked')) {
        if(ans1.innerText == questionArr[count].answer){
          console.log('Right Answer.');
            sessionStorage.setItem('point', point++);
        }
        else{
            console.log('wrong answer');
            null
        }    
    }

    else if (ans2.classList.contains('clicked')) {
        if(ans2.innerText == questionArr[count].answer){
            console.log('Right Answer.');
            sessionStorage.setItem('point', point++);
        }
        else{
            console.log('wrong answer');
            null
        }    
    }

    else if (ans3.classList.contains('clicked')) {
        if(ans3.innerText == questionArr[count].answer){
            console.log('Right Answer.');
            sessionStorage.setItem('point', point++);
        }
        else{
            console.log('wrong answer');
            null
        }    
    }

    else if (ans4.classList.contains('clicked')) {
        if(ans4.innerText == questionArr[count].answer){
            console.log('Right Answer.');
            sessionStorage.setItem('point', point++);
        }
        else{
            console.log('wrong answer');
            null
        }    
    }

    else{
        console.log('******');
        null
    }
    // clicked class cleared
    ans4.classList.remove("clicked");
    ans2.classList.remove('clicked');
    ans3.classList.remove('clicked');
    ans1.classList.remove('clicked');

    count++
    show(count)
}

function show(count){
    question.innerText = questionArr[count].question;
    ans1.innerText = questionArr[count].ans1;
    ans2.innerText = questionArr[count].ans2;
    ans3.innerText = questionArr[count].ans3;
    ans4.innerText = questionArr[count].ans4;
}


// quiz result js 

