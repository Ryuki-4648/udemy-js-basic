/*
反復可能オブジェクトの実装　ジェネレーター
*/

const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function*(){
  for(let key in this) {
    yield [key, this[key]];
  }
}

for (let [k, v] of items) {
	console.log(k, v);
}


/**
 * イテレーターの場合
 * 
 * Object.prototype[Symbol.iterator] = function(){
  console.log(this);

  const keys = Object.keys(this);
  console.log(keys);
  let i = 0;
  let _this = this;

  return {
    next(){
      let key = keys[i++];
      console.log(this);
      console.log(_this);
      return {
        value: [key, _this[key]],
        done: i > keys.length
      }
    }
  }
}
 */