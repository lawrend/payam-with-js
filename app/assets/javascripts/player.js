let firstPayam = function(playerId) {
    let position = parseInt($('#iron_maiden').data('id'));
    let nextPosition = parseInt($('#iron_maiden').data('id')) + 1;
    $.get("/players/"+ playerId +"/payams.json").done(function(resp) {
    let tuba = resp['data'];
    let tabble = tuba[position]['attributes']['title']
    let longo = tuba.length
        if(nextPosition >= longo) {
            nextPosition = 0;
        };

    $('#nexties').html("<p class='markee'>Title: <a href='/payams/"+tuba[position]['id']+"'>"+tabble+"</a></p><button class='btn btn-default' id='iron_maiden' data-id='"+nextPosition+"' onclick='firstPayam("+playerId+")'>Next one...</button>")
    });
};


$(function() {
});
