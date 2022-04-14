/**
 * 実行コンテキスト
 * 
 * コードを実行する際の文脈・状況
 * 
 * JavaScriptエンジンのコード,WEB APIs,thisを含めたものを実行コンテキストと呼ぶ
 * 
 * コンテキストの種類
 * ・グローバルコンテキスト★
 * ・関数コンテキスト★
 * ・evalコンテキスト(非推奨)
 * 
*/


// グローバルコンテキスト内で宣言された変数や関数を使用できる↓

let a = 0; // 関数の外で宣言されたものを「外部変数」と呼ぶ
function b() {
  // この中が関数コンテキストとなる
  console.log(this, arguments, a);
  // 関数bを実行すると。。。
  // this→ここではウィンドウオブジェクト。Argumentsが取れる。外部変数aの０が出力される
  // thisやargumentsは実行する環境によって取りうる値が変わってくる
}

/* エラーになった例
Uncaught ReferenceError: arguments is not definedと出てしまう
const b =() => {
  console.log(this, arguments, a);
}
*/

//console.log(a);
b();
ba();