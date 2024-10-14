export const calcData = {
    'Conversion Calculators': {
        convertLength: {
            calcType: "convertLength",
            label: "Length Unit Converter",
            desc: "Length is a measure of distance. Converting between different units of length is essential in various fields such as science, engineering, and daily life. This calculator allows conversions between metric units (e.g., meters, centimeters) and imperial units (e.g., miles, inches).",
            formula: "value * (conversion factor from unit A to unit B)",
            calculate: (value, from, to) => value * (calcData.conversion.convertLength.units.find(unit => unit.name === to).factor / calcData.conversion.convertLength.units.find(unit => unit.name === from).factor),
            steps: [],
            dimensions: [],
            units: [
                { name: 'nanometers', factor: 1e9 },
                { name: 'micrometers', factor: 1e6 },
                { name: 'millimeters', factor: 1000 },
                { name: 'centimeters', factor: 100 },
                { name: 'decimeters', factor: 10 },
                { name: 'meters', factor: 1 },
                { name: 'decameters', factor: 0.1 },
                { name: 'hectometers', factor: 0.01 },
                { name: 'kilometers', factor: 0.001 },
                { name: 'miles', factor: 0.000621371 },
                { name: 'yards', factor: 1.09361 },
                { name: 'feet', factor: 3.28084 },
                { name: 'inches', factor: 39.3701 },
            ],
        },
        convertVolume: {
            calcType: "convertVolume",
            label: "Volume Unit Converter",
            desc: "Volume is the amount of space that a substance or object occupies. Converting between different volume units, such as liters, gallons, and milliliters, is crucial in cooking and scientific calculations.",
            formula: "value * (conversion factor from unit A to unit B)",
            calculate: (value, from, to) => value * (calcData.conversion.convertVolume.units.find(unit => unit.name === to).factor / calcData.conversion.convertVolume.units.find(unit => unit.name === from).factor),
            steps: [],
            dimensions: [],
            units: [
                { name: 'milliliters', factor: 1000 },
                { name: 'fluidOunces', factor: 33.814 },
                { name: 'tablespoons', factor: 67.628 },
                { name: 'teaspoons', factor: 202.884 },
                { name: 'cups', factor: 4.22675 },
                { name: 'pints', factor: 2.11338 },
                { name: 'quarts', factor: 1.05669 },
                { name: 'gallons', factor: 0.264172 },
                { name: 'liters', factor: 1 },
            ],
        },
        convertWeight: {
            calcType: "convertWeight",
            label: "Weight Unit Converter",
            desc: "Weight measures the mass of an object. Converting between different units of weight (e.g., grams, pounds, kilograms) is common in industries like food, manufacturing, and science.",
            formula: "value * (conversion factor from unit A to unit B)",
            calculate: (value, from, to) => value * (calcData.conversion.convertWeight.units.find(unit => unit.name === to).factor / calcData.conversion.convertWeight.units.find(unit => unit.name === from).factor),
            steps: [],
            dimensions: [],
            units: [
                { name: 'milligrams', factor: 1e6 },
                { name: 'grams', factor: 1000 },
                { name: 'kilograms', factor: 1 },
                { name: 'ounces', factor: 35.274 },
                { name: 'pounds', factor: 2.20462 },
                { name: 'metricTons', factor: 0.001 },
            ],
        },
        convertTemperature: {
            calcType: "convertTemperature",
            label: "Temperature Unit Converter",
            desc: "Temperature is a measure of the hotness or coldness of an object or environment. Conversions between Celsius, Fahrenheit, and Kelvin are important in science, weather, and daily life.",
            formula: "",
            calculate: (value, from, to) => {
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
            },
            steps: [],
            dimensions: [],
            units: [], // No units for temperature conversion
        },
        convertTime: {
            calcType: "convertTime",
            label: "Time Unit Converter",
            desc: "Time is a measure of the ongoing progression of events. Converting between units of time, such as seconds, minutes, and hours, is essential in scheduling, science, and other time-sensitive fields.",
            formula: "value * (conversion factor from unit A to unit B)",
            calculate: (value, from, to) => value * (calcData.conversion.convertTime.units.find(unit => unit.name === to).factor / calcData.conversion.convertTime.units.find(unit => unit.name === from).factor),
            steps: [],
            dimensions: [],
            units: [
                { name: 'nanoseconds', factor: 1e-9 },
                { name: 'microseconds', factor: 1e-6 },
                { name: 'milliseconds', factor: 0.001 },
                { name: 'seconds', factor: 1 },
                { name: 'minutes', factor: 60 },
                { name: 'hours', factor: 3600 },
                { name: 'days', factor: 86400 },
                { name: 'weeks', factor: 604800 },
                { name: 'months', factor: 2.628e+6 },  // Approximated as 30.44 days
                { name: 'years', factor: 3.154e+7 },   // Approximated as 365.24 days
            ],
        },
    },
    'Area Calculators': {
        areaRectangle: {
            calcType: "areaRectangle",
            label: "Area of a Retangle",
            desc: "Area measures the amount of space inside a two-dimensional shape. The area of a rectangle is calculated by multiplying its length and width.",
            formula: "A = l × w",
            calculate: (length, width) => length * width,
            steps: [
                "Measure the length (l) and width (w) of the rectangle.",
                "Write down the formula: A = l × w.",
                "Multiply the length by the width to get the area (A).",
            ],
            dimensions: [
                "Length",
                "Width"
            ],
            units: {},
        },
        areaTriangle: {
            calcType: "areaTriangle",
            label: "Area of a Triangle",
            desc: "The area of a triangle is calculated using the base and height. This calculation is useful in various applications, including architecture and design.",
            formula: "A = 0.5 × b × h",
            calculate: (base, height) => 0.5 * base * height,
            steps: [
                "Measure the base (b) and height (h) of the triangle.",
                "Write down the formula: A = 0.5 × b × h.",
                "Multiply the base by the height.",
                "Divide the result by 2 to get the area (A).",
            ],
            dimensions: [
                "Base",
                "Height"
            ],
            units: {},
        },
        areaTrapezoid: {
            calcType: "areaTrapezoid",
            label: "Area of a Trapezoid",
            desc: "The area of a trapezoid is calculated using the lengths of its two bases and its height. This calculation is important in various fields, including geometry and architecture.",
            formula: "A = 0.5 × (b1 + b2) × h",
            calculate: (base1, base2, height) => 0.5 * (base1 + base2) * height,
            steps: [
                "Measure the lengths of the two bases (b1 and b2) and the height (h) of the trapezoid.",
                "Write down the formula: A = 0.5 × (b1 + b2) × h.",
                "Add the lengths of the two bases.",
                "Multiply the result by the height.",
                "Divide the result by 2 to get the area (A).",
            ],
            dimensions: [
                "Base 1",
                "Base 2",
                "Height"
            ],
            units: {},
        },
        areaCircle: {
            calcType: "areaCircle",
            label: "Area of a Circle",
            desc: "The area of a circle is determined by its radius. This calculation is used in various applications, such as determining the size of circular spaces.",
            formula: "A = π × r²",
            calculate: (radius) => Math.PI * Math.pow(radius, 2),
            steps: [
                "Measure the radius (r) of the circle.",
                "Write down the formula: A = π × r².",
                "Square the radius (multiply r by itself).",
                "Multiply the result by π (approximately 3.14) to get the area (A).",
            ],
            dimensions: [
                "Radius"
            ],
            units: {},
        },
        areaSector: {
            calcType: "areaSector",
            label: "Area of a Sector",
            desc: "The area of a sector is the area of a 'slice' of a circle, defined by a central angle. Understanding how to calculate this area is useful in various applications.",
            formula: "A = 0.5 × r² × (θ in radians)",
            calculate: (radius, angle) => 0.5 * radius * radius * (angle * Math.PI / 180),
            steps: [
                "Measure the radius (r) and the angle (θ) of the sector.",
                "Convert the angle from degrees to radians: θ (radians) = θ (degrees) × (π / 180).",
                "Write down the formula: A = 0.5 × r² × (θ in radians).",
                "Square the radius (multiply r by itself).",
                "Multiply this result by 0.5 and by the angle in radians to get the area (A).",
            ],
            dimensions: [
                "Radius",
                "Angle (radians)"
            ],
            units: {},
        },
    },
    'Volume Calculators': {
        volumeSphere: {
            calcType: "volumeSphere",
            label: "Volume of a Sphere",
            desc: "Volume measures the amount of space a three-dimensional object occupies. A sphere is a perfectly round object, and understanding its volume helps in fields ranging from physics to everyday applications like sports.",
            formula: "V = 4/3 × π × r³",
            calculate: (radius) => (4 / 3) * Math.PI * Math.pow(radius, 3),
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
            dimensions: [
                "Radius"
            ],
            units: {},
        },
        volumeCone: {
            calcType: "volumeCone",
            label: "Volume of a Cone",
            desc: "Volume measures the amount of space a three-dimensional object occupies. A cone has a circular base and tapers to a point, and its volume calculation is useful in various applications, such as designing funnels.",
            formula: "V = 1/3 × π × r² × h",
            calculate: (radius, height) => (1 / 3) * Math.PI * Math.pow(radius, 2) * height,
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
            dimensions: [
                "Radius",
                "Height"
            ],
            units: {},
        },
        volumeCube: {
            calcType: "volumeCube",
            label: "Volume of a Cube",
            desc: "Volume measures the amount of space a three-dimensional object occupies. A cube is a special type of rectangular prism with all sides of equal length. Understanding how to calculate the volume of a cube is important in various fields, including architecture and engineering, as it helps determine how much material is needed to fill the space or how much space is available for storage.",
            formula: "V = s³",
            calculate: (side) => Math.pow(side, 3),
            steps: [
                "Measure the length of one side of the cube. Let's call it (s).",
                "Write down the formula: V = s³.",
                "Calculate (s)³ by multiplying s × s × s.",
                "Substitute the result of (s)³ back into the formula. This is the volume (V).",
            ],
            dimensions: [
                "Side"
            ],
            units: {},
        },
        volumeCylinder: {
            calcType: "volumeCylinder",
            label: "Volume of a Cylinder",
            desc: "Volume is a measure of how much space a three-dimensional object occupies. A cylinder is a shape with two parallel circular bases connected by a curved surface. Calculating the volume of a cylinder is essential in many practical applications, such as determining the capacity of containers like cans and tanks, and in various engineering contexts where fluid storage is involved.",
            formula: "V = π × r² × h",
            calculate: (radius, height) => Math.PI * Math.pow(radius, 2) * height,
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
            dimensions: [
                "Raidus",
                "Height"
            ],
            units: {},
        },
        volumeRectangle: {
            calcType: "volumeRectangle",
            label: "Volume of a Rectangle",
            desc: "Volume quantifies the amount of space a three-dimensional object occupies. A rectangular prism has six rectangular faces, and its volume calculation is crucial for various applications, including packaging, shipping, and architecture. Knowing how to calculate the volume of a rectangular prism helps determine how much space is available for contents and how to optimize storage.",
            formula: "V = l × w × h",
            calculate: (length, width, height) => length * width * height,
            steps: [
                "Measure the length (l), width (w), and height (h) of the box.",
                "Write down the formula: V = l × w × h.",
                "Multiply the length (l) by the width (w).",
                "Substitute this result back into the formula as the Area.",
                "Multiply the Area by the height (h).",
                "Substitute this result back into the formula. This is the volume (V).",
            ],
            dimensions: [
                "Length",
                "Width",
                "Heigth"
            ],
            units: {},
        },
    }
};