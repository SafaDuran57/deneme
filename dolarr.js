function DovizCevir() {

      
  var settings = {
      "url": "http://www.floatrates.com/daily/try.xml",
      "method": "GET",
      "timeout": 0,
      "headers": {
      },
    };

  $.ajax({
      type: "GET",
      url: "http://www.floatrates.com/daily/try.xml",
      dataType: "xml",

      success: function(e){
              
          var miktar = document.getElementById("miktar").value;
          var kod = document.getElementById("kod").value; 

          switch(kod){
              case "USD": var USD = $("inverseRate",e).eq(0).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / USD) + " $"; break;
              case "EUR": var EUR = $("inverseRate",e).eq(1).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / EUR) + " €"; break;
              case "GBP": var GBP = $("inverseRate",e).eq(2).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / GBP) + " £"; break;
              case "JPY": var JPY = $("inverseRate",e).eq(3).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / JPY) + " ¥"; break;
              case "AUD": var AUD = $("inverseRate",e).eq(4).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / AUD) + " AUD"; break;
              case "CHF": var CHF = $("inverseRate",e).eq(5).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / CHF) + " FR"; break;
              case "CAD": var CAD = $("inverseRate",e).eq(6).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / CAD) + "C$"; break;
              case "RUB": var RUB = $("inverseRate",e).eq(7).text();
              document.getElementById("HesapSonuc").innerHTML = (miktar / RUB) + "₽"; break;
          }
      } 
  })
}