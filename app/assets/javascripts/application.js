// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .
//
//

$(function () {
  $("#contact-submit").on("click", function (event) {
    // console.log($(".form-control"))
    $(".form-control").each(function(i, input){
      var $parent = $(input).parent();
      if ($parent.children("span")[0]) {
        $parent.children("span")[0].remove()
      };
      // var $parent.removeClass
      if (!$(input).val()){
        $parent.append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>')
        $parent.attr('class', 'form-group has-error has-feedback');
      } else {
        $parent.attr("class", "form-group has-success has-feedback" )
        $parent.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>')
      }
    })
  })


  // $('.carousel').carousel({
  //   interval: 2000
  // })

  // $('body').scrollspy({ target: '.navbar-scrollspy' })

  $('body').mousemove(function(e){
      var amountMovedX = (e.pageX * -1 / 100);
      var amountMovedY = (e.pageY * -1 / 100);
      $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  $(".this-one-here").tooltip();


})

