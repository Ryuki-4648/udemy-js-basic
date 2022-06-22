/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 * 
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 * 
 * の値が順番にコンソールに表示されます。
*/


function* genStep({min = 0, max = 20, step = 1} = {}){ // 初期値 ={}引数がわたって来なかった時のデフォルト値
  console.log(min,max,step);

  for(let i = min; i <= max; i += step) {
    yield i;
  }

}


genStep({min: 4})
genStep()


const it = genStep({min: 4, max: 10, step: 2});
for(let value of it){
  console.log(value);
}

/*
自分の回答
function* genStep(min = 0, max = 10, step = 1){
  let i = 0;

  while( i < max) {
    yield i += step
  }
  return;
}

const it = genStep({min: 4, max: 10, step: 2});
for(let value of it){
  console.log(value);
}
*/