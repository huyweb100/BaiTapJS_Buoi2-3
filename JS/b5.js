/**Mô hình 3 khối
 * Khối 1:Input
 *  Số nguyên dương có 2 chữ số
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến và các giá trị input (số có 2 chữ số)
 *  B2: Tạo và tách 2 chữ số ra:
 *      hàng chục = số /10
 *      hàng đơn vị = số % 10
 *  B3: Tính tổng 2 số = hàng chục + hàng đơn vị
 * Khối 3: hiển thị kết quả tổng 2 chữ số
 */

function tong2so(params) {
    var so = document.getElementById("so").value;
    var hangChuc = Math.floor(so/10);
    var hangDonVi = so % 10;
    var tong2so =  hangChuc + hangDonVi;
    document.getElementById("result-tong2so").innerHTML = "tổng 2 số: " + tong2so;
}
document.getElementById("tong2so").onclick = tong2so;