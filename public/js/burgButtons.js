$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devour = 1;

        var devourClicked = {
            devoured: devour
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourClicked
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".form").on("submit", function (event) {
        event.preventDefault();

        var newBurg = {
            burger_name: $("#burgName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
