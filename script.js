function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function viewArticle(articleUrl) {
    window.location.href = articleUrl;
}

// 暗黑模式  
document.getElementById('darkModeToggle').addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');

    // 保存用户的偏好，比如使用localStorage
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('dark-mode','enabled');
    } else{
        localStorage.setItem('dark-mode','disabled');
    }
})

    // 检查用户之前的偏好
    if(localStorage.getItem('dark-mode')==='enabled'){
        document.body.classList.add('dark-mode');
    }