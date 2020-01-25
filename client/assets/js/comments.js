$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const recipeId = urlParams.get("recipe");
  console.log(userId, recipeId);

  initializeApp();
});

$("#newcommentSubmit").on("click", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const recipeId = urlParams.get("recipe");

  const text = $("#newcommentInput").val();

  $.ajax({
    type: "POST",
    url: "/api/comments/new",
    data: { text: text, userId: userId, recipeId: recipeId }
  }).then(() => {
    renderComments(recipeId, () => {
      console.log("hi");
    });
  });
});

initializeApp = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipe");

  $.ajax({
    type: "GET",
    url: `/api/recipes/find/${recipeId}`
  }).then(recipe => {
    $("#recipeText").text(recipe[0].text);
    $("#recipeAuthor").text("By: " + recipe[0].User.username);
  });

  renderComments(recipeId, () => {
    console.log("hi");
  });
};

renderComments = (recipeId, cb) => {
  $.ajax({
    type: "GET",
    url: `/api/comments/find/${recipeId}`
  }).then(comments => {
    $("#comments").empty();
    comments.map(comment => {
      console.log(comment);
      $("#comments").append(`
        <div class="card mb-4">
          <div class="card-header">
            <p class="text-center">${comment.User.username}</p>
          </div>
          <div class="card-body">
            ${comment.text}
          </div>
        </div>
      `);
    });
  });
};
