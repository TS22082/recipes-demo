$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  console.log(userId);
  renderRecpes();

  $("#submitRecipe").on("click", function() {
    const recipe = $("#recipe-text").val();
    $("#recipe-text").val("");

    $.ajax({
      type: "POST",
      url: "/api/recipes/new",
      data: { text: recipe, userId: userId }
    }).then(() => {
      renderRecpes();
    });
  });
});

$(document).on("click", "#commentsBtn", function() {
  const userId = $(this).attr("data-id");
  const recipe = $(this).attr("data-recipe");
  window.location.href = `/comments?id=${userId}&recipe=${recipe}`;
});

renderRecpes = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  $.ajax({
    type: "GET",
    url: "/api/recipes/all"
  }).then(recipes => {
    $("#recipes").empty();
    recipes.map(recipe => {
      $("#recipes").append(
        ` <div class="card mb-4">
            <div class="card-header">
              <h3 class="text-center">${recipe.User.username}</h3>
            </div>
            <div class="card-body">
              ${recipe.text}
              <div class="text-center">
                <button data-id=${userId} data-recipe=${recipe.id} id="commentsBtn" class="btn btn-primary">Check comments</button>
              </div
            </div>
          </div>`
      );
    });
  });
};
