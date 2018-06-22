// PAYAMS

const getColor = function(num) {

    // LINE COLORS
    const color1 ="#11aaff"
    const color2 ="#ff22aa"
    const color3 ="#aa1133"
    const color4 ="#44aa11"
    const color5 ="#ff55aa"
    const color6 ="#aa1166"
    const color7 ="#77aaff"
    const color8 ="#1188aa"


    switch(num) {
        case 0:
            return color1;
        case 1:
            return color2;
        case 2:
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
            return "#FFF";
    };
};


// FUNCTIONS TO SHOW&HIDE PREVIEW LINES
const changeButtonText = function(button) {
    if(button.innerText == "SHOW") button.innerText = "HIDE";
    else button.innerText = "SHOW";
};

const previewIt = function(previewButton) { const id = $(previewButton).data("id");
    const prevBox = $('#preview-payam-' + id);

    const stuf = $.ajax({
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
        const stufResp = resp['data'];

        let newLines = ""
        stufResp.forEach(function(el) {
            const DecompLineColor = getColor(el['attributes']['count'] - 1);
            newLines += "<p style='color: "+ DecompLineColor + "'>" + el['attributes']['text'] + "</p>";
        });
        prevBox.append("<br>"+newLines).hide().slideDown(400);
    });

    const buttonHolder = $('.btn-holder[data-id='+id+']');
    buttonHolder.html("<button class='decomp-button btn btn-default' data-id='" + id + "' onClick='hideIt(" + id + ")' >HIDE</button>");
};

const hideIt = function(id) {
    const hideyButtonObj = $('.btn[data-id='+id+']');
    const hideyButton = hideyButtonObj[0];
    changeButtonText(hideyButton);
    $('#preview-payam-' + id).slideToggle('hide');
};

// DECOMP JS OBJECT
function Decomp(title, origId, styleId, id, lines, firstUser, createdAt) {
    this.title = title;
    this.origId = origId;
    this.styleId = styleId;
    this.decomp = true;
    this.lines = lines;
    this.id = id;
    this.firstUser = firstUser;
    this.createdAt = new Date(createdAt).toUTCString();

    this.prettyTitle = function() {
        return title.split("-").join(" ");
    };

};

// ADD prototype
//
// PACKAGING LINES FOR DECOMP PAYAM
const payamPackage = function() {
    const newTitle = "Decomp-of-"+$("#payamInfo").data("title");
    const origId = $("#payamInfo").data("id");
    const styleId = $("#payamInfo").data("style-id");
    const decompLines = $("#decomp-holder")[0]['childNodes'];
    let linesToSend = [];
    for(i=0; i<8; i++) {
        linesToSend.push(decompLines[i].innerText);
    };
    const sendOff = new Decomp (newTitle, origId, styleId, null, linesToSend, null, null);
    return sendOff;
};

// FUNCTIONS TO DECOMPOSE AND SAVE NEW DECOMP
function removeWord(i) {
    const li = $('[data-decompId='+i+']');
    const str = li[0].innerText;
    const splitString = str.split(" ");
    const len = splitString.length;
    if(len > 1) {
        const expiryAddr = Math.floor((Math.random() * (len - 1)));
        const firstHalf = splitString.slice(0, expiryAddr).join(" ");
        const secondHalf = splitString.slice(expiryAddr + 1).join(" ");
        const fallen = splitString.splice(expiryAddr, 1);
        const stillStanding = splitString.join(" ");
        li.html("<p>"+firstHalf+"<span class=fadeOut> "+fallen+" </span>"+secondHalf);
        li.fadeOut(function() {
            $(this).text(stillStanding).fadeIn(250);
        });
    } else {
        return splitString;
    };
}

const firstDecomposeIt = function() {
    const lineGraveyard = $("#decomp-holder");
    lineGraveyard.empty();
    const linesToDecomp = $(".liner");
    for(i=0; i < linesToDecomp.length; i++) {
        const oldTxt = linesToDecomp[i].innerText;
        const lineColor = getColor(i);
        const oldHtml = "<div style='color:"+lineColor+"'><p data-decompId='"+i+"' data-auth='"+linesToDecomp[i]['attributes']['data-auth'].value+"'>"+oldTxt+"</p></div>"
        lineGraveyard.append(oldHtml);
        removeWord(i);
    };
    $('#buttonHolder').html("<div class='flex-container' style='height: 130px'><div class='container'><button class='btn btn-default' onclick='saveIt()'>Save It</button></div><div class='container'><button class='btn btn-decomp' onclick='nextDecomposeIt()'>Decomp it more</button></div><div class='container'><button class='btn btn-default' onclick='firstDecomposeIt()'>Start Over</button></div></div>");
};

const nextDecomposeIt = function() {
    for(i=0; i<8; i++) {
        removeWord(i);
    };
};

// Use this to format decomps added to the page bc it is used for both display of existing and saving of new decomps created while on page //
const addDecompToPage = function(prettyTitle, firstUser, id, createdAt) {
    $('#decomps').prepend("<div class='bottom-border-dotted'><p>"+prettyTitle+"<br><span class='em'>by</span><br>"+firstUser+"<br><span class='em'>on</span><br>"+createdAt+"<br><div class='btn-holder' data-id="+id+"><button class='decomp-button btn btn-default' data-id="+id+" onclick='previewIt(this)'>SHOW</button></div><div id='preview-payam-"+id+"'></div><hr></p></div><hr>");
};

const saveIt = function() {
    const sendOff = payamPackage();
    const decompPay = $.ajax({
        url: "/payams/decompose",
        type: "post",
        data: {title: sendOff.title,
            style_id: sendOff.styleId,
            decomp: true,
            orig: sendOff.origId,
            lines: sendOff.lines},
    });

    decompPay.done(function(resp) {
        const respAttributes = resp['data']['attributes'];
        const prodigalPayam = new Decomp(respAttributes['title'], respAttributes['orig'], respAttributes['stylee'], resp['data']['id'], null, respAttributes['first-user'], respAttributes['created-at']);
        const banner = $('#decomps-banner');

         decompBanner();

        addDecompToPage(prodigalPayam.prettyTitle(), prodigalPayam.firstUser, resp['data']['id'], prodigalPayam.createdAt);

    });
};

// FORMAT DECOMPS UPON PAGE LOAD

const decompBanner = function() {
    const decompBanner = $('#decomps-banner');
    decompBanner.html("<div class='bottom-border-dotted' style='padding-top: 30px'><div class='em base-purp payam-title' style='border-top: 1px solid; padding-top: 30px'>De-Compositions</div></div><hr>");
};

const clearDecomp = function() {
    $('#decomps').html("");
};

const existingDecomp = function(title, orig, style, id, firstUser, createdAt) {
    const oldOne = new Decomp(title, orig, style, id, null, firstUser, createdAt);

    addDecompToPage(oldOne.prettyTitle(), oldOne.firstUser, id, oldOne.createdAt);
};

const displayPayamLines = function(lines) {
    lines.forEach(function(e) {
        $("#line-holder").append("<span class='liner' style='color: "+getColor(e.count-1)+"' data-auth='"+e.auth_id+"' > "+e.text+" </span>");
    });
};
