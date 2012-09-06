/*
 * UNIT DECONVERTOR
 */
var DC = DC || {};

// deconvertor settings
DC.settings = {
    conversionCount: 3 // how many different units to convert to
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
    'g' : {
        'type' : 'weight',
        'rate' : 0.001 // 1000g = 1kg
    },
    'kg' : {
        'type' : 'weight',
        'rate' : 1 // ROOT = 1kg
    },
    'tons' : {
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
    },

    // MONEY
    'pounds' : {
        'type' : 'money',
        'rate' : 1
    },
    'mpounds' : {
        'type' : 'money',
        'rate' : 100000
    },
    'bpounds' : {
        'type' : 'money',
        'rate' : 1000000000
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
            'name': 'unitName'
            'description': 'metres',
            'rate' : 1
        },
        {
            'name': 'unitName'
            'description': 'mm',
            'rate' : 0.001
        },
        {
            'name': 'unitName'
            'description': 'km',
            'rate' : 1000
        },
        {
            'name': 'unitName'
            'description': '',
            'rate' : 1
        }
        */

        {
            'name': 'Light Years',
            'description': 'The distance that light will travel in a vacuum in one year.',
            'rate': 9460528400000000
        },
        {
            'name': 'Trips to the sun',
            'description': 'The distance from earth to the sun.',
            'rate': 149597870700
        },
        {
            'name': 'Trips to the moon',
            'description': 'The distance from earth to the sun.',
            'rate': 384400000
        },
        {
            'name': 'Journeys to the center of the Earth',
            'description': 'The distance from the surface to the centre of the Earth.',
            'rate': 6371000
        },
        // {
        //     'name': 'unitName'
        //     'description': 'times the length of line drawn by a typical lead pencil',
        //     'rate': 56327.04
        // },
        // {
        //     'name': 'unitName'
        //     'description': 'times the distance covered by a fine tipped typical ball point pen',
        //     'rate': 13679.42
        // },
        {
            'name': 'Great Walls of China',
            'description': 'The length of the Great Wall of China, including trenches and sections of natural barriers such as hills.',
            'rate': 8850000
        },
        {
            'name': 'Paper plane flights',
            'description': 'The distance of the furthest paper aeroplane flight.',
            'rate': 63.19
        },
        {
            'name': 'Blue Whale penises',
            'description': 'The longest measured Blue Whale Penis.',
            'rate': 2.4
        },
        {
            'name': 'Brian Blesseds',
            'description': 'The height of multiple Brian Blesseds standing on each others heads.',
            'rate': 1.75
        },
        {
            'name': 'Dave Benson Phillips',
            'description': 'The height of multiple Dave Benson Phillips standing on each others heads.',
            'rate': 1.7018
        },
        {
            'name': 'Tiny horses',
            'description': 'The height of Thumbelina, the world\'s smallest horse.',
            'rate': 0.445
        },
        {
            'name': 'Red blood cells',
            'description': 'The width of a red blood cell.',
            'rate': 0.000006
        }
    ],


    // base unit = 1kg
    'weight' : [
        {
            'name': 'Massive piles of dog excrement',
            'description': 'The weight of dog excrement dumped on the streets of Paris in a year.',
            'rate' : 50000000
        },
        {
            'name': 'Great White Shark livers',
            'description': 'The weight of a Great White Shark\'s liver.',
            'rate' : 456
        },
        {
            'name': 'Wolves',
            'description': 'The weight of Michael Van Wijk - Wolf from Gladiators.',
            'rate' : 95
        },
        {
            'name': 'Grey Wolves',
            'description': 'The average weight of an actual wolf (European Grey).',
            'rate' : 38.5
        },
        // {
        //     'name': 'Mr T\'s ',
        //     'description': 'times the weight of Mr T\'s gold Chains',
        //     'rate' : 9.07
        // },
        {
            'name': 'Gold medals',
            'description': 'The weight of a London 2012 Olympic Gold medal.',
            'rate' : 0.380
        },
        {
            'name': 'Antloads',
            'description': 'The weight an ant can lift.',
            'rate' : 0.002 // 2 grams
        }
    ],


    // base unit = 1 day
    'time' : [
        {
            'name': 'Banana half-lives',
            'description': 'The time it takes for a banana to lose half it\'s radioactivity.',
            'rate' : 45655300000000000 // 1.25 billion years
        },
        {
            'name': 'Beaver lodges',
            'description': 'How long it takes a beaver to build a lodge.',
            'rate' : 20
        },
        {
            'name': 'Cross-Atlantic Blackbird journeys',
            'description': 'The time it takes the takes for the Lockheed SR-71 (Blackbird) to fly from London To New York.',
            'rate' : 0.080231481481481459195 // 1 hour 55 minutes 32 seconds
        },
        {
            'name': 'Earthfalls',
            'description': 'How long it would take to fall through the Earth.',
            'rate' : 0.0298611 // 43mins
        },
        {
            'name': 'Short wars',
            'description': 'The length of the shortest war in history, the 1896 Anglo-Zanzibar war.',
            'rate' : 0.0263889 // 38mins
        },
        {
            'name': 'Akabusi races',
            'description': 'The time it takes Kriss Akabusi to complete a 400m hurdles race.',
            'rate' : 0.000554745 // 47.93 seconds
        },
        {
            'name': 'Pointless tube journeys',
            'description': 'How long it takes to get from Leicester Square to Covent Garden on London\'s Piccadilly Line.',
            'rate' : 0.000428241 // 37 seconds
        }
    ],


    // base unit = 1 mph
    'speed' : [
        // {
        //     'name': 'unitName',
        //     'description': 'times the speed of light',
        //     'rate' : 670616629
        // },
        // {
        //     'name': 'unitName',
        //     'description': 'times the speed of sound',
        //     'rate' : 761.207051
        // },
        {
            'name': 'Bolts',
            'description': 'The speed of Usain Bolt during a 100 metres race.',
            'rate' : 27.45
        },
        {
            'name': 'Supersonic Blackbirds',
            'description': 'The speed of the Lockheed SR-71 (Blackbird).',
            'rate' : 2200
        },
        {
            'name': 'Swimming sharks',
            'description': 'The speed that a great white shark swims at.',
            'rate' : 24.9
        },
        {
            'name': 'Quickly crawling snails',
            'description': 'The top speed of a garden snail.',
            'rate' : 0.03
        },
        {
            'name': 'Mantis shrimp attacks',
            'description': 'The speed of a mantis shrimp attack.',
            'rate' : 50
        },
        {
            'name': 'Speeding bullets',
            'description': 'The speed that an AK-47 bullet travels.',
            'rate' : 1600
        },
        {
            'name': 'Speeding horses',
            'description': 'The top speed of a horse, the best of all the animals.',
            'rate' : 35
        }
    ],


    // base unit = 1 gbp
    'money' : [
        {
            'name': 'Very expensive dogs',
            'description': 'The cost of the most expensive dog in the world, Big Splash the red Tibetan mastiff.',
            'rate' : 945000
        },
        {
            'name': 'Shards',
            'description': 'The cost of The Shard.',
            'rate' : 450000000 // £450m
        },
        {
            'name': 'Olympic Games',
            'description': 'The cost of the London 2012 Olympic Games.',
            'rate' : 10800000000 // £10.8bn
        },
        {
            'name': 'unitName',
            'description': 'times the GDP of Palau.',
            'rate' : 177740000000 // £177.74bn
        },
        {
            'name': 'Bill Gates seconds',
            'description': 'The amount Bill Gates makes every second.',
            'rate' : 189.75
        },
        {
            'name': 'British gold medals',
            'description': 'The average cost of a 2012 Team GB medal, including athlete training.',
            'rate' : 4500000 // £4.5m
        },
        {
            'name': 'Bad cruises',
            'description': 'The original cost of a one way second-class ticket on the Titanic.',
            'rate' : 12
        }
    ]
};


/*
 *
 */
DC.calculateValue = function(value, unitRate, conversionRate) {

    var calculatedValue = value * ((1/unitRate) * conversionRate);

    // exponential number - shorten
    if (calculatedValue.toString().match(/e/)) {
      calculatedValue = makePrecise(calculatedValue);

    // no exponential...
    } else if (calculatedValue.toString().length > 10) {
      calculatedValue = makeShorter(calculatedValue);

    // no exponential...
    } else {
      console.log('no need to change ' + calculatedValue);
    }

    return calculatedValue;



    // Get a nice decimal place precision for the scientific notation number.
    function makePrecise(num) {
        var numberArray = num.toString().split('e'),
            value = numberArray[0],
            exponent = numberArray[1].replace("+", ""),
            newNum = value.substring(0,6) + " x 10<sup>"+exponent+"</sup>";
        console.log("makePrecise", num, newNum);
        return newNum;
    }


    // Get a nice decimal place precision for the scientific notation number.
    function makeShorter(num) {

        var numString = num.toString(),
            decimalMatch = numString.indexOf('.'),
            exponent, newNum;

        // no decimal point, just shorten
        if (decimalMatch === -1) {
            exponent = numString.length - 1;
            newNum = numString.substring(0,1) + "." + numString.substring(1,5) +" x 10<sup>"+exponent+"</sup>";
            console.log("makeShorter (no decimal point)", num, newNum);
            return newNum;

        // there is a decimal point...woo!
        } else {

            // decimal is after first 10 chars, make exp
            if (decimalMatch > 8) {

                exponent = decimalMatch - 1;
                newNum = numString.substring(0,1) + "." + numString.substring(1,5) +" x 10<sup>"+exponent+"</sup>";
                console.log("makeShorter (no decimal point in first 8 chars)", num, newNum);
                return newNum;

            // decimal is in first 8 chars, so just remove the rest
            } else {

                // positive - just use decimal
                if (num > 1) {
                    exponent = decimalMatch + 2;

                // negative - find first significant figure
                } else {
                    var nonZeroChar = numString.match(/[1-9]/);
                    exponent = numString.indexOf(nonZeroChar);
                }

                newNum = numString.substring(0,exponent+3);
                console.log("makeShorter (decimal point in first 8 chars)", num, newNum);
                return newNum;
            }
        }
    }
};

/*
// test values
DC.calculateValue("2.132434456e-18", 1, 1);
DC.calculateValue("0.000000000000000000132354234235", 1, 1);
DC.calculateValue("0.0000132354234235", 1, 1);
DC.calculateValue("0.132354234235", 1, 1);
DC.calculateValue("0.132354", 1, 1);
DC.calculateValue("1.3", 1, 1);
DC.calculateValue("1", 1, 1);
DC.calculateValue("5693234", 1, 1);
DC.calculateValue("5693234.2342348923491283471928347", 1, 1);
DC.calculateValue("5693234234234892349128347192.8347", 1, 1);
DC.calculateValue("2.132434456e7", 1, 1);
DC.calculateValue("2.132434456e18", 1, 1);
DC.calculateValue("2.132434456e28", 1, 1);
*/


/*
 * converts a value from one unit to a selection of other units
 */
DC.convert = function(value, convertFrom){

    // get the submitted unit type
    var conversionType = DC.convertFrom[convertFrom].type;

    // calculate conversion rate
    var conversionRate = DC.convertFrom[convertFrom].rate;

    // pick x random units to convert to
    var newUnits = DC.convertTo[conversionType];
    newUnits = _.shuffle(newUnits).slice(0, DC.settings.conversionCount);

    // prepare new conversion rates
    var conversions = [];

    // loop through each new unit and calculate
    _.each(newUnits, function(unit){

        var calculatedValue = DC.calculateValue(value, unit.rate, conversionRate);

        conversions.push({
            'name': unit.name,
            'description': unit.description,
            'value': calculatedValue
        });
    });
    console.log("---");

    return conversions;
};