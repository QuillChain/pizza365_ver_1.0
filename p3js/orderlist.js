'use strict';

//global variable declare
var gH1Element = document.getElementById('h1');
var gTableElement = document.getElementById('table');
var gObjectAllOrder = {};

//constant global
const gBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
const gSTATE_OK = 4;
const gSTATUS_OK = 200;


//function on loading page
onLoadingPage();
function onLoadingPage() {
    console.log('gH1Element: ', gH1Element.id, '/innerHTML ~', gH1Element.innerHTML);
    console.log('gTableElement: ', gTableElement.id, '/innerHTML ~', gTableElement.innerHTML);
}

//function call api to get data
callAPI();
function callAPI() {
    var vGetOrderXmlHttp = new XMLHttpRequest;
    vGetOrderXmlHttp.open("GET", gBASE_URL, true);
    vGetOrderXmlHttp.send();
    vGetOrderXmlHttp.onreadystatechange = function () {
        if (this.readyState === gSTATE_OK && this.status === gSTATUS_OK) {
            gObjectAllOrder = JSON.parse(vGetOrderXmlHttp.responseText);
            console.log('vGetOrderXmlHttp.responseText: ', vGetOrderXmlHttp.responseText);
            // console.log('gObjectAllOrder: ', gObjectAllOrder);
            creatTable(gObjectAllOrder);
        }
    }

}

//function creat table
function creatTable(paramObject) {
    console.log(paramObject);
    var vObjectLength = paramObject.length;
    console.log('vObjectLength: ', vObjectLength);
    for (var vI = 0; vI < vObjectLength; vI++) {
        var vRow = gTableElement.insertRow(-1);
        var vCell0 = vRow.insertCell(0);
        var vCell1 = vRow.insertCell(1);
        var vCell2 = vRow.insertCell(2);
        var vCell3 = vRow.insertCell(3);
        var vCell4 = vRow.insertCell(4);
        var vCell5 = vRow.insertCell(5);
        var vCell6 = vRow.insertCell(6);
        var vCell7 = vRow.insertCell(7);
        var vCell8 = vRow.insertCell(8);

        vCell0.innerHTML = paramObject[vI].orderId;
        vCell1.innerHTML = paramObject[vI].kichCo;
        vCell2.innerHTML = paramObject[vI].loaiPizza;
        vCell3.innerHTML = paramObject[vI].idLoaiNuocUong;
        vCell4.innerHTML = paramObject[vI].thanhTien;
        vCell5.innerHTML = paramObject[vI].hoTen;
        vCell6.innerHTML = paramObject[vI].soDienThoai;
        vCell7.innerHTML = paramObject[vI].trangThai;

        // vCell8.innerHTML = 'button';
        // add button detail
        var bDetailButton = document.createElement("button");
        bDetailButton.textContent = 'Detail';
        bDetailButton.setAttribute("data-id", paramObject[vI].id);
        bDetailButton.setAttribute("data-orderid", paramObject[vI].orderId);
        bDetailButton.className = "btn btn-info order-detail-button";

        vCell8.append(bDetailButton);
    }

    //add detail button for button 
    var vOrderDetailButtons = document.getElementsByClassName("order-detail-button");
    // console.log('vOrderDetailButtons: ', vOrderDetailButtons);
    for (var vI = 0; vI < vOrderDetailButtons.length; vI++) {
        vOrderDetailButtons[vI].addEventListener("click", function () {
            onOrderDetailButtonClick(this);
        })
    }


}

// function onOrderDetailButtonClick 
function onOrderDetailButtonClick(pramDetailButton) {
    var vId = pramDetailButton.dataset.id;
    console.log('vId: ', vId);
    var vOrderId = pramDetailButton.dataset.orderid;
    console.log('vOrderId: ', vOrderId);
    window.location.href = "orderDetail.html?id=" + vId + "&orderid=" + vOrderId;           


}