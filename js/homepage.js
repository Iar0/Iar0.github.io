$(document).ready(function() {
  $('#sidebar-trigger').click(function() {
    $('#sidebar').animate({width: 'toggle'});
  });


  $('#sidebar .mask').click(function() {
  	$('#sidebar').hide();
  });


});