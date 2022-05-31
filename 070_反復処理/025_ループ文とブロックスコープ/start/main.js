/**
 * ループ文とブロックスコープ
*/

for(let i = 0; i < 5; i++){
  const j = i * 2;
  console.log(j);
}

/* 
const 再代入、再宣言できないが、エラーになっていない。
ループ文ではブロックスコープが１ループごとに切り替わっている。
*/



for(let i = 0; i < 5; i++){
  const j = i * 2;
  setTimeout(function(){
    console.log(j); // 1秒後に0 2 4 6 8
  }, 1000);
}
/* 
constはブロックスコープが適用される。かつ各ループのjが宣言される。
jはループごとに異なる変数となる。
jの変数が保持されるメモリ空間は別のものになっている。

console.logからみたレキシカルスコープのjは各ループごとに変わっている。
*/



// varの場合
// var j; varをfor文の外で宣言しているのと同じになる。
for(let i = 0; i < 5; i++){
  var j = i * 2; // ★varはブロックスコープをとらない！！！！
  setTimeout(function(){
    console.log(j); // 8が５回出力される
  }, 1000);
}

/**
 * varの場合、8が５回出力される理由
 * var j;
 * for(let i = 0; i < 5; i++){
    j = i * 2;
    setTimeout(function(){
      console.log(j);
    }, 1000);
  }
  1秒後にはループが終わりきって、jの値は８となっている。
  ８を５回分出力することになる。
*/



// letの場合
for(let i = 0; i < 5; i++){
  let j = i * 2;
  setTimeout(function(){
    console.log(j); // 1秒後に0 2 4 6 8
  }, 1000);
}

let h;
for(let i = 0; i < 5; i++){
  h = i * 2;
  setTimeout(function(){
    console.log(h); // 8が５回出力される
  }, 1000);
}