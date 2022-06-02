/**  
 * for...ofと反復可能性
 * 
 * for...of
 * イテレーターを持つオブジェクトの反復操作を行う。
 * 
 * イテレーター
 * 反復捜査を行う際に使用するオブジェクトのこと。
 * ex) String, Array, Map, Set, argumentsなど
 * 　→反復可能オブジェクト。for...ofでの反復が可能。
*/



const arry = ['a', 'b', 'c'];

for(let v of arry){
  console.log(v); // a b c
}

console.log(arry);
/**
 * (3) ['a', 'b', 'c']
 * →prototypeの中を見ると
 * Symbol(Symbol.iterator): ƒ values()というプロパティがある
 * このプロパティがfor...ofの実行時に使われる。
 * この値を書き換えるとループの挙動も変化する。
*/




console.log('----- arry2 -----');

const arry2 = ['a', 'b', 'c'];
arry2[4] = 'e';
for(let v of arry2){
  console.log(v); // a b c undefined e
}
// 3番目が設定されていないのでundefinedとして返却される




console.log('----- arry3 -----');

const arry3 = ['a', 'b', 'c'];
arry3[4] = 'e';
Object.prototype.method = function(){}// 返却しない
for(let v of arry3){
  console.log(v); // a b c undefined e ループは出現しない
}


console.log('----- arry4 -----');

const arry4 = ['a', 'b', 'c'];
arry4[4] = 'e';
Object.prototype.method = function(){} 
Object.defineProperty(arry4, 0, {
  enumerable: false // 配列のいてレーターはenumerableは参照していないので、0番目をfalseにしてもaは返却される
})
for(let v of arry4){
  console.log(v); // a b c undefined e ・・・aは返却される
}



console.log('----- arry5 -----');

const arry5 = ['a', 'b', 'c'];
arry5[4] = 'e';
Object.prototype.method = function(){} 
Object.defineProperty(arry5, 0, {
  enumerable: false
})
const d = Object.getOwnPropertyDescriptor(arry5, 0);
console.log(d); // valueはa、enumerableはfalse
for(let v of arry5){
  console.log(v); // a b c undefined e 
}



/**
 * for...ofはイテレーターの挙動に依存する
*/