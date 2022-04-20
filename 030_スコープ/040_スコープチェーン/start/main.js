/**
 * スコープチェーン
 * スコープが複数階層で連なっている状態のこと＝あるスコープが他のスコープを含んでいる状態
*/


let a = 2;
window.a = 4;
function fn1(){
  //let a = 1;
  function fn2() {
    //let a = 3;
    console.log(a);
    /**
     * let c = 3;
    console.log(b);
    ↑これらの記述をlet a と console.log(a)に変更した
     */
  }

  fn2();
}

fn1();

/**
 * 【スコープチェーンによる変数の獲得】
 * console.log(a) 3が取得できる
 * 
 * let a = 3を消した場合　1が取得される
 * 
 * let a = 1を消した場合　2が取得される
 */


/**
 * スコープが複数階層の場合
 * 一番内側のスコープから変数を探しに行き、一つずつ外側に変数名で同じものがないか探しに行く
 * 見つかった時点でその変数の値を取得する
 * 
 * 最終的にはグローバルスコープまで探しに行く
 * それでもなければエラーになる
*/


/**
 * window.a = 4を追加した場合
 * let a = 2;
 * window.a = 4;
 * 
 * console.logは2と出力される
 * グローバルスコープはスクリプトスコープよりも外側にあることがわかる
 * 
 * スクリプトスコープで変数が見つかったので、その値「2」を取得してくる
 * 
 * もしスクリプトスコープにlet a = 2が定義されていなければ、グローバルスコープにwindow.a = 4が格納されているので
 * コンソールでは「4」が出力される
*/


// ホイスティングと合わせて起こりやすいエラー
let aa = 2;
window.aa = 4;
function fn11(){
  //let aa = 1;
  function fn22() {
    console.log(aa); // let aaよりも前に記述すると「Cannot access 'aa' before initialization」のエラーになる
    //let aa = 3;
  }

  fn22();
}

fn11();


// ホイスティングと合わせて起こりやすいエラー varを使う場合
let aaa = 2;
window.aaa = 4;
function fn111(){
  //let aaa = 1;
  function fn222() {
    console.log(aaa); // undefined
    if(true) {
      var aaa = 10;
    }
  }

  fn222();
}

fn111();
/**
 * varのスコープでブロックスコープが形成されない！！
 * 
 * 外部スコープであるlet aaaの2を取得しようとしても、var aaa = 3のホイスティングがはたらくため
 * aaaがundefinedとコンロールに出力されてしまう
 */
