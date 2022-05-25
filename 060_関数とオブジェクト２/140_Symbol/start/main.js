/**
 * Symbol
 * 
 * ES6〜
 * プロパティの重複を避けるために、必ず「一意の値」を返す関数
 * 
 * プリミティブ型の値の一つ。必ず関数から値を習得する。
*/


const s = Symbol('hello');
const s2 = Symbol('hello');

console.log(s); // Symbol(hello)
console.log(s2); // Symbol(hello)

console.log(s === s2); // false 異なる値が格納されている。引数の文字列が同じでも、別のシンボルを生成している。
console.log(typeof s); // symbol




const str = new String('Tom');
console.log(str);
// prototypeの中にSymbol(Symbol.iterator)というプロパティがある。

/*
String.prototype[s] = function(){
}
String.prototype[s2] = function(){
}
*/
// ↑　String {'Tom'}のprotytypeを見ると、Symbol(hello): ƒ ()がふたつあるのがわかる



String.prototype[s] = function(){
  return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]()); // hello Tom