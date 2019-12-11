function getData() {
    let sanpham = JSON.parse(localStorage.getItem('User-Data-1'));
    document.getElementById('sp-1').innerHTML=
    '<h3>'+sanpham[0].a+'<h3><br>'+'<img src='+sanpham[0].b+'width="100%" height="auto">'+'<br><p>'+sanpham[0].c+'<p>';
}
