const a = 1;
const b = 1;
const c = 0;
const d = 3;

console.log(a && b); // 1(trutyな値)
console.log(a || b); // 1

console.log(b && c); // 0 ・・・bがfalsyなので、これが結果として返却される
console.log(b || c); // i

console.log(a && b && d); // 3 ・・・a,bがtruthlyなので、dの結果が返却される


// グループ化
console.log((c || a) && d); // 3

console.log((c || a) && (d || c)); // 3
// 0 || 1 && 3 || 0
// 1と3がtruthly。それぞれを&&で比較し、最後の3を返す



/**
 * a && b
 * まずaがtruthyかどうかを確認
 * 
 * ・aがfalsyな場合、aの値をそのまま条件式の結果として返却する
 * ・aがtruthyな場合、bの結果を条件式の結果として返却する
 * ★falsyなものが見つかった時点で、その値を返却する
 * ★見つからなかった場合は最後に指定されている値が結果として返ってくる
 * 
 * 
 * a || b
 * まずaがtruthyかどうかを確認
 * aがfalsyならbの値を判定しに行く
 * aがtruthlyなら、aの値が結果として返却される
 * ★truthlyなものが見つかった時点で、その値を結果として返す
 * ★見つからなかった場合は最後に指定されている値が結果として返ってくる
*/

