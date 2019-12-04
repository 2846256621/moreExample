function checkSubmit(){
    var studentNumber = document.getElementById("number").value;
    var psw = document.getElementById("password").value;
    if(studentNumber === ''){
        alert('请输入学号');
        return false;
    }
    if(psw === ''){
        alert('请输入密码');
        return false;
    }
    return true;
}








