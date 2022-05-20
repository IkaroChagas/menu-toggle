function OnOff() {
   
    if (document.getElementById("menu-area").style.width == '200px') {
        document.getElementById("menu-area").style.width ='0px';
    } // se o "menu-area" for igual a 200px ele estará aberto, e se for 0px ele estará fechado.
     else {
        document.getElementById("menu-area").style.width = '200px';
    }  // caso o contrário se a condição for satisfeita em 0px ele estará em 200px.
}