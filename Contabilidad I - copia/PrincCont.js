(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)
    titleQuestions.forEach(question =>{
        let heigh = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('questions__padding--add');
        question.children[0].classList.toggle('questions__arrow--rotate');

        if(answer.clientHeight === 0){
            heigh = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
    });
})();