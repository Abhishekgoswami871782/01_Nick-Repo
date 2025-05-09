# Projects related to Dom

## Project link
[click here]https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

#Solution code 

## Project 1

```javascript 
console.log("hitesh")```

const button = document.querySelectorAll('.button');
console.log(button);
const body = document.querySelector('body');
console.log(body);

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
