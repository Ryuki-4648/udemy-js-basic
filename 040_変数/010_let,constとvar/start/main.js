/**
 * let, const, varの違い
*/


// -------------------- 再宣言 -------------------- //
let a = 0;
// let a = 1; Uncaught SyntaxError: Identifier 'a' has already been declared

var b = 1;
var b = 2;
console.log(`変数bの値は ${b}`);



// ---------- 再代入（値を再設定する）---------- //
let c = 0;
c = 1;
console.log(`変数cの値は ${c}`);

const d = 0;
// d = 1; Uncaught TypeError: Assignment to constant variable.



// ---------- ブロックスコープ(let, constでは有効) ----------/ /
{
  let e = 0;
  var f = 0; // グローバルスコープでvarが宣言されているのと同じになる
}
// console.log(e); // Uncaught ReferenceError: e is not defined
console.log(f);



// -------------------- ホイスティング -------------------- //
//console.log(g); // Uncaught ReferenceError: Cannot access 'g' before initialization
console.log(h); // undefined
let g = 10;
var h = 20;