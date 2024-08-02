# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click', function(event){
  console.log(event)
  console.log(event.target)
  if (event.target.id === 'grey'){
    body.style.backgroundColor = event.target.id;
  }
  if (event.target.id === 'white'){
    body.style.backgroundColor = event.target.id;
  }
  if(event.target.id === 'blue'){
    body.style.backgroundColor = event.target.id;
  }
  if(event.target.id === 'yellow'){
    body.style.backgroundColor = event.target.id;
  }
  if(event.target.id === 'purple'){
    body.style.backgroundColor = event.target.id;
  }
})
});

```


## project 2
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    let classification = '';
if (bmi < 18.6){
  classification = 'under weight';
} else if (bmi >=18.6 && bmi <=24.9){
  classification = ' Normal Range';
}else if (bmi >= 24.9 ){
  classification = 'Over Weight';
}
    results.innerHTML = `<span>${bmi} ,${classification}</span>`;
   // results.HTML =`<span>${bmi>18.6} under weight}</span>`;
    // if(results.innerHTML < 18.6){
    //   console.log('Under Weight');
    // }else if (results.innerHTML>18.6 && results<24.9){
    //   console.log('Normal Range');
    // }else(results.innerHTML >24.9),console.log('Over Weight');
  }
});
```