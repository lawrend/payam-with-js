// PAYAMS

// FUNCTIONS TO SHOW&HIDE PREVIEW LINES
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

// PACKAGING LINES FOR DECOMP PAYAM
function Decomp(title, origId, styleId) {
    this.title = title;
    this.origId = origId;
    this.styleId = styleId;
    this.decomp = true;
};

let payamPackage = function() {
    let newTitle = $("#payamInfo").data("title") + "-Decomp-"+ $("#payamInfo").data("current-user-name");
    let origId = $("#payamInfo").data("id");
    let styleId = $("#payamInfo").data("style-id");
    let sendOff = new Decomp (newTitle, origId, styleId);
    return sendOff;
};

// FUNCTIONS TO DECOMPOSE AND SAVE NEW DECOMP
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
        li.fadeOut(function() {
            $(this).text(stillStanding).fadeIn(250);
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
    $('#buttonHolder').html("<div class='flex-container' style='height: 130px'><div class='container'><button class='btn btn-default' onclick='saveIt()'>Save It</button></div><div class='container'><button class='btn btn-decomp' onclick='nextDecomposeIt()'>Decomp it more</button></div><div class='container'><button class='btn btn-default' onclick='firstDecomposeIt()'>Start Over</button></div></div>");
};

let nextDecomposeIt = function() {
    for(i=0; i<8; i++) {
        removeWord(i);
    };
};

let saveIt = function() {
    // let newTitle = $("#payamInfo").data("title") + "-Decomp-"+ $("#payamInfo").data("current-user-name");
    // let curUsr = $("#payamInfo").data("current-user-id");
    // let origId = $("#payamInfo").data("id");
    // let styleId = $("#payamInfo").data("style-id");
    let sendOff = payamPackage();
    let decompPay = $.ajax({
        url: "/payams/decompose",
        type: "post",
        data: {title: sendOff.title,
            style_id: sendOff.styleId,
            decomp: true,
            orig: sendOff.origId},
    });

    decompPay.done(function(resp) {
        let style = resp['data']['attributes'];
        let bounce_back = resp['data']['attributes'];
        let title = bounce_back['title'];
        // let style = bounce_back["'style_id'"];

        $("#decomps").append("<h3>"+title+"</h3>");
    });
};

