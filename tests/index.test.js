const test = require('tape')
const genderize = require('../dist/index')

const rules = {
  // Terminados em o
  Pato: 'Pata',
  prefeito: 'prefeita',
  secretário: 'secretária',

  // Terminados em ês
  'burguês': "burguesa",
  'freguês': "freguesa",

  // Terminados em ez


  // Terminados em or
  senador: 'senadora',
  imperador: 'imperatriz',
  diretor: 'diretora',
  reitor: 'reitora',
  vereador: 'vereadora',
  cantor: 'cantora',
  vendedor: 'vendedora',


  // Terminados em eu
  ateu: 'ateia',
  europeu: 'europeia',

  // Terminados em ô
  'avô': 'avó',
  'bisavô': 'bisavó',


  // Terminados em ão
  'tecelão': 'tecelã',

  // epiceno (terminado em macho)
  'cobra-macho': "cobra-fêmea",

  // Sem flexão
  presidente: 'presidente',
  auxiliar: "auxiliar",

  // Exceções
  'cônsul': 'consulesa'
}
test('Teste básico', t => {
  Object.keys(rules).forEach(key => {
    const expected = rules[key]
    const msg = `O feminino de "${key}" deve ser "${expected}"`
    t.equal(genderize(key), expected, msg)
  })

  t.end()
})
