/*'use strict';*/

/**
 * プロパティとディスクリプター
 * 
 * 
 * オブジェクトを定義した場合、各プロパティにはvalueを設定する
 * ほかにも設定値を保持している
 * →　configurable, enumerable, writable
 * 
 * 4つの設定値のことをディスクリプターと呼ぶ
*/


/**
 * プロパティの設定値
 * 
 * value：値
 * configurable：設定変更可能性。プロパティの設定変更ができるかどうか
 * enumerable：列挙可能性。ループを使った場合そのプロパティが参照されるかどうかを設定。
 * writable：値の変更可能性。
*/


const obj = {
  prop: 0
};
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor); // {value: 0, writable: true, enumerable: true, configurable: true}



const obj2 = {};
Object.defineProperty(obj2, 'prop', {
  value: 0,
  witable: true
})

obj2.prop = 1;
console.log(obj2.prop); // 0のまま。エラーは出ない。'use strict'つけるとエラーになる。

const descriptor2 = Object.getOwnPropertyDescriptor(obj2, 'prop');
console.log(descriptor2); //{value: 0, writable: false, enumerable: false, configurable: false}
// 設定変更ができない、値の書き換えができない




const obj3 = {};
Object.defineProperty(obj3, 'prop', {
  configurable:  true,
  value: 0,
  writable: true // 書き換え可能にする
})

Object.defineProperty(obj3, 'prop', {
  enumerable: true
})

obj3.prop = 1;
console.log(obj3.prop); // 1 書き換えができるようになった

const descriptor3 = Object.getOwnPropertyDescriptor(obj3, 'prop');
console.log(descriptor3);