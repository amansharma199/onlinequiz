let condidate_name = document.getElementById('name');
let final_score = document.getElementById('total_points');
let quiz_end_btn = document.getElementById('quiz_end');

quiz_end_btn.addEventListener('click', () => {
    location.href = 'index.html';
    sessionStorage.clear();
    console.log(clear);
})

let condidate_UpperCase_name = sessionStorage.getItem('name');
let final_name = condidate_UpperCase_name.toUpperCase();

condidate_name.innerHTML = `Hi ${final_name}`
final_score.innerText = `Your Total Score is ${sessionStorage.getItem('point')}`

