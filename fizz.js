const input = document.querySelector('#number');
const container = document.querySelector('#container');

input.focus()

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (input.value){
        let maxNum = input.value
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
        addButton()

        input.value = ''
        input.disabled = true;

        let button = document.querySelector('button')

        button.addEventListener('click', function (e) {
            clear()
        })
    }}
});

function addDiv(i) {
    let div = document.createElement('div')
    div.innerHTML  = `<i class="bi bi-arrow-right-short"></i>
    ${i}`;
    return container.appendChild(div).className = 'num'
}

function clear() {
    document.querySelectorAll('.num').forEach(e => e.remove());
    input.disabled = false;
    input.focus()
}

function addButton() {
    let createButton = document.createElement('button')
    createButton.setAttribute('class', 'num')
    createButton.innerText = 'Clear To Continue'
    container.appendChild(createButton)
}