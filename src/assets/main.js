$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/4547835.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
      // handle response
    }
  });
});
