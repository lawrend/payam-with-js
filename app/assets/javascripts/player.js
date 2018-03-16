// First time button is pressed and every time "Next" pressed
let firstPayam = function(playerId) {
    //get position in array of finished payams, value stored in button
    let position = parseInt($('#iron_maiden').data('id'));
    let nextPosition = parseInt($('#iron_maiden').data('id')) + 1;
    let prevPosition = parseInt($('#iron_maiden').data('id')) - 1;

    //GET all completed payams for this player
    $.get("/players/"+ playerId +"/payams.json").done(function(resp) {
        let tuba = resp['data'];
        let tabble = tuba[position]['attributes']['title']
        let longo = tuba.length
        //allow for looping through array
        if(nextPosition >= longo) {
            nextPosition = 0;
        };

        if(prevPosition < 0) {
            prevPosition = longo - 1;
        };
        //replace html with new buttons with new values
        $('#nexties').html("<p class='markee'>Title: <a href='/payams/"+tuba[position]['id']+"'>"+tabble+"</a></p><div class='flex-container' style='justify-content: space-around'><div class='container'><p><a id='scorps' data-id='"+prevPosition+"' onclick='prevPayam("+playerId+")'>Previous</a><p></div><div class='container'><p><a id='iron_maiden' data-id='"+nextPosition+"' onclick='firstPayam("+playerId+")'>Next one...</a></p></div></div>")
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
        let tuba = resp['data'];
        let tabble = tuba[position]['attributes']['title'];
        let longo = tuba.length;
        if(nextPosition >= longo) {
            nextPosition = 0;
        };

        if(prevPosition < 0) {
            prevPosition = longo - 1;
        };

        //replace html with new buttons with new values
        $('#nexties').html("<p class='markee'>Title: <a href='/payams/"+tuba[position]['id']+"'>"+tabble+"</a></p><div class='flex-container' style='justify-content: space-around'><div class='container'><p><a id='scorps' data-id='"+prevPosition+"' onclick='prevPayam("+playerId+")'>Previous</a></p></div><div class='container'><p><a id='iron_maiden' data-id='"+nextPosition+"' onclick='firstPayam("+playerId+")'>Next one...</a></p></div></div>")
    });
};



$(function() {
});
