window.onload = function() {
  var randomButton = document.querySelector('button');
  var inputBox = document.querySelector('input');

  randomButton.addEventListener('click',function(event) {
    event.preventDefault();
    var userTyped = inputBox.value;
    inputBox.value = "";
    var yourQuestion = document.createElement('div');
    yourQuestion.innerHTML = "YOU ASKED: " + userTyped;
    var youAsked = document.querySelector('.userAsked');
    youAsked.appendChild(yourQuestion);
    var poemLineEl = document.querySelector('.poem-line')
    var query = 'http://ShakeItSpeare.com/api/sentence';
    $.ajax({
      url: query,
    }).done(function(response){
      console.log(response);
      poemLineEl.innerHTML = "SHAKESPEAR SAYS: " + response.sentence;
    }).fail(function(response){
      console.log("uh oh, fail");
      console.log(response);
    }).always(function(response){
      console.log("this code runs no matter what.");
    })


  }) //end click event


} // end of window.onload
