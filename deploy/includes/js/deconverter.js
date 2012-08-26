/*
 * UNIT DECONVERTOR
 */
var DC = DC || {};

// deconvertor settings
DC.settings = {
    conversionCount: 2 // how many different units to convert to
};


/*
 * Values to convert from
 */
DC.convertFrom = {

    // DISTANCE
    'mm' : {
        'type' : 'distance',
        'rate' : 0.001 // 1000mm = 1m
    },
    'metres' : {
        'type' : 'distance',
        'rate' : 1 // ROOT = 1 metre
    },
    'km' : {
        'type' : 'distance',
        'rate' : 1000 // 1000m = 1km
    },

    // WEIGHT
    'kg' : {
        'type' : 'weight',
        'rate' : 1 // ROOT = 1kg
    },
    'ton' : {
        'type' : 'weight',
        'rate' : 1000 // 1 ton = 1000kg
    },

    // TIME
    'seconds' : {
        'type' : 'time',
        'rate' : 0.000011574 // 1 day = 86400 seconds
    },
    'days' : {
        'type' : 'time',
        'rate' : 1 // ROOT = 1 day
    },
    'years' : {
        'type' : 'time',
        'rate' : 365.24 // 1 year = 365.24 days
    },

    // SPEED
    'mph' : {
        'type' : 'speed',
        'rate' : 1 // ROOT = 1 mph
    },
    'kmph' : {
        'type' : 'speed',
        'rate' : 0.621371 // 1mph = 1.60934kmph
    }
};


/*
 * Values to convert to
 */
DC.convertTo = {

    // base unit = 1m
    'distance' : [
        /*
            DEBUG values = easily test calculations are right

        {
            'description' : 'metres',
            'rate' : 1
        },
        {
            'description' : 'mm',
            'rate' : 0.001
        },
        {
            'description' : 'km',
            'rate' : 1000
        },*/

        {
            'description': 'light years',
            'rate': 9460528400000000
        },
        {
            'description': 'times the distance from the earth to the moon',
            'rate': 384400000
        },
        {
            'description': 'stacked up Brian Blesseds',
            'rate': 1.75
        },
        {
            'description': 'lined up red blood cells',
            'rate': 0.000006
        }
    ],


    // base unit = 1kg
    'weight' : [
    ],

    // base unit = 1 day
    'time' : [
    ],

    // base unit = 1 day
    'speed' : [
        {
            'description' : 'times the speed of light',
            'rate' : 670616629
        },
        {
            'description' : 'times the speed of sound',
            'rate' : 761.207051
        },
        {
            'description' : 'times the speed of Usain Bolt during a 100 metres race',
            'rate' : 27.45
        }
    ]
};


/*
 * converts a value from one unit to a selection of other units
 */
DC.convert = function(value, convertFrom){

    // get the submitted unit type
    var conversionType = DC.convertFrom[convertFrom]['type'];

    // calculate conversion rate
    var conversionRate = DC.convertFrom[convertFrom]['rate'];

    // pick x random units to convert to
    var newUnits = DC.convertTo[conversionType];
    newUnits = _.shuffle(newUnits).slice(0, DC.settings.conversionCount);

    // prepare new conversion rates
    var conversions = [];

    // loop through each new unit and calculate
    _.each(newUnits, function(unit){
        conversions.push({
            'description': unit.description,
            'value': value * ((1/unit.rate) * conversionRate)//.toFixed(20)
        });
    });

    return conversions;
};