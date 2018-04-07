// PAYAMS

// LINE COLORS
const color1 ="#11aaff"
const color2 ="#ff22aa"
const color3 ="#aa1133"
const color4 ="#44aa11"
const color5 ="#ff55aa"
const color6 ="#aa1166"
const color7 ="#77aaff"
const color8 ="#1188aa"

let getColor = function(num) {
    switch(num) {
        case 0:
            return color1;
        case 1:
            return color2;
        case 3:
            return color3;
        case 3:
            return color4;
        case 4:
            return color5;
        case 5:
            return color6;
        case 6:
            return color7;
        case 7:
            return color8;
        default:
            return "FFF";
    };
};

let decompBanner = function() {
    let decomp_banner = $('#decomps-banner');
    decomp_banner.append("<div style='padding-top: 30px'><div class='em base-purp payam-title' style='border-top: 1px solid; padding-top: 30px'>De-Compositions</div></div><hr>");
};

// FUNCTIONS TO SHOW&HIDE PREVIEW LINES
let changeButtonText = function(button) {
    if(button.innerText == "SHOW") button.innerText = "HIDE";
    else button.innerText = "SHOW";
};

let previewIt = function(preview_button) {
    let id = $(preview_button).data("id");
    let prev_box = $('#preview-payam-' + id);

    let stuf = $.ajax({
        url: "/payams/" + id + "/lines/",
        type: "get",
        data: {
            payam_id: id
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        },
    });
    stuf.done(function(resp) {
        let stuf_resp = resp['data'];

        let new_lines = ""
        stuf_resp.forEach(function(el) {
            new_lines += "<p>Line " + el['attributes']['count'] + ": " + el['attributes']['text'] + "</p>";
        });
        prev_box.append("<br>"+new_lines).hide().slideDown(400);
    });

    let button_holder = $('.btn-holder[data-id='+id+']');
    button_holder.html("<button class='decomp-button btn btn-default' data-id='" + id + "' onClick='hideIt(" + id + ")' >HIDE</button>");
};

let hideIt = function(id) {
    let hideyButtonObj = $('.btn[data-id='+id+']');
    let hideyButton = hideyButtonObj[0];
    changeButtonText(hideyButton);
    $('#preview-payam-' + id).slideToggle('hide');
};

// DECOMP JS PROTOTYPE
function Decomp(title, origId, styleId, id, lines, firstUser) {
    this.title = title;
    this.origId = origId;
    this.styleId = styleId;
    this.decomp = true;
    this.lines = lines;
    this.id = id;
    this.firstUser = firstUser;

    this.prettyTitle = function() {
        return title.split("-").join(" ");
    };
};

// PACKAGING LINES FOR DECOMP PAYAM
let payamPackage = function() {
    let newTitle = "Decomp-of-"+$("#payamInfo").data("title");
    let origId = $("#payamInfo").data("id");
    let styleId = $("#payamInfo").data("style-id");
    let decompLines = $("#decomp-holder")[0]['childNodes'];
    let linesToSend = [];
    for(i=0; i<8; i++) {
        linesToSend.push(decompLines[i].innerText);
    };
    let sendOff = new Decomp (newTitle, origId, styleId, null, linesToSend);
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
        let lineColor = getColor(i);
        let oldHtml = "<div style='color:"+lineColor+"'><p data-decompId='"+i+"' data-auth='"+rotting_lines[i]['attributes']['data-auth'].value+"'>"+oldTxt+"</p></div>"
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
    let sendOff = payamPackage();
    let decompPay = $.ajax({
        url: "/payams/decompose",
        type: "post",
        data: {title: sendOff.title,
            style_id: sendOff.styleId,
            decomp: true,
            orig: sendOff.origId,
            lines: sendOff.lines},
    });

    decompPay.done(function(resp) {
        let bounce_back = resp['data']['attributes'];
        let title = bounce_back['title'];
        let orig = bounce_back['orig'];
        let id = resp['data']['id'];
        let styleId = bounce_back['stylee'];
        let firstUser = bounce_back['first-user'];
        let prodigalPayam = new Decomp(title, orig, styleId, id, null, firstUser);
        let banner = $('#decomps-banner');

        if($('#decomps-banner')[0].textContent == "") {
            decompBanner();
        };

        $('#decomps').prepend("<div class='bottom-border-dotted'><p>"+prodigalPayam.prettyTitle()+"<br><span class='em'>by</span><br>"+prodigalPayam.firstUser+"<br><div class='btn-holder' data-id="+id+"><button class='decomp-button btn btn-default' data-id="+id+" onclick='previewIt(this)'>SHOW</button></div><div id='preview-payam-"+id+"'></div><hr></p></div>");
    });
};

// FORMAT DECOMPS UPON PAGE LOAD
let existingDecomp = function(title, orig, style, id, firstUser) {
    let oldOne = new Decomp(title, orig, style, id, null, firstUser);
    $('#decomps').prepend("<div class='bottom-border-dotted'><p>"+oldOne.prettyTitle()+"<br><span class='em'>by</span><br>"+oldOne.firstUser+"<br><div class='btn-holder' data-id="+id+"><button class='decomp-button btn btn-default' data-id="+id+" onclick='previewIt(this)'>SHOW</button></div><div id='preview-payam-"+id+"'></div><hr></p></div>");
};


// // NEW FORM TESTING AREA

