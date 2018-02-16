let firstPayam = function(playerId) {
    let position = parseInt($('#iron_maiden').data('id'));
    // let nextPosition = parseInt(position + 1);
    let nextPosition = parseInt($('#iron_maiden').data('id')) + 1;
    // let prevPosition = parseInt(position - 1);
    let prevPosition = parseInt($('#iron_maiden').data('id')) - 1;
    $.get("/players/"+ playerId +"/payams.json").done(function(resp) {
    let tuba = resp['data'];
    let tabble = tuba[position]['attributes']['title']
    let longo = tuba.length
        if(nextPosition >= longo) {
            nextPosition = 0;
        };

        if(prevPosition < 0) {
            prevPosition = longo - 1;
        };
    console.log(prevPosition);

    $('#nexties').html("<p class='markee'>Title: <a href='/payams/"+tuba[position]['id']+"'>"+tabble+"</a></p><button class='btn btn-default' id='scorps' data-id='"+prevPosition+"' onclick='prevPayam("+playerId+")'>Previous</button><button class='btn btn-default' id='iron_maiden' data-id='"+nextPosition+"' onclick='firstPayam("+playerId+")'>Next one...</button>")
    });
};

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

    console.log(prevPosition);

    $('#nexties').html("<p class='markee'>Title: <a href='/payams/"+tuba[position]['id']+"'>"+tabble+"</a></p><button class='btn btn-default' id='scorps' data-id='"+prevPosition+"' onclick='prevPayam("+playerId+")'>Previous</button><button class='btn btn-default' id='iron_maiden' data-id='"+nextPosition+"' onclick='firstPayam("+playerId+")'>Next one...</button>")
    });
};



$(function() {
});
