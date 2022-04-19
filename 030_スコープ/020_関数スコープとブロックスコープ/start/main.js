/**
 * 関数スコープ
*/

function a() {
    let b = 0;
    console.log(b);
}

a(); // 0

// console.log(b);
/**
 * 関数aの外でconsole.log(b);とすると、b is not definedのエラーが出る
 * 変数bは関数スコープの中でのみ有効である。実行コードからその変数が見えるか見えないか
*/





/**
 * ブロックスコープ
*/

/**
 * ブロックとは
 * {}で囲まれた範囲のことを呼ぶ
 * 
 * 関数宣言が前方に来ている場合は関数スコープと表現する
*/


{
  // ブロックスコープを使用する条件
  // letまたはconstを使用する
  // varだとブロックスコープが生成されない
}



{
  let c = 1;
  console.log(c); // 1

  function d(){
    console.log('d is called');
  }
  d(); // ブロックスコープの中で実行
}
// console.log(c); // ← この位置（{}の外）に記述すると、c is not definedのエラーが出る

d(); // ブロックスコープの中で実行しても出力される
// ★★関数宣言では、ブロックスコープは無視される！！！！




{
  var d = 4;
}
console.log(d); // 4 ブロックスコープを無視される。意図しない挙動をとるのでvarは推奨されていない



// letやconstを使うことでブロックスコープが有効になる例
{
  let e = 5;
  const f = function(){
    console.log('f is called');
  }
  f();
}

// f(); ←  f is not definedのエラーが出る



/**
 * 一般的には{}単体で使うのではなく
 * for{}やif{}などで使う
*/

if( true ) {
  // letやconstを使うと、このif文の中でブロックスコープが生成される
  // varだと無視されるので使わないこと！！！！！
}


// varの場合 ブロックスコープが無視される
if(true) {
  var hoge = 1;
  var fuga = function(){
    console.log('fuga is called');
  }
}

fuga();
console.log(hoge);


// constの場合 ブロックスコープが適用されるので、{}の外で関数を実行するとエラーになる（fugafuga is not defined）
if(true) {
  var hogehoge = 1;
  const fugafuga = function(){
    console.log('fuga is called');
  }
}

fugafuga();


// ★ブロックスコープを適用させたい場合、varで変数宣言はできない！！！！！