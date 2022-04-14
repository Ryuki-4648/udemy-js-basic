/**
 * JavaScriptが実行される環境　＝　JavaScriptエンジン
 * Chromeブラウザの場合は「V8」と呼ばれる。
 * SafariだとJavaScriptCore
 * 
 * V8がシェアナンバー１
 * 
 * さまざまなソフトウェアで動くjsはUniversal JavaScriptと呼ぶ
 * 
 * JavaScriptからWebAPIsを通してブラウザを操作する
 */

/**
 * コンソールで「window」と入力するとオブジェクトが表示される
 * JavaScriptエンジンによって「ウィンドウオブジェクト」が用意されている
 * 
 * この中にWEB APIが含まれる
 */


// window.alert('aa');

// window.document

/**
 * コンソールに「this」を入力すると、ウィンドウオブジェクトが生成される
 * 
 * オブジェクトへの参照を保持している
 * contextによって取得できる値が変わってくる
 */


/** 
 * グローバルオブジェクト
 * JSエンジンによって生成されるコード内のどこからでもアクセスできるオブジェクト
 * 
 * JavaScript実行前にはグローバルオブジェクトとthisが準備される
 * 
 * ブラウザのグローバルオブジェクトはWindowオブジェクトとなる
 */