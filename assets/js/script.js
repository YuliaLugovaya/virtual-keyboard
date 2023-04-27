// массивы символов
const rowFirst = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowSecond = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const rowThird = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const rowFourth = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const rowFifth = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◀', '▼', '▶', 'Ctrl'];

// ссылка на body
let body = document.querySelector('body');

// создание элементов
let wrapper = document.createElement('div');
let title = document.createElement('h1');
let textarea = document.createElement('textarea');
let container = document.createElement('div');
let textFirst = document.createElement('p');
let textSecond = document.createElement('p');
let rowFirstContainer = document.createElement('div');
let rowSecondContainer = document.createElement('div');
let rowThirdContainer = document.createElement('div');
let rowFourthContainer = document.createElement('div');
let rowFifthContainer = document.createElement('div');

// присвоение классов
wrapper.className = 'wrapper';
title.className = 'title';
textarea.className = 'textarea';
container.className = 'container';
textFirst.className = 'text text-first';
textSecond.className = 'text text-second';
rowFirstContainer.className = 'row row-first';
rowSecondContainer.className = 'row row-second';
rowThirdContainer.className = 'row row-third';
rowFourthContainer.className = 'row row-fourth';
rowFifthContainer.className = 'row row-fifth';

// наследование
body.appendChild(wrapper);
wrapper.appendChild(title);
wrapper.appendChild(textarea);
wrapper.appendChild(container);
wrapper.appendChild(textFirst);
wrapper.appendChild(textSecond);
container.appendChild(rowFirstContainer);
container.appendChild(rowSecondContainer);
container.appendChild(rowThirdContainer);
container.appendChild(rowFourthContainer);
container.appendChild(rowFifthContainer);

// заголовок и текст
title.innerText = 'Virtual Keyboard';
textFirst.innerText = 'Клавиатура создана в операционной системе Windows';
textSecond.innerText = 'Комбинация для переключения языка: левые alt + shift';

// отрисовка кнопок в клавиатуру
// первый ряд
function initRowFirst() {
  for (let i = 0; i < rowFirst.length; i++) {
    let button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFirst[i];
    if(rowFirst[i] === 'Backspace') {
      button.className = 'button backspace';
    }
    rowFirstContainer.appendChild(button);
  }
  return rowFirstContainer;
}
initRowFirst();

// второй ряд
function initRowSecond() {
  for (let i = 0; i < rowSecond.length; i++) {
    let button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowSecond[i];
    if(rowSecond[i] === 'Tab') {
      button.className = 'button tab';
    }
    if(rowSecond[i] === 'Del') {
      button.className = 'button delete';
    }
    rowSecondContainer.appendChild(button);
  }
  return rowSecondContainer;
}
initRowSecond();

// третий ряд
function initRowThird() {
  for (let i = 0; i < rowThird.length; i++) {
    let button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowThird[i];
    if(rowThird[i] === 'CapsLock') {
      button.className = 'button capslock';
    }
    if(rowThird[i] === 'Enter') {
      button.className = 'button enter';
    }
    rowThirdContainer.appendChild(button);
  }
  return rowThirdContainer;
}
initRowThird();

// четвертый ряд
function initRowFourth() {
  for (let i = 0; i < rowFourth.length; i++) {
    let button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFourth[i];
    if(rowFourth[i] === 'Shift' && i === 0) {
      button.className = 'button shift-left';
    }
    if(rowFourth[i] === 'Shift' && i === rowFourth.length - 1) {
      button.className = 'button shift-right';
    }
    if(rowFourth[i] === '▲') {
      button.className = 'button top';
    }
    rowFourthContainer.appendChild(button);
  }
  return rowFourthContainer;
}
initRowFourth();


// пятый ряд
function initRowFifth() {
  for (let i = 0; i < rowFifth.length; i++) {
    let button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFifth[i];
    if(rowFifth[i] === 'Ctrl' && i === 0) {
      button.className = 'button ctrl-left';
    }
    if(rowFifth[i] === 'Ctrl' && rowFifth.length - 1) {
      button.className = 'button ctrl-right';
    }
    if(rowFifth[i] === 'Alt' && i === 2) {
      button.className = 'button alt-left';
    }
    if(rowFifth[i] === 'Alt' && i === 4) {
      button.className = 'button alt-right';
    }
    if(rowFifth[i] === 'Win') {
      button.className = 'button win';
    }
    if(rowFifth[i] === '◀') {
      button.className = 'button left';
    }
    if(rowFifth[i] === '▼') {
      button.className = 'button bottom';
    }
    if(rowFifth[i] === '▶') {
      button.className = 'button right';
    }
    if(rowFifth[i] === '') {
      button.className = 'button space';
    }
    rowFifthContainer.appendChild(button);
  }
  return rowFifthContainer;
}
initRowFifth();