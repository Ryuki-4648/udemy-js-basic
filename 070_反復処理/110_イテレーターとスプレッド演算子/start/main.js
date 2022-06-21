/**
 * イテレーターとスプレッド演算子
 * 
 * スプレッド演算子
 * 反復可能や列挙可能オブジェクトの展開を行う。
 * let a = [...array]
 * 挙動はイテレーターの操作に従う
 * 
 * 残余引数
 * 実引数に渡された変数を配列にまとめる。
 * function(...args)
 * 
*/



const arry1 = [1,2,3,4,5];
const arry2 = [...arry1];

console.log(arry1); // [1, 2, 3, 4, 5]
console.log(arry2); // [1, 2, 3, 4, 5]

// スプレッド演算子を使って作成した配列は新しい配列となる。
// それぞれ別の配列となる。
console.log(arry1 === arry2); // false

// arry1は影響を受けない
arry2.push(6);
console.log(arry1); // [1, 2, 3, 4, 5]
console.log(arry2); // [1, 2, 3, 4, 5, 6]


arry3 = [...arry1, 10];
console.log(arry3); // [1, 2, 3, 4, 5, 10]

arry4 = [0, ...arry1];
console.log(arry4); // [0, 1, 2, 3, 4, 5]



// レストパラメータ
// 可変長の引数をとる場合、レストパラメータで配列に戻してあげる
function sum(...args){
  let ret = 0;
  for(let v of args) {
    console.log(v);
    //ret = ret + v;
    ret += v;
  }
  return ret;
}
const result = sum(1,2,3,4);
console.log(result); // 10




const obj1 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function*(){
  for(let key in this) {
    yield [key, this[key]];
  }
}

const arry5 = [...obj1]; // 上のObject〜の記述がないとエラーになる。obj1 is not iterable
console.log(arry5); // [Array(2), Array(2), Array(2)]


const arry6 = {...obj1}; // const obj1をそのまま格納したオブジェクトをarry6に返している
console.log(arry6);
// オブジェクトリテラルの場合はイテレーターの挙動に従わない