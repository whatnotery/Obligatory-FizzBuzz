let input = document.querySelector('#number');
let container = document.querySelector('#container');
let button = document.querySelector('#button')



input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let maxNum = parseInt(input.value)
        for (i = 1; i <= maxNum; i++) {
            if (i % 15 === 0) {
                addDiv('fizzbuzz')
            } else if (i % 5 === 0) {
                addDiv('buzz')
            } else if (i % 3 === 0) {
                addDiv('fizz')
            } else {
                addDiv(i)
            }
        }
    }
});


button.addEventListener('click', function (e) {
    clear()
})


function addDiv(i) {
    let div = document.createElement('div')
    div.innerText = `> ${i}`;
    return container.appendChild(div).className = 'num'
}

function clear() {
    document.querySelectorAll('.num').forEach(e => e.remove());
}
