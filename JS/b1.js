/** Mô hình 3 khối
 * Khối 1: Dữ liệu đưa vào
 * Biến: songayLam,luongNgay
 * Công thức tính: Số ngày * lương 1 ngày
 * Khối 2: Các bước xử lý
 *  B1:Khai báo biến và giá trị input
 *  nhập lương ngày
 *  nhập soNgayLam 
 *  B2: Lập công thức tính toán
 *      Tổng lương nhận = lương ngày * số ngày làm    
 * Khối 3: Ouput (Kết quả đạt được)
 *  Tổng lương nhận
 */

function TienCong() {
    var luongNgay = document.getElementById("luongNgay").value ;
    var soNgaylam = document.getElementById("soNgayLam").value;
    console.log(luongNgay,soNgaylam)
    var tongLuong = luongNgay * soNgaylam;
    console.log(tongLuong);
    document.getElementById("txtResult").innerHTML = "Tổng lương nhận: " + tongLuong
}
document.getElementById("btnLuong").onclick= TienCong;