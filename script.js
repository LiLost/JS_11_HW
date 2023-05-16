const inputs = document.querySelectorAll('.form-input');
const form = document.querySelector('form');
console.log(inputs);

form.addEventListener('input', (event) => {
  inputs.forEach((el) => {
    if(inputs[1].value === inputs[2].value) {
        inputs[1].style.borderColor = 'green';
        inputs[1].style.borderWidth = '2px';
        inputs[2].style.borderColor = 'green';
        inputs[2].style.borderWidth = '2px';
        event.preventDefault();
    }
    else {
        inputs[1].style.borderColor = 'red';
        inputs[1].style.borderWidth = '2px';
        inputs[2].style.borderColor = 'red';
        inputs[2].style.borderWidth = '2px';
    }
  })
})
