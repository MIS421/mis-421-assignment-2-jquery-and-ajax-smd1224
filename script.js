var len;
var results = '';

function apiSearch() {

    results = '';
    $('#searchResults').html(results);
   
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

        data.webPages.value.length = 0;

    })
    .fail(function () {
      alert("error");
    });
}

function displayTime() {

    var today = new Date();

    var time = today.getHours() + ':' + today.getMinutes();

    var currentTime = "<h2>" + time + "</h2>"

    $("#time").html(currentTime);

}