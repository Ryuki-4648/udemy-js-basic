a();

function a() {
  let c = 1;
  console.log(c);

  d();
  function d(){
    console.log('d is called');
  }

  console.log('a is called');
}

const b = 0;

/**
 * ブラウザ＞Source
 * let c = 1のところにブレイクポイントをおいてcntr + Rを押し、処理を中断させる
 * この時点ではlet c = 1;は宣言が完了していない状態。未定義の状態。
 * 
 * let ,constを使った変数宣言ではホイスティングでundefinedが設定されないが・・・
 * 
 * 
 * JavaScriptエンジンごとに挙動が異なる例
 * 
 * < Scopeの確認 >
 * Chromeの場合(V8エンジン)
 * c:undefined
 * 
 * FireFoxの場合(スパイダーモンキー)
 * c:uninitialized
 */