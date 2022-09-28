const btn = document.querySelector('#btn');

const configUser = window.matchMedia('(prefers-color-scheme: dark)');

const localConfig = localStorage.getItem('theme');
if (localConfig === 'dark'){
  document.body.classList.toggle('dark-theme');
} else if (localConfig === 'light'){
  document.body.classList.toggle('light-theme');
}

btn.addEventListener('click',()=> {
  let colorTheme;
  if(configUser.matches){
    document.body.classList.toggle('light-theme');

    colorTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark'

  } else {
    document.body.classList.toggle('dark-theme');

    colorTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  }

  localStorage.setItem('theme', colorTheme)
})