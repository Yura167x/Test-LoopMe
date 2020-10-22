var i=0;
    var image2=document.getElementById("image2");
    var imgs2=new Array('./img/P_Charge3_Lilac.png','./img/P_Charge3_Black.png','./img/P_Charge3_Blue.png');
    function imgsrc2() {
    i++;i%=imgs2.length;
    image2.src = imgs2[i];
}