/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 * 
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 * 
 * の値が順番にコンソールに表示されます。
*/



/*
自分の回答
function genStep(min = 4, max = 10, step = 2){
  let i = 0;
  return {
    next: function(){
      if(i > max) {
        return {
          done: true
        }
      } else if (i < min) {
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
*/

　

// こたえ
function genStep(min = 0, max = 20, step = 1){ // 無限ループを防ぐために20に設定しておく
  let i = min - step; // minのままだと6,8,10となる。step分を引いておく。

  return {
    next() {
      i = i + step; // i += stepでもよい。stepが追加されてからvalueとなり返却される。
      if(i > max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i
        }
      }
    }
  }
}



const it = genStep(4, 10, 2);
let a = it.next();

while(!a.done) {
console.log(a.value);
a = it.next();
}


console.log(a.done); // true