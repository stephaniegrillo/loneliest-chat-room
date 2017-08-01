$(function () {
  var count = 0
  $('#new-message-button').click(function () {
    var userInput = $('#new-message-body').val();
    var msg = '<li class="message">';

    var usernames = ['Me', 'Myself', 'I']

    msg += "<a class='delete' href='#'>Delete</a>";
    msg +=  '<h3 class="author">' + usernames[count] + '</h3>';
    msg += '<p class="message-body">'+userInput+'</p>';
    msg += '<span class=\"timestamp">'+dateMatcher+'</span>';
    msg += '</li>';
    $("#conversation").append(msg);
    $('#new-message-body').val(null);
    $('a.delete').click(function() {
      console.log("x clicked!");
    })
    if (count === 2) {
      count = 0
    } else {
      count++
    }
  });
  $('#conversation').on('click', '.delete',function() {
    $(this).parent().remove()
  })
  var date = new Date();
  var dateMatcherString = "(" + date.getHours() + ":" + date.getMinutes() + ")"
  var dateMatcher = new RegExp(dateMatcherString);

  $('#new-message-body').keypress(function(event) {
      if (event.keyCode === 13) {
        $('#new-message-button').click();
      }

    });
});
