$(document).ready(function () {
    // 컨테이너 폭을 400px로 설정.
    $('.task3-container').css({
        'width': '400px',
    });

    const btn = document.getElementById('task3-btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // 필요한 필드와 오류 메시지 요소 가져오기
        const usernameInput = document.getElementById('task3-username');
        const passwordInput = document.getElementById('task3-password');
        const emailInput = document.getElementById('task3-email');
        const idError = document.querySelector('.task3-id-error');
        const pwError = document.querySelector('.task3-pw-error');
        const emailError = document.querySelector('.task3-email-error');

        // 오류 메시지 초기화
        idError.innerHTML = '';
        pwError.innerHTML = '';
        emailError.innerHTML = '';

        // 입력값 가져오기
        const username = usernameInput.value;
        const password = passwordInput.value;
        const email = emailInput.value;

        // 아이디 필드 검증
        if (username === '') {
            idError.innerHTML = '* 아이디는 필수 정보입니다.';
        }

        // 비밀번호 필드 검증
        if (password === '') {
            pwError.innerHTML = '* 비밀번호는 필수 정보입니다.';
        } else {
            // 비밀번호에 대문자, 소문자, 특수문자(@!%) 중 하나를 포함하는지 확인
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@!%]).*$/;
            if (!passwordRegex.test(password)) {
                pwError.innerHTML = '* 비밀번호에는 대문자, 소문자, 특수문자 (@,!,%) 중 하나를 포함해야 합니다.';
            }
        }

        // 이메일 필드 검증
        if (email === '') {
            emailError.innerHTML = '* 이메일은 필수 정보입니다.';
        }

        // 유효성 검사를 통과하면 로그인 성공 페이지로 이동
        if (idError.innerHTML === '' && pwError.innerHTML === '' && emailError.innerHTML === '') {
            window.location.href = 'success.html';
        }
    });
});
$('input[type="text"], input[type="password"]').focus(function () {
    // 포커스 받으면 테두리 색상 #03c75a로 변경
    $(this).css("border-color", "#03c75a");
    $(this).css("outline", "none"); // 브라우저 기본 outline 제거
});

   // 포커스 해제 시 테두리 색상 초기화
   $('input[type="text"], input[type="password"]').blur(function () {
    $(this).css("border-color", "black");
});