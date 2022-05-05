/**
 * 関数
 * 関数は実行可能なオブジェクトである！！
 * 
 * プリミティブ型とオブジェクト
 * 関数はオブジェクトである
*/


function a(){
  console.log('hello');
}

// オブジェクトであることの証明
a.prop = 0; // プロパティ
a.method = function(){ // メソッド
  console.log('method');
}

a(); // hello
a.method(); // method
console.log(a.prop); // 0

// 関数宣言で宣言した関数に対し、ドット記法でプロパティやメソッドを登録することができる。