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

function removeWord(i) {
    let li = $('[data-decompId='+i+']');
    let str = li[0].innerText;
    let splitString = str.split(" ");
    let len = splitString.length;
    if(len > 1) {
        let expiryAddr = Math.floor((Math.random() * (len - 1)));
        let firstHalf = splitString.slice(0, expiryAddr).join(" ");
        let secondHalf = splitString.slice(expiryAddr + 1).join(" ");
        let fallen = splitString.splice(expiryAddr, 1);
        let stillStanding = splitString.join(" ");
        li.html("<p>"+firstHalf+"<span class=fadeOut> "+fallen+" </span>"+secondHalf);
        li.delay(2000).fadeOut(function() {
            $(this).text(stillStanding).fadeIn(1500);
        });
    } else {
        return splitString;
    };
}

let firstDecomposeIt = function() {
    let line_graveyard = $("#decomp-holder");
    line_graveyard.empty();
    let rotting_lines = $(".liner");
    for(i=0; i < rotting_lines.length; i++) {
        let oldTxt = rotting_lines[i].innerText;
        let oldHtml = "<p data-decompId='"+i+"' data-auth='"+rotting_lines[i]['attributes']['data-auth'].value+"'>"+oldTxt+"</p>"
        line_graveyard.append(oldHtml);
        removeWord(i);
    };
    $('#buttonHolder').html("<div class='flex-container-column' style='justify-content: flex-center'><div class='container'><div class='flex-container' style='justify-content: flex-end'><button class='btn btn-decomp' onclick='nextDecomposeIt()'>Decomp it more</button></div><div class='container'><div class='container'><button class='btn btn-default' onclick='saveIt()'>Save It</button></div><div class='container'><button class='btn btn-default' onclick='firstDecomposeIt()'>Start Over</button></div></div>");
};

let nextDecomposeIt = function() {
    for(i=0; i<8; i++) {
        removeWord(i);
    };
};

let saveIt = function() {
    let origTitle = $("#payamInfo").data("title");
    let origId = $("#payamInfo").data("decompId");
    let origStyle = $("#payamInfo").data("styleId");
    let decompPay = $.ajax({
        url: "/payams",
        type: "post",
        data: JSON.stringify ({
            counter: 8,
            current_scribe: "nil",
            decomp: true,
            orig: origId,
            style_id: origStyle,
            title: "decomp" + origTitle
        }),
    });
};



