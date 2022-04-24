/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 * 
 * ※if文は削除してはいけません。
 */
function fn() {
    if(true) {
        let a = 'fn called';
        return a;
    }
    //return a; // ReferenceError: a is not defined
}

const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
//var val = 'val1';
function fn2() {
    var val = 'val1';
    console.log(val); // 期待値->'val1'

    if(true) {
        let val = 'val2'; // letに変更し、ブロックスコープを有効にする
        console.log(val); // 期待値->'val2'
    }

    console.log(val); // 期待値->'val1'
}
fn2();

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