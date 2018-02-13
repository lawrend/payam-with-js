// $(function () {
//   $(".js-next").on("click", function() {
//     var nextId = parseInt($(".js-next").attr("data-id")) + 1;
//     $.get("/posts/" + nextId + ".json", function(data) {
//       $(".authorName").text(data["author"]["name"]);
//       $(".postTitle").text(data["title"]);
//       $(".postBody").text(data["description"]);
//       // re-set the id to current on the link
//       $(".js-next").attr("data-id", data["id"]);
//     });
//   });
// });
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

    $('#nexties').html("<p><a href='/payams/"+tuba[position]['id']+"'>"+tabble+"</a></p><button class='btn btn-default' id='iron_maiden' data-id='"+nextPosition+"' onclick='firstPayam("+playerId+")'>Next one...</button>")
    });
};

let nextPayam = function(payamId) {
    $.get("/payams/"+ payamId +".json").done(function(resp) {
    let tuba = resp['data'];
    // console.log(tootle);

    $('#nexties').html(
        "<p><a href='/payams/"+payamId +"'>"+tuba['attributes']['title']+"</a></p><button class='btn btn-default' onclick='nextPayam("+payamId+")'>Next one...</button>")

    });

    // ("<p><%= link_to #{" + tootle+"}, payam_path("+tabble['id']+") </p> %>")
  // $('#nexties').html("<a href ='/payams/"+payamId+"'>pancho</a>");
};

$(function() {
        // let playerId= $('#greeter').data("id");
    // let readout = $.get("/players/"+playerId+".json");
    // let payout = $.get("/players/"+ playerId + "/payams.json");
});
