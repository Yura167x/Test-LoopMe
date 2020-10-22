var i=0;
    var image3=document.getElementById("image3");
    var imgs3=new Array('./img/P_HR_White.png','./img/P_HR_Lilac.png','./img/P_HR_Black.png');
    function imgsrc3() {
    i++;i%=imgs3.length;
    image3.src = imgs3[i];
}