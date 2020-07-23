import { rules, exceptions, uniforms } from './rules';

/**
 * É uma palavra uniforme?
 * Ou seja, é a mesma palavra para os 2 gêneros?
 */
function isUniform(word) {
  return uniforms.includes(word);
}

/**
 * É uma exceção?
 * É uma palavra que não se encaixa em nenhuma regra?
 */
function isException(word) {
  return exceptions[word] || false;
}


/**
 * Verifica em qual das regras a palavra foi incluída.
 * Primeiramente verificamos os uniformes, 
 * em seguida as exceções
 * e por último as regras
 */
function inRules(word) {
  // Encontra a regra correta
  const rule = rules.find(obj => obj.search.test(word));

  // Se não achou nenhuma regra, retorna false
  if (!rule) return false;
  // Faz parte de uma exceção interna da regra
  const isException = rule.exceptions[word];
  // Retorne a exceção
  if (isException) return isException;
  // Retorna a palavra flexionada de acordo com a regra
  return word.replace(rule.search, rule.replace);
}


module.exports = function (substantive) {
  // É uma palavra uniforme, ou seja, não flexiona?
  if (isUniform(substantive)) return substantive;

  // É exceção às regras?
  const exception = isException(substantive);
  if (exception) return exception;

  // Está em uma regra?
  const rule = inRules(substantive);
  if (rule) return rule;

  throw 'Não foi possível aplicar nenhuma regra de flexão de gênero à palavra';
}