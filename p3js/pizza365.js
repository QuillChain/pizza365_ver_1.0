"use strict";

// declare global variable
// mỗi khi khách chọn menu S, M, L bạn lại đổi giá trị properties của nó
var gSelectedMenuStructure = {
    kichCo: "",    // S, M, L
    duongKinh: 0,
    suon: 0,
    salad: 0,
    idLoaiNuocUong: '',
    soLuongNuoc: 0,
    priceCombo: 0,
    priceDrink: 0,
    thanhTien: 0,
    loaiPizza: '',
    idVourcher: '',
    hoTen: '',
    email: '',
    soDienThoai: '',
    address: '',
    diaChi: '',
    loiNhan: '',
    phanTramGiamGia: 0,
}
var gOrderSuccessResponse = {};

var gObjectSelectDrink = {};


// declare global variable button element 
var gSelectedSElement = document.getElementById('selectedS');
var gSelectedMElement = document.getElementById('selectedM');
var gSelectedLElement = document.getElementById('selectedL');


// declare const
const gREQUEST_STATUS_OK = 200;
const gREQUEST_READY_STATUS_FINISH_AND_OK = 4;
const gREQUEST_STATUS_CREATE_SUCCESS = 201; // status 201 tao thanh cong


// drink select
var gSelectDrink = document.getElementById('selectDrink');


//mã nguồn để load data drink list (danh sách loại nước uống) về
myOnClickGetDrinkList();  //call drink select function
function myOnClickGetDrinkList() {
    "use strict";
    var vBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/drinks";
    var vXhttp = new XMLHttpRequest();
    vXhttp.onreadystatechange =
        function () {
            if (this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK && this.status == gREQUEST_STATUS_OK) {
                //   console.log(vXhttp.responseText); //ghi response text ra console.log
                gObjectSelectDrink = JSON.parse(vXhttp.responseText);
                console.log('gObjectSelectDrink: ', gObjectSelectDrink);
                fillSelectDrink(gObjectSelectDrink);
            }
        };
    vXhttp.open("GET", vBASE_URL, true);
    vXhttp.send();
}
//function fill data select drink
function fillSelectDrink(paramObjectSelectDrink) {
    "use strict";

    var vElementSelectDrink = gSelectDrink;
    for (var bIterator = 0; bIterator < paramObjectSelectDrink.length; bIterator++) {
        var vDrinkOptionElement = document.createElement("OPTION");
        vDrinkOptionElement.value = paramObjectSelectDrink[bIterator].maNuocUong;
        vDrinkOptionElement.text = paramObjectSelectDrink[bIterator].tenNuocUong;
        vElementSelectDrink.appendChild(vDrinkOptionElement);
    }

}

//declare variable input voucher.
var gVoucherIdElement = document.getElementById('input-voucherID');
// console.log('gVoucherIdElement: ', gVoucherIdElement.id, '//', gVoucherIdElement.innerHTML);


// declare function when click  seleced size S
function onClickS() {
    gSelectedMenuStructure.kichCo = 'S';
    gSelectedMenuStructure.priceCombo = 150000;
    gSelectedMenuStructure.soLuongNuoc = 2;
    gSelectedMenuStructure.suon = 2;
    gSelectedMenuStructure.salad = 200;
    gSelectedMenuStructure.duongKinh = 20;

    console.log('gSelectedMenuStructure.kichCo: ', gSelectedMenuStructure.kichCo);
    setMenuButtonsColor(gSelectedMenuStructure.kichCo);
}

// declare function when click  seleced size M
function onClickM() {
    gSelectedMenuStructure.kichCo = 'M';
    gSelectedMenuStructure.priceCombo = 200000;
    gSelectedMenuStructure.soLuongNuoc = 3;
    gSelectedMenuStructure.suon = 4;
    gSelectedMenuStructure.salad = 300;
    gSelectedMenuStructure.duongKinh = 25;


    console.log('gSelectedMenuStructure.kichCo: ', gSelectedMenuStructure.kichCo);
    setMenuButtonsColor(gSelectedMenuStructure.kichCo);

}

// declare function when click  seleced size L
function onClickL() {
    gSelectedMenuStructure.kichCo = 'L';
    gSelectedMenuStructure.priceCombo = 250000;
    gSelectedMenuStructure.soLuongNuoc = 4;
    gSelectedMenuStructure.suon = 8;
    gSelectedMenuStructure.salad = 500;
    gSelectedMenuStructure.duongKinh = 30;


    console.log('gSelectedMenuStructure.kichCo: ', gSelectedMenuStructure.kichCo);
    setMenuButtonsColor(gSelectedMenuStructure.kichCo);
}

// DECLARE FUNCTION SET COLOR FOR gSelectedMenuStructure
function setMenuButtonsColor(menuStructure) {
    if (menuStructure == 'S') {
        gSelectedSElement.className = "w3-button w3-orange w3-padding-large";
        gSelectedMElement.className = "w3-button w3-green w3-padding-large";
        gSelectedLElement.className = "w3-button w3-green w3-padding-large";
    }
    if (menuStructure == 'M') {
        gSelectedSElement.className = "w3-button w3-green w3-padding-large";
        gSelectedMElement.className = "w3-button w3-orange w3-padding-large";
        gSelectedLElement.className = "w3-button w3-green w3-padding-large";
    }
    if (menuStructure == 'L') {
        gSelectedSElement.className = "w3-button w3-green w3-padding-large";
        gSelectedMElement.className = "w3-button w3-green w3-padding-large";
        gSelectedLElement.className = "w3-button w3-orange w3-padding-large";
    }
}


// bạn có thể dùng để lưu loại pizza đươc chọn, mỗi khi khách chọn, bạn lai đổi giá trị cho nó
// var ggSelectedMenuStructure.loaiPizza= "...";
var gSelectedHawaiiElement = document.getElementById('selectedHawaii');
var gSelectedSeaFoodElement = document.getElementById('selectedSeaFood');
var gSelectedBaconElement = document.getElementById('selectedBacon');

// onLoadPizzaType();
function onLoadPizzaType() {
    console.log('gSelectedHawaiiElement: ', gSelectedHawaiiElement.id, '//', gSelectedHawaiiElement.innerHTML);
    console.log('gSelectedSeaFoodElement: ', gSelectedSeaFoodElement.id, '//', gSelectedSeaFoodElement.innerHTML);
    console.log('gSelectedBaconElement: ', gSelectedBaconElement.id, '//', gSelectedBaconElement.innerHTML);
}

//set color when select pizza type
function setColorButtonPizzaType(pizzaType) {
    if (pizzaType === "hawaii") {
        gSelectedHawaiiElement.className = 'w3-button w3-orange w3-block';
        gSelectedSeaFoodElement.className = 'w3-button w3-green w3-block';
        gSelectedBaconElement.className = 'w3-button w3-green w3-block';
    }
    if (pizzaType === "seaFood") {
        gSelectedHawaiiElement.className = 'w3-button w3-green w3-block';
        gSelectedSeaFoodElement.className = 'w3-button w3-orange w3-block';
        gSelectedBaconElement.className = 'w3-button w3-green w3-block';
    }
    if (pizzaType === "bacon") {
        gSelectedHawaiiElement.className = 'w3-button w3-green w3-block';
        gSelectedSeaFoodElement.className = 'w3-button w3-green w3-block';
        gSelectedBaconElement.className = 'w3-button w3-orange w3-block';
    }
}
// declare function click selected Hawaii
function onClickSelectedHawaii() {
    gSelectedMenuStructure.loaiPizza = "hawaii";
    console.log('ggSelectedMenuStructure.loaiPizza: ', gSelectedMenuStructure.loaiPizza);
    setColorButtonPizzaType(gSelectedMenuStructure.loaiPizza);
}

// declare function click selected Hawaii
function onClickSelectedSeaFood() {
    // debugger;
    gSelectedMenuStructure.loaiPizza = "seaFood";
    console.log('gSelectedMenuStructure.loaiPizza: ', gSelectedMenuStructure.loaiPizza);
    setColorButtonPizzaType(gSelectedMenuStructure.loaiPizza);
}

// declare function click selected Hawaii
function onClickSelectedBacon() {
    gSelectedMenuStructure.loaiPizza = "bacon";
    console.log('ggSelectedMenuStructure.loaiPizza: ', gSelectedMenuStructure.loaiPizza);
    setColorButtonPizzaType(gSelectedMenuStructure.loaiPizza);
}




// declare global variable
var labelNameElement = document.getElementById('label-name');
var inputNameElement = document.getElementById('input-name');
var labelEmailElement = document.getElementById('label-email');
var inputEmailElement = document.getElementById('input-email');
var labelPhoneElement = document.getElementById('label-phone');
var inputPhoneElement = document.getElementById('input-phone');
var labelAddressElement = document.getElementById('label-address');
var inputAddressElement = document.getElementById('input-address');
var labelMessageElement = document.getElementById('label-message');
var inputMessageElement = document.getElementById('input-message');
var labelVoucherElement = document.getElementById('label-voucherID');
var inputVoucherElement = document.getElementById('input-voucherID');
var buttonOrderElement = document.getElementById('buttonOrder');

var gIdLoaiNuocUongElement = document.getElementById('')

// print order form id, innerHTML to console.log
// onLoadingPage();
function onLoadingPage() {
    console.log('labelNameElement: ', labelNameElement.id, '//', labelNameElement.innerHTML);
    console.log('inputNameElement: ', inputNameElement.id, '//', inputNameElement.innerHTML);
    console.log('labelEmailElement: ', labelEmailElement.id, '//', labelEmailElement.innerHTML);
    console.log('inputEmailElement: ', inputEmailElement.id, '//', inputEmailElement.innerHTML);
    console.log('labelPhoneElement: ', labelPhoneElement.id, '//', labelPhoneElement.innerHTML);
    console.log('inputPhoneElement: ', inputPhoneElement.id, '//', inputPhoneElement.innerHTML);
    console.log('labelAddressElement: ', labelAddressElement.id, '//', labelAddressElement.innerHTML);
    console.log('inputAddressElement: ', inputAddressElement.id, '//', inputAddressElement.innerHTML);
    console.log('labelMessageElement: ', labelMessageElement.id, '//', labelMessageElement.innerHTML);
    console.log('inputMessageElement: ', inputMessageElement.id, '//', inputMessageElement.innerHTML);
    console.log('labelVoucherElement: ', labelVoucherElement.id, '//', labelVoucherElement.innerHTML);
    console.log('inputVoucherElement: ', inputVoucherElement.id, '//', inputVoucherElement.innerHTML);
    console.log('buttonOrderElement: ', buttonOrderElement.id, '//', buttonOrderElement.innerHTML);
}

//function onclick order
function showOnClickOrder() {
    console.log('labelNameElement: ', labelNameElement.id, '//', labelNameElement.innerHTML);
    console.log('inputNameElement: ', inputNameElement.id, '//', inputNameElement.value);
    console.log('labelEmailElement: ', labelEmailElement.id, '//', labelEmailElement.innerHTML);
    console.log('inputEmailElement: ', inputEmailElement.id, '//', inputEmailElement.value);
    console.log('labelPhoneElement: ', labelPhoneElement.id, '//', labelPhoneElement.innerHTML);
    console.log('inputPhoneElement: ', inputPhoneElement.id, '//', inputPhoneElement.value);
    console.log('labelAddressElement: ', labelAddressElement.id, '//', labelAddressElement.innerHTML);
    console.log('inputAddressElement: ', inputAddressElement.id, '//', inputAddressElement.value);
    console.log('labelMessageElement: ', labelMessageElement.id, '//', labelMessageElement.innerHTML);
    console.log('inputMessageElement: ', inputMessageElement.id, '//', inputMessageElement.value);
    console.log('labelVoucherElement: ', labelVoucherElement.id, '//', labelVoucherElement.innerHTML);
    console.log('inputVoucherElement: ', inputVoucherElement.id, '//', inputVoucherElement.value);
    console.log('buttonOrderElement: ', buttonOrderElement.id, '//', buttonOrderElement.innerHTML);
}


// declare variable function 
var showOrderInfomationElement = document.getElementById('showOrderInfomation');
var divButtonConfirmElement = document.getElementById('divButtonConfirm');

//function check voucher ID
function CheckVoucherId(paramVoucherId) {
    "use strict";
    const vBASE_URL = "http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/";
    // nếu mã giảm giấ đã nhập, tạo vXmlHttp request và gửi về server
    var vXmlHttp = new XMLHttpRequest();
    vXmlHttp.open("GET", vBASE_URL + paramVoucherId, false);
    vXmlHttp.send(null);
    var vStatusCode = vXmlHttp.status;
    if (vStatusCode == gREQUEST_STATUS_OK) { // restFullAPI successful
        // nhận lại response dạng JSON ở vXmlHttp.responseText và chuyển thành object
        console.log(vXmlHttp.responseText);
    }
    else {
        // không nhận lại được data do vấn đề gì đó: khả năng mã voucher ko dúng
        console.log("Không tìm thấy voucher " + vXmlHttp.responseText);
    }
}

// function to get price of drink selected
function getPriceByIdLoaiNuocUong(paramIdLoaiNuocUong) {
    var priceDrink = 0;
    for (var vI = 0; vI < gObjectSelectDrink.length; vI++) {
        if (paramIdLoaiNuocUong === gObjectSelectDrink[vI].maNuocUong) {
            priceDrink = gObjectSelectDrink[vI].donGia;
            console.log('priceDrink: ', priceDrink);
        }
    }
    return priceDrink;
}

//function when click order button
function onClickButtonOrder() {
    gSelectedMenuStructure.hoTen = inputNameElement.value;
    gSelectedMenuStructure.email = inputEmailElement.value;
    gSelectedMenuStructure.soDienThoai = inputPhoneElement.value;
    gSelectedMenuStructure.idVourcher = inputVoucherElement.value.toUpperCase();
    console.log('gSelectedMenuStructure.idVourcher: ', gSelectedMenuStructure.idVourcher);
    gSelectedMenuStructure.diaChi = inputAddressElement.value;
    gSelectedMenuStructure.loiNhan = inputMessageElement.value;
    gSelectedMenuStructure.idLoaiNuocUong = gSelectDrink.value;

    //call function get price Drink by idLoaiNuocUong
    gSelectedMenuStructure.priceDrink = getPriceByIdLoaiNuocUong(gSelectDrink.value);


    //PROCESS IF DATA IS VALIDATED
    if (validateData()) {

        // showOnClickOrder();
        // visible the hidden order information and button confirm
        showOrderInfomationElement.style.visibility = 'visible';
        divButtonConfirmElement.style.visibility = 'visible';

        //get discount percent by discount voucher  in const and server

        //get in const
        // for (var iterator = 0; iterator < gDiscountVouchers.length; iterator++) {
        //   if (gDiscountVouchers[iterator].voucherID == gSelectedMenuStructure.idVourcher) {
        //     gSelectedMenuStructure.phanTramGiamGia = gDiscountVouchers[iterator].percentDiscount;
        //   }
        // }
        // console.log('gSelectedMenuStructure.phanTramGiamGia: ', gSelectedMenuStructure.phanTramGiamGia);

        //get in server

        // if validated voucher 
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://42.115.221.44:8080/devcamp-voucher-api/vouchers/" + gSelectedMenuStructure.idVourcher, false);
        xmlHttp.send(null);
        //recieved response JSON in xmlHttp.responseText and convert to object
        var voucherResponse = JSON.parse(xmlHttp.responseText);
        console.log('xmlHttp.responseText: ', xmlHttp.responseText);
        console.log('voucherResponse: ', voucherResponse);
        gSelectedMenuStructure.phanTramGiamGia = voucherResponse.discount;
        console.log('gSelectedMenuStructure.phanTramGiamGia: ', gSelectedMenuStructure.phanTramGiamGia);

        // validate Voucher
        if (gSelectedMenuStructure.phanTramGiamGia != 0 && gSelectedMenuStructure.phanTramGiamGia != -1) {
            gSelectedMenuStructure.priceCombo += gSelectedMenuStructure.priceDrink; //price drink Plus
            gSelectedMenuStructure.thanhTien = gSelectedMenuStructure.priceCombo
                - (gSelectedMenuStructure.priceCombo * gSelectedMenuStructure.phanTramGiamGia / 100);
            gSelectedMenuStructure.giamGia = gSelectedMenuStructure.priceCombo * gSelectedMenuStructure.phanTramGiamGia / 100;

            alert('Voucher ' + gSelectedMenuStructure.idVourcher + ' Bạn Được Giảm : ' + gSelectedMenuStructure.phanTramGiamGia + "%");
        } else {
            alert('Mã Giảm Giá Không Đúng');
            gSelectedMenuStructure.phanTramGiamGia = 0;
            gSelectedMenuStructure.giamGia = 0;
            gSelectedMenuStructure.priceCombo += gSelectedMenuStructure.priceDrink; //price drink Plus
            gSelectedMenuStructure.thanhTien = gSelectedMenuStructure.priceCombo;
        }



        // show infomation
        showOrderInfomationElement.innerHTML = "Order Infomation:" +
            '<p> Họ Tên : ' + gSelectedMenuStructure.hoTen + '</p>' +
            '<p> Email : ' + gSelectedMenuStructure.email + '</p>' +
            '<p> Số Điện Thoại : ' + gSelectedMenuStructure.soDienThoai + '</p>' +
            '<p> Địa chỉ : ' + gSelectedMenuStructure.diaChi + '</p>' +
            '<p> Lời Nhắn : ' + gSelectedMenuStructure.loiNhan + '</p>' +
            '<p> Size Pizza : ' + gSelectedMenuStructure.kichCo + '</p>' +
            '<p> Loại Pizza : ' + gSelectedMenuStructure.loaiPizza + '</p>' +
            '<p> Loại Nước Uống : ' + gSelectedMenuStructure.idLoaiNuocUong + '</p>' +
            '<p> Giá Nước Uống : ' + gSelectedMenuStructure.priceDrink + ' vnd</p>' +
            '<p> Giá Chưa Khuyến mại: ' + gSelectedMenuStructure.priceCombo + ' vnd</p>' +
            '<p> % Giảm Giá : ' + gSelectedMenuStructure.phanTramGiamGia + '%</p>' +
            '<p> Phải Thanh Toán : ' + gSelectedMenuStructure.thanhTien + ' vnd (giam gia ' + gSelectedMenuStructure.phanTramGiamGia + '%)</p>';

    }

}

// function validate data
function validateData() {
    var validate = true;

    if (gSelectedMenuStructure.kichCo.trim() == '') {
        alert("Bạn cần chọn Size");
        validate = false;
    }
    if (gSelectedMenuStructure.loaiPizza.trim() == '') {
        alert("Bạn cần chọn Kiểu Pizza");
        validate = false;
    }
    if (gSelectedMenuStructure.hoTen.trim() == '') {
        alert("Bạn cần điền họ tên");
        validate = false;
    }
    if (gSelectedMenuStructure.diaChi.trim() == '') {
        alert("Bạn cần điền địa chỉ");
        validate = false;
    }
    if (isNaN(parseInt(gSelectedMenuStructure.soDienThoai.trim())) || phonenumber(gSelectedMenuStructure.soDienThoai.trim())) {
        alert("Bạn cần điền Đúng Số Điện Thoại");
        validate = false;
    }
    if (gSelectedMenuStructure.email.trim() == '' || !gSelectedMenuStructure.email.includes('@')) {
        alert("Cần nhập chính xác Email");
        validate = false;
    }
    return validate;
}



// print order detail to console
function onClickButtonConfirm() {
    alert(`Xác nhận đơn hàng thành công`)
    // printOderDetail();  //print order detail 
    function printOderDetail() {
        console.log('Order Information Detail :  ');
        console.log('Họ Tên :  ', gSelectedMenuStructure.hoTen);
        console.log('Email :', gSelectedMenuStructure.email);
        console.log('Số Điện Thoại :', gSelectedMenuStructure.soDienThoai);
        console.log('Địa chỉ : ', gSelectedMenuStructure.diaChi);
        console.log('Lời Nhắn :', gSelectedMenuStructure.loiNhan);
        console.log('Size Pizza :  ', gSelectedMenuStructure.kichCo);
        console.log('Loại Pizza : ', gSelectedMenuStructure.loaiPizza);
        console.log('Giá Chưa Khuyến mại: ', gSelectedMenuStructure.priceCombo);
        console.log('% Giảm Giá : ', gSelectedMenuStructure.phanTramGiamGia);
        console.log('Phải Thanh Toán : ', gSelectedMenuStructure.thanhTien);
    }

    myApiCreateOrder(); ///call api creat order
    document.getElementById('divOrderId').style.visibility = 'visible';
}

//call api creat order
function myApiCreateOrder() {
    "use strict";
    //base url
    const vBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
    var vObjectRequest = gSelectedMenuStructure;

    var vXmlHttpCreateOrder = new XMLHttpRequest();
    vXmlHttpCreateOrder.open("POST", vBASE_URL, true);
    vXmlHttpCreateOrder.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    vXmlHttpCreateOrder.send(JSON.stringify(vObjectRequest));
    vXmlHttpCreateOrder.onreadystatechange =
        function () {
            if (this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK && this.status == gREQUEST_STATUS_CREATE_SUCCESS) {
                var vCreatedOrder = JSON.parse(vXmlHttpCreateOrder.responseText);
                gOrderSuccessResponse = vCreatedOrder;
                console.log(gOrderSuccessResponse);
                console.log(gOrderSuccessResponse.orderId);
                document.getElementById('orderIdResponse').value = gOrderSuccessResponse.orderId; //print to web

                addTrackingOrderQueryString();  // addtracking order detail 
            }
        }
}


//  function jquery parameter-passing
function addTrackingOrderQueryString() {

    var gTrackingOrderElement = document.getElementById("trackingOrderElement");
    // console.log who am i 
    console.log('Im gTrackingOrderElement: ', gTrackingOrderElement.id)
    console.log('gTrackingOrderElement.innerHTML: ', gTrackingOrderElement.innerHTML);

    trackingOrderDetail();
    function trackingOrderDetail() {
        console.log('id ~: ', gOrderSuccessResponse.id);
        console.log('order id  ~: ', gOrderSuccessResponse.orderId);
        // add even listenner
        document.getElementById("trackingOrderElement").addEventListener("click", function () {
            window.location.href = "orderDetail.html?id=" + gOrderSuccessResponse.id + "&orderid=" + gOrderSuccessResponse.orderId;
        }, false);
    }
}




// phone Number validateData
function phonenumber(inputtxt) {
    var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (inputtxt.match(phoneno)) {
        return true;
    }
    else {
        // alert("message");
        return false;
    }
}
