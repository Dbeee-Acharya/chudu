const landingYes = document.querySelector('.yes');
const landingNo = document.querySelector('.no');

const body = document.querySelector('.body');
const mainLandingSection = document.querySelector('.main-container');
const answerNoSection = document.querySelector('.answer-no');
const answerYesSection = document.querySelector('.answer-yes');

landingNo.addEventListener('click', ()=>{
    mainLandingSection.classList.toggle('active');
    body.classList.toggle('red');
    answerNoSection.classList.toggle('active');
})

landingYes.addEventListener('click', ()=>{
    mainLandingSection.classList.toggle('active');
    answerYesSection.classList.toggle('active');
})