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
    };
};

