console.log('----- 問題1 -----');

/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val; // ０がコピーされて、 val2に代入される
val2 = 1;

// console.log(val); // 問題１
// valは0、val2は1になる
console.log(val); // 0
console.log(val2); // 1


console.log('----- 問題2 -----');


let obj = {
    prop1: 10
}
const obj2 = obj; // objのオブジェクトへの「参照」（変数のアドレス）がコピーされる
obj2.prop1 = 9;

// console.log(obj); // 問題２
// obj.prop1もobj2.propも9になる
console.log(obj); // prop:9
console.log(obj2);



console.log('----- 問題3 -----');


function fn1(arg) {
    arg.prop2 = 8;
    return arg;
}
let obj3 = fn1(obj2);

// console.log(obj); // 問題３
/**
 * obj2にはprop1: 9が入っている
 * obj3には、obj2への参照がコピーされてfn1の引数となったものが代入されている？
 * 
 * obj prop1:9 prop2:8
*/
console.log(obj); // {prop1: 9, prop2: 8}
console.log(obj3); // {prop1: 9, prop2: 8}



console.log('----- 問題4 -----');


function fn2(arg) {
    arg = {};
    return arg;
}
const obj4 = fn2(obj); // 問題４

// console.log(obj); // 問題４

/**
 * fn2の引数にobjが渡され、obj4に代入されている
 * objのなかは空っぽになる
 */

console.log(obj); // {prop1: 9, prop2: 8}
console.log(obj4); // {}

/**
 * 新しいオブジェクトで初期化されているが
 * 初期化されるのはargの参照先のみになる
 * 
 * オリジナルのobjの参照先は変わることはないので問３と同じ答えになる
*/

/** ex */
let obj5 = obj; // この時点では、objとobj5の参照先は一致する
obj5 = {}; // obj5には新しいオブジェクトの参照値が設定される
