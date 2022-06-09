/** 
 * ジェネレーター
 * 
 * イテレーターを生成するための特殊な関数
 * より簡略して記述可能
*/


function genIterator2(){
  return {
    next: function(){
      return {
        done: true,
        value: 1
      }
    }
  }
}
// 上のをジェネレーターに書き換えると・・・
function* gen2(){
  if(ループ継続) {
    yield 1; // イテレーターのオブジェクト部分がyieldで表現されている
  } else {
    return 2;
  }
}

/* 
yield 値;　＝ done：false、value：値　という意味。
else return 値;　＝　done:true value:値とう意味。
*/




function* gen(){
  yield 1;
  yield 2;
  return 3; // ループの終了を意味する
}

const it2  = gen(); // イテレーターをジェネレーターから作成
console.log(it2.next()); // イテレーターのnextメソッドを呼び出す。done/valueというプロパティが格納されたオブジェクトが返却される
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
/**
 * {value: 1, done: false}
 * {value: 2, done: false}
 * {value: 3, done: true}
 * {value: undefined, done: true}
*/





console.log('---------- genIterator3 ----------');

function genIterator3(max = 10){
  let i = 0;
  
  return {
    next: function(){
      if (i >= max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}




console.log('---------- ジェネレーターへの書き換え ----------');

function* genIterator(max = 10){
  let i = 0;

  while (i < max) {
    yield i++;
  }
  return; // 省略しても問題なし
}

const it = genIterator(10);

let a = it.next()
while((!a.done)){
  console.log(a.value);
  a = it.next();
}


console.log('---------- Symbol ----------');

const obj = {
  [Symbol.iterator]: genIterator
  /**
   * 以下でも可能
  
   *[Symbol.iterator](max = 10){
    let i = 0;

    while (i < max) {
      yield i++;
    }
    return; // 省略しても問題なし
  }*/
}

for(const i of obj) {
  console.log(i);
}

/**
 * このやり方でもok
 * for(const i of genIterator()) {
    console.log(i);
  }
  ジェネレーター自体が反復処理を返す
*/