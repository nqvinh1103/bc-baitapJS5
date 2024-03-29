//Bài tập 1
function tinhDiem(){
    var diemChuan = document.getElementById('diemChuan').value
    var diemMot = document.getElementById('diemMot').value*1
    var diemHai = document.getElementById('diemHai').value*1
    var diemBa = document.getElementById('diemBa').value*1
    var tongDiem = diemMot+diemHai+diemBa+diemCongKhuVuc+diemCongDoiTuong
    var result =''
    if(tongDiem<diemChuan){
        result = 'Bạn đã rớt'
    }
    else{
        result = 'Bạn đã đậu'
    }
    document.getElementById('ketQua').innerHTML = `${result} . Tổng điểm: ${tongDiem}`
}
// Bài tập 2
function tinhTienDien(){
    var soTien = 0
    var hoTen = document.getElementById('hoTen').value
    var soKW = document.getElementById('soKW').value*1
    if(soKW<=50){
        soTien = 500*50
    }
    else if(soKW>50 && soKW<=100){
        soTien = 500*50 + 650*(soKW-50)
    }
    else if(soKW>100 && soKW<=200){
        soTien = 500*50 + 650*50 + 850*(soKW-100)
    }
    else if(soKW>200 && soKW<=350){
        soTien = 500*50 + 650*50 + 850*100 + 1100*(soKW-200)
    }
    else{
        soTien = 500*50 + 650*50 + 850*100 + 1100*150 + 1300*(soKW-350)
    }
    document.getElementById('tienDien').innerHTML = `Họ tên: ${hoTen}  Số tiền: ${soTien.toLocaleString()}`
}
// Bài tập 3
function tinhThue(){
    var hoVaTen = document.getElementById('hoVaTen').value
    var thuNhap = document.getElementById('thuNhap').value*1
    var phuThuoc = document.getElementById('nguoiPhuThuoc').value*1
    var thuNhapThue = 0
    var tienThue = 0
    thuNhapThue = thuNhap - 4000000 -(phuThuoc*1600000)
    console.log('thuNhapThue: ', thuNhapThue);
    if(thuNhapThue<=60e+6){
        tienThue = thuNhapThue*0.05
    }
    else if(thuNhapThue>60e+6 && thuNhapThue<=120e+6){
        tienThue = 60e+6*0.05 + (thuNhapThue-60e+6)*0.1
    }
    else if(thuNhapThue>120e+6 && thuNhapThue<=210e+6){
        tienThue = 60e+6*0.05 + 60e+6*0.1 + (thuNhapThue-120e+6)*0.15
    }
    else if(thuNhapThue>210e+6 && thuNhapThue<=384e+6){
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + (thuNhapThue-210e+6)*0.2
    }
    else if(thuNhapThue>384e+6 && thuNhapThue<=624e+6){
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + 174e+6*0.2 + (thuNhapThue-384e+6)*0.25
    }
    else if(thuNhapThue>624e+6 && thuNhapThue<=960e+6){
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + 174e+6*0.2 + 240e+6*0.25 + (thuNhapThue-624e+6)*0.3
    }
    else if(thuNhapThue>960e+6){
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + 174e+6*0.2 + 240e+6*0.25 + 336e+6*0.3 + (thuNhapThue-960e+6)*0.35
    }
    document.getElementById('thue').innerHTML = `<p>Họ tên: ${hoVaTen}</p> <p>Tiền thuế: ${tienThue.toLocaleString()}</p>`
}
// Bài tập 4
function tinhTienCap() {
    var maKhachHang = document.getElementById("maKhachHang").value
    var loaiKhachHang = document.getElementById("loaiKhachHang").value
    var soKetNoi = document.getElementById("soKetNoi").value*1
    var soKenh = document.getElementById("soKenh").value*1
    var tienCap = 0;
    if (loaiKhachHang === "1") { 
        tienCap = 4.5 + 20.5 + 7.5 * soKenh;
    } else if (loaiKhachHang === "2"){
        if(soKetNoi>10){
            tienCap = 15 + 75 + (soKetNoi-10)*5 + 50 * soKenh;
        }
        else{
            tienCap = 15 + 75 + 50 * soKenh;
        }
    }
    document.getElementById("tienCap").innerHTML = `Mã khách hàng: ${maKhachHang} ; Tiền cáp: ${tienCap}$`
}
function hienThiSoKetNoi(){
    var loaiKhachHang = document.getElementById("loaiKhachHang").value
    if(loaiKhachHang === '1'){
        document.getElementById('soKetNoi').style.display = 'none'
    } else if(loaiKhachHang === '2')
        document.getElementById('soKetNoi').style.display = 'block'
}

