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

function removeWord(str) {
    let splitString = str.split(" ");
    let len = splitString.length;
    if(len > 1) {
        let expiryAddr = Math.floor((Math.random() * (len - 1)));
        splitString.splice(expiryAddr, 1);
        return splitString.join(" ");
    } else {
        return splitString;
    };
}

let firstDecomposeIt = function() {
    let line_graveyard = $("#decomp-holder");
    line_graveyard.empty();
    let rotting_lines = $(".liner");
    for(i=0; i < rotting_lines.length; i++) {
        line_graveyard.append("<p id='"+i+"' data-auth='"+rotting_lines[i]['attributes']['data-auth'].value+"'>"+removeWord(rotting_lines[i].innerText)+"</p>");
    };
    $('#buttonHolder').html("<div class='flex-container-column' style='justify-content: space-between'><div class='container'><button class='btn btn-decomp' onclick='nextDecomposeIt()'>Decomp it more</button></div><div class='container'><button class='btn btn-default' onclick='saveIt()'>Save It</button></div></div><div class='container'><button class='btn btn-default' onclick='firstDecomposeIt()'>Start Over</button></div></div>");
};

let saveIt = function() {
};


let nextDecomposeIt = function() {
    let tombstones = $('#decomp-holder p');
    for(i=0; i<8; i++) {
        tombstones[i].innerText = removeWord(tombstones[i].innerText);
    };
};
