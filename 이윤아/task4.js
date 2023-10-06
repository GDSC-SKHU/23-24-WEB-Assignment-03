$(document).ready(function () {
    const pageLinks = $('#pageLinks');
    const pagesContainer = $('#pages');

    const pageContents = ["1", "2", "3", "4", "5"];

    // 페이지 링크와 내용 생성
    for (let i = 0; i < pageContents.length; i++) {
        const pageNum = i + 1;
        const pageLink = $(`<li><a href="javascript:void(0);" style="color: black">&nbsp&nbsp${pageNum}페이지</a></li>`);
        pageLinks.append(pageLink);

        const pageElement = $(`<div id="page${pageNum}" class="page-element"><span class="page-number">${pageNum}</span></div>`);
        pagesContainer.append(pageElement);
    }

    // Nav의 폭을 20%로 설정
    $('nav').css('width', '20%');

    // 페이지 선택시 해당 페이지의 숫자를 보이게 구현
    pageLinks.find('li').click(function () {
        const pageNum = $(this).index() + 1;
        pagesContainer.children().hide();
        $(`#page${pageNum}`).show();
    });
});
