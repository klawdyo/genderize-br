"use strict";var _rules=require("./rules");/**
 * É uma palavra uniforme?
 * Ou seja, é a mesma palavra para os 2 gêneros?
 */function isUniform(a){return _rules.uniforms.includes(a)}/**
 * É uma exceção?
 * É uma palavra que não se encaixa em nenhuma regra?
 */function isException(a){return _rules.exceptions[a]||!1}/**
 * Verifica em qual das regras a palavra foi incluída.
 * Primeiramente verificamos os uniformes, 
 * em seguida as exceções
 * e por último as regras
 */function inRules(a){// Encontra a regra correta
var b=_rules.rules.find(function(b){return b.search.test(a)});// Se não achou nenhuma regra, retorna false
if(!b)return!1;// Faz parte de uma exceção interna da regra
var c=b.exceptions[a];// Retorne a exceção
return c?c:a.replace(b.search,b.replace);// Retorna a palavra flexionada de acordo com a regra
}module.exports=function(a){// É uma palavra uniforme, ou seja, não flexiona?
if(isUniform(a))return a;// É exceção às regras?
var b=isException(a);if(b)return b;// Está em uma regra?
var c=inRules(a);if(c)return c;throw"N\xE3o foi poss\xEDvel aplicar nenhuma regra de flex\xE3o de g\xEAnero \xE0 palavra"};