// PLAYERS

// First time button is pressed and every time "Next" pressed
let makeNavLinks = function(respoPos, respoTitle, prevPos, nextPos, playerId) {
    $('#nexties').html("<div class='container payam-title bottom-border-dotted'><a href='/payams/"+respoPos['id']+"'>"+respoTitle+"</a></div><div class='container'><div class='flex-container'><div class='container'><p><a id='scorps' data-id='"+prevPos+"' onclick='prevPayam("+playerId+")'>Previous</a></p></div><div class='container'><p><a id='iron_maiden' data-id='"+nextPos+"' onclick='firstPayam("+playerId+")'>Next</a></p></div></div></div>");
    $('#background-title').html(respoTitle);

}
let firstPayam = function(playerId) {
    //get position in array of finished payams, value stored in button
    let position = parseInt($('#iron_maiden').data('id'));
    let nextPosition = parseInt($('#iron_maiden').data('id')) + 1;
    let prevPosition = parseInt($('#iron_maiden').data('id')) - 1;

    //GET all completed payams for this player
    $.get("/players/"+ playerId +"/payams.json").done(function(resp) {
        let respo = resp['data'];
        let respo_title_attr = respo[position]['attributes']['title']
        let respo_length = respo.length
        //allow for looping through array
        if(nextPosition >= respo_length) {
            nextPosition = 0;
        };

        if(prevPosition < 0) {
            prevPosition = respo_length - 1;
        };
        //replace html with new links with new values
        makeNavLinks(respo[position], respo_title_attr, prevPosition, nextPosition, playerId);
    });
};

//each time "previous" button is pressed
let prevPayam = function(playerId) {
    let position = parseInt($('#scorps').data('id'));
    // let nextPosition = position + 1;

    let nextPosition = parseInt($('#scorps').data('id')) + 1;
    // let prevPosition = position - 1;
    let prevPosition = parseInt($('#scorps').data('id')) - 1;
    $.get("/players/"+ playerId +"/payams.json").done(function(resp) {
        let respo = resp['data'];
        let respo_title_attr = respo[position]['attributes']['title'];
        let respo_length = respo.length;
        if(nextPosition >= respo_length) {
            nextPosition = 0;
        };

        if(prevPosition < 0) {
            prevPosition = respo_length - 1;
        };

        //replace html with new buttons with new values
        makeNavLinks(respo[position], respo_title_attr, prevPosition, nextPosition, playerId);
    });
};

let whereAreMyPayams = function(playerId) {
    $.get("/players/"+ playerId +"/outstanding_originals").done(function(resp) {
        let respo = resp['data'];
        respo.forEach(function(ind) {
            let respo_title_attr = ind['attributes']['title'];
            let respo_currentUser = ind['attributes']['current-scribe-username'];
            let round = ind['attributes']['counter'];
            // console.log(respo);
            $('#outstanding-originals').prepend("<div class='bottom-border-dotted'><p>"+respo_currentUser+" is working on round "+round+" of "+respo_title_attr+"</p></div><br>");
        });
    });
};

// hide/show payams to work on/others working //
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

