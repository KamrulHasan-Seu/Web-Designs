jQuery(document).ready(function () {


    $(".count")
        .countdown("2020/01/01", function (event) {
            $(this).text(
                event.strftime('%D days %H:%M:%S')
            );
        });

    $(".fullHeader").ripples({
        dropRadius: 10,
        perturbance: 0.01,

    });


})
