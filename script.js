var new_year_time = "00:00:01";

function new_year() {
    console.log("NEW YEAR");
    $("#time").hide();
    $("footer").hide();
    $("#new-year").show();
    $("video").show();
    $("#firework").get(0).play();

}

function update_time() {
    console.log("UPDATE");
    var time = $("#time").find("span span").html();
    console.log(time);

    if (time == new_year_time) {
        console.log("new year");
        new_year();
    }
}

$(document).ready(function () {
    //alert("Hallo");
    time_is_widget.init({
        Hamburg_z704: {
            callback: 'update_time'
        }
    });
});