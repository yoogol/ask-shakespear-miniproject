window.onload = function() {
  var randomButton = document.querySelector('button');
  var inputBox = document.querySelector('input');
  var youAsked = document.querySelector('.userAsked');
  var poemLineEl = document.querySelector('.poem-line')

  randomButton.addEventListener('click',function(event) {
    event.preventDefault();
    var userTyped = inputBox.value;
    youAsked.innerHTML = "";
    poemLineEl.innerHTML = "";
    inputBox.value = "";
    var yourQuestion = document.createElement('div');
    yourQuestion.innerHTML = "YOU ASKED: " + userTyped;
    youAsked.appendChild(yourQuestion);

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
