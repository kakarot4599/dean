var main = [];

 main = JSON.parse(localStorage.getItem('User-Data'))
function reDirect() {

    let a = document.getElementById("name").value
    let b = document.getElementById("tel").value
    let c = document.getElementById("email").value
    let d = document.getElementById("model2").value
    let e = document.getElementById("color2").value
    let f = document.getElementById("address").value
    let g = document.getElementById("number").value
    
 
    main.push(
        {
            'ten': a,
            'sdt': b,
            'email': c,
            'model': d,
            'color': e,
            'diachi': f,
            'soluong':g,

        }
    );

    console.log(main)

    localStorage.setItem('User-Data', JSON.stringify(main));
     window.location.href = "thongtindh.html";
}
