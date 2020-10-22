var i=0;
    var image1=document.getElementById("image1");
    var imgs1=new Array('./img/P_Versa_Pink.png','./img/P_Versa_Grey.png','./img/P_Versa_Black.png');
    function imgsrc1() {
    i++;i%=imgs1.length;
    image1.src = imgs1[i];
}