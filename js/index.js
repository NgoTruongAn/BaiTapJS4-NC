//Bài 1
document.getElementById("handleDay").onclick = function () {
  // B1: xác định input
  var day = +document.getElementById("day").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  // B2: xử lý
  html = "Hôm nay là ngày " + day + ", tháng " + month + " , năm " + year;
  html2 =
    "Hôm qua là ngày " + (day - 1) + " , tháng " + month + " , năm " + year;
  html3 =
    "Ngày mai là ngày " + (day + 1) + " , tháng " + month + " , năm " + year;
  // B3: hiển thị
  document.getElementById("resultDay").innerHTML = `
    <p>${html}</p>
    <p>${html2}</p>
    <p>${html3}</p>
  `;
};
//Bài 2
document.getElementById("handleDay2").onclick = function () {
  // B1: xác định input
  var month2 = +document.getElementById("month2").value;
  var year2 = +document.getElementById("year2").value;
  var dayOfMonth;
  // B2: xử lý
  switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 12:
      dayOfMonth = 31;
      break;
    case 2:
      if ((year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0)
        dayOfMonth = 29;
      else dayOfMonth = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayOfMonth = 30;
      break;
    default:
      dayOfMonth = "Số tháng nhập vào không hợp lệ. Vui lòng nhập lại!";
      break;
  }
  // B3: hiển thị
  document.getElementById("resultDay2").innerHTML = `
    Số ngày trong tháng là: ${dayOfMonth}
  `;
};
//BÀI 3
document.getElementById("readNumber").onclick = function () {
  // B1: xác định input
  var number = +document.getElementById("number").value;
  var html, html2, html3;
  unit = number % 10;
  ten = Math.floor((number % 100) / 10);
  hundred = Math.floor(number / 100);
  // B2: xử lý
  switch (hundred) {
    case 1:
      html = "Một trăm ";
      break;
    case 2:
      html = "Hai trăm ";
      break;
    case 3:
      html = "Ba trăm ";
      break;
    case 4:
      html = "Bốn trăm ";
      break;
    case 5:
      html = "Năm trăm ";
      break;
    case 6:
      html = "Sáu trăm ";
      break;
    case 7:
      html = "Bảy trăm ";
      break;
    case 8:
      html = "Tam trăm ";
      break;
    case 9:
      html = "Chín trăm ";
      break;
  }
  switch (ten) {
    case 0:
      html2 = "lẻ";
      break;
    case 1:
      html2 = "mười";
      break;
    case 2:
      html2 = "hai mươi ";
      break;
    case 3:
      html2 = "ba mươi ";
      break;
    case 4:
      html2 = "bốn mươi ";
      break;
    case 5:
      html2 = "năm mươi ";
      break;
    case 6:
      html2 = "sáu mươi ";
      break;
    case 7:
      html2 = "bảy mươi ";
      break;
    case 8:
      html2 = "tám mươi ";
      break;
    case 9:
      html2 = "chín mươi ";
      break;
  }
  switch (unit) {
    case 0:
      html3 = "";
      break;
    case 1:
      html3 = "một";
      break;
    case 2:
      html3 = "hai";
      break;
    case 3:
      html3 = "ba";
      break;
    case 4:
      html3 = "bốn";
      break;
    case 5:
      html3 = "năm";
      break;
    case 6:
      html3 = "sáu";
      break;
    case 7:
      html3 = "bảy";
      break;
    case 8:
      html3 = "tám";
      break;
    case 9:
      html3 = "chín";
      break;
  }
  // B3: hiển thị
  if (number < 100 || number > 999)
    document.getElementById(
      "resultReadNumber"
    ).innerHTML = `Nhập sai. Vui lòng nhập vào số có 3 chữ số`;
  else
    document.getElementById("resultReadNumber").innerHTML = `
  ${html} ${html2} ${html3}
`;
};
//BÀI 4
document.getElementById("readSinhVien").onclick = function () {
  // B1: xác định input
  var ten1 = document.getElementById("ten1").value;
  var ten2 = document.getElementById("ten2").value;
  var ten3 = document.getElementById("ten3").value;
  var x1 = +document.getElementById("x1").value;
  var y1 = +document.getElementById("y1").value;
  var x2 = +document.getElementById("x2").value;
  var y2 = +document.getElementById("y2").value;
  var x3 = +document.getElementById("x3").value;
  var y3 = +document.getElementById("y3").value;
  var html;
  // B2: xử lý
  const sinhVien1 = { x: x1, y: y1 };
  const sinhVien2 = { x: x2, y: y2 };
  const sinhVien3 = { x: x3, y: y3 };
  const truongHoc = { x: 1, y: 2 };

  function tinhKhoangCach(diem1, diem2) {
    const deltaX = diem1.x - diem2.x;
    const deltaY = diem1.y - diem2.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  const khoangCachSV1 = tinhKhoangCach(sinhVien1, truongHoc);
  const khoangCachSV2 = tinhKhoangCach(sinhVien2, truongHoc);
  const khoangCachSV3 = tinhKhoangCach(sinhVien3, truongHoc);

  if ((khoangCachSV1 == khoangCachSV2) == khoangCachSV3)
    html = "Khoảng cách 3 sinh viên bằng nhau";
  else if (khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3)
    html = "Khoảng cách của sinh viên " + ten1 + " xa trường nhất";
  else if (khoangCachSV2 > khoangCachSV1 && khoangCachSV2 > khoangCachSV3)
    html = "Khoảng cách của sinh viên " + ten2 + " xa trường nhất";
  else if (khoangCachSV3 > khoangCachSV1 && khoangCachSV3 > khoangCachSV2)
    html = "Khoảng cách của sinh viên " + ten3 + " xa trường nhất";
  // B3: hiển thị
  document.getElementById("resultReadSinhVien").innerHTML = html;
};
