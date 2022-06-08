/**
 * イテレーター
 * 
 * 反復操作を行う際に使用するオブジェクト。
 * 
 * 決められたルールがある。
 * nextメソッドを必ず保持し、これはオブジェクトを返却する。
 * done：ループを継続するかどうか
 * value：返却する値
*/


function genIterator(max = 10){ // max=10で上限値のデフォルトを設定する
  let i = 0;

  // イテレーター
  return {
    next: function(){
      if (i >= max) {
        return {
          done: true // value設定しなくて良い
        }
      } else {
        return {
          done: false, // ループを継続
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);

// itをwhile文の中で使用
let a = it.next(); // aを初期化
//console.log(a.done); false
while((!a.done)){  // aのdoneがfalseのときにノット演算子によってtrueになり、ループ継続される
  console.log(a.value); // 0から9まで
  a = it.next();
}

console.log(it.next());
console.log(it.next());
console.log(it.next());



const obj = {
  [Symbol.iterator]: genIterator
}

for(const i of obj) {
  console.log(i); // 0から9まで
}

// ループ回数を変更したい場合 bindメソッド
const obj2 = {
  [Symbol.iterator]: genIterator.bind(null, 6) // bindを使って引数を固定する
}
for(const i of obj2) {
  console.log(i); // 0から5まで
}



// インスタンス化の際に反復可能オブジェクトを初期値をして代入すると、インスタンスに対して初期値の設定が行える
const s = new Set(obj);
console.log(s);