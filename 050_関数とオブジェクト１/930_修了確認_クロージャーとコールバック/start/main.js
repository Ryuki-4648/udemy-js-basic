/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 * 
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 * 
*/

// 自分の回答
function hello(name) {
  console.log('hello ' + name);
}

// 回答
function hello(name) {
  return function(){
    console.log('hello ' + name);
  }
}
/**
 * 関数がhelloの実行結果として返却される
 * 
 * 結果的に以下の形になる
 * setTimeout(function(){
    console.log('hello ' + name);
  }, 1000);
*/


/**
 * 実行文は以下の通りです。
*/
setTimeout(hello('Tom'), 1000);

/**
 * setTimeoutの第一引数に関数を渡す必要がある
 * この時点で関数helloはすでに実行されてしまっている！！（丸括弧がある時点で関数の実行となる）
 * →　setTimeoutの第一引数に設定されるのは関数helloの戻り値となる
*/