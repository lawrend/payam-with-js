// PLAYERS

// First time button is pressed and every time "Next" or "Previous" pressed,
// This is the html showing nav buttons and titles
const makeNavLinks = function(respoPos, respoTitle, prevPos, nextPos, playerId) {
    $('#nexties').html("<div class='container payam-title bottom-border-dotted'><a href='/payams/"+respoPos['id']+"'>"+respoTitle+"</a></div><div class='container'><div class='flex-container'><div class='container'><p><a id='scorps' data-id='"+prevPos+"' onclick='prevPayam("+playerId+")'>Previous</a></p></div><div class='container'><p><a id='iron_maiden' data-id='"+nextPos+"' onclick='firstPayam("+playerId+")'>Next</a></p></div></div></div>");
    $('#background-title').html(respoTitle);

}

// When navigating completed payams
const payamNavButtons = function(playerId, divName) {
    //divName id is payam id
    let position = parseInt($(divName).data('id'));
    let nextPosition = parseInt($(divName).data('id')) + 1;
    let prevPosition = parseInt($(divName).data('id')) - 1;

    //GET all completed payams for this player
    $.get("/players/"+ playerId +"/payams.json").done(function(resp) {
        const respo = resp['data'];
        const respoTitleAttr = respo[position]['attributes']['title']
        const respoLength = respo.length
        //allow for looping through array and cycling between fist and last payam
        if(nextPosition >= respoLength) {
            nextPosition = 0;
        };

        if(prevPosition < 0) {
            prevPosition = respoLength - 1;
        };
        //replace html with new links and new values
        makeNavLinks(respo[position], respoTitleAttr, prevPosition, nextPosition, playerId);
    });
};

//firstPayam called on first click of completed pyams and each click of 'Next'
const firstPayam = function(playerId) {
    return payamNavButtons(playerId, '#iron_maiden');
};

const prevPayam = function(playerId) {
    return payamNavButtons(playerId, "#scorps");
};

//Who is working on a payam you started
const whereAreMyPayams = function(playerId) {
    $.get("/players/"+ playerId +"/outstanding_originals").done(function(resp) {
        const respo = resp['data'];
        respo.forEach(function(atrbute) {
            const respoTitleAttr = atrbute['attributes']['title'];
            const respo_currentUser = atrbute['attributes']['current-scribe-username'];
            const round = atrbute['attributes']['counter'];
            $('#outstanding-originals').prepend("<div class='bottom-border-dotted'><p>"+respo_currentUser+" is working on round "+round+" of "+respoTitleAttr+"</p></div><br>");
        });
    });
};

// hide/show payams "Get on These" and those others working on
document.addEventListener("turbolinks:load", function() {
    $("#hide-helpers").click(function() {
        $(".initially-hidden").slideToggle(300);
    });

    $("#hide-workers").click(function() {
        $(".hidden-workers").slideToggle(300);
    });

    $("#greeter").click(function() {
        $(".intro-paragraphs").slideToggle(300);
    });

});

