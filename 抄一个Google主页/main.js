var SearchText = document.querySelector("#SearchT");
var SearchButton = document.getElementById('SearchB');


function SearchInGoogle() {
    let url = "https://www.google.com/search?q=" + SearchText.value;
    window.open(url);
}

SearchButton.onclick = function() {
    SearchInGoogle();
}

SearchText.onkeydown = function() {
    if(event.key == 'Enter') {
        SearchInGoogle();
    }
}

//功能实现部分参考资料:
https://blog.csdn.net/Xmumu_/article/details/119807027 ;
https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1 ;
https://blog.csdn.net/qq_43968080/article/details/103186302 ;
