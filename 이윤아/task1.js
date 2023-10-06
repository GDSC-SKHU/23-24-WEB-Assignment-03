$(document).ready(function () {

    // 컨테이너 폭을 400px로 설정하고 중앙 정렬
    $('#login_div1').css({
        'width': '400px',
        'margin': '0 auto',
    });

    // Input 태그의 border-radius를 5px로 지정
    $('input[type="text"], input[type="password"]').css('border-radius', '5px');

    $('input[type="text"], input[type="password"]').focus(function () {
        // 포커스 받으면 테두리 색상 #03c75a로 변경
        $(this).css("border-color", "#03c75a");
        $(this).css("outline", "none"); // 브라우저 기본 outline 제거
    });

    // 포커스 해제 시 테두리 색상 초기화
    $('input[type="text"], input[type="password"]').blur(function () {
        $(this).css("border-color", "black");
    });

    $(document).ready(function () {
        $('#login_form').submit(function (e) {
            e.preventDefault();

            var id = $('#id').val();
            var password = $('#pw').val();

            // 아이디와 비밀번호 유효성 검사
            if (id === '') {
                alert('아이디를 입력하세요.');
            } else if (password === '') {
                alert('비밀번호를 입력하세요.');
            } else {
                // 로그인 성공 시 success.html로 이동
                window.location.href = 'success.html';
            }
        });
    });
});
