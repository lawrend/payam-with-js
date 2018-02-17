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
    };
};

let hideIt = function(id) {
    $('#preview-payam-' + id).toggle('hide');
};

let firstDecomposeIt = function() {
    let line_graveyard = $("#decomp-holder");
    let rotting_lines = $(".liner");
     for(i=0; i < rotting_lines.length; i++) {
         line_graveyard.append("<p id='"+i+"' data-auth='"+rotting_lines[i].attributes['data-auth']+"'>"+rotting_lines[i].innerText+"</p>");
     };
};

let nextDecomposeIt = function() {
};
