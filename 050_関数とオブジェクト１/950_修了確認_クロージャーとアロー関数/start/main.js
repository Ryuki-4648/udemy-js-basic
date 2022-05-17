console.log('---------- 問題1 ----------');

/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 * 
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */



// 回答
const addNumberFactory = num => value => num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);


/*
元の形

function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);
*/

// 自分の回答
const addNumberFactory2 = (num) => {
  const addNumber2 = (value) => num + value;
  return addNumber2;
}
const hoge = addNumberFactory2(5);
const result2 = hoge(10);
console.log(result2);

console.log('---------- 問題2 ----------');








/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */

 // 回答
const incrementFactory = () => {
  let num = 0;
  return () => {
    num = num + 1;
    console.log(num);
  };
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();



// 自分の回答
const incrementFactory2 = () => {
  let num = 0;
  let a = () => {
    num = num + 1;
    console.log(num);
  }
  return a;
}

const increment2 = incrementFactory2();

increment2();
increment2();
increment2();
increment2();


/*
元の形
function incrementFactory() {
    
    let num = 0;

    function a() {
        num = num + 1;
        console.log(num);
    }

    return a;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
*/
