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
    $.get("players/"+ playerId +"/payams.json").done(function(resp) {
    let tuba = resp['data'][0];
    let tabble = tuba['attributes']['title']
    // let tootle = tabble[0];
    // console.log(tootle);

    $('#nexties').html("<p>"+tabble+"</p><button class='btn btn-default' onclick='nextPayam("+playerId+")'>Next one...</button>")
    });
};


let nextPayam = function(playerId) {
    $.get("players/"+ playerId +"/payams.json").done(function(resp) {
    let tuba = resp['data'][0];
    let tabble = tuba['attributes']['title']
    // let tootle = tabble[0];
    // console.log(tootle);

    $('#nexties').html("<p>"+tabble+"</p><button class='btn btn-default' onclick='nextPayam("+playerId+")'>Next one...</button>")

    });

    // ("<p><%= link_to #{" + tootle+"}, payam_path("+tabble['id']+") </p> %>")

};

$(function() {
        // let playerId= $('#greeter').data("id");
    // let readout = $.get("/players/"+playerId+".json");
    // let payout = $.get("/players/"+ playerId + "/payams.json");
});
