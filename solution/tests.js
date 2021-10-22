it('is unstyled before being clicked', () => {
  const $ul = document.querySelector('ul')
  expect($ul.style).not.to.have.keys(['color', 'backgroundColor'])
})

it('is styled after being clicked', () => {
  const $ul = document.querySelector('ul')
  $ul.dispatchEvent(new Event('click'))
  expect($ul.style).to.include({
    color: 'white',
    backgroundColor: 'green'
  })
})
