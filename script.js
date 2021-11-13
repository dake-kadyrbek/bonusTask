function openWin() {
  window.open("https://www.booking.com/index.ru.html");
}
function about() {
  alert("Main idea of project to increase number of tourist that come to our country. Here they can find all information that they need.");
}
function trans(){
  alert("Air companies: Scat, AirAstana, QazAir");
  alert("Railway: KTZ");
  alert("Taxi: AstanaTaxi");
}
function food(){
  window.open("https://www.skyway.kz/en/kakoj-na-vkus-kazahstan-podrobnyj-gajd/");
}
function futh(){
  window.open("https://www.lonelyplanet.com/kazakhstan");
}

function down(){
  var downloadUrl = "https://baigenews.kz/upload/iblock/158/6fbe1ff8bd06dba67e8e5fb61a9fb395_crop_l_6_t_28_w_792_h_446.jpg";

  var downloading = browser.downloads.download({
  url : downloadUrl,
  filename : "charun.jpg",

}); 
}
setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min + ":" + sec + am_pm;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
showTime();

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);}

function initMap() {
         const charyn = { lat: 43.3569709, lng: 79.0762211 };
        const map1 = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: charyn,
        });
        const marker = new google.maps.Marker({
          position: charyn,
          map: map1,
        });
      }
      