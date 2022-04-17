/**
 * ホイスティング（宣言の巻き上げ）
 * 
 * コンテキスト内で宣言した変数や関数の定義を
 * コード実行前にメモリーに配置すること
 * 
 * 
 */


func(); // 関数の実行1　コンソールに表示される

// 関数の定義　関数の実行1よりも前にメモリ上に配置されている
function func() {
  console.log('func is called');
}

func(); // 関数の実行2







a();

function a() {
  console.log(c);
  var c = 1;

  d();
  function d(){
    console.log('d is called');
  }

  console.log('a is called');
}

a();





console.log(b); // undefined 値が未定義
var b = 0;
/*
↑
下記のようなイメージ
var b; // 変数bのメモリースペースを取得し、undefinedという値を取得
console.log(b); // undefinedが出力される
var b = 0;
console.log(b); // 値0が取得される

宣言のキーワードを見つけたら、メモリにスペースを確保して、undefinedをいう値を設定している
*/






// console.log(c); // Cannot access 'c' before initialization cが初期化されていないというエラー
let c = 0;
/*
let(const)を使った場合、undefinedの初期化がJavaScriptエンジンによって行われない
*/





// 関数の定義方法 関数式

// c(); 宣言部より上で実行しようとするとエラーになる TypeError: c is not a function
const e = function(){
  console.log('e is called');
}
e();



// 関数宣言と関数式の挙動の違いに注意