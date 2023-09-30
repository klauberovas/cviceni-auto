const carElm = document.querySelector('.car');
let position = 0;

document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowRight') {
    position += 1;
    carElm.style.marginLeft = `${position}rem`;
  } else if (event.code === 'ArrowLeft') {
    position -= 1;
    carElm.style.marginLeft = `${position}rem`;
  }
});
