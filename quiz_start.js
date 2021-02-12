let username = document.getElementById('username');
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    sessionStorage.setItem('name', username.value);
    location.href = 'quiz.html'
});