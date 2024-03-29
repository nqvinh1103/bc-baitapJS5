// Bài tập 1
var diemCongKhuVuc;
var selectElementKhuVuc = document.getElementById('khuVuc');

selectElementKhuVuc.onchange = function() {
    var selectedValue = selectElementKhuVuc.value;
    
    if (selectedValue === '2') {
        diemCongKhuVuc = 2;
    } else if (selectedValue === '1') {
        diemCongKhuVuc = 1;
    } else if (selectedValue === '0.5') {
        diemCongKhuVuc = 0.5;
    } else {
        diemCongKhuVuc = 0;
    }
};

var diemCongDoiTuong;
var selectElementDoiTuong = document.getElementById('doiTuong');

selectElementDoiTuong.onchange = function() {
    var selectedValue = selectElementDoiTuong.value;

    if (selectedValue === 'A') {
        diemCongDoiTuong = 2.5;
    } else if (selectedValue === 'B') {
        diemCongDoiTuong = 1.5;
    } else if (selectedValue === 'C') {
        diemCongDoiTuong = 1;
    } else {
        diemCongDoiTuong = 0; 
    }
};
