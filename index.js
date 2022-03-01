
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
        // クリックが行われたタイミング
        elem.addEventListener("click",function(){
            popup.classList.toggle('is-show');
        });

    }


}

// ポップアップの実行
popupSetting();




let first_idx = 0;
// フィギュアをbox内に出す
function put_figure_hand() {
    let hand_col = ["hand_1_1","hand_1_2","hand_1_3"]
    let hand = document.createElement("img");
    // わたってきた引数を参照this.img_src
    hand.setAttribute("src",this.img_src);
    hand.setAttribute("width","30px");
    hand.setAttribute("height","50px");
    hand.setAttribute("id",hand_col[first_idx]);
    document.getElementById(hand_col[first_idx]).appendChild(hand);
    first_idx++;
}

img_col= ["img/shu.jpg","img/ho.jpg","img/tsu.jpg","img/sute.jpg"]

const img_figure_shu = document.getElementById("image_place_shu");
// addEventListenerで引数を渡す書式は第2引数のhandleEventプロパティに実行する関数を記載する
img_figure_shu.addEventListener('click', {img_src: img_col[0], handleEvent: put_figure_hand});

const img_figure_ho = document.getElementById("image_place_ho");
img_figure_ho.addEventListener('click', {img_src: img_col[1], handleEvent: put_figure_hand});


const img_figure_tsu = document.getElementById("image_place_tsu");
img_figure_tsu.addEventListener('click', {img_src: img_col[2], handleEvent: put_figure_hand});

const img_figure_sute = document.getElementById("image_place_sute");
img_figure_sute.addEventListener('click', {img_src: img_col[3], handleEvent: put_figure_hand});

