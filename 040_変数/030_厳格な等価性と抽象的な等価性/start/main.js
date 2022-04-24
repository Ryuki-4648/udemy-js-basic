// 厳格な等価性と抽象的な等価性

/**
 * 等価性
 * 値を比較したときに、同じとみなせるかどうか
*/



// 厳格な等価性
// 型の比較まで行う
// a === b



// 抽象的な等価性
// a == b


let printEquality = (a, b) => {
  console.log('厳格な等価性の場合');
  console.log(a === b);
  console.log('抽象的な等価性の場合');
  console.log(a == b);
}

let a = '1';
let b = 1;
printEquality(a, b); // false true


let c = true;
printEquality(b, c); // false true
// 数値の1と真偽値true(数値に変換すると「1」)との比較
// 抽象的な等価性（==）の場合、両辺の型を合わせる作業が行われる
// console.log(b === Number(c));というふうに暗黙的に変換されてから比較される



let e = "";
let f = 0;
printEquality(e, f); // false true
// 数値と文字列の場合、文字列を数値に変換して比較する
console.log(Number(e)); // 0


let g = "0";
printEquality(g, f); // false true
console.log(Number(g)); // 0



// 他の例
// null, undefinedの比較: true
