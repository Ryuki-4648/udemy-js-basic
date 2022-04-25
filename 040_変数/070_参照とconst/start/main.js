// 参照とconst

// プリミティブ値の再代入
const a = 'hello';
// aからhelloへの参照はロックされていて、参照を変更することができない

// a = 'bye'; // error: Assignment to constant variable.



// オブジェクトの再代入
const b = {
  prop: 'hello'
}
// bからオブジェクトへの参照がロックされている

// b = {}; // error: Assignment to constant variable.
// 新しいオブジェクトに参照を貼りなおすことはできない

b.prop = 'bye'; // プロパティの変更はok
console.log(b);

// オブジェクトの再代入はできないが、プロパティの変更は可能！！