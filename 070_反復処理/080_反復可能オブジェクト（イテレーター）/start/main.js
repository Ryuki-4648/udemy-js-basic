/**  
 * 反復可能オブジェクト（イテレーター）
*/

/*
const obj2 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

const items2 = Object.entries(obj2); // 配列に変換
for (let item2 of items2) { // 配列をfor...ofループ
	console.log(item2);
}
*/






const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function(){
  console.log(this);

  const keys = Object.keys(this); // ここのthisが欲しい
  console.log(keys); // プロパティが配列になったものが格納される ['prop1', 'prop2', 'prop3']
  let i = 0;
  let _this = this; // thisの参照を格納する

  return {
    next(){
      let key = keys[i++];
      console.log(this); // {next: ƒ}
      console.log(_this); // プロパティにアクセスできるようになった {prop1: 'value1', prop2: 'value2', prop3: 'value3'}
      return {
        value: [key, _this[key]],
        done: i > keys.length
      }
    }
  }
}

for (let [k, v] of items) {
	console.log(k, v);
}


