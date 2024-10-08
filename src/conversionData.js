export const conversionData = {
    length: {
        units: {
            nanometers: 1e9,
            micrometers: 1e6,
            millimeters: 1000,
            centimeters: 100,
            decimeters: 10,
            meters: 1,
            decameters: 0.1,
            hectometers: 0.01,
            kilometers: 0.001,
            miles: 0.000621371,
            yards: 1.09361,
            feet: 3.28084,
            inches: 39.3701,
        },
        convert: (value, from, to) => value * (conversionData.length.units[to] / conversionData.length.units[from]),
    },
    volume: {
        units: {                    // US measurements for now
            milliliters: 1000,
            fluidOunces: 33.814,
            tablespoons: 67.628,
            teaspoons: 202.884,
            cups: 4.22675,
            pints: 2.11338,
            quarts: 1.05669,
            gallons: 0.264172,
            liters: 1,
        },
        convert: (value, from, to) => value * (conversionData.volume.units[to] / conversionData.volume.units[from]),
    },
    temperature: {
        units: {
            celsius: 1,
            fahrenheit: 2,
            kelvin: 3,
        },
        convert: (value, from, to) => {
            let convertedValue;
            if (from === 'celsius') {
                if (to === 'fahrenheit') convertedValue = (value * 9 / 5) + 32;
                else if (to === 'kelvin') convertedValue = value + 273.15;
                else convertedValue = value;
            } else if (from === 'fahrenheit') {
                if (to === 'celsius') convertedValue = (value - 32) * 5 / 9;
                else if (to === 'kelvin') convertedValue = (value - 32) * 5 / 9 + 273.15;
                else convertedValue = value;
            } else if (from === 'kelvin') {
                if (to === 'celsius') convertedValue = value - 273.15;
                else if (to === 'fahrenheit') convertedValue = (value - 273.15) * 9 / 5 + 32;
                else convertedValue = value;
            }
            return convertedValue;
        }
    },
    weight: {
        units: {
            milligrams: 1e6,
            grams: 1000,
            kilograms: 1,
            ounces: 35.274,
            pounds: 2.20462,
            metricTons: 0.001,
        },
        convert: (value, from, to) => value * (conversionData.weight.units[to] / conversionData.weight.units[from]),
    },
    time: {
        units: {
            nanoseconds: 1e-9,
            microseconds: 1e-6,
            milliseconds: 0.001,
            seconds: 1,
            minutes: 60,
            hours: 3600,
            days: 86400,
            weeks: 604800,
            months: 2.628e+6,  // Approximated as 30.44 days
            years: 3.154e+7,   // Approximated as 365.24 days
        },
        convert: (value, from, to) => value * (conversionData.time.units[to] / conversionData.time.units[from]),
        // convert: (value, from, to) => value * (conversionData.time.units[from] / conversionData.time.units[to]),
    }
};


