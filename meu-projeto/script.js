function showPage(pageId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    const page = document.getElementById(pageId);
    page.classList.add('active');
}