// PAYAMS

let previewIt = function(preview_button) {
    let id = $(preview_button).data("id");
    let prev_box = $('#preview-payam-' + id);

    if (prev_box.text() == "") {
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
    let button_holder = $('.btn-holder[data-id='+id+']');
    function prev_boxer() {
        prev_box.toggle();
    };
    button_holder.html("<button class='btn btn-default' data-id='" + id + "' onClick='hideIt(" + id + ")' >Preview...</button>");
    // button_holder.onClick="function(event){ prev_box.toggle('hide') }";
    };
};

let hideIt = function(id) {
    $('#preview-payam-' + id).toggle('hide');
};
