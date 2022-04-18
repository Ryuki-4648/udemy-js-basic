/**
 * ホイスティング（宣言の巻き上げ）
 * 
 * コンテキスト内で宣言した変数や関数の定義を
 * コード実行前にメモリーに配置すること
 * 
 * ホイスティングはコンテキストが生成されるたびに起こる
 * グローバルコンテキストが生成されるタイミングで宣言部のメモリスペースが確保される
 */


func(); // 関数の実行1　コンソールに表示される
// ↑　★この関数funcの実行前に、すでに関数がメモリ上に存在している

// 関数宣言　関数の定義　関数の実行1よりも前にメモリ上に配置されている
function func() {
  console.log('func is called');
}

func(); // 関数の実行2







a();

function a() {
  console.log(c);
  var c = 1; // undefinedが返ってくる。letの場合は「cがまだ初期化されていない」(uninitialized)というエラーが出る

  d(); // 宣言部より前に配置しても、既にメモリ上に存在するのでd is calledが出力される
  function d(){
    console.log('d is called');
  }

  console.log('a is called');
}

a();




/**
 * varの場合
*/
console.log(b); // undefined 値が未定義
var b = 0;
/*
↑
下記のようなイメージ
var b; // 変数bのメモリースペースを取得し、undefinedという値を取得
console.log(b); // undefinedが出力される
var b = 0;
console.log(b); // 値0が取得される

★★ 宣言のキーワードを見つけたら、メモリにスペースを確保して、undefinedをいう値を設定している
★★ ホイスティングの初期値としてundefinedが設定される
*/





/**
 * letの場合
*/
// console.log(c); とすると、Cannot access 'c' before initialization cが初期化されていないというエラーが出る
let c = 0;
/*
★★ let(const)を使った場合、undefinedの初期化がJavaScriptエンジンによって行われない
*/





// 関数の定義方法 関数式

// c(); 宣言部より上で実行しようとするとエラーになる TypeError: c is not a function
// 変数を宣言し、無名関数を代入する方法（関数式）

//console.log(e); // ←宣言部より前にconsole.log(e);とすると「Cannot access 'e' before initialization」のエラーが表示される
const e = function(){
  console.log('e is called');
}
e();

