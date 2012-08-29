/* GO! */
$(document).ready(function(){
    $('#go').on('click', function(event){
        event.preventDefault();

        var value = $('#unit-amount').val();
        var unit = $('#unit-from').val();

        if (value.length < 1 || parseFloat(value) === 0 || _.isNaN(parseFloat(value))) {
            return;
        }

        var conversions = DC.convert(value, unit);

        displayResults(conversions);
    });

    $("select").on('change', function(e){
        this.blur();
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