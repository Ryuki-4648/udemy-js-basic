/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
*/

/*
自分の回答
class Calculator{
  constructor(num){
    this.num = num;
  }
  set(){
    console.log(this.num);
  }
  minus(minusNum){
    console.log(`${num} - ${minusNum}`);
    return this;
  }
  multiply(){
    console.log(`${num} * ${multiplyNum}`);
    return this;
  }
  devide(devideNum){
    console.log(`${num} / ${devideNum}`);
    return this;
  }
  plus(plusNum){
    console.log(`${num} + ${plusNum}`);
    return this;
  }
}

const calc = new Calculator(10);
*/




// 回答
class Calculator {
  constructor() {
    this.val = null; // 2回目のvalが呼ばれるまではどこかの保存領域に値を置いておく。nullで初期化。
    this._operator; // _付き：このクラスの中でのみ使用するという目印
  }
  set(val){
    if(this.val === null) { // 値が設定されていなかったら
      this.val = val;
    } else { // 値が設定されている場合
      this._operator(this.val, val);  // this.valはすでに設定されている
    }
    return this;
  }

  plus(){ // どんな関数を実行するのか値として保持しておく。
    this._operator = function(val1, val2){
      const result = val1 + val2;
      this._equal(result);
    }
    return this;
  }

  minus(){
    this._operator = function(val1, val2){
      const result = val1 - val2;
      this._equal(result);
    }
    return this;
  }

  multiply(){
    this._operator = function(val1, val2){
      const result = val1 * val2;
      this._equal(result);
    }
    return this;
  }

  divide(){
    this._operator = function(val1, val2){
      const result = val1 / val2;
      this._equal(result);
    }
    return this;
  }

  _equal(result) {
    this.val = result; // 結果を次の演算の値として使用する
    console.log(result);
  }
}

const calc = new Calculator();

/*
calc.set(10)
  .plus() // plus()が呼ばれた時点では次の「３」が渡ってきていない
  .set(3) // 13
*/

calc.set(10) // 計算しない
	.minus()
	.set(3) // ２回目以降のsetは計算を行う
	.multiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
