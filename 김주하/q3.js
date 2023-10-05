// 비밀번호 검사 조건, 인터넷 서치
var passwordPattern = /^(?=.*[a-z])|(?=.*[A-Z])|(?=.*[@!%]).*$/;

var require_info = false; //분기 조건

function validateForm(e) {
    console.log(e);
   // e.preventDefault();

    // 변수 생성
    var inputId = document.getElementById("inputId").value;
    var inputPw = document.getElementById("inputPw").value;
    var inputEmail = document.getElementById("inputEmail").value;

    //조건에 맞으면 경고창 뜨게 만듬 none에서 block
    if (inputId === "") {
        document.getElementById("alertId").style.display = "block";
    }else if (inputPw === "") {
        document.getElementById("alertPw").style.display = "block";
    }else if (inputEmail === "") {
        document.getElementById("alertEmail").style.display = "block";
    }else if(!passwordPattern.test(inputPw)) {
        document.getElementById("alertPw2").style.display = "block";
    }else{
        require_info = true;
        clickHandler();
    }

}


function clickHandler() {
    console.log('call');
    console.log(require_info);
    // console.log(inputPw, inputId, inputEmail);

    // 만약에 모든게 통과되면 loginform의 success로 넘어가게
    // if (require_info === true) {
    //     // document.getElementById("loginFome").submit();
    //     console.log('login');

        window.location.href = './sucess.html';
    // }
}


window.onload = function() {
   
    // const btn = document.querySelector(".btn_login");
    // btn.addEventListener("click", clickHandler);


    // console.log('a');
    document.getElementById("alertId").style.display = "none";
    document.getElementById("alertPw").style.display = "none";
    document.getElementById("alertEmail").style.display = "none";
    document.getElementById("alertPw2").style.display = "none";

}

// window.onload = function() {

//     let btns = document.getElementsByClassName('btn_login');
//     let btn = btns[0];

//     btn.onClick = function() {
//         console.log('a')
//     }

//     console.log(btn);
// }