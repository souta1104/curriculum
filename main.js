// 要件：ユーザーを登録できる機能を作成します。

class User {
    // 名前とメールアドレスのプロパティを持ったコンストラクタを作成してください。
    constructor(name,mailadress) {
        this.name = name;
        this.mailadress = mailadress;

    }
}
let watanabe = new User('watanabe', 20);
console.log(watanabe.name);



// ユーザー情報を保存する配列を作成してください。
let users = [];
// ユーザー情報を登録する関数を作成してください。
function registerUser(name,email) {
   let user =  {
    name: name,
    email: name,
   } ;
    
}


    // nameフィールドの値を取得してください
    // emailフィールドの値を取得してください。

    // 登録されているユーザーを取得してください。
    
    // メールアドレスの重複を確認してください。
    // 既に登録済みの場合、登録しようとしたメールアドレスをを含む重複している旨のメッセージを出力してください。
    // 未登録の場合はユーザー情報を配列に追加してください。    

    // 登録後にnameフィールドの値を削除してください
    // 登録後にemailフィールドの値を削除してください


// 登録されたユーザー情報を1件ずつコンソール出力する関数を作成してください。
function findUser() {
    
}

