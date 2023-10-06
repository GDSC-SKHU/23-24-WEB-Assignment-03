$(document).ready(function () {
    // 컨테이너 폭을 500px로 설정하고 중앙 정렬
    $('#sign_terms').css({
        'width': '500px',
        'margin': '0 auto',
    });

    // Checkbox 모두 체크 시 로그인 버튼 활성화
    $('.num1, .num2').change(function () {
        if ($('.num1:checked').length > 0 && $('.num2:checked').length > 0) {
            $('.submit-btn').prop('disabled', false).css('background-color', '#03c75a');
            $('.submit-btn').css('cursor', 'pointer');
        } else {
            $('.submit-btn').prop('disabled', true).css('background-color', 'rgba(121, 121, 121, 0.85)');
            $('.submit-btn').css('cursor', 'default');
        }
    });

    // 버튼 클릭 시 success.html로 이동
    $('.submit-btn').click(function () {
        window.location.href = 'success.html';
    });
});
