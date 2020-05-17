$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    console.log(data.results[0].name.first);
    $("#person").append('<h1>' + data.results[0].name.first + ' ' + data.results[0].name.last + '</h1>');
    $.each(data.results, function(key, value){
      $('#person').append('<h1>' + value.name.first + ' ' + value.name.last + '</h1><img src="'+ value.picture.large +'" class="img-fluid rounded-circle">')
    })
  }
