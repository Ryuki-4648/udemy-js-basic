const a = {
	prop: 0
}

const b = {
	prop: 0
}

console.log(a === b); // false
console.log(a == b); // false

/**
 * オブジェクトの皮革
 * それぞれの変数に入っているのは、オブジェクトへの参照である。
 * 
 * オブジェクトの参照同士を確認し、参照先のオブジェクトが変わってくるためfalseとなる
 * 
 * オブジェクトを比較するときは、その中にあるプロパティを比較すること
*/

console.log(a.prop === b.prop); // true


/**
 * 別々に宣言したオブジェクトは別物である
*/


const c = a;
console.log(a === c); // true

/**
 * aとcの参照先のオブジェクトが同じ
*/