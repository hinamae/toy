
// ポップアップのセッティング
function popupSetting(){
    let popup = document.getElementById('popup');
    if(!popup) return;

    let bgBlack = document.getElementById('bg-black');
    let closeBtn = document.getElementById('close-btn');
    let showBtn= document.getElementById("show-btn")


    popUp(bgBlack);
    popUp(closeBtn);
    popUp(showBtn);

    function popUp(elem){
        if(!elem) return;
        elem.addEventListener("click",function(){
            popup.classList.toggle('is-show');
        });

    }


}

popupSetting();