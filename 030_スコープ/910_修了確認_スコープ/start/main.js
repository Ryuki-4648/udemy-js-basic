/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 * 
 * ※if文は削除してはいけません。
 */
function fn() {
  let a;
    if(true) {
        a = 'fn called';
    }
    return a;
    //return a; // ReferenceError: a is not defined
}

const result = fn();
console.log(result);

// 回答例
// let a;とreturn a;が同じ関数スコープ内にあることになる

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
var val = 'val1';
function fn2() {
    //var val = 'val1';
    console.log(val); // 期待値->'val1'

    if(true) {
        let val = 'val2'; // letに変更し、ブロックスコープを有効にする
        console.log(val); // 期待値->'val2'
    }

    console.log(val); // 期待値->'val1'
}
fn2();


// 解説
// letに変えないとどうなる？
var val02 = 'val02-1';
function fn3() {
    console.log(val02); // このval02が参照しているのはレキスカルスコープのvar val02 = 'val02-1';のval02である。

    if(true) {
        var val02 = 'val02-2';
        console.log(val02);
    }

    console.log(val02);
}
fn3();
/**
 * varを使った場合、ホイスティング（巻き上げ）の作用が働く
 * if文内でval02の値が代入されるまで、val02は「undefined」で表示される！！
 */


/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 * 
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
*/

/**
 * ・プライベート変数の定義
 * 関数の外部からアクセスできない変数のこと
 * 
 * 内側に定義されている関数からレキシカルスコープの変数への参照を保持している場合、
 * この状態を「クロージャー」と呼ぶ。
*/

/**
  function increment(){
    let number = 0;
    number += 1;
    console.log(number);
  }
  
  ↑　これだと「1」が毎回出力される「
  関数の中で変数numberを宣言している。
  関数がよばれるたびに初期化するのではなく、「グローバルテキストが実行されるタイミング」で初期化を行えば良い。
 */


let number = 0;
function increment(){
  number += 1;
  console.log(number);
}
increment();
increment();
increment();
increment();



// 回答例
{
  let num = 0; // プライベート変数にする。ブロックスコープを有効にし、外側からは変更できないようにする。
  function incre(){
    num += 1;
    console.log('回答例: ' + num);
  }
}

incre(); // ブロックスコープの外からでも実行可能
incre();
incre();
incre();