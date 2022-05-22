/**
 * hasOwnPropertyとin
 * 
 * hasOwnProperty
 * 「自分自身」のオブジェクトのプロパティとして、引数で与えられた値が存在するか確認できる
*/



function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}


const bob = new Person('Bob', 18);



const result = bob.hasOwnProperty('name');
console.log(result); // true

const result2 = bob.hasOwnProperty('hello'); // helloはプロトタイプに格納されているプロパティになる
console.log(result2); // false

console.log('name' in bob); // true
console.log('hello' in bob); // true
console.log('bye' in bob); // false
console.log('hasOwnProperty' in bob); // true オブジェクトのメソッドとして見つかるため

/**
 * bobというオブジェクトのプロパティ or　そのオブジェクトが保持してる__proto__に、
 * 文字列のプロパティ or メソッドが格納されているか調べる。
 * 
 * プロトタイプチェーンも遡って調べることができる。
 * helloもtrueとなる。
*/