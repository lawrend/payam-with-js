$(function() {
  $('.js-preview').click (function() {
      var id = $(this).data("id");
      let stuf = $.get("/payams/" + id + "/lines/");
      debugger;
      // $.get("/payam/" + id, function(data) {
      // $("#preview-payam-" + id).html(data);
      // });
    });
  // $('.js-preview').click(function() {
  //     alert("hey now");
  // });
});
