var sanpham = [];
document.getElementById('submit').onclick = function () {
    var model = document.getElementById('model').value;
    var anh = document.getElementById('img').value;
    var gia = document.getElementById('price').value;
    document.getElementById('table-1').innerHTML += '<tr> <td>' + model + '</td> <td>' + anh + '</td> <td>' + gia + '</td> <td> <input type="button" class="btn btn-primary"  value="xóa" onclick="del()"><input type="button" class="btn btn-success"  value="sửa" onclick="repair()"> </td></tr>';
    sanpham(
        {
            'model': a,
            'img': b,
            'price': c,
        }
    );
    console.log(model)
    document.getElementById('model').value = "";
    document.getElementById('img').value = "";
    document.getElementById('price').value = "";
    update();
}
function del(index) {
    console.log(index);
    sanpham.splice(index, 1);
    update();
}
function repair(index) {
    console.log(index);
    document.getElementById('model').value = sanpham[index].a;
    document.getElementById('img').value = sanpham[index].b;
    document.getElementById('price').value = sanpham[index].c;

    document.getElementById('update').onclick = function () {
        sanpham[index].a = document.getElementById('model').value;
        sanpham[index].b = document.getElementById('img').value;
        sanpham[index].c = document.getElementById('price').value;

        update();

    }
}
function sort() {
    var tg;
    for (i = 0; i < sanpham.length - 1; i++) {
        console.log(sanpham[i]);
        for (j = i + 1; j < sanpham.length; j++) {
            console.log(sanpham[j]);
            if (sanpham[i].number > sanpham[j].number) {
                tg = sanpham[i];
                sanpham[i] = sanpham[j];
                sanpham[j] = tg;
            }
        }

    }
    update();
}
function update() {
    var table = document.getElementById('table-1');
    table.innerHTML = '<tr><th>Model</th><th>Ảnh</th><th>Giá Tiền</th><th>Chức năng</th></tr>' + '';
    for (i = 0; i < sanpham.length; i++) {
        console.log(sanpham[i]);
        table.innerHTML += '<tr> <td>' + sanpham[i].a + '</td> <td>' + sanpham[i].b + '</td> <td>' + sanpham[i].c + '</td> <td> <input type="button" class="btn btn-primary"  value="xóa" onclick="del(' + i + ')"><input type="button" class="btn btn-success"  value="sửa" onclick="repair(' + i + ')"> </td></tr>';
    }

}
function add(){
    let model = document.getElementById('model').value;
    let anh = document.getElementById('img').value;
    let gia = document.getElementById('price').value;
    sanpham(
        {
            'model': a,
            'img': b,
            'price': c,
        }
    );
    localStorage.setItem('User-Data-1', JSON.stringify(sanpham));
    window.location.href = "0.html";
}