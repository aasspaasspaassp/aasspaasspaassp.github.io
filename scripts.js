function showContent(content){
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    })

    document.querySelector(`#${content}`).style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
    showContent('content_1');
    document.querySelectorAll('.butt').forEach(butt => {
        butt.onclick = function() {
            showContent(this.dataset.content);
        }
    });
});
