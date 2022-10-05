const question = document.getElementsByClassName('test-q').value;
console.log(question);
const answer = document.getElementsByClassName('test-a').value;
console.log(answer);

function click() {
    if ((answer/question)*100 < 50) {
        return alert('Fuera del nivel')
    }
    else if ((answer/question)*100 > 50 && (answer/question)*100 < 75) {
        return alert('Nivel regular')
    } else if ((answer/question)*100 > 75 && (answer/question)*100 < 90) {
        return alert('Nivel medio')
    } else if ((answer/question)*100 > 90 ) {
        return alert('Nivel superior')
    }
};
