/** Mô hình 3 khối
 * Khối 1:Input 
 *  Nhập chiều dài và chiều rộng của Hình chữ nhật
 *  Biến: canhDai,canhRong
 * Khối 2:Các bước xử lý
 *  B1: Khai báo biến và tạo giá trị input
 *  Tạo cạnh dài và cạnh rộng
 *  Tính chu vi hình chữ nhật = (dài + rộng)*2
 *  Tính diện tích hình chữ nhật = dài * rộng
 * Khối 3: Output
 *  Kết quả chu vi hình chữ nhật
 *  Kết quả diện tích hình chữ nhật
 */

function ketQua(params) {
    var canhDai = document.getElementById("canhDai").value;
    var canhRong = document.getElementById("canhRong").value;
    var chuVi = (Number(canhDai) + Number(canhRong)) *2;
    var dienTich = Number(canhDai) * Number(canhRong);
    console.log(canhDai,canhRong,chuVi,dienTich);
    document.getElementById("result-HCN").innerHTML = "chu vi: " + chuVi + " diện tích: " + dienTich
    
}
document.getElementById("ketQua").onclick = ketQua
