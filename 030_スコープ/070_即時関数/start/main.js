/**
 * 即時関数
 * 
 * 関数定義と同時に、一度だけ実行される関数のこと
 * 
 * return文に続く戻り値、実行結果が呼び出し元に返却される
 * 
*/


/*
＜即時関数の形＞
let result = (function(仮引数){
  return 戻り値;
})(実引数);
*/


// ★ 一般的な関数宣言。名前をつけて、実行する。
function a() {
  console.log('called');
}

a();


// ★ 即時関数で書いた場合。
// 一度だけ使う関数に関してわざわざ関数名をつけなくても実行できる。
(function(){
  console.log('called');
})();

// ↑は、(a)(); のように実行しているのと同じ
// この場合、(a)で囲っている括弧には特に意味はないので、結果的に(a)(); = a();となる。

/**
 * ()の意味
 * ・関数の実行。関数名();
 * ・グループ化 ex) 計算式に用いる (1+2)*3
*/




// 即時関数 括弧で囲まないとどうなるか
/*function(){
  console.log('called');
}();*/
// Uncaught SyntaxError: Function statements require a function name (at
// このシンタックスエラーが出ないよう、()で囲んでいる



// 関数式を使う場合
let b = function(){
  console.log('関数式の場合は()で囲まなくてもエラーが発生しない');
}();
// ()で囲まなくてもエラーが出ない


let c = (function(){
  console.log('c is called');
  return 0;
})();
console.log(c);
// ０が呼び出し元に戻り、cに０が代入される



// 引数を渡す場合
let d = (function(e){
  console.log('d is called' + e); // 渡された引数が渡る
  return 0;
})(10);
console.log(d);



// 即時関数はいつ使う？
// 関数スコープを利用する。

let f = (function(){

  console.log('f is called');

  let privateVal = 30;
  let publicVal = 1000;

  function privateFn(){
    console.log('privateFn is called');
  }
  function publicFn(){
    console.log('publicFn is called');
  }

  // publicValとpublicFnだけ関数外から呼び出せるようにしたい
  // オブジェクトリテラル
  return {
    publicVal,
    // ↑ 変数名とプロパティが同じ場合は省略できる。publicVal: publicValと同じ意味
    publicFn
  };
})();

// publicValとpublicFnが変数fに返却される
f.publicFn();
console.log(f.publicVal);



// クロージャーの考え方に基づく実装
let g = (function(){

  console.log('g is called');

  let privateVal02 = 3;
  let publicVal02 = 5;

  function privateFn02(){
    console.log('privateFn02 is called');
  }
  function publicFn02(){
    console.log('publicFn02 is called: ' + privateVal02++);
  }

  return {
    publicVal02,
    publicFn02
  };
})();
/**
 * publicFn02が定義されているレキシカルスコープに変数privateVal02が存在する
 * privateVal02は即時関数が実行された「一度だけ」初期化される（一度しか初期化されない）
 * 
 * それ以降はpublicFn02が呼ばれたタイミングでprivateVal02が＋１されていく
*/

g.publicFn02();
g.publicFn02();
g.publicFn02();
g.publicFn02();