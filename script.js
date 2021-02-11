var len;
var results = '';

function apiSearch() {
   
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "6660198a62a44b559902732f48a946cb");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
        
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);

      $('#searchResults').dialog();

    })
    .fail(function () {
      alert("error");
    });
}

function runSearch(){
    apiSearch();
    $('#searchResults').css("visibility", "visible");
    results = '';
}

function displayTime() {

    var today = new Date();
    

    var time = today.getHours() + ':' + today.getMinutes();

    

    var currentTime = "<h2>" + time + "</h2>"

    $('#time').html(currentTime);
    $('#time').css("visibility", "visible");
    $('#time').dialog();


}

var imageUrl = ["https://images.unsplash.com/photo-1532673492-1b3cdb05d51b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"];

function imageSwap() {
    var temp = imageUrl[0];
    imageUrl[0] = imageUrl[1];
    imageUrl[1] = temp;

    $("body").css("background-image", "url(" + imageUrl[1] + ")");
}


