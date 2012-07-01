/* Author:

*/
$(document).ready(function(){
    $('#go').on('click', function(event){
        event.preventDefault();

        console.log('clicked!');
        var value = $('#unit-amount').val();
        var unit = $('#unit-from').val();

        var conversions = DC.convert(value, unit);

        displayResults(conversions);
    });
});

// show the results on the page
var displayResults = function(results){
    var template = $("#result-items").html();
    template = _.template(template, {'results': results});

    $("#results").fadeOut(250, function(){
        $(this).html(template).fadeIn();
    });
};