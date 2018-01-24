$(function() {
    let this_holder = $('#payam-holder')[0];
    let this_guy = this_holder.dataset.playerid;
    let thoseInNeed = $.get("/players/" + this_guy + "/payams");
    debugger
    let listedNeedy = "";
    thoseInNeed.done(function(data) {
        data['data'].forEach(function(el) {
        listedNeedy += "<button>" + el['attributes']['title'] + "</button><br>";
        });
        $("#needHelp").html(listedNeedy);
    });
    // $('#dubs').click(function() {
    //     alert("hey now")
    // })
});
