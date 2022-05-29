/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

function loginController(user) {
  if (user.login()
    && user.checkRoll()
    && user.redirect()) {
    console.log('login success');
  } else {
    console.log('login failed');
  }
}


class User {
  constructor(user){
    this.user = user;
    this.redirectTo = '/';
  }
  login(){
    console.log(`User : ${this.user}`);
    return true; // 成功した時失敗した時true/falseで結果を返す
  }
  checkRoll(){
    console.log('you have normal roll');
    return true;
  }
  redirect(){
    console.log(`redirect : ${this.redirectTo}`);
    return true;
  }
}

console.log('----- User -----');
loginController(new User('Bob'));
/**  
 *  User : Bob
    main.js:67 you have normal roll
    main.js:71 redirect : /
    main.js:50 login success
*/




class AdminUser extends User {
  constructor(user){
    super(user);
    this.redirectTo = '/admin';
  }
  checkRoll(){
    console.log('you have admin roll');
    return true;
  }
}

console.log('----- AdminUser -----');
loginController(new AdminUser('Bob'));
/**
 *  User : Bob
    main.js:94 you have admin roll
    main.js:71 redirect : /admin
    main.js:50 login success
 */



//loginController(new User('Bob'));
//loginController(new AdminUser('Bob'));


console.log('----- User -----');
const call1 = new User('Bob');
console.log(call1);
call1.login();
call1.checkRoll();
call1.redirect();

console.log('----- AdminUser -----');
const call2 = new AdminUser('Bob');
console.log(call2);
call2.login();
call2.checkRoll();
call2.redirect();