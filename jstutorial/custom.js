
$(document).ready(function(){
  /*
  alert("I am fully loaded");
  console.log("Hello World");

  var firstName = 'Don';
  var lastName = 'Shine';
  console.log('Hello '+ firstName + ' ' +lastName);
  firstName = 'Tom';
  console.log('Hello'+firstName);
  var is_an_excellent_teacher = true
  if(is_an_excellent_teacher == true){
    firstName = 'Don';
  }else{
    firstName = 'Tom';
  }
    console.log('Hello '+ firstName + ' ' +lastName + ' you are excellent teacher');*/
    var foods = ['pizza', 'pasta', 'chocolate','apples'];
    /*console.log(foods.length);
    console.log(foods[3]);*/
    for(var i = 0; i < foods.length; i = i + 1){
      /*console.log(foods[i]);*/
      $('#thingsIlike').append('<li>' + foods[i] + '</li>')
    }
  /*  $('#javacafe').mouseover(function(){
      console.log('mouse has entered java cafe');
      $(this).hide();

    $('#javacafe').mouseleave(function(){
      console.log('mouse is has left java cafe');
      $(this).show();
    })*/

    /*$('#hidepicture').click(function(){
      console.log("Hide button clicked");
      $('#javacafe').hide();
    })
    $('#showpicture').click(function(){
      console.log("Show button clicked");
      $('#javacafe').show();
    })*/
    $('#hidepicture').on('click',function(){
      $('#javacafe').hide();
    })
    $('#showpicture').on('click',function(){
      $('#javacafe').fadeIn(3000);
    });
    $('#changeColor').on('click', function(){
      $('#thingsIlike').css('background-color', 'red').css('color', 'blue');
      $('#firstHeading').append(' Welcome to our class');
    });

$.ajax({
    url: 'https://randomuser.me/api/?results=24',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $.each(data.results, function(key,person){
        console.log(person.picture.large + ' ' + person.name.title + ' ' + person.name.first + ' ' + person.name.last );
        $('#users').append('<p><img src="'+ person.picture.large +'" class="img-fluid rounded-circle">' + '</p>')
        $('#users').append('<p>' + person.name.first + ' ' + person.name.last + '</p>')
      })
    }
  });

});
