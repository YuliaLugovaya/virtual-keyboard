/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// массивы символов
const rowFirst = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowSecond = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const rowThird = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const rowFourth = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const rowFifth = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◀', '▼', '▶', 'Ctrl'];

const rowFirstRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowSecondRus = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
const rowThirdRus = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const rowFourthRus = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'];

// ссылка на body
const body = document.querySelector('body');

// создание элементов
const wrapper = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const container = document.createElement('div');
const textFirst = document.createElement('p');
const textSecond = document.createElement('p');
const rowFirstContainer = document.createElement('div');
const rowSecondContainer = document.createElement('div');
const rowThirdContainer = document.createElement('div');
const rowFourthContainer = document.createElement('div');
const rowFifthContainer = document.createElement('div');

// присвоение классов
wrapper.className = 'wrapper';
title.className = 'title';
textarea.className = 'textarea';
container.className = 'container en';
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

// фокус в текстовом поле при нажатии на любую клавишу
window.addEventListener('keydown', () => {
  textarea.focus();
});

// отрисовка кнопок в клавиатуру
// первый ряд
function initRowFirst() {
  for (let i = 0; i < rowFirst.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFirst[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowFirst[i] === 'Backspace') {
      button.className = 'button backspace';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowFirstContainer.appendChild(button);
  }
  return rowFirstContainer;
}
initRowFirst();

function initRowFirstRus() {
  for (let i = 0; i < rowFirstRus.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFirstRus[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowFirstRus[i] === 'Backspace') {
      button.className = 'button backspace';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowFirstContainer.appendChild(button);
  }
  return rowFirstContainer;
}

// второй ряд
function initRowSecond() {
  for (let i = 0; i < rowSecond.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowSecond[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowSecond[i] === 'Tab') {
      button.className = 'button tab';
    }
    if (rowSecond[i] === 'Del') {
      button.className = 'button delete';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    button.addEventListener('click', (e) => {
      textarea.innerText = e.code;
    });
    rowSecondContainer.appendChild(button);
  }
  return rowSecondContainer;
}
initRowSecond();

function initRowSecondRus() {
  for (let i = 0; i < rowSecondRus.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowSecondRus[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowSecondRus[i] === 'Tab') {
      button.className = 'button tab';
    }
    if (rowSecondRus[i] === 'Del') {
      button.className = 'button delete';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowSecondContainer.appendChild(button);
  }
  return rowSecondContainer;
}

// третий ряд
function initRowThird() {
  for (let i = 0; i < rowThird.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowThird[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowThird[i] === 'CapsLock') {
      button.className = 'button capslock';
    }
    if (rowThird[i] === 'Enter') {
      button.className = 'button enter';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        if (e.key === 'CapsLock') {
          button.classList.toggle('active');
          container.classList.toggle('uppercase');
        } else {
          button.classList.add('active');
        }
      }
    });
    window.addEventListener('keyup', (e) => {
      if ((e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) && e.key !== 'CapsLock') {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowThirdContainer.appendChild(button);
  }
  return rowThirdContainer;
}
initRowThird();

function initRowThirdRus() {
  for (let i = 0; i < rowThird.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowThirdRus[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowThirdRus[i] === 'CapsLock') {
      button.className = 'button capslock';
    }
    if (rowThirdRus[i] === 'Enter') {
      button.className = 'button enter';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        if (e.key === 'CapsLock') {
          button.classList.toggle('active');
        } else {
          button.classList.add('active');
        }
      }
    });
    window.addEventListener('keyup', (e) => {
      if ((e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) && e.key !== 'CapsLock') {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    // button.addEventListener('click', function() {
    //   if(button.classList.contains('capslock')) {
    //     button.classList.add('active');
    //   }
    // })
    rowThirdContainer.appendChild(button);
  }
  return rowThirdContainer;
}

// четвертый ряд
function initRowFourth() {
  for (let i = 0; i < rowFourth.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFourth[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowFourth[i] === 'Shift' && i === 0) {
      button.className = 'button shift-left';
    }
    if (rowFourth[i] === 'Shift' && i === rowFourth.length - 1) {
      button.className = 'button shift-right';
    }
    if (rowFourth[i] === '▲') {
      button.className = 'button top';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowFourthContainer.appendChild(button);
  }
  return rowFourthContainer;
}
initRowFourth();

function initRowFourthRus() {
  for (let i = 0; i < rowFourthRus.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFourthRus[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowFourthRus[i] === 'Shift' && i === 0) {
      button.className = 'button shift-left';
    }
    if (rowFourthRus[i] === 'Shift' && i === rowFourthRus.length - 1) {
      button.className = 'button shift-right';
    }
    if (rowFourthRus[i] === '▲') {
      button.className = 'button top';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowFourthContainer.appendChild(button);
  }
  return rowFourthContainer;
}

// пятый ряд
function initRowFifth() {
  for (let i = 0; i < rowFifth.length; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.innerText = rowFifth[i];
    button.setAttribute('lowerCase', button.innerText);
    button.setAttribute('upperCase', button.innerText.toUpperCase());
    if (rowFifth[i] === 'Ctrl' && i === 0) {
      button.className = 'button ctrl-left';
    }
    if (rowFifth[i] === 'Ctrl' && i !== 0) {
      button.className = 'button ctrl-right';
    }
    if (rowFifth[i] === 'Alt' && i === 2) {
      button.className = 'button alt-left';
    }
    if (rowFifth[i] === 'Alt' && i === 4) {
      button.className = 'button alt-right';
    }
    if (rowFifth[i] === 'Win') {
      button.className = 'button win';
    }
    if (rowFifth[i] === '◀') {
      button.className = 'button left';
    }
    if (rowFifth[i] === '▼') {
      button.className = 'button bottom';
    }
    if (rowFifth[i] === '▶') {
      button.className = 'button right';
    }
    if (rowFifth[i] === '') {
      button.className = 'button space';
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.add('active');
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === button.getAttribute('lowerCase') || e.key === button.getAttribute('upperCase')) {
        button.classList.remove('active');
        button.classList.add('remove');
      }
      setTimeout(() => {
        button.classList.remove('remove');
      });
    });
    rowFifthContainer.appendChild(button);
  }
  return rowFifthContainer;
}
initRowFifth();

// window.addEventListener('keydown', (e) => {
//   if (e.key === '1') {
//     container.classList.toggle('rus');
//     container.classList.remove('en');
//   }
//   if (container.classList.contains('rus')) {
//     rowFirstContainer.replaceWith('1');
//     rowSecondContainer.replaceWith('2');
//     rowThirdContainer.replaceWith('3');
//     rowFourthContainer.replaceWith('4');
//     initRowFirstRus();
//     initRowSecondRus();
//     initRowThirdRus();
//     initRowFourthRus();
//   } else if (!container.classList.contains('rus')) {
//     container.classList.add('en');
//   } else if (container.classList.contains('en')) {
//     rowFirstContainer.replaceWith('1');
//     rowSecondContainer.replaceWith('2');
//     rowThirdContainer.replaceWith('3');
//     rowFourthContainer.replaceWith('');
//     initRowFirst();
//     initRowSecond();
//     initRowThird();
//     initRowFourth();
//   }
// });
