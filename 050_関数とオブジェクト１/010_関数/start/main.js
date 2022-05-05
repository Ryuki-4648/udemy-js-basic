/** 関数 */

function fn(a, b) {
  console.log(a, b);
}


// 同じ関数名で重複してしまった場合、あとから宣言された変数を実行する。引数の数が異なっていても、「違う関数」とはみなされない。
// 重複を避けたい場合はconst hoge = function(a, b)~~ で定義してもよい


fn(0, 1); // 0 1

fn(1); // 1 undefined
// 引数の順番が大事。bだけ渡すことはできない。1つだけ引数を渡すと、aに引数が渡り、bはundefinedとなる
// 引数が2つ定義されていても、1つの引数だけ呼び出して実行することが可能。

// bだけ渡したい場合
fn(null, 1);




function fn1(a, b=10) {
  console.log(a, b);
}

fn1(0, 1); // 0 1
fn1(1); // 1 1
fn1(null, 1); // null 1
fn1(1, null); // 1 null
fn1(1, undefined); // 1 10 undefineはプログラムが自動で設定する値。意図的に変数を空で初期化したい場合は「null」を用いる



console.log('---------- arguments ----------');


/** 
 * arguments
 * 関数コンテキストによって自動で生成されるため、定義しない
 * オブジェクトである
 * 呼び出し時に渡された実引数が渡ってくる
 */

function fn2(a, b=20) {
  console.log(arguments); // 0:1 1: undefined　実引数がそのままargumentsに格納されている
  console.log(a, b);
}
fn2(1, undefined);



function fn3() {
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
}
fn3(1, undefined);
// argumentsオブジェクトは渡される引数の数が決まっていないときに使われる機会がある
// 決まっていない場合、仮引数の数を合わせられないので、argumentsオブジェクトのループを通して引数を取得する場合がある（最近はあまり使われない）



// レストパラメーター　ES6〜
function fn4(...args){
  console.log(args); // 配列になった引数が格納される。レストパラメーターズで可変長のものを処理する
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
}
fn4(1, undefined);
fn4(1, undefined, 0);



console.log('---------- return ----------');



/** 
 * return 
 * 関数を実行した結果を返すことができる
* */

function fn5(){
  const a = arguments[0]; // 実引数の0番目　100
  const b = arguments[1]; // 実引数の1番目　undefined
  console.log(arguments);
  console.log(a, b);
  return a; // 呼び出し元の関数に返却される
}
let c = fn5(100, undefined);
console.log(c);
// aはconst a = arguments[0];より0番目に入っているものなので、100, undefinedの0番目である100が入る