it('is unstyled before being clicked', () => {
  const $ul = $('ul')
  expect($ul).not.to.have.attr('style')
})

it('is styled after being clicked', () => {
  const $ul = $('ul').trigger('click')
  expect($ul).to.have.css({
    color: 'white',
    backgroundColor: 'green'
  })
})
