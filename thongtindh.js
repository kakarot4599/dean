
function getData() {
    let arr = JSON.parse(localStorage.getItem('User-Data'));
  console.log()
   
    document.getElementById('table-display').innerHTML =
        ' <table class="table table-bordered" id="table" >'
        + '<thead>'
        + '<tr>'
        + '<th>Họ Tên</th>'
        + '<th>Số điện thoại</th>'
        + '<th>Email</th>'
        + '<th>Model</th>'
        + '<th>Color</th>'
        + '<th>Địa chỉ</th>'
        + '<th>Số lượng</th>'
        + "</tr>"
        + '</thead>'
        + '<tbody class="table-content">'
        + '<tr> <td>' + arr[arr.length-1].ten + '</td> <td>' + arr[arr.length-1].sdt + '</td> <td>' + arr[arr.length-1].email + '</td> <td>' + arr[arr.length-1].model
        + '</td> <td>' + arr[arr.length-1].color + '</td> <td>' + arr[arr.length-1].diachi + '</td><td>'+ arr[arr.length-1].soluong+'</tr> </td>'
        + '</tbody>'
        + '</table>'

        let products = JSON.parse(localStorage.getItem('product'));
        let tongtien = 0;

        
        
        for(let i = 0; i < products.length; i++){
            if(arr[0].model === products[i].name){
                tongtien = products[i].price * arr[0].soluong;
                console.log(tongtien)
            }
        }

        document.getElementById('Total-Money').innerHTML = 'Tổng tiền: '+ "" + tongtien + ' VNĐ';
}

