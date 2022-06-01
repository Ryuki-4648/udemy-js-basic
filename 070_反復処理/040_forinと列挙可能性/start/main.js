/** 
 * for...in と列挙可能性
 * 
 * 各プロパティが持つディスクリプターに含まれる「enumerable」の設定値
 * trueの場合for...inで列挙される
 * 
 * 
 * ◎for...in
 * 列挙可能プロパティに対して、順不同（追加した順とは限らない）で反復処理を実行する。
 * プロトタイプチェーン（プロトタイプの「多重形成」）内も列挙対象となる。
 * 自分自身に設定されているプロパティを列挙したい場合　→　Object.hasOwnProperty()
 * 
 * ※　[[Prototype]]（動画では__proto__）が多階層で重なっている＝プロトタイプチェーン
 * 
 * ◎注意
 * Symbolとfor...in
 * Symbolで定義したプロパティはfor...inで列挙隊長とならない。
*/




console.log('------ obj ------');


const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
for(let key in obj) {
  console.log(key); // プロパティが出力される　prop1, prop2, prop3
  console.log(key, obj[key]); // prop1 value1, prop2 value2, prop3 value3
}


console.log('------ obj2 ------');


const obj2 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
Object.prototype.method = function(){}
for(let key in obj2) {
  console.log(key);
  console.log(key, obj2[key]); // method ƒ (){}も列挙対象になる
}





console.log('------ obj3 ------');
// methodを列挙対象にしないようにする

const obj3 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
Object.prototype.method = function(){}
Object.defineProperty(Object.prototype, 'method', {
  enumerable: false
});
const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method'); // ディスクリプターを確認するためのメソッド
console.log(d); // {writable: true, enumerable: false, configurable: true, value: ƒ} enumerableがfalseなので列挙対象ではない

for(let key in obj3) {
  console.log(key);
  console.log(key, obj3[key]);
}


/**
 *  Object.defineProperty(Object.prototype, 'method', {
    enumerable: false
  })

  第一引数：Object.prototype
  第二引数：'method'　メソッドの名前
  第三引数：enumerable: false　列挙対象に挙がらないようにする
*/



console.log('------ obj4 ------');
// prop1を列挙対象にしないようにする

const obj4 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
Object.prototype.method = function(){}
Object.defineProperty(obj4, 'prop1', {
  enumerable: false
});

for(let key in obj4) {
  console.log(key);
  console.log(key, obj4[key]); // prop1が外れている
}





console.log('------ obj5 ------');

const obj5 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
Object.prototype.method = function(){}

for(let key in obj5) {
  if(obj5.hasOwnProperty(key)){
    console.log(key, obj5[key]); // prototypeに含まれるメソッドは継承したものなので、hasOwnPropertyではfalseが返ってくる
  }
}
// methodが列挙対象から外される




console.log('------ obj6 ------');
// Symbol

const s = Symbol();

const obj6 = {
	prop1: 'value1',
	prop2: 'value2',
  prop3: 'value3',
  [s]: 'value4' // []で変数をプロパティの値として使用できる
}
Object.prototype.method = function(){}
const d2 = Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty');
const e = Object.getOwnPropertyDescriptor(obj6, s);
console.log(e);

for(let key in obj6) {
  console.log(key, obj6[key]);
}

/* 
Symbolの用途：ES5で書かれているものを問題なく動作させる役割。
for..inループで列挙対象に上がってくるとバグを産むため、Symbolは列挙対象にあがらない。
*/