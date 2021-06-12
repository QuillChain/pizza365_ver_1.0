'user strict'; // user strict for all

const gREQUEST_STATUS_OK = 200;
const gREQUEST_READY_STATUS_FINISH_AND_OK = 4;
const gREQUEST_STATUS_CREATE_SUCCESS = 201; // status 201 tao thanh cong

const gBASE_URL_DRINK = "http://42.115.221.44:8080/devcamp-pizza365/drinks";
const gBASE_URL_ORDER = "http://42.115.221.44:8080/devcamp-pizza365/orders";

//global variable
var gComboSize = document.getElementById('combosize');
var gPizzaType = document.getElementById("pizzatype");
var gSelectDrink = document.getElementById('select-drink');
var gSuon = document.getElementById('suon-nuong');
var gSoLuongNuoc = document.getElementById('so-luong-nuoc')
var gVoucherId = document.getElementById('voucher-id');
var gName = document.getElementById('name');
var gEmail = document.getElementById('email');
var gPhoneNumber = document.getElementById('phone-number');
var gAddress = document.getElementById('adress');
var gMessage = document.getElementById('message');

var gNgayCapNhat = document.getElementById('ngay-cap-nhat');
var gNgayTaoDon = document.getElementById('ngay-tao-don');
var gTrangThaiDonHang = document.getElementById('oder-status');
var gDiscount = document.getElementById('giam-gia');
var gTotalBill = document.getElementById('thanh-tien');
var gSalad = document.getElementById('salad');
var gDrinkType = document.getElementById('select-drink');
var gDuongKinh = document.getElementById('duongkinh');
var gOrderId = document.getElementById('order-id');

var gButtonCreateOrder = document.getElementById('button-order');
var gButtonShowOrder = document.getElementById('button-show-order');
var gObjectResponse = {};



//read OrderId from param
var gParamsString = window.location.search;
console.log('gParamsString: ', gParamsString);
var gSearchParams = new URLSearchParams(gParamsString);
console.log('gSearchParams: ', gSearchParams);
var gOrderIdParam = gSearchParams.get("orderid");
var gIdParam = gSearchParams.get("id");
console.log('gIdParam: ', gIdParam);
console.log('gOrderIdParam: ', gOrderIdParam);





//on Loading Page function
onLoadingPage();
function onLoadingPage() {
    console.log('gComboSize: ', gComboSize.id, '/innerHTML ~/', gComboSize.innerHTML);
    console.log('gPizzaType: ', gPizzaType.id, '/innerHTML ~/', gPizzaType.innerHTML);
    console.log('gSelectDrink: ', gSelectDrink.id, '/innerHTML ~/', gSelectDrink.innerHTML);
    console.log('gVoucherId: ', gVoucherId.id, '/innerHTML ~/', gVoucherId.innerHTML);
    console.log('gName: ', gName.id, '/innerHTML ~/', gName.innerHTML);
    console.log('gEmail: ', gEmail.id, '/innerHTML ~/', gEmail.innerHTML);
    console.log('gPhoneNumber: ', gPhoneNumber.id, '/innerHTML ~/', gPhoneNumber.innerHTML);
    console.log('gAddress: ', gAddress.id, '/innerHTML ~/', gAddress.innerHTML);
    console.log('gMessage: ', gMessage.id, '/innerHTML ~/', gMessage.innerHTML);
    // console.log('gButtonCreateOrder: ', gButtonCreateOrder.id, '/innerHTML ~/', gButtonCreateOrder.innerHTML);
    // console.log('gButtonShowOrder: ', gButtonShowOrder.id, '/innerHTML ~/', gButtonShowOrder.innerHTML);

    // for show order detail
    console.log('gNgayCapNhat: ', gNgayCapNhat.id, '/innerHTML ~/', gNgayCapNhat.innerHTML);

    console.log('gNgayTaoDon: ', gNgayTaoDon.id, '/innerHTML ~/', gNgayTaoDon.innerHTML);

    console.log('gTrangThaiDonHang: ', gTrangThaiDonHang.id, '/innerHTML ~/', gTrangThaiDonHang.innerHTML);

    console.log('gDiscount: ', gDiscount.id, '/innerHTML ~/', gDiscount.innerHTML);

    console.log('gTotalBill: ', gTotalBill.id, '/innerHTML ~/', gTotalBill.innerHTML);

    console.log('gSalad: ', gSalad.id, '/innerHTML ~/', gSalad.innerHTML);

    console.log('gDrinkType: ', gDrinkType.id, '/innerHTML ~/', gDrinkType.innerHTML);

    console.log('gDuongKinh: ', gDuongKinh.id, '/innerHTML ~/', gDuongKinh.innerHTML);

    console.log('gOrderId: ', gOrderId.id, '/innerHTML ~/', gOrderId.innerHTML);


}


//fill data to input

function fillData() {
    console.log(gObjectResponse);

    gComboSize.value = gObjectResponse.kichCo;
    gPizzaType.value = gObjectResponse.loaiPizza;
    gSuon.value = gObjectResponse.suon;
    gSoLuongNuoc.value = gObjectResponse.soLuongNuoc;
    gSelectDrink.value = gObjectResponse.idLoaiNuocUong;
    gVoucherId.value = gObjectResponse.idVourcher;
    gName.value = gObjectResponse.hoTen;
    gEmail.value = gObjectResponse.email;
    gPhoneNumber.value = gObjectResponse.soDienThoai;
    gAddress.value = gObjectResponse.diaChi;
    gMessage.value = gObjectResponse.loiNhan;
    gNgayCapNhat.value = gObjectResponse.ngayCapNhat;
    gNgayTaoDon.value = gObjectResponse.ngayTao;
    gTrangThaiDonHang.value = gObjectResponse.trangThai;
    gDiscount.value = gObjectResponse.giamGia;
    gTotalBill.value = gObjectResponse.thanhTien;
    gSalad.value = gObjectResponse.salad;
    gDrinkType.value = gObjectResponse.idLoaiNuocUong;
    gDuongKinh.value = gObjectResponse.duongKinh;
    gOrderId.value = gObjectResponse.orderId;
}

//Get Order By Id
myOnClickGetOrderById();
function myOnClickGetOrderById() {
    "use strict";
    //base url
    const vBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
    var vOrderId = gOrderIdParam;

    var vXmlHttpGetOrderById = new XMLHttpRequest();
    vXmlHttpGetOrderById.open("GET", vBASE_URL + "/" + vOrderId, true);
    vXmlHttpGetOrderById.send();
    vXmlHttpGetOrderById.onreadystatechange =
        function () {
            if (this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK && this.status == gREQUEST_STATUS_OK) {
                console.log(vXmlHttpGetOrderById.responseText);
                var vCreatedOrder = JSON.parse(vXmlHttpGetOrderById.responseText);
                console.log('vXmlHttpGetOrderById.responseText: ', vXmlHttpGetOrderById.responseText);
                gObjectResponse = vCreatedOrder;
                console.log('gOrderIdParam: ', gOrderIdParam);
                console.log('gObjectResponse: ', gObjectResponse);
                fillData();
            }
        }
}



// handle data load
function handleDataLoad(paramXhttp) {
    "use strict";
    var vArrayDrinkList = JSON.parse(paramXhttp.responseText);
    // console.log("array drink list = " + vArrayDrinkList.length);
    //load data to drink select
    var vElementSelectDrink = document.getElementById("select-drink");
    for (var bIterator = 0; bIterator < vArrayDrinkList.length; bIterator++) {
        var vDrinkOptionElement = document.createElement("OPTION");
        vDrinkOptionElement.value = vArrayDrinkList[bIterator].maNuocUong;
        vDrinkOptionElement.text = vArrayDrinkList[bIterator].tenNuocUong;
        vElementSelectDrink.appendChild(vDrinkOptionElement);
    }

}

//mã nguồn để load data về
function loadDataDrinkList() {
    "use strict";
    var vXhttp = new XMLHttpRequest();
    vXhttp.onreadystatechange =
        function () {
            if (this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK && this.status == gREQUEST_STATUS_OK) {
                // console.log(vXhttp.responseText); //ghi response text ra console.log
                handleDataLoad(vXhttp);
            }
        };
    vXhttp.open("GET", gBASE_URL_DRINK, true);
    vXhttp.send();
}
loadDataDrinkList();

// handling onclick
function onButtonSendDataClick() {
    "use strict";
    var vElementSelectDrink = document.getElementById("select-drink");
    alert("Selected drink value = " +
        vElementSelectDrink.value +
        "  text = " +
        vElementSelectDrink.options[vElementSelectDrink.selectedIndex].text);

}

//function onclick confirm order
function onClickConfirm() {
    console.log('gIdParam: ', gIdParam);

    "use strict";
    //base url
    const vBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
    var vObjectRequest = {
        trangThai: "confirmed" //3 trang thai open, confirmed, cancel
    }

    var vXmlHttpUpdateOrder = new XMLHttpRequest();
    vXmlHttpUpdateOrder.open("PUT", vBASE_URL + "/" + gIdParam);
    vXmlHttpUpdateOrder.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    vXmlHttpUpdateOrder.send(JSON.stringify(vObjectRequest));
    vXmlHttpUpdateOrder.onreadystatechange =
        function () {
            if (this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK && this.status == gREQUEST_STATUS_OK) {
                var vUpdatedOrder = vXmlHttpUpdateOrder.responseText;
                console.log(`update response`, vUpdatedOrder);
                alert(`Order duoc confirm`);
                window.location.href = "orderlist.html";

            }
        }
}

//function cancel
function onClickCancel() {
    console.log('gIdParam: ', gIdParam);

    
    "use strict";
    //base url
    const vBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
    var vObjectRequest = {
        trangThai: "cancel" //3 trang thai open, confirmed, cancel
    }

    var vXmlHttpUpdateOrder = new XMLHttpRequest();
    vXmlHttpUpdateOrder.open("PUT", vBASE_URL + "/" + gIdParam);
    vXmlHttpUpdateOrder.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    vXmlHttpUpdateOrder.send(JSON.stringify(vObjectRequest));
    vXmlHttpUpdateOrder.onreadystatechange =
        function () {
            if (this.readyState == gREQUEST_READY_STATUS_FINISH_AND_OK && this.status == gREQUEST_STATUS_OK) {
                var vUpdatedOrder = vXmlHttpUpdateOrder.responseText;
                console.log(`update response`, vUpdatedOrder);
                alert(`Order duoc cancel`);
                window.location.href = "orderlist.html";
            }
        }

}

//show orderid param url 
showOrderId();
function showOrderId() {
    var vUrl = new URL(window.location.href);
    var vOrderId = vUrl.searchParams.get('orderid');
    console.log('OrderId: ', vOrderId);
}

