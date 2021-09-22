input = document.querySelector('#number');

input.addEventListener('keypress', function (e) {
      let maxNum = parseInt(input.value)
      if (e.key === 'Enter') {

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
    
    }}
});





function addDiv(i) {
    let div = document.createElement('div')
    div.innerText = `> ${i}`;
    return document.body.appendChild(div)
} 
