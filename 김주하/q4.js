function showPage(pageNumber) {
    // 숨겨진 페이지를 보이게 설정
    for (let i = 1; i <= 5; i++) {
        document.getElementById('page' + i).style.display = 'none';
    }
    document.getElementById('page' + pageNumber).style.display = 'block';
    
    // nav 태그의 폰트 색을 검정(블랙)으로 변경
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.style.color = 'black';
    });
}

// $(document).ready(function() {
//     $(".page-link").click(function() {
//         var pageNumber = $(this).data("page");

//         // 숨겨진 페이지를 보이게 설정
//         $(".page div").hide();
//         $("#page" + pageNumber).show();

//         // nav 태그의 폰트 색을 검정(블랙)으로 변경
//         $(".page-link").css("color", "black");

//     });
// });

// $(document).ready(function() {
//     // 초기에 모든 링크의 폰트 색을 검정(블랙)으로 설정
//     $(".page-link").css("color", "black");

//     $(".page-link").click(function() {
//         var pageNumber = $(this).data("page");

//         // 숨겨진 페이지를 보이게 설정
//         $(".page div").hide();
//         $("#page" + pageNumber).show();

//         // 클릭한 링크의 폰트 색을 검정(블랙)으로 변경
//         $(this).css("color", "black");
//     });
// });