/**
 * クロージャー
 * レキシカルスコープの変数を関数が使用している状態
 * 
 * 
*/

function fn1(){
  let b = 1;
  function fn2(){
    console.log(b);
  }
  fn2();
}
fn1();

/**
 * 関数fn2からconsole.log(b)のbに対して、レキシカルスコープの値（let b = 1の1のこと）を
 * 参照しに行っている。
 * 
 * 内側に定義されている関数から歴史カルスコープの変数への参照を保持している場合、
 * この状態を「クロージャー」と呼ぶ。
*/


/**
 * クロージャーを使う例
 * 
 * ・プライベート変数の定義
 * 　関数の外部からアクセスできない変数のこと
 * 
 * ・動的な関数生成
 * 　状況に応じて異なる関数
*/


// カウントアップする関数を作成したい(1)
increment();
increment();
increment();

function increment(){
  let num = 0;
  num += 1;
  console.log(num);
}

// これだと「１」が３回出力されてしまう
// ★★★ 関数の中で変数numを宣言してしまっているので、numは０になる！！！！
// ★★★ 関数がよばれるたびに初期化するのではなく、グローバルテキストが実行されるタイミングで初期化を行えば良い。


// カウントアップする関数を作成したい(2)
let number = 0; // グローバルコンテキストが実行する段階でnumの初期化を行う！！
incrementFunc();
incrementFunc();
incrementFunc();

function incrementFunc() {
  number += 1;
  console.log(number); // 1 2 3
}


/**
 * ↑のやり方だと問題がでてくる
 * 
 * numberが関数を通さずにどこからでもアクセス可能になる（ソースコードのどこからでも変更可能な状態）
 * 　↓　
 * 解決方法
 * プライベート変数という、関数の内部に変数を持ちながら、外部からはアクセスできないような仕組みをクロージャーを使って実装する
*/


console.log('---------- クロージャーを用いる場合 ----------');


// クロージャーを用いる
function incrementFactory() {

  let number = 0; // incrementFactoryの関数スコープ内に収まっているので、外部からはアクセス不可

  function increment02() {
    number += 1;
    console.log(number);
  }

  return increment02; // ★関数の返却！！
}

const increment02 = incrementFactory(); // numberの宣言はここだけ
// incrementFactoryを実行すると、numberの宣言が行われ、increment02の宣言が行われ、returnでincrement02が返ってくる
// const increment02には「返却された関数increment02」が入っている

increment02(); // 返却された関数increment02を実行している。numberの初期化は行われていない。
increment02();
increment02();
increment02();
increment02();

/**
 * incrementFactory 「Factory」はなにかを生成するような関数につけることが多い
 * incrementFactoryの関数スコープで「number」が存在する。
 * 内側にある関数incrementFuncからは、その変数numberが参照できる。
 */