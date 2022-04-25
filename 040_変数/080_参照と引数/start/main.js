let a = 0;

function fn1(arg1){
  arg1 = 1;
  console.log(a, arg1);
}

/**
 * 間でこの記述が入っているのと同じ
 * let arg1 = a;
 * arg1 = 1;
 * console.log(a, arg1);
*/

fn1(a);


/**
 * fn1(arg1)にはaの値「0」が渡される
 * そのあと1に変更されている
 * 
 * console.log(a, arg1);
 * arg1=1
 * aはレキシカルスコープに存在するため、let a = 0;の値を参照している。
*/




let b = {
  prop: 0
}

function fn2(arg2){
  arg2.prop = 1;
  console.log(b, arg2); // 1 1
}

fn2(b);



function fn3(arg2){
  arg2 = {};
  console.log(b, arg2); // 0 {}
}

fn3(b);