// PAYAMS
let previewIt = function(preview_button) {
    let id = $(preview_button).data("id");
          let prev_box = $('#preview-payam-' + id);
          let stuf = $.ajax({
              url: "/payams/" + id + "/lines/",
              type: "get",
              data: {
                  payam_id: id
              },
          });
          stuf.done(function(resp) {
              let stuf_resp = resp['data'];
              stuf_resp.forEach(function(el) {
                  prev_box.append("<p>Line " + el['attributes']['count'] + ": " + el['attributes']['text'] + "</p>");
              });
          });
};

// $(function() {
//   $('.js-preview').click (function() {
//       let id = $(this).data("id");
//       let prev_box = $('#preview-payam-' + id);
//       let stuf = $.ajax({
//           url: "/payams/" + id + "/lines/",
//           type: "get",
//           data: {
//               payam_id: id
//           },
//       });
//       stuf.done(function(resp) {
//           let stuf_resp = resp['data'];
//           stuf_resp.forEach(function(el) {
//               prev_box.append("<p>Line " + el['attributes']['count'] + ": " + el['attributes']['text'] + "</p>");
//           });
//       });
//     });
// });
// <div class="authorName"><%= @post.author.name %></div>
// <a href="#" class="js-next" data-id="<%=@post.id%>">Next...</a>
// <h1 class="postTitle"><%= @post.title %></h1>
// <p class="postBody"><%= @post.description %></p>

// <script type="text/javascript" charset="utf-8">
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
// </script>
