/**
 * 演算子と優先順位
 * 
 * 演算子
 * 値（オペランド・演算子によって処理される値）をもとに処理を行い、「結果を返す」。
 * A ? Bの場合、AとBがオペランドとなる。
 * 
 * a = 1 + 2;
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * +より=のほうが優先度が低い
*/


//　優先順位の確認
let a = 1 + 2;
console.log(a); // 3

let b = 1 + 2 * 3;
console.log(b); // 7 *のほうが優先度が高い

let c = (1 + 2) * 3;
console.log(c); // 9 グループ化は最も優先度が高い


// インクリメント
let e = 0;
let d = e++;
console.log(d, e); // 0 １
/**
 * なぜdが０？？
 * 
 * インクリメント演算子は後につけるか前につけるかで動きが変わる。
 * 
 * a++の場合：はじめはaの値が０だが、０という値を返した後に＋１の処理を行う
 * ++aの場合：aの０に対して＋１が行われた値が返却される。bには１が代入される。a自体も＋１されて「１が」格納される。
*/
let f = 0;
let g = ++f;
console.log(g, f); // 1 1



//　前方にインクリメント演算子があるパターンを式にする
let j = 0;
let h;
j = h = j + 1;
console.log(j, h); // 1 1
/**
 * j + 1が優先度高いので
 * j = h = 1;
 * 
 * =が2つ並んでいる場合は左から評価する。
 * 代入演算子は結合性が右から左になり、右側が評価される。
 * １がhに代入され、このhがbに代入される。
*/



//　後方にインクリメント演算子があるパターンを式にする
let a2 = 0;
let b2;
a2 = (b2 = a2) + 1;
/**
 * まずb2 = a2 が評価される。（b2に対してa2を代入）
 * a2=0のため、b2=0となる。
 * a2 = 0 + 1;となり、a2 = 1になる。
*/





function fn(){
  let a = 0;
  return a++;
}

console.log(fn()); // 0
/**
 * return a++
 * +1を行う前の結果が返却されるので、console.log(fn());は０となる。
*/

console.log(fn() * 5); // 0

console.log(!fn() * 5); // 5
/**
 * !0 * 5
 * !0：数値の０が渡された場合、falseが渡ってきたと考え「true」となる。
 * !0に*5することで、型変換が行われ、数値の方に合わされ1*5となる。
 * 
 * ※ *より!のほうが優先度が高い。
*/
console.log(!0); // true

console.log(!(fn() * 5)); // true
/**
 * fn()の実行結果は0
 * 0*5は0
 * !0はtrueとなる
*/