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
  });
});

$("#mobilePay").click(() => {
  const images = `
    <img
    src="assets/payment-provider/mobile/cbpay.png"
    alt="cbpay"
    width="12.6%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/kbzpay.png"
    alt="kpay"
    width="12.6%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/okpay.png"
    alt="okpay"
    width="12.6%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/ayapay.png"
    alt="ayapay"
    width="25%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/mytelpay.png"
    alt="mytelpay"
    width="25%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/onepay.png"
    alt="onepay"
    width="25%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/truemoney.png"
    alt="truepay"
    width="25%"
    class='mobile'
    id='mobilePayImage'
  />
  <img
    src="assets/payment-provider/mobile/wavepay.png"
    alt="wavepay"
    width="25%"
    class='mobile'
    id='mobilePayImage'
  />
    `;

  if ($("#providersContainer").html().length === 0)
    $("#providersContainer").append(images);
  $("#paymentProvider").fadeIn();
});

$("#bankPay").click(() => {
  const images = `
    <img src="assets/payment-provider/bank/abank.png" alt="abank" width="25%" class="bank" id='bankPayImage' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/kbz.png" alt="kbz" width="25%" class="bank" id='bankPayImage' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/mab.png" alt="mab" width="25%" class="bank" id='bankPayImage' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/uab.png" alt="uab" width="25%" class="bank" id='bankPayImage' onClick='clickEvent(this)'/>
    <img src="assets/payment-provider/bank/cb.png" alt="cb" width="25%" class="bank" id='bankPayImage' onClick='clickEvent(this)'/>
    `;

  if ($("#providersContainer").html().length === 0)
    $("#providersContainer").append(images);
  $("#paymentProvider").fadeIn();
});


$('#providersContainer').children('img').click(() => {
  console.log('mobilePay');
})

const clickEvent = (element) => {
  console.log(element)
}