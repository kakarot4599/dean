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
}
function getData() {
    let arr = JSON.parse(localStorage.getItem('User-Data'));
    for(let i=0;i<arr.length;i++){

        document.getElementById('table').innerHTML += '<tr> <td>' + arr[i].ten + '</td> <td>' + arr[i].sdt + '</td> <td>' + arr[i].email + '</td> <td>' + arr[i].model + '</td> <td>' + arr[i].color + '</td> <td>' + arr[i].diachi + '</td><td>' + arr[i].soluong + '</tr> </td>';
    }
   
}  
