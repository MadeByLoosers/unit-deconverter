/*global $ _ document DC */ /* <-- jshint globals */
/* GO! */
$(document).ready(function(){
    $('#go').on('click', function(event){
        event.preventDefault();

        var value = $('#unit-amount').val();
        var unit = $('#unit-from').val();

        if (value.length < 1 || parseFloat(value) === 0 || _.isNaN(parseFloat(value))) {
            return;
        }

        var conversions = DC.convert(parseFloat(value), unit);

        displayResults(conversions);
    });

    $("select").on('change', function(e){
        this.blur();
    });

    // We want to check for changes on this el
    var $amount = $("#unit-amount");
    $amount.data('oldVal', $amount.val());


    $amount.on("propertychange keyup input paste", function(event){
        if ($amount.data('oldVal') != $amount.val()) {
            $amount.data('oldVal', $amount.val()); // update stored value
            highlightCheck($amount.val()); // do highlight check
        }
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

// highlight the 'deconvert' button when valid units have been entered
var highlightCheck = function(value){
    if (value.length < 1 || parseFloat(value) === 0 || _.isNaN(parseFloat(value))) {
        $('#go').removeClass('is-ready');
    } else {
        $('#go').addClass('is-ready');
    }
};