/** 
 * mapとset
 * 
 * データを管理するための入れ物。（コレクションと呼ぶことがある）
 * 
*/


/**
 * ObjectとMapの違い
 * 
 * Object キー：文字列、for...in、for...ofでのループ不可
 * Map キー：制約なし（数値、関数も可能）、for...inでのループ不可、for...of
*/

/**
 * ArrayとSetの違い
 * 
 * Array 重複値を持てる、for...in、for...of
 * Set 重複値を持てない、fort...inでのループ不可、for...of
*/

console.log('---------- map ----------');

const map = new Map(); // Mapのコンストラクタからインスタンス化を行い、mapオブジェクトを生成
console.log(map);

const key1 = {};
map.set(key1, 'value1'); // キー、値
console.log(map.get(key1)); // キーを渡して値を取得　出力結果：value1

//const key1test = {};
//map.set(key1test, 'value1'); // 参照を利用して値をセットしている
//console.log(map.get({})); // 新しいオブジェクトが生成される。key1test = {}のオブジェクトは別物。結果はundefined


const key2 = function(){}
map.set(key2, 'value2');
console.log(map.get(key2)); // value2

let key3 = 0;
map.set(key3, 'value3');
console.log(map.get(key3)); // value3

//let key3test;
//map.set(key3test = 0, 'value3');
//console.log(map.get(key3test)); // value3


let key3hoge;
map.set(key3hoge = 0, 'value3'); // 変数に入っている値がプリミティブ型の場合、値そのものへの参照を変数が保持している
console.log(map.get(0)); // value3を取得できる


map.delete(key3hoge);
console.log(map.get(0)); // undefined

console.log('----- map (of) -----');

for(const [k, v] of map){
  console.log(k, v);
}

console.log('----- map (in) -----');

for(const k in map){
  console.log(k); // 出力されない
}

console.log(map); // Entriesに格納される





console.log('---------- set ----------');

const s = new Set();
s.add(key1);
// s.add(key1); 重複させたものを記述しても、ループされるのは一つだけ
s.add(key2);
s.add(key3);
s.delete(key3);

console.log(s.has(key2)); // 値があるかを確認する　true
console.log(s.has(key3)); // false

// setは添え字を指定して特定の値を取得できない。する場合は配列に戻す
const arry = Array.from(s);
console.log(arry);
console.log(arry[0]);

const arry2 = [...s]; // スプレッド構文で表す場合
console.log(arry2);

console.log('----- set (of) -----');

for(let k of s) {
  console.log(k)
}