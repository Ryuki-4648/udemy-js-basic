/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
console.log("0 == false", 0 == false); // true,true
console.log("0 === false", 0 === false); // false, false
console.log('"false" == false', "false" == false); // true, true
console.log('"0" == 0', "0" == 0); // true, true
console.log('Boolean("0") === false', Boolean("0") === false); // 
console.log('Boolean(0) === false', Boolean(0) === false); //
console.log('!Boolean(0) === false', !Boolean(0) === false); //
console.log('-1 == false', -1 == false); // true, true
console.log('!10 === false', !10 === false); // false, false

/**
 * 0 == false true
 * 0 === false false
 * "false" == false false 文字列がfalseかどうかの判定になる
 * "0" == 0' true 暗黙的な型変換がおこる。stringがnumgerに変換される
 * Boolean("0") === false false booleanによって真偽値に変換される。
 * 　　　　　　　　　　　　　　文字列の0はtruthyなのでbooleanで変換するとtrueとなる。
 * 　　　　　　　　　　　　　　true === falseとなり、結果はfalse
 * Boolean(0) === false true 数値の0であればfalsyなので、booleanで変換するとfalseとなる。
 * !Boolean(0) === false false boolean(0)はfalseなので、!Boolean(0)はtrueとなる。
 * 　　　　　　　　　　　　　　　　　true === falseで結果はfalse
 * -1 == false true 数値でfalseと等価になるのは「0」のみなので、-1はtruthyな値となる。
 * !10 === false true !10がfalseと厳密に等価になるか？
 * 　　　　　　　　　　　　!ノット演算子を使うと、booleanの型に変換される。truthyな値10に対し、booleanでtrueからfalseに変換される
*/



/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a = 1;

function fn(num) {
  if(num === undefined || num === null) {
    num = -1;
  }
    console.log(num);
}
fn(a);

// デフォルト値は渡ってきた変数が「未定義」の場合のみ有効になる
// 未定義はundefined。nullの場合は初期化されない。


/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
*/


// 自分の回答
let greeting = (name, msg = "hello") => {
  console.log(`${msg}, ${name}`);
}

greeting("Bob", "hi");
greeting("Bob");


// 回答
let greeting02 = (name02, msg02) => {
  msg02 = msg02 || 'hello';
  console.log(`${msg02}, ${name02}`);
}

greeting02("Bob");
greeting02("Bob", "hi");
greeting02("Bob", "");