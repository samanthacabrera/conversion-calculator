export const calcData = {
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
        convert: (value, from, to) => value * (calcData.length.units[to] / calcData.length.units[from]),
    },
    volume: {
        units: { // US measurements for now
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
        convert: (value, from, to) => value * (calcData.volume.units[to] / calcData.volume.units[from]),
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
        convert: (value, from, to) => value * (calcData.weight.units[to] / calcData.weight.units[from]),
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
        convert: (value, from, to) => value * (calcData.time.units[from] / calcData.time.units[to]),
    },
    sphereVolume: {
        calculate: (radius) => (4 / 3) * Math.PI * Math.pow(radius, 3),
        formula: "V = 4/3 × π × r³",
        steps: [
            "Measure the radius of the sphere. Let's call it (r).",
            "Write down the formula: V = 4/3 × π × r³.",
            "Substitute the radius (r) into the formula: V = 4/3 × π × (r)³.",
            "Calculate (r)³ by multiplying r × r × r.",
            "Substitute the result of (r)³ back into the formula.",
            "Multiply the result by π (approximately 3.14).",
            "Substitute this result back into the formula.",
            "Multiply the result by 4.",
            "Substitute this result back into the formula.",
            "Finally, divide by 3 to get the volume (V).",
        ],
        desc: "Volume measures the amount of space a three-dimensional object occupies. A sphere is a perfectly round object, and understanding its volume helps in fields ranging from physics to everyday applications like sports."
    },
    coneVolume: {
        calculate: (radius, height) => (1 / 3) * Math.PI * Math.pow(radius, 2) * height,
        formula: "V = 1/3 × π × r² × h",
        steps: [
            "Measure the radius of the base (r) and the height (h) of the cone.",
            "Write down the formula: V = 1/3 × π × r² × h.",
            "Substitute the radius (r) into the formula: V = 1/3 × π × (r)² × h.",
            "Calculate (r)² by multiplying r × r.",
            "Substitute the result of (r)² back into the formula.",
            "Multiply this result by π (approximately 3.14).",
            "Substitute this result back into the formula.",
            "Multiply the result by the height (h).",
            "Substitute this result back into the formula.",
            "Finally, divide by 3 to get the volume (V).",
        ],
        desc: "Volume measures the amount of space a three-dimensional object occupies. A cone has a circular base and tapers to a point, and its volume calculation is useful in various applications, such as designing funnels."
    },
    cubeVolume: {
        calculate: (side) => Math.pow(side, 3),
        formula: "V = s³",
        steps: [
            "Measure the length of one side of the cube. Let's call it (s).",
            "Write down the formula: V = s³.",
            "Calculate (s)³ by multiplying s × s × s.",
            "Substitute the result of (s)³ back into the formula. This is the volume (V).",
        ],
        desc: "Volume measures the amount of space a three-dimensional object occupies. A cube is a special type of rectangular prism with all sides of equal length. Understanding how to calculate the volume of a cube is important in various fields, including architecture and engineering, as it helps determine how much material is needed to fill the space or how much space is available for storage."
    },
    cylinderVolume: {
        calculate: (radius, height) => Math.PI * Math.pow(radius, 2) * height,
        formula: "V = π × r² × h",
        steps: [
            "Measure the radius of the base (r) and the height (h) of the cylinder.",
            "Write down the formula: V = π × r² × h.",
            "Substitute the radius (r) into the formula: V = π × (r)² × h.",
            "Calculate (r)² by multiplying r × r.",
            "Substitute the result of (r)² back into the formula.",
            "Multiply this result by π (approximately 3.14).",
            "Substitute this result back into the formula.",
            "Multiply the result by the height (h).",
            "Substitute this result back into the formula. This is the volume (V).",
        ],
        desc: "Volume is a measure of how much space a three-dimensional object occupies. A cylinder is a shape with two parallel circular bases connected by a curved surface. Calculating the volume of a cylinder is essential in many practical applications, such as determining the capacity of containers like cans and tanks, and in various engineering contexts where fluid storage is involved."
    },
    rectangleVolume: {
        calculate: (length, width, height) => length * width * height,
        formula: "V = l × w × h",
        steps: [
            "Measure the length (l), width (w), and height (h) of the box.",
            "Write down the formula: V = l × w × h.",
            "Multiply the length (l) by the width (w).",
            "Substitute this result back into the formula as the Area.",
            "Multiply the Area by the height (h).",
            "Substitute this result back into the formula. This is the volume (V).",
        ],
        desc: "Volume quantifies the amount of space a three-dimensional object occupies. A rectangular prism has six rectangular faces, and its volume calculation is crucial for various applications, including packaging, shipping, and architecture. Knowing how to calculate the volume of a rectangular prism helps determine how much space is available for contents and how to optimize storage."
    },
};


