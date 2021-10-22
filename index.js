const fs = require('fs')
const path = require('path')
const { Script } = require('vm')
const { JSDOM } = require('jsdom')
const Mocha = require('mocha')
const chai = require('chai')

const [html, js, tests] = ['index.html', 'main.js', 'tests.js'].map(file => {
  return fs.readFileSync(path.join(__dirname, 'solution', file))
})

const document = `
  ${html}
  <script>
    ${js}
  </script>
`.trim()

const dom = new JSDOM(document, {
  runScripts: 'dangerously'
})

const context = dom.getInternalVMContext()
context.expect = chai.expect

const mocha = new Mocha()
mocha.suite.emit('pre-require', context, 'solution', mocha)

const script = new Script(tests)
script.runInContext(context)

mocha.run()
