/**
 * レキシカルスコープ
 * コードを書く「場所」によって「参照」できる変数が変わるスコープのこと
 * コードを記述した時点で決定するため、「静的スコープ」とも呼ばれる
 * 
 * レキシカル：ソースコードの「どこ」に「何を」書いているか、という意味
*/

let a = 2;

function fn1(){
  let b = 1;
  function fn2() {
    let c = 3;
    console.log(b);
  }

  fn2();
}

fn1();

/**
 * Sourceデバッグ確認
 * 
 * ●最後に実行しているfn1();
 * Scope Script
 * a: 2
 * 
 * 　↓　step into
 * 
 * ●fn1();を定義しているところ
 * Scope Local（今回はfn1(){〜〜}がローカルのスコープになる）
 * b: undefined 
 * fn2()が参照可能
 * 
 * Scope Script
 * a: 2
 * 
 *　　↓　step over(処理を1行進める) and step intoでfn2の中に入る
 *
 * fn2を定義しているところ
 * Scope Local
 * c: undefined
 * Scope Script
 * a: 2
 * ※スクリプトスコープ、グローバルスコープはjsファイル内でどこからでもアクセス可能なスコープ
 * fn2の中からでもスクリプトスコープの変数aは取得可能となる
 * 
 * 
 * console.log(b);と記述しているところ
 * Scope Local
 * c: 3
 * Scope Closure
 * b: 1
 * ※fn2の外部スコープである let 2 = 1;がfn2から参照できていることになる
 * Scope Script
 * a: 2
*/

/**
 * グローバルスコープ　a, fn1
 * 関数スコープ(fn1) b, fn2
 * 関数スコープ(fn2) c
 * 
 * 自身のスコープより、「外側」のスコープに対しては参照可能である
 * 
 * 外部スコープ＝レキシカルスコープ
 * 
 * レキシカルスコープ：実行中のコードから見た外部スコープのこと
 * どのようにしてスコープを決定するかの仕様のこと（静的スコープ）
*/






// 上の記述でのfn2をfn1の外側に出した場合
let aa = 2;

function fn3(){
  let bb = 1;
}
fn3();

function fn4() {
  let cc = 3;
  console.log(bb); // bb is not defined
}
fn4();

// レキシカルスコープ コードを書く場所によって参照できる変数が変わってくる