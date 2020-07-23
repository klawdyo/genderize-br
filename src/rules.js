/**
  Converte palavras entre os gêneros masculino e feminino

  FONTES:
  https://www.infoescola.com/portugues/flexao-de-genero-nos-substantivos/
  https://www.soportugues.com.br/secoes/morf/morf24.php
  https://www.flip.pt/FLiP-On-line/Gramatica/Morfologia-Partes-do-discurso/Genero/Feminino-dos-substantivos-e-dos-adjectivos#:~:text=Os%20nomes%20terminados%20em%20%E2%80%93eu,muda%20%E2%80%93%C3%A9u%20em%20%E2%80%93oa.

  REGRAS:

  Grande parte dos substantivos que terminam em "o" são convertidos para "a" na 
  mudança de gênero.

  Quando termina em "ão" vira ã

  Quando termina em "or" aumenta o "a" e vira "ora"
    cantor – cantora
    animador – animadora
    vendedor - vendedora

  Exceções: Quando termina em "or" e vira "eira"
    lavador – lavadeira
    arrumador - arrumadeira

  Alguns substantivos terminados em -e (forma masculina) mudam a terminação para -a (forma feminina).
    governante – governanta
    mestre – mestra
    monge – monja

  Nos substantivos terminados em -ês, l e z (forma masculina) acrescentamos -a no feminino.
    camponês – camponesa
    bacharel - bacharela
    juiz – juíza

  Alguns substantivos que indicam ocupação ou título formam o feminino com os sufixos -esa, -essa e -isa.
    barão – baronesa
    conde – condessa
    sacerdote - sacerdotisa



  */

export const rules = [

  // Terminados em "ão"
  {
    name: 'Terminados em "-ão"',
    search: /^([^\s]+)(ão)$/i,
    replace: '$1ã',
    exceptions: {
      // -ana
      'sultão': 'sultana',
      // -onesa
      'barão': 'baronesa',
      // -a
      'ladrão': "ladra",
      // -oa
      'patrão': "patroa",
      // -ã
      'campeão': 'campeã',
      // -"ona"
      'solteirão': "solteirona"
    }
  },

  // Terminados em "or"
  {
    name: 'Terminados em "-or"',
    search: /^([^\s]+)(or)$/i,
    replace: '$1ora',
    exceptions: {
      'imperador': "imperatriz",
      'embaixador': "embaixatriz",
      'ator': 'atriz',

    }
  },

  // Terminados em "ês"
  {
    name: 'Terminados em "-ês"',
    search: /^([^\s]+)(ês)$/i,
    replace: '$1esa',
    exceptions: {

    }
  },

  // Terminados em "ês"
  {
    name: 'Terminados em "-ez"',
    search: /^([^\s]+)(ez)$/i,
    replace: '$1eza',
    exceptions: {

    }
  },

  // Terminados em "eu"
  {
    name: 'Terminados em "-eu"',
    search: /^([^\s]+)(eu)$/i,
    replace: '$1eia',
    exceptions: {

    }
  },

  // Terminados em "ô"
  {
    name: 'Terminados em "-ô"',
    search: /^([^\s]+)(ô)$/i,
    replace: '$1ó',
    exceptions: {

    }
  },

  // Epicenos: são os nomes de animais e plantas que diferenciam os gêneros
  // acrescentando as palavras macho e fêmea.
  // Terminados em "-macho"
  {
    name: 'Terminados em "-macho"',
    search: /^([^\s]+)-(macho)$/i,
    replace: '$1-fêmea',
    exceptions: {}
  },


  // Terminados em "o"
  {
    name: 'Terminados em "-o"',
    search: /^([^\s]+)(o)$/i,
    replace: '$1a',
    exceptions: {}
  },




]

/**
 * Exceções gerais
 */
export const exceptions = {
  'czar': 'czarina',
  'dom': 'dona',
  'frade': 'freira',
  'galo': 'galinha',
  'guri': 'guria',
  'herói': 'heroína',
  'judeu': 'judia',
  'mandarim': 'mandarina',
  'perdigão': 'perdiz',
  'peru': 'perua',
  'rapaz': 'rapariga',
  'poeta': 'poetisa',
  'cônsul': 'consulesa',
  'rei': 'rainha',
  'réu': 'ré',
  // Na categoria dos substantivos biformes, também temos aqueles 
  // que possuem palavras diferentes para o masculino e feminino.
  'bode': 'cabra',
  'boi': 'vaca',
  'carneiro': 'ovelha',
  'cavaleiro': 'amazona',
  'cavalheiro': 'dama',
  'cavalo': 'égua',
  'genro': 'nora',
  'homem': 'mulher',
  'pai': 'mãe',
  'zangão': 'abelha',
}

// Não flexiona o gênero
// b) Substantivos uniformes: são aqueles que possuem apenas uma
// forma para os dois gêneros.Eles podem ser comuns-de-dois, epicenos e sobrecomuns.
export const uniforms = [
  // Comuns-de-dois: São aqueles que diferenciam o gênero através da 
  // anteposição do artigo o(masculino) e do artigo a(feminino).
  'captalista', 'estudante', 'cliente', 'auxiliar', 'presidente',

  // Sobrecomuns: são aqueles que possuem apenas uma forma, tanto para o masculino quanto para o feminino.
  'criança', 'indivíduo', 'testemunha'
]


export default { rules, exceptions, uniforms }