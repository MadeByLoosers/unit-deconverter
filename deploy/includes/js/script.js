/* Author:

*/
"use strict";

var DC = DC || {};

DC.settings = {
    conversionCount: 2 // how many different units to convert to
};

DC.base  = 'centimetres';

DC.units = [
    {
        'name': 'centimetres',
        'rate': 1,
        'fromOrTo': 'from',
        'type': 'distance',
        'base': true
    },
    {
        'name': 'metres',
        'rate': 0.001,
        'fromOrTo': 'from',
        'type': 'distance',
        'base': false
    },{
        'name': 'moonTrips',
        'description': 'the distance from the earth to the moon',
        'rate': 0.0000012,
        'fromOrTo': 'to',
        'type': 'distance',
        'base': false
    },{
        'name': 'redBloodCells',
        'description': 'lined up red blood cells',
        'rate': 1200089,
        'fromOrTo': 'to',
        'type': 'distance',
        'base': false
    }
]

// converts a value from one unit to a selection of other units
DC.convert = function(value, options){
    // get the base unit
    var baseUnit = DC.findUnit(DC.base);

    var fromUnit = DC.findUnit(options.from);

    // get all 'to' units whose type matches the base unit
    var newUnits = _.filter(DC.units, function(unit){
        return (unit.type == baseUnit.type) && (unit.fromOrTo == 'to');
    });

    // pick a few random units to convert to
    newUnits = _.shuffle(newUnits).slice(0, DC.settings.conversionCount);

    var conversions = DC.getRates(value, fromUnit, newUnits);

    _.each(conversions, function(conversion){
        conversion.value = value * conversion.rate;
    });

    return conversions;
};

// returns the conversion rate between given units
DC.getRates = function(value, fromUnit, toUnits) {
    var conversions = [];

    _.each(toUnits, function(unit){
        conversions.push({
            'name': unit.name,
            'rate': unit.rate * (1 / fromUnit.rate)
        });
    });

    return conversions;
};

// find a unit by its name
DC.findUnit = function(name){
    return _.find(DC.units, function(unit){
        return unit.name == name;
    });
};