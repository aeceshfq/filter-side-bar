function filterHideShow(){
    __el("filter--contents").classList.toggle("hide");
    __el("filter--right").classList.toggle("hide");
    var el = __el("filter--hide-or-show");
    var innerHTML = el.innerHTML.trim();

    if(innerHTML.toLocaleLowerCase() == "hide"){
        el.innerHTML = "Show";
    }
    else{
        el.innerHTML = "Hide";
    }
}

function __el(el){
    return document.getElementsByClassName(el)[0];    
}

function _el(el){
    return document.getElementById(el);  
}
