function changeColor() {
  const firstTitle = document.querySelector('h1');

  const currentColor = window.getComputedStyle(firstTitle).color;
  const isRed = currentColor === 'rgb(255, 0, 0)';

  if (isRed) {
    firstTitle.style.color = 'white';
  } else {
    firstTitle.style.color = 'red';
  }
}

const firstButton = document.querySelector('button');
firstButton.addEventListener('click', changeColor);
