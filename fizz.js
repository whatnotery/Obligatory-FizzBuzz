const input = document.querySelector('#number');
const container = document.querySelector('ul');
const body = document.querySelector('body')
let prevRun = false

input.focus()

body.addEventListener('click', function () {
    input.focus()
})


input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (input.value && prevRun === false) {
            let maxNum = input.value
            fizzBuzz(maxNum)
            prevRun = true
            input.value = ''
        } else if (input.value && prevRun === true) {
            clear()
            let maxNum = input.value
            fizzBuzz(maxNum)
            input.value = ''
        }
    }
});

function addDiv(i) {
    let li = document.createElement('li')
    li.innerHTML = `${i}`;
    return container.appendChild(li).className = 'num'
}

function clear() {
    document.querySelectorAll('.num').forEach(e => e.remove());
    let prevRun = false
    input.focus()

}

function fizzBuzz(maxNum) {
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