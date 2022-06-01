/**  
 * 配列とループ文
*/

const arry = [1, 2, 3, 4, 5];
// const arrry = [1, 2, 3, 0, 4, 5]; falsyな値が入っていると、途中でループが終わってしまう。

// for
for(let i = 0; i < arry.length; i++){
  console.log(arry[i]);
}

// while
let j = 0;
while(j < arry.length){
  console.log(arry[j]);
  j++
}

// while
let v, i = 0; // let v; let i = 0;と同じ意味。
while (v = arry[i++]){
  console.log(v);
}
/**
 * i++後方インクリメント
 * 渡ってきた値を結果として返してから+1される
 * 
 * 0がarryに渡され0番目の値がvに格納される。0番目→「１」。１はtruthyなのでループは継続される。
 * ２回目のループでは1が渡ってくる。arryに１が渡され、iを+１する。
 * 
 * arry[5]はundefined
 * falsyな値なのでwhileループを抜ける。
 * 
*/