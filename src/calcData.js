export const calcData = {
    AreaCalculators: {
        areaRectangle: {
            calcType: "areaRectangle",
            label: "Area of a Rectangle",
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
                { name: "Length", definition: "The longer side of a rectangle, measured in units such as meters or inches." },
                { name: "Width", definition: "The shorter side of a rectangle, also measured in units like meters or inches." }
            ],
            wordProblem: "A garden measures 8 meters in length and 5 meters in width. Calculate the area to determine how much space is available for planting.",
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
                { name: "Base", definition: "The side of the triangle considered as its foundation, usually the longest side." },
                { name: "Height", definition: "The perpendicular distance from the base to the opposite vertex." }
            ],
            wordProblem: "A triangular park has a base of 12 meters and a height of 9 meters. Find the area to know how much ground the park covers.",
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
                { name: "Base 1", definition: "The longer of the two parallel sides of the trapezoid." },
                { name: "Base 2", definition: "The shorter of the two parallel sides of the trapezoid." },
                { name: "Height", definition: "The perpendicular distance between the two bases." }
            ],
            wordProblem: "A trapezoidal flower bed has one base measuring 10 meters, the other base measuring 6 meters, and a height of 4 meters. What is the area of the flower bed?",
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
                { name: "Radius", definition: "The distance from the center of the circle to any point on its boundary." }
            ],
            wordProblem: "A circular pond has a radius of 5 meters. Calculate its area to determine the surface space occupied by the water.",
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
                { name: "Radius", definition: "The distance from the center of the circle to any point on its boundary." },
                { name: "Angle (radians)", definition: "The central angle of the sector, measured in radians, which determines the size of the 'slice'." }
            ],
            wordProblem: "A pizza slice makes an angle of 45° at the center of the pizza, which has a radius of 10 inches. What is the area of the slice?",
            units: {},
        },
        areaParallelogram: {
            calcType: "areaParallelogram",
            label: "Area of a Parallelogram",
            color: "sky",
            desc: "The area of a parallelogram is calculated by multiplying its base and height.",
            formula: "A = b × h",
            calculate: (base, height) => base * height,
            steps: [
                "Measure the base (b) and height (h) of the parallelogram.",
                "Write down the formula: A = b × h.",
                "Multiply the base by the height to get the area (A).",
            ],
            dimensions: [
                { name: "Base", definition: "One of the parallel sides of the parallelogram." },
                { name: "Height", definition: "The perpendicular distance from the base to the opposite side." }
            ],
            wordProblem: "A parallelogram has a base of 15 cm and a height of 8 cm. Calculate the area of the shape.",
            units: {},
        },
        areaRhombus: {
            calcType: "areaRhombus",
            label: "Area of a Rhombus",
            color: "orange",
            desc: "The area of a rhombus can be calculated by multiplying the lengths of its diagonals and dividing by two, or using the base and height.",
            formula: "A = (d1 × d2) / 2 or A = b × h",
            calculate: (d1, d2) => (d1 * d2) / 2,
            steps: [
                "Measure the lengths of the diagonals (d1 and d2) or the base (b) and height (h) of the rhombus.",
                "Write down the formula: A = (d1 × d2) / 2 or A = b × h.",
                "If using diagonals, multiply the lengths of the diagonals and divide by 2 to get the area (A).",
                "If using base and height, multiply the base by the height to get the area (A).",
            ],
            dimensions: [
                { name: "Diagonal 1", definition: "One of the two diagonals of the rhombus." },
                { name: "Diagonal 2", definition: "The second diagonal of the rhombus." },
                { name: "Base", definition: "One of the equal sides of the rhombus." },
                { name: "Height", definition: "The perpendicular distance from the base to the opposite side." }
            ],
            wordProblem: "A rhombus has diagonals measuring 10 cm and 8 cm. Calculate its area to find the space it occupies.",
            units: {},
        },
        areaSquare: {
            calcType: "areaSquare",
            label: "Area of a Square",
            color: "yellow",
            desc: "The area of a square is calculated by squaring the length of one of its sides.",
            formula: "A = s²",
            calculate: (side) => Math.pow(side, 2),
            steps: [
                "Measure the length of one side (s) of the square.",
                "Write down the formula: A = s².",
                "Square the length of the side to get the area (A).",
            ],
            dimensions: [
                { name: "Side", definition: "The length of one side of the square." }
            ],
            wordProblem: "A square garden has sides measuring 4 meters each. What is the area of the garden?",
            units: {},
        },
        areaEllipse: {
            calcType: "areaEllipse",
            label: "Area of an Ellipse",
            color: "purple",
            desc: "The area of an ellipse is calculated using its semi-major and semi-minor axes. This is useful in various scientific fields.",
            formula: "A = π × a × b",
            calculate: (semiMajor, semiMinor) => Math.PI * semiMajor * semiMinor,
            steps: [
                "Measure the lengths of the semi-major axis (a) and semi-minor axis (b) of the ellipse.",
                "Write down the formula: A = π × a × b.",
                "Multiply the lengths of the semi-major and semi-minor axes.",
                "Multiply the result by π (approximately 3.14) to get the area (A).",
            ],
            dimensions: [
                { name: "Semi-Major Axis", definition: "The longest radius of the ellipse, extending from the center to the edge along the longest direction." },
                { name: "Semi-Minor Axis", definition: "The shortest radius of the ellipse, extending from the center to the edge along the shortest direction." }
            ],
            wordProblem: "An elliptical field has a semi-major axis of 10 meters and a semi-minor axis of 6 meters. Calculate its area.",
            units: {},
        },
    },
    PerimeterCalculators: {
        perimeterCircle: {
            calcType: "perimeterCircle",
            label: "Circumference of a Circle",
            color: "sky",
            desc: "The circumference is the distance around the circle, calculated by multiplying the diameter by π.",
            formula: "C = 2πr",
            calculate: (radius) => 2 * Math.PI * radius,
            steps: [
                "Measure the radius (r) of the circle.",
                "Write down the formula: C = 2πr.",
                "Multiply the radius by 2 and then by π to find the circumference (C).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the circle to any point on its boundary." }
            ],
            wordProblem: "A circular track has a radius of 10 meters. Calculate its circumference to find the distance covered in one lap.",
            units: {},
        },
        perimeterTriangle: {
            calcType: "perimeterTriangle",
            label: "Perimeter of a Triangle",
            color: "pink",
            desc: "The perimeter of a triangle is the total length of its three sides. This calculation is fundamental in various geometric applications.",
            formula: "P = a + b + c",
            calculate: (sideA, sideB, sideC) => sideA + sideB + sideC,
            steps: [
                "Measure the lengths of all three sides of the triangle: a, b, and c.",
                "Write down the formula: P = a + b + c.",
                "Add the lengths of the three sides together to get the perimeter (P).",
            ],
            dimensions: [
                { name: "Side A", definition: "One of the three sides of the triangle." },
                { name: "Side B", definition: "The second side of the triangle." },
                { name: "Side C", definition: "The third side of the triangle." }
            ],
            wordProblem: "A triangle has sides measuring 7 meters, 10 meters, and 5 meters. Calculate the perimeter of the triangle.",
            units: {},
        },
        perimeterParallelogram: {
            calcType: "perimeterParallelogram",
            label: "Perimeter of a Parallelogram",
            color: "orange",
            desc: "The perimeter of a parallelogram is calculated by adding twice the base and twice the side length.",
            formula: "P = 2(b + s)",
            calculate: (base, side) => 2 * (base + side),
            steps: [
                "Measure the base (b) and side length (s) of the parallelogram.",
                "Write down the formula: P = 2(b + s).",
                "Add the base and side length, then multiply by 2 to get the perimeter (P).",
            ],
            dimensions: [
                { name: "Base", definition: "One of the parallel sides of the parallelogram." },
                { name: "Side", definition: "The non-parallel side length." }
            ],
            wordProblem: "A parallelogram has a base of 8 cm and a side length of 5 cm. Calculate its perimeter to determine the length of fencing needed.",
            units: {},
        },
        perimeterRectangle: {
            calcType: "perimeterRectangle",
            label: "Perimeter of a Rectangle",
            color: "pink",
            desc: "The perimeter of a rectangle is calculated by adding twice the length and twice the width.",
            formula: "P = 2(l + w)",
            calculate: (length, width) => 2 * (length + width),
            steps: [
                "Measure the length (l) and width (w) of the rectangle.",
                "Write down the formula: P = 2(l + w).",
                "Add the length and width, then multiply by 2 to get the perimeter (P).",
            ],
            dimensions: [
                { name: "Length", definition: "The longer side of the rectangle." },
                { name: "Width", definition: "The shorter side of the rectangle." }
            ],
            wordProblem: "A rectangular garden measures 15 meters in length and 10 meters in width. Calculate its perimeter to know the amount of fencing required.",
            units: {},
        },
        perimeterRhombus: {
            calcType: "perimeterRhombus",
            label: "Perimeter of a Rhombus",
            color: "lime",
            desc: "The perimeter of a rhombus is calculated by multiplying the side length by four, as all sides are equal.",
            formula: "P = 4s",
            calculate: (side) => 4 * side,
            steps: [
                "Measure the side length (s) of the rhombus.",
                "Write down the formula: P = 4s.",
                "Multiply the side length by 4 to get the perimeter (P).",
            ],
            dimensions: [
                { name: "Side Length", definition: "The length of one of the rhombus's equal sides." }
            ],
            wordProblem: "A rhombus-shaped tile has a side length of 6 cm. Calculate its perimeter to determine the border required.",
            units: {},
        },
        perimeterSquare: {
            calcType: "perimeterSquare",
            label: "Perimeter of a Square",
            color: "purple",
            desc: "The perimeter of a square is calculated by multiplying the side length by four, as all sides are equal.",
            formula: "P = 4s",
            calculate: (side) => 4 * side,
            steps: [
                "Measure the side length (s) of the square.",
                "Write down the formula: P = 4s.",
                "Multiply the side length by 4 to get the perimeter (P).",
            ],
            dimensions: [
                { name: "Side Length", definition: "The length of one of the square's equal sides." }
            ],
            wordProblem: "A square park has a side length of 20 meters. Calculate its perimeter to determine the fencing needed.",
            units: {},
        },
    },
    SurfaceAreaCalculators: {
        surfaceAreaCube: {
            calcType: "surfaceAreaCube",
            label: "Surface Area of a Cube",
            color: "sky",
            desc: "The surface area of a cube is calculated by adding up the areas of all six faces. Each face of a cube is a square.",
            formula: "SA = 6 × a²",
            calculate: (side) => 6 * Math.pow(side, 2),
            steps: [
                "Measure the length of one side (a) of the cube.",
                "Write down the formula: SA = 6 × a².",
                "Square the length of the side (multiply a by itself).",
                "Multiply the result by 6 to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Side Length", definition: "The length of one edge of the cube." }
            ],
            wordProblem: "A cube-shaped storage box has a side length of 3 meters. Calculate its surface area to determine how much paint is needed to cover it.",
            units: {},
        },
        surfaceAreaRectangularPrism: {
            calcType: "surfaceAreaRectangularPrism",
            label: "Surface Area of a Rectangular Prism",
            color: "orange",
            desc: "The surface area of a rectangular prism is found by calculating the areas of all six rectangular faces.",
            formula: "SA = 2(lw + lh + wh)",
            calculate: (length, width, height) => 2 * (length * width + length * height + width * height),
            steps: [
                "Measure the length (l), width (w), and height (h) of the rectangular prism.",
                "Write down the formula: SA = 2(lw + lh + wh).",
                "Calculate the areas of the three pairs of opposite faces.",
                "Multiply the sum by 2 to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Length", definition: "The longest side of the rectangular prism." },
                { name: "Width", definition: "The shorter side of the rectangular prism." },
                { name: "Height", definition: "The vertical dimension of the prism." }
            ],
            wordProblem: "A rectangular box has a length of 10 cm, a width of 5 cm, and a height of 8 cm. Calculate the surface area to determine how much wrapping paper is needed.",
            units: {},
        },
        surfaceAreaCylinder: {
            calcType: "surfaceAreaCylinder",
            label: "Surface Area of a Cylinder",
            color: "pink",
            desc: "The surface area of a cylinder is the sum of the areas of the two circular bases and the rectangle that wraps around the side.",
            formula: "SA = 2πr(r + h)",
            calculate: (radius, height) => 2 * Math.PI * radius * (radius + height),
            steps: [
                "Measure the radius (r) of the circular base and the height (h) of the cylinder.",
                "Write down the formula: SA = 2πr(r + h).",
                "Calculate the area of the circular bases and the side surface area.",
                "Add the areas together to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the circular base to its edge." },
                { name: "Height", definition: "The distance between the two circular bases." }
            ],
            wordProblem: "A cylindrical water tank has a radius of 4 meters and a height of 10 meters. Calculate its surface area to find out how much paint is needed for the outside.",
            units: {},
        },
        surfaceAreaCone: {
            calcType: "surfaceAreaCone",
            label: "Surface Area of a Cone",
            color: "lime",
            desc: "The surface area of a cone is the sum of the base area and the lateral area, which is the area of the cone's slanted side.",
            formula: "SA = πr(r + l)",
            calculate: (radius, slantHeight) => Math.PI * radius * (radius + slantHeight),
            steps: [
                "Measure the radius (r) of the base and the slant height (l) of the cone.",
                "Write down the formula: SA = πr(r + l).",
                "Calculate the base area and the lateral area.",
                "Add the areas together to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the base to the edge of the base." },
                { name: "Slant Height", definition: "The distance from the base to the apex of the cone measured along the surface." }
            ],
            wordProblem: "A cone-shaped party hat has a radius of 3 inches and a slant height of 5 inches. Calculate the surface area to determine how much fabric is needed to cover it.",
            units: {},
        },
        baseSurfaceAreaCone: {
            calcType: "baseSurfaceAreaCone",
            label: "Base Surface Area of a Cone",
            color: "purple",
            desc: "The base surface area of a cone is simply the area of its circular base.",
            formula: "A = πr²",
            calculate: (radius) => Math.PI * Math.pow(radius, 2),
            steps: [
                "Measure the radius (r) of the base.",
                "Write down the formula: A = πr².",
                "Square the radius.",
                "Multiply by π to find the base area (A).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center to the edge of the circular base." }
            ],
            wordProblem: "Find the base area of a cone with a radius of 5 cm.",
            units: {},
        },
        lateralSurfaceAreaCone: {
            calcType: "lateralSurfaceAreaCone",
            label: "Lateral Surface Area of a Cone",
            color: "sky",
            desc: "The lateral surface area of a cone is the area of the slanted surface.",
            formula: "A = πr * l",
            calculate: (radius, slantHeight) => Math.PI * radius * slantHeight,
            steps: [
                "Measure the radius (r) and the slant height (l).",
                "Write down the formula: A = πr * l.",
                "Multiply the radius by the slant height.",
                "Multiply by π to find the lateral area (A).",
            ],
            dimensions: [
                { name: "Radius", definition: "The radius of the circular base." },
                { name: "Slant Height", definition: "The length of the side from the base to the apex." }
            ],
            wordProblem: "A cone with a radius of 3 inches and a slant height of 7 inches. Calculate its lateral surface area.",
            units: {},
        },
        surfaceAreaSphere: {
            calcType: "surfaceAreaSphere",
            label: "Surface Area of a Sphere",
            color: "purple",
            desc: "The surface area of a sphere is calculated using its radius. This measurement is important in various fields, including physics and engineering.",
            formula: "SA = 4πr²",
            calculate: (radius) => 4 * Math.PI * Math.pow(radius, 2),
            steps: [
                "Measure the radius (r) of the sphere.",
                "Write down the formula: SA = 4πr².",
                "Square the radius (multiply r by itself).",
                "Multiply the result by 4 and π to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the sphere to any point on its surface." }
            ],
            wordProblem: "A basketball has a radius of 12 cm. Calculate its surface area to determine how much material is needed to make it.",
            units: {},
        },
        surfaceAreaHemisphere: {
            calcType: "surfaceAreaHemisphere",
            label: "Surface Area of a Hemisphere",
            color: "lime",
            desc: "The surface area of a hemisphere is calculated as the area of the circular base plus the curved surface area.",
            formula: "SA = 3πr²",
            calculate: (radius) => 3 * Math.PI * Math.pow(radius, 2),
            steps: [
                "Measure the radius (r) of the hemisphere.",
                "Write down the formula: SA = 3πr².",
                "Square the radius (multiply r by itself).",
                "Multiply the result by 3 and π to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the hemisphere to the edge of the base." }
            ],
            wordProblem: "A hemisphere-shaped garden has a radius of 4 meters. Calculate its surface area to find out how much soil is needed to fill it.",
            units: {},
        },
        surfaceAreaPyramid: {
            calcType: "surfaceAreaPyramid",
            label: "Surface Area of a Pyramid",
            color: "yellow",
            desc: "The surface area of a pyramid is calculated by adding the area of the base and the areas of the triangular faces.",
            formula: "SA = B + 1/2 * P * l",
            calculate: (baseArea, perimeter, slantHeight) => baseArea + (0.5 * perimeter * slantHeight),
            steps: [
                "Measure the base area (B), perimeter (P) of the base, and slant height (l) of the pyramid.",
                "Write down the formula: SA = B + 1/2 * P * l.",
                "Calculate the lateral surface area (1/2 * P * l).",
                "Add the base area and the lateral surface area to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Base Area", definition: "The area of the base of the pyramid." },
                { name: "Perimeter", definition: "The total length of all sides of the base." },
                { name: "Slant Height", definition: "The distance from the base to the apex along the side." }
            ],
            wordProblem: "A square pyramid has a base area of 25 m², a perimeter of 20 m, and a slant height of 10 m. Calculate its surface area.",
            units: {},
        },
        baseSurfaceAreaPyramid: {
            calcType: "baseSurfaceAreaPyramid",
            label: "Base Surface Area of a Pyramid",
            color: "pink",
            desc: "The base surface area of a pyramid depends on the shape of its base, commonly a square or rectangle.",
            formula: "A = l * w",
            calculate: (length, width) => length * width,
            steps: [
                "Measure the length (l) and width (w) of the base.",
                "Write down the formula: A = l * w.",
                "Multiply length by width to find the base area (A).",
            ],
            dimensions: [
                { name: "Length", definition: "The length of the base." },
                { name: "Width", definition: "The width of the base." }
            ],
            wordProblem: "Calculate the base area of a pyramid with a square base of 4 m on each side.",
            units: {},
        },
        lateralSurfaceAreaPyramid: {
            calcType: "lateralSurfaceAreaPyramid",
            label: "Lateral Surface Area of a Pyramid",
            color: "orange",
            desc: "The lateral surface area of a pyramid is the sum of the areas of its triangular faces.",
            formula: "A = 1/2 * P * l",
            calculate: (perimeter, slantHeight) => 0.5 * perimeter * slantHeight,
            steps: [
                "Measure the perimeter (P) of the base and the slant height (l).",
                "Write down the formula: A = 1/2 * P * l.",
                "Multiply perimeter by slant height, then divide by 2 to get the lateral area (A).",
            ],
            dimensions: [
                { name: "Perimeter", definition: "The total length of all sides of the base." },
                { name: "Slant Height", definition: "The height from the base to the apex along a face." }
            ],
            wordProblem: "Calculate the lateral area of a pyramid with a base perimeter of 18 m and a slant height of 10 m.",
            units: {},
        },
        surfaceAreaPipe: {
            calcType: "surfaceAreaPipe",
            label: "Surface Area of a Pipe",
            color: "sky",
            desc: "The surface area of a pipe is the sum of the areas of the two circular ends and the rectangular area of the side.",
            formula: "SA = 2πr² + 2πrh",
            calculate: (radius, height) => (2 * Math.PI * Math.pow(radius, 2)) + (2 * Math.PI * radius * height),
            steps: [
                "Measure the radius (r) of the circular ends and the height (h) of the pipe.",
                "Write down the formula: SA = 2πr² + 2πrh.",
                "Calculate the area of the two circular ends and the side area.",
                "Add the areas together to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the circular end to its edge." },
                { name: "Height", definition: "The length of the pipe." }
            ],
            wordProblem: "A pipe has a radius of 2 cm and a height of 10 cm. Calculate its surface area to determine how much paint is needed for its outer surface.",
            units: {},
        },
        surfaceAreaTriangularPrism: {
            calcType: "surfaceAreaTriangularPrism",
            label: "Surface Area of a Triangular Prism",
            color: "purple",
            desc: "The surface area of a triangular prism is calculated by adding the area of the two triangular bases and the area of the three rectangular faces.",
            formula: "SA = bh + (P * h)",
            calculate: (baseHeight, baseWidth, height) => (0.5 * baseWidth * baseHeight) + (baseWidth + 2 * height) * height,
            steps: [
                "Measure the base height (bh), base width (bw), and height (h) of the triangular prism.",
                "Write down the formula: SA = bh + (P * h), where P is the perimeter of the base triangle.",
                "Calculate the area of the two triangular bases.",
                "Calculate the area of the three rectangular faces and add to the area of the triangles to get the surface area (SA).",
            ],
            dimensions: [
                { name: "Base Height", definition: "The height of the triangular base." },
                { name: "Base Width", definition: "The width of the triangular base." },
                { name: "Height", definition: "The height (length) of the prism." }
            ],
            wordProblem: "A triangular prism has a base height of 4 cm, a base width of 6 cm, and a height of 10 cm. Calculate its surface area.",
            units: {},
        },
    },
    VolumeCalculators: {
        volumeCube: {
            calcType: "volumeCube",
            label: "Volume of a Cube",
            color: "sky",
            desc: "The volume of a cube is found by multiplying the length of one side by itself three times.",
            formula: "V = a³",
            calculate: (side) => Math.pow(side, 3),
            steps: [
                "Measure the length of one side (a) of the cube.",
                "Write down the formula: V = a³.",
                "Multiply the length of the side by itself three times.",
                "The result is the volume (V) of the cube.",
            ],
            dimensions: [
                { name: "Side Length", definition: "The length of one edge of the cube." }
            ],
            wordProblem: "A cube-shaped storage box has a side length of 3 meters. Calculate its volume to determine how much space is available inside.",
            units: {},
        },
        volumeRectangularPrism: {
            calcType: "volumeRectangularPrism",
            label: "Volume of a Rectangular Prism",
            color: "orange",
            desc: "The volume of a rectangular prism is calculated by multiplying its length, width, and height.",
            formula: "V = l × w × h",
            calculate: (length, width, height) => length * width * height,
            steps: [
                "Measure the length (l), width (w), and height (h) of the rectangular prism.",
                "Write down the formula: V = l × w × h.",
                "Multiply the length, width, and height together.",
                "The result is the volume (V) of the rectangular prism.",
            ],
            dimensions: [
                { name: "Length", definition: "The longest side of the rectangular prism." },
                { name: "Width", definition: "The shorter side of the rectangular prism." },
                { name: "Height", definition: "The vertical dimension of the prism." }
            ],
            wordProblem: "A rectangular box has a length of 10 cm, a width of 5 cm, and a height of 8 cm. Calculate the volume to determine how much water it can hold.",
            units: {},
        },
        volumeCylinder: {
            calcType: "volumeCylinder",
            label: "Volume of a Cylinder",
            color: "pink",
            desc: "The volume of a cylinder is found by multiplying the area of the circular base by the height of the cylinder.",
            formula: "V = πr²h",
            calculate: (radius, height) => Math.PI * Math.pow(radius, 2) * height,
            steps: [
                "Measure the radius (r) of the circular base and the height (h) of the cylinder.",
                "Write down the formula: V = πr²h.",
                "Calculate the area of the base (πr²).",
                "Multiply the area by the height to get the volume (V).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the circular base to its edge." },
                { name: "Height", definition: "The distance between the two circular bases." }
            ],
            wordProblem: "A cylindrical water tank has a radius of 4 meters and a height of 10 meters. Calculate its volume to find out how much water it can hold.",
            units: {},
        },
        volumeCone: {
            calcType: "volumeCone",
            label: "Volume of a Cone",
            color: "lime",
            desc: "The volume of a cone is calculated using the area of the base and the height of the cone.",
            formula: "V = (1/3)πr²h",
            calculate: (radius, height) => (1 / 3) * Math.PI * Math.pow(radius, 2) * height,
            steps: [
                "Measure the radius (r) of the base and the height (h) of the cone.",
                "Write down the formula: V = (1/3)πr²h.",
                "Calculate the area of the base (πr²).",
                "Multiply the area by the height and then divide by 3 to get the volume (V).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the base to the edge of the base." },
                { name: "Height", definition: "The vertical distance from the base to the apex of the cone." }
            ],
            wordProblem: "A cone-shaped party hat has a radius of 3 inches and a height of 5 inches. Calculate the volume to find out how much ice cream it can hold.",
            units: {},
        },
        volumeSphere: {
            calcType: "volumeSphere",
            label: "Volume of a Sphere",
            color: "purple",
            desc: "The volume of a sphere is calculated using its radius, which is a measure of the distance from the center to any point on the surface.",
            formula: "V = (4/3)πr³",
            calculate: (radius) => (4 / 3) * Math.PI * Math.pow(radius, 3),
            steps: [
                "Measure the radius (r) of the sphere.",
                "Write down the formula: V = (4/3)πr³.",
                "Cube the radius (multiply r by itself three times).",
                "Multiply the result by (4/3)π to get the volume (V).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the sphere to any point on its surface." }
            ],
            wordProblem: "A basketball has a radius of 12 cm. Calculate its volume to determine how much air is needed to fill it.",
            units: {},
        },
        volumeHemisphere: {
            calcType: "volumeHemisphere",
            label: "Volume of a Hemisphere",
            color: "yellow",
            desc: "The volume of a hemisphere is half the volume of a sphere.",
            formula: "V = (2/3)πr³",
            calculate: (radius) => (2 / 3) * Math.PI * Math.pow(radius, 3),
            steps: [
                "Measure the radius (r) of the hemisphere.",
                "Write down the formula: V = (2/3)πr³.",
                "Cube the radius (multiply r by itself three times).",
                "Multiply the result by (2/3)π to get the volume (V).",
            ],
            dimensions: [
                { name: "Radius", definition: "The distance from the center of the hemisphere to the edge." }
            ],
            wordProblem: "A hemispherical bowl has a radius of 6 cm. Calculate its volume to determine how much soup it can hold.",
            units: {},
        },
        volumePyramid: {
            calcType: "volumePyramid",
            label: "Volume of a Pyramid",
            color: "orange",
            desc: "The volume of a pyramid is calculated using the area of the base and the height.",
            formula: "V = (1/3)Bh",
            calculate: (baseArea, height) => (1 / 3) * baseArea * height,
            steps: [
                "Measure the area of the base (B) and the height (h) of the pyramid.",
                "Write down the formula: V = (1/3)Bh.",
                "Multiply the base area by the height.",
                "Divide the result by 3 to get the volume (V).",
            ],
            dimensions: [
                { name: "Base Area", definition: "The area of the base of the pyramid." },
                { name: "Height", definition: "The vertical distance from the base to the apex." }
            ],
            wordProblem: "A square pyramid has a base area of 25 cm² and a height of 9 cm. Calculate its volume.",
            units: {},
        },
        volumePipe: {
            calcType: "volumePipe",
            label: "Volume of a Pipe",
            color: "sky",
            desc: "The volume of a pipe is calculated using the difference in volumes between two cylinders.",
            formula: "V = π(r₁² - r₂²)h",
            calculate: (outerRadius, innerRadius, height) => Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) * height,
            steps: [
                "Measure the outer radius (r₁), inner radius (r₂), and height (h) of the pipe.",
                "Write down the formula: V = π(r₁² - r₂²)h.",
                "Calculate the area of the outer base (πr₁²) and the inner base (πr₂²).",
                "Subtract the inner area from the outer area and multiply by the height to get the volume (V).",
            ],
            dimensions: [
                { name: "Outer Radius", definition: "The radius of the outer cylinder." },
                { name: "Inner Radius", definition: "The radius of the inner cylinder." },
                { name: "Height", definition: "The vertical dimension of the pipe." }
            ],
            wordProblem: "A pipe has an outer radius of 5 cm, an inner radius of 3 cm, and a height of 10 cm. Calculate its volume.",
            units: {},
        },
        volumeTriangularPrism: {
            calcType: "volumeTriangularPrism",
            label: "Volume of a Triangular Prism",
            color: "pink",
            desc: "The volume of a triangular prism is found by multiplying the area of the triangular base by the height.",
            formula: "V = (1/2)bhH",
            calculate: (base, height, length) => (0.5 * base * height) * length,
            steps: [
                "Measure the base (b) and height (h) of the triangular base and the length (H) of the prism.",
                "Write down the formula: V = (1/2)bhH.",
                "Calculate the area of the triangle (1/2 * b * h).",
                "Multiply the area by the length (H) to get the volume (V).",
            ],
            dimensions: [
                { name: "Base", definition: "The base length of the triangular face." },
                { name: "Height", definition: "The height of the triangular face." },
                { name: "Length", definition: "The length of the prism." }
            ],
            wordProblem: "A triangular prism has a base of 4 cm, a height of 3 cm, and a length of 10 cm. Calculate its volume.",
            units: {},
        },
    },
};