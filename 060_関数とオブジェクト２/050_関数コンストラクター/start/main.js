/**
 * 関数コンストラクター
 * 
 * 関数は実行可能なオブジェクトである
 * 
 * 関数コンストラクターは大文字から始まる「Function」を指す
 * 脆弱性に問題あり、あまり使わない
*/



const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1, 2);
console.log(result); // 3


// 関数宣言
function fn2(a, b) {
  return a + b;
}

// どのコンストラクターから生成された？
console.log(fn2 instanceof Function);
// true　＝　fn2は、「Functionコンストラクター」から生成された「インスタンス」である
// fn2はオブジェクトである




let d = 0; // スクリプトスコープのdを使用している
function fn(){
  let d = 1; // 関数スコープの変数d
  const fn3 = new Function('a', 'b', 'return a + b * d'); // a:10 b:20 d:0が代入される
  return fn3;
}
// 関数コンストラクターで関数を作成した場合、関数スコープではなくスクリプトスコープの変数を使用する！！！

const f = fn();
const result2 = f(10, 20);
console.log(result2);


function fn4(a, b) {
  return a + b;
}

console.log(fn4 instanceof Function);


// ◎関数宣言
const obj = new function(){
  this.a = 0;
}
// 無名関数から生成したオブジェクトインスタンス。

// ◎関数コンストラクター
const fn5 = new Function('return;');
console.log(obj, fn5);
// 関数を作成するためのコンストラクター。fn3は関数のオブジェクトとなる。

const fn6 = new Function('this.a = 0;');
const obj2 = new fn6()
console.log(obj, obj2);