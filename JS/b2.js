/**Mô hình 3 khối
 * Khối 1: Dữ liệu input
 *  cho 5 số nguyên 
 *  biến 5 số nguyên (num1,num2,num3,num4,num5)
 * Khối 2: Các bước xử lý
 *  B1: Khai báo biến và tạo giá trị input
 *  B2: Tạo 5 số (num1,num2,num3,num4,num5)
 *  B3: tính trung bình 5 số = (num1 + num2 + num3 + num4 + num5)/5 
 * Khối 3:output kết quả hiển thị
 *  Trung bình của 5 số
 * 
 */
function trungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var trungBinh = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;
    console.log(num1,num2,num3,num4,num5,trungBinh);
    document.getElementById("result").innerHTML= "Trung bình: " + trungBinh
}
document.getElementById("btnTB").onclick = trungBinh