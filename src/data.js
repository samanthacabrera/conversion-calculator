export const calcData = {
    AreaCalculators: {
        areaRectangle: {
            calcType: "areaRectangle",
            label: "Area of a Retangle",
            color: "sky",
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
            color: "orange",
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
            color: "pink",
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
            color: "lime",
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
            color: "purple",
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
    SurfaceAreaCalculators: {
        surfaceAreaSphere: {
            calcType: "surfaceAreaSphere",
            label: "Surface Area of a Sphere",
            color: "lime",
            desc: "The surface area of a sphere is calculated based on its radius. ",
            formula: "A = 4 × π × r²",
            calculate: (radius) => 4 * Math.PI * Math.pow(radius, 2),
            steps: [
                "Measure the radius (r) of the sphere.",
                "Write down the formula: A = 4 × π × r².",
                "Square the radius (multiply r by itself).",
                "Multiply the result by π (approximately 3.14).",
                "Multiply the final result by 4 to get the surface area (A).",
            ],
            dimensions: [
                "Radius"
            ],
            units: {},
        },
        surfaceAreaCone: {
            calcType: "surfaceAreaCone",
            label: "Surface Area of a Cone",
            color: "yellow",
            desc: "The surface area of a cone is calculated using its radius and slant height. The slant height of a cone is the distance from the top of the cone (the apex) to any point on the edge of its circular base along the surface of the cone. ",
            formula: "A = π × r × (r + l)",
            calculate: (radius, slantHeight) => Math.PI * radius * (radius + slantHeight),
            steps: [
                "Measure the radius (r) and the slant height (l) of the cone.",
                "Write down the formula: A = π × r × (r + l).",
                "Calculate the lateral surface area by adding the radius to the slant height.",
                "Multiply this result by π to get the surface area (A).",
            ],
            dimensions: [
                "Radius",
                "Slant Height"
            ],
            units: {},
        },
        surfaceAreaCube: {
            calcType: "surfaceAreaCube",
            label: "Surface Area of a Cube",
            color: "pink",
            desc: "The surface area of a cube is calculated based on the length of one side.",
            formula: "A = 6 × s²",
            calculate: (side) => 6 * Math.pow(side, 2),
            steps: [
                "Measure the length of one side of the cube (s).",
                "Write down the formula: A = 6 × s².",
                "Square the side length (multiply s by itself).",
                "Multiply the result by 6 to get the surface area (A).",
            ],
            dimensions: [
                "Side"
            ],
            units: {},
        },
        surfaceAreaCylinder: {
            calcType: "surfaceAreaCylinder",
            label: "Surface Area of a Cylinder",
            color: "sky",
            desc: "The surface area of a cylinder is calculated using the radius and height. It includes the areas of the two circular bases and the curved surface.",
            formula: "A = 2 × π × r × (r + h)",
            calculate: (radius, height) => 2 * Math.PI * radius * (radius + height),
            steps: [
                "Measure the radius (r) and height (h) of the cylinder.",
                "Write down the formula: A = 2 × π × r × (r + h).",
                "Calculate the area of the circular bases by multiplying the radius by 2.",
                "Add the height to the radius.",
                "Multiply the result by π to get the total surface area (A).",
            ],
            dimensions: [
                "Radius",
                "Height"
            ],
            units: {},
        },
        surfaceAreaRectangle: {
            calcType: "surfaceAreaRectangle",
            label: "Surface Area of a Rectangle",
            color: "orange",
            desc: "The surface area of a rectangular prism is calculated by summing the areas of all six rectangular faces.",
            formula: "A = 2 × (l × w + l × h + w × h)",
            calculate: (length, width, height) => 2 * (length * width + length * height + width * height),
            steps: [
                "Measure the length (l), width (w), and height (h) of the rectangular prism.",
                "Write down the formula: A = 2 × (l × w + l × h + w × h).",
                "Calculate the area of each pair of opposite faces.",
                "Add these areas together and multiply by 2 to get the surface area (A).",
            ],
            dimensions: [
                "Length",
                "Width",
                "Height"
            ],
            units: {},
        },
    },
    VolumeCalculators: {
        volumeSphere: {
            calcType: "volumeSphere",
            label: "Volume of a Sphere",
            color: "purple",
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
            color: "yellow",
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
            color: "pink",
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
            color: "sky",
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
            color: "lime",
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