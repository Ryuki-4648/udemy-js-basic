/**
 * ラッパーオブジェクト
 * 
 * プリミティブ値を内包するオブジェクト
 * ラッパーオブジェクトを使うことで、プリミティブ値から色々な操作を行える
 * 
 * プリミティブ型に含まれる数値や文字列はオブジェクトではないが、
 * それぞれ対応するラッパーオブジェクトが用意されており、
 * あたかもオブジェクトのようにプロパティを参照したりメソッドを実行したりすることができる
*/





// ラッパーオブジェクトを使って文字列や数値を操作する　
const a = new String('hello');
console.log(a); // String {'hello'}
/**
 * 1文字ずつhelloが格納されいる
    0: "h"
    1: "e"
    2: "l"
    3: "l"
    4: "o"
*/

console.log(a.toUpperCase()); // HELLO

const b = new Number(100);
console.log(b); // Number {100}。[[PrimitiveValue]]: 100　[[PrimitiveValue]]:はjsエンジンが使用するための値

console.log(b.toExponential()); // 1e+2 100が10の2乗として表される

console.log(1e5); // 100000




// 一般的にはラッパーオブジェクトのインスタンス化は行わず、文字列を変数に格納する
const a2 = 'good morning';
console.log(a2.toUpperCase()); // プリミティブ型で宣言した変数は、メソッドが呼ばれる時には暗黙的にラッパーオブジェクトのメソッドが呼ばれている

const a3 = 'good night'.toUpperCase();
console.log(a3);

const b2 = 200;
console.log(b.toExponential());
console.log(b2); 