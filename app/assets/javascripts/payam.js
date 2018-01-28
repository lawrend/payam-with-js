// PAYAMS

$(function() {
  $('.js-preview').click (function() {
      let id = $(this).data("id");
      let prev_box = $('#preview-payam-' + id);
      let stuf = $.ajax({
          url: "/payams/" + id + "/lines/",
          type: "get",
          data: {
              payam_id: id
          },
      });
      stuf.done(function(resp) {
          let stuf_resp = resp['data'];
          stuf_resp.forEach(function(el) {
              prev_box.append("<p>Line " + el['attributes']['count'] + ": " + el['attributes']['text'] + "</p>");
          });
      });
    });
});
