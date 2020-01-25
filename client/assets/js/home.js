$(document).ready(function() {
  renderUsers(allUsers => {
    console.log(allUsers);
  });
});

$(document).on("click", "#userLogin", function() {
  const id = $(this).attr("data-id");
  window.location.href = `/recipes?id=${id}`;
});

$("#newuserSubmit").on("click", () => {
  postUser(newuser => {
    console.log(newuser);
    renderUsers(allUsers => {
      console.log(allUsers);
    });
  });
});

renderUsers = cb => {
  $.ajax({
    type: "GET",
    url: "/api/users/all"
  }).then(allUsers => {
    $("#users").empty();
    allUsers.map(user => {
      $("#users").append(`
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">${user.username}</h3>
          </div>

          <div class="card-body">
            <div class="text-center">
              <button data-id=${user.id} id="userLogin" class="btn btn-primary">Login</button>
            </div
          </div>
        </div>
      `);
    });
    cb(allUsers);
  });
};

postUser = cb => {
  const newUser = $("#newuserInput").val();
  $("#newuserInput").val("");
  $.ajax({
    type: "POST",
    url: "/api/users/new",
    data: { username: newUser }
  }).then(newUser => cb(newUser));
};
