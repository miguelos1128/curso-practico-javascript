const coupons = [
    {
        name: "OK",
        discount: 15,
    },
    {
        name: "MIKE",
        discount: 30,
    },
    {
        name: "HP",
        discount: 25,
    },
];

function calcularprecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento ;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    }else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularprecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con desceunto son: " + precioConDescuento;
    }

}
