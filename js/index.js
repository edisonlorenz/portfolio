const openSideMenu = document.getElementById('open-sidebar');
const sidebar = document.getElementById('sidebar');
const menuIndicator = document.querySelector('.fas');
let isOpen = true;

const skills = document.querySelectorAll('.skill');
const skillContainer = document.querySelector('.skill-percent');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const javascript = document.querySelector('#javascript');
const php = document.querySelector('#php');
const java = document.querySelector('#java');
const skillProgress = (type, progress) => {
  let lang;
  if ((type = 'html')) lang = html;
  if ((type = 'css')) lang = css;
  if ((type = 'javascript')) lang = javascript;
  if ((type = 'php')) lang = php;
  if ((type = 'java')) lang = java;

  lang.textContent = progress;
  lang.style.width = progress;
  lang.style.transition = 'all 1.5s';
};
openSideMenu.addEventListener('click', function (e) {
  if (isOpen) {
    sidebar.style.display = 'block';
    sidebar.style.left = 0;

    menuIndicator.classList.toggle('fa-times');
    menuIndicator.classList.toggle('fa-bars');
  } else {
    sidebar.style.display = 'none';
    sidebar.style.left = -250;

    menuIndicator.classList.toggle('fa-times');
    menuIndicator.classList.toggle('fa-bars');
  }
  isOpen = !isOpen;
});

/* Skills */
skills.forEach(el => {
  el.addEventListener('mouseenter', e => {
    html.textContent = '60%';
    html.style.width = '60%';
    html.style.transition = 'all 1.5s';

    css.textContent = '40%';
    css.style.width = '40%';
    css.style.transition = 'all 1.5s';

    javascript.textContent = '50%';
    javascript.style.width = '50%';
    javascript.style.transition = 'all 1.5s';

    php.textContent = '70%';
    php.style.width = '70%';
    php.style.transition = 'all 1.5s';

    java.textContent = '60%';
    java.style.width = '60%';
    java.style.transition = 'all 1.5s';
  });
});
