const catData = {
    area: {
        title: "Area",
        definition: "Area is the measure of the space inside a shape.",
        importance: "Understanding area is crucial for everyday activities, such as figuring out how much carpet to buy for a room or how much paint is needed to cover a wall. It's also essential in fields like architecture, where builders need to know the area of a space to design functional buildings. In agriculture, farmers calculate land area to optimize planting and harvesting crops. Area measurement helps us make informed decisions about space utilization in our homes and communities.",
        history: "The study of area dates back to ancient civilizations like the Egyptians and Babylonians, who used simple geometric shapes to measure land for agriculture and construction. The concept was further developed by Greek mathematicians like Euclid, who established foundational principles in geometry. Over the centuries, different cultures contributed to the understanding of area, creating formulas that we still use today. For example, the formula for the area of a circle was developed in ancient Greece and has been refined through mathematical advancements.",
        formulas: [
            { shape: "Rectangle", formula: "A = l × w", explanation: "Length times width." },
            { shape: "Triangle", formula: "A = 1/2 × b × h", explanation: "Half the base times height." },
            { shape: "Circle", formula: "A = πr²", explanation: "Pi times the radius squared." },
            { shape: "Trapezoid", formula: "A = 1/2 × (b₁ + b₂) × h", explanation: "Half the sum of the bases times height." },
            { shape: "Ellipse", formula: "A = πab", explanation: "Pi times the semi-major axis times the semi-minor axis." },
        ],
        realLifeApplications: "Calculating land area for agriculture helps farmers know how much seed to plant. In construction, understanding floor space is vital for planning layouts. When building homes, architects calculate area to ensure rooms are usable and meet safety regulations. Additionally, businesses determine the area of retail spaces to optimize product placement and customer flow. Even when you’re gardening, knowing how much area your plants will occupy can help you create a beautiful garden.",
        realWorldScenario: "Imagine you want to repaint a room in your house. You need to know the area of the walls to calculate how many cans of paint to buy. If one can covers 400 square feet, and your room is 12 feet by 15 feet, you can find the area by calculating \( A = 12 \times 15 \), which equals 180 square feet. This helps you avoid buying too much or too little paint!",
        keyTakeaways: [
            "Area is a two-dimensional measurement.",
            "Different shapes have different formulas for area calculation.",
            "Area is applicable in real life, from landscaping to designing buildings."
        ],
        glossary: {
            "Area": "The extent of a two-dimensional surface enclosed within a boundary.",
            "Square Units": "The units used to measure area, such as square meters or square feet.",
        },
    },
    perimeter: {
        title: "Perimeter",
        definition: "Perimeter is the total distance around a shape.",
        importance: "Calculating the perimeter is important for many activities, like fencing a yard or designing a garden path. When you know the perimeter, you can determine how much material you'll need, whether it’s for fencing, laying bricks, or putting up a wall. Understanding perimeter is also vital in construction, as it helps architects and builders outline the dimensions of structures accurately.",
        history: "The concept of perimeter has roots in ancient geometry, where mathematicians like Archimedes and the Chinese mathematicians explored the properties of shapes. In the past, measuring the perimeter of land was essential for determining property boundaries. As mathematics evolved, so did the understanding of perimeter, leading to formulas that are easy to apply to various shapes.",
        formulas: [
            { shape: "Rectangle", formula: "P = 2(l + w)", explanation: "Two times the sum of length and width." },
            { shape: "Triangle", formula: "P = a + b + c", explanation: "The sum of all sides." },
            { shape: "Circle", formula: "P = 2πr", explanation: "Two times pi times the radius." },
        ],
        realLifeApplications: "When planning a garden, knowing the perimeter helps you calculate how much fencing you need to enclose the space. In sports, such as track and field, the perimeter of the track determines how far athletes will run. Similarly, in construction, measuring the perimeter of a room helps builders determine how much flooring or trim is required.",
        realWorldScenario: "If you want to build a fence around your rectangular backyard that is 20 feet long and 15 feet wide, you need to find the perimeter. Using the formula \( P = 2(l + w) = 2(20 + 15) \), you get a perimeter of 70 feet. This tells you how much fencing you need to buy to enclose your yard.",
        keyTakeaways: [
            "Perimeter is a linear measurement.",
            "Each shape has a unique formula for its perimeter.",
            "Perimeter is relevant in planning and construction."
        ],
        glossary: {
            "Perimeter": "The total length of the boundaries of a two-dimensional shape.",
            "Linear Units": "The units used to measure perimeter, such as meters or feet.",
        },
    },
    surfaceArea: {
        title: "Surface Area",
        definition: "Surface area is the total area of the surface of a three-dimensional object.",
        importance: "Knowing surface area is essential for many practical applications, such as determining how much paint is needed to cover a surface or how much material is required to wrap a package. In manufacturing, understanding surface area helps companies calculate the amount of raw material needed to create products efficiently. Additionally, in science, surface area impacts reactions in chemistry and biology, as it influences how substances interact.",
        history: "Surface area has been studied since ancient times, often in the context of architecture and engineering. Ancient Egyptians used concepts of surface area in their construction of the pyramids, while Greek mathematicians like Archimedes laid the groundwork for surface area formulas. Over the years, mathematicians have refined these concepts, allowing us to calculate surface area accurately for various shapes.",
        formulas: [
            { shape: "Sphere", formula: "SA = 4πr²", explanation: "Four times pi times the radius squared." },
            { shape: "Cube", formula: "SA = 6a²", explanation: "Six times the area of one face." },
            { shape: "Cylinder", formula: "SA = 2πr(h + r)", explanation: "Two pi times radius times height plus the area of the top and bottom." },
        ],
        realLifeApplications: "Surface area calculations are vital when designing products, as companies need to know how much paint, coating, or wrapping is necessary. In construction, knowing the surface area of walls can help determine how much insulation is needed. Additionally, in the food industry, surface area plays a role in cooking, as larger surfaces allow for faster cooking times.",
        realWorldScenario: "If you're making a box to hold items, you want to know the surface area to determine how much material you'll need. For a box that is 3 feet long, 2 feet wide, and 1 foot tall, you can calculate the surface area using the formula for a rectangular prism. This ensures you buy the right amount of wrapping material for your box!",
        keyTakeaways: [
            "Surface area measures the total area that the surface of a 3D object occupies.",
            "Different 3D shapes have unique formulas for calculating surface area.",
            "Surface area is significant in engineering and product design."
        ],
        glossary: {
            "Surface Area": "The total area of the exterior surface of a three-dimensional object.",
            "Three-Dimensional": "An object that has width, height, and depth.",
        },
    },
    volume: {
        title: "Volume",
        definition: "Volume is the measure of space occupied by a three-dimensional object.",
        importance: "Understanding volume is vital in many areas of life. For example, knowing the volume of a container is essential for determining how much liquid it can hold. In construction, calculating volume helps builders understand how much material is needed for projects, such as concrete for a foundation. Volume also plays a significant role in science, especially in experiments involving liquids or gases.",
        history: "Volume measurement has been used for centuries, especially in trade and agriculture. Ancient civilizations developed ways to measure volume for trade, such as in measuring grain or liquids. Mathematicians like Archimedes made significant contributions to the study of volume, leading to formulas that allow us to calculate the volume of various shapes accurately.",
        formulas: [
            { shape: "Cube", formula: "V = a³", explanation: "The cube of the side length." },
            { shape: "Cylinder", formula: "V = πr²h", explanation: "Pi times the radius squared times height." },
            { shape: "Sphere", formula: "V = 4/3πr³", explanation: "Four-thirds times pi times the cube of the radius." },
        ],
        realLifeApplications: "Volume calculations are essential for various applications, such as measuring how much paint is needed for a room, determining the capacity of containers, and calculating how much soil is needed for a garden bed. In cooking, volume measurements ensure you have the right amount of ingredients for recipes.",
        realWorldScenario: "If you want to fill a fish tank that measures 2 feet long, 1.5 feet wide, and 1 foot deep, you need to calculate the volume. Using the formula \( V = l × w × h \), you find the volume is 3 cubic feet. This tells you how much water to add to the tank, ensuring a healthy environment for your fish!",
        keyTakeaways: [
            "Volume is a three-dimensional measurement.",
            "Each shape has its own formula for volume calculation.",
            "Volume is essential in many fields, including science and engineering."
        ],
        glossary: {
            "Volume": "The amount of space an object occupies.",
            "Cubic Units": "The units used to measure volume, such as cubic meters or liters.",
        },
    },
};

export default catData;
