function openMenu() {
  console.log('open menu')
  document.getElementById('submenu_type_animals').classList.remove('hidden')
}

function closeMenu() {
  console.log('close menu')
  document.getElementById('submenu_type_animals').classList.add('hidden')
}

function toggleText(numero){
  document.getElementById('more-info-' + numero).classList.toggle('hidden')

  const button = document.getElementById('hiden-text-' + numero)

  if (button.innerText == 'ver menos') {
    button.innerText = 'ver mas'
  } else {
    button.innerText = 'ver menos'
  }
}
