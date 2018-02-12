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
function nextPayam(payamId) {
    $.get("payams/"+ payamId +".json").done(function(resp) {
    let tuba = resp['data'];
    let tootle = tuba['attributes']['title'];
    // console.log(tootle);
  <p><%= link_to "#{displayPayam.title}", payam_path(displayPayam) %>
  </p>
<div>
 <% if rangeId <= range %>
    <% nextPayam = completes[rangeId + 1] %>
 <% else %>
    <% nextPayam = completes.first %>
 <% end %>
 <button class="btn btn-default" onclick="nextPayam(<%= nextPayam.id %>)">Next</button></div>

    $('#dubs').html(tootle);
    });
};

$(function() {
        // let playerId= $('#greeter').data("id");
    // let readout = $.get("/players/"+playerId+".json");
    // let payout = $.get("/players/"+ playerId + "/payams.json");
});
