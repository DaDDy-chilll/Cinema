const json = {
  cinema: "Cinema Craze",
  movie: "Avengers: Endgame",
  poster: "Poster Image",
  showDate: "Tue May 07 2024",
  showTime: "2:30 PM",
  foodItems: [
    { name: "Cola", price: 3500, quantity: 1 },
    { name: "Hot Dog", price: 14000, quantity: 2 },
  ],
  totalSeats: 2,
  seats: [
    { seatCode: "B4", seatPrice: 5500 },
    { seatCode: "B5", seatPrice: 5400 },
  ],
};



const {cinema,movie,poster,showDate,showTime,foodItems,totalSeats,seats} = json;
const totalFoodPrice = foodItems.reduce((acc,item) => acc + (item.price * item.quantity),0); //!ask to hste paing
const totalSeatPrice = seats.reduce((acc,item) => acc + item.seatPrice,0);
const totalPrice = totalFoodPrice + totalSeatPrice;
const tax = 10
const addTaxPrice = parseInt(totalPrice * tax /100);
const totalPriceWithTax = totalPrice + addTaxPrice;
const userInfo = {};

// Getters and Setter for User Information
(() => {
  $('#movieName').text(movie);
  $('#showDate').text(showDate);
  $('#showTime').text(showTime);
  $('#cinema').text(cinema);
  $('#totalSeats').text(totalSeats);
  $('#ticketPrice').text(`${totalSeatPrice} Ks`);
  $('#foodPrice').text(`${totalFoodPrice} Ks`);
  $('#tax').text(`${tax}%`);
  $('#totalPrice').text(`${totalPriceWithTax} Ks`);
})()


$("#paymentCloseBtn").click(() => {
  $("#paymentProvider").fadeOut(200, () => {
    $("#providersContainer").empty();
    $('#number').remove();
    $('#overLay').fadeOut(205)
  });
  

});

$("#mobilePay").click(() => {
  const images = `
    <img
    src="assets/payment-provider/mobile/cbpay.png"
    alt="cbpay"
    width="12.6%"
    class='mobile'
    value='cbpay'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/kbzpay.png"
    alt="kpay"
    width="12.6%"
    class='mobile'
    value='kbzpay'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/okpay.png"
    alt="okpay"
    width="12.6%"
    class='mobile'
    value='okpay'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/ayapay.png"
    alt="ayapay"
    width="25%"
    class='mobile'
    value='ayapay'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/mytelpay.png"
    alt="mytelpay"
    width="25%"
    class='mobile'
    value='mytelpay'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/onepay.png"
    alt="onepay"
    width="25%"
    class='mobile'
    value='onepay'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/truemoney.png"
    alt="truepay"
    width="25%"
    class='mobile'
    value='truemoney'
    onClick='clickEvent(this)'
  />
  <img
    src="assets/payment-provider/mobile/wavepay.png"
    alt="wavepay"
    width="25%"
    class='mobile'
    value='wavepay'
    onClick='clickEvent(this)'
  />
    `;

  if ($("#providersContainer").html().length === 0) $("#providersContainer").append(images);

  $('#inputContainer').append('<input type="number" name="phone_number" id="number" placeholder="Phone Number">');

  
  $('#overLay').fadeIn(200,() =>{
    $("#paymentProvider").fadeIn(205);
  })
});

$("#bankPay").click(() => {
  const images = `
    <img src="assets/payment-provider/bank/abank.png" alt="abank" width="25%" class="bank" value='abank' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/kbz.png" alt="kbz" width="25%" class="bank" value='kbzbank' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/mab.png" alt="mab" width="25%" class="bank" value='mabbank' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/uab.png" alt="uab" width="25%" class="bank" value='uabbank' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/cb.png" alt="cb" width="25%" class="bank" value='cbbank' onClick='clickEvent(this)'/>
    `;

  if ($("#providersContainer").html().length === 0) $("#providersContainer").append(images);

  $('#inputContainer').append('<input type="number" name="bank_acc_number" id="number" placeholder="Bank Acc Number">');
  $('#overLay').fadeIn(200,() =>{
    $("#paymentProvider").fadeIn(205);
  })
  
});



const clickEvent = (element) => {
$('#providersContainer').children('img.active').removeClass('active');
  $(element).addClass('active');
  userInfo.payment = $(element).attr('value');
}

$('#inputBtn').click(() => {
  userInfo.name = $('#name').val();
  userInfo[$('#number').attr('name')] = $('#number').val()
  if(userInfo.name && userInfo.payment && userInfo[$('#number').attr('name')]){
    localStorage.setItem('userData',JSON.stringify(userInfo));
  }else{
    console.log('user error'); //todo throw error
  }
  console.log();

  if($('#number').attr('name').includes('bank')){
    $("#bankPay").attr('click',true)
  }else{
    $("#mobilePay").attr('click',true)
  }

  $("#paymentProvider").fadeOut(200, () => {
    $("#providersContainer").empty();
    $('#number').remove();
    $('#overLay').fadeOut(205)
  });
})