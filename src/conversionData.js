export const conversionData = {
    length: {
        units: {
            millimeters: 1000,
            centimeters: 100,
            decimeters: 10,
            meters: 1,
            decameters: 0.1,
            hectometers: 0.01,
            kilometers: 0.001,
        },
        convert: (value, from, to) => value * (conversionData.length.units[to] / conversionData.length.units[from]),
    },
    volume: {
        units: {
            liters: 1,
            milliliters: 1000,
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
            grams: 1000,
            kilograms: 1,
        },
        convert: (value, from, to) => value * (conversionData.weight.units[to] / conversionData.weight.units[from]),
    }
};
