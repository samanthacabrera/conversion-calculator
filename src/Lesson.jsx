import React from 'react';
import catData from './catData';

const lessonMapping = {
    areaRectangle: catData.area,
    areaTriangle: catData.area,
    areaTrapezoid: catData.area,
    areaCircle: catData.area,
    areaSector: catData.area,
    areaParallelogram: catData.area,
    areaRhombus: catData.area,
    areaSquare: catData.area,
    areaEllipse: catData.area,
    distance2D: catData.distance,
    distanceMidpoint: catData.distance,
    distanceSlope: catData.distance,
    perimeterTriangle: catData.perimeter,
    perimeterCircle: catData.perimeter,
    perimeterParallelogram: catData.perimeter,
    perimeterRectangle: catData.perimeter,
    perimeterRhombus: catData.perimeter,
    perimeterSquare: catData.perimeter,
    surfaceAreaSphere: catData.surfaceArea,
    surfaceAreaCone: catData.surfaceArea,
    surfaceAreaCube: catData.surfaceArea,
    surfaceAreaCylinder: catData.surfaceArea,
    surfaceAreaRectangularPrism: catData.surfaceArea,
    surfaceAreaHemisphere: catData.surfaceArea,
    surfaceAreaPyramid: catData.surfaceArea,
    surfaceAreaPipe: catData.surfaceArea,
    surfaceAreaTriangularPrism: catData.surfaceArea,
    volumeSphere: catData.volume,
    volumeCone: catData.volume,
    volumeCube: catData.volume,
    volumeCylinder: catData.volume,
    volumeRectangularPrism: catData.volume,
    volumeHemisphere: catData.volume,
    volumePyramid: catData.volume,
    volumePipe: catData.volume,
    volumeTriangularPrism: catData.volume,
    basicExponent: catData.exponents,  
    fractionalExponent: catData.exponents, 
    negativeExponent: catData.exponents,  
    squareRoot: catData.exponents,  
    nthRoot: catData.exponents, 
};

const Lesson = ({ calcType }) => {
    const currentLesson = lessonMapping[calcType];

    if (!currentLesson) {
        return <p>Lesson data not found for this calculation type.</p>;
    }

    const {
        title,
        definition,
        importance,
        history,
        formulas,
        keyTakeaways,
        glossary,
        funFact,
    } = currentLesson;

    return (
        <div className="space-y-6 text-lg">
            {/* Category Overview */}
            <section id="importance" className="px-4">
                <h2 className="text-5xl mb-4 font-semibold">Overview of {title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{definition}</p>
            </section>

            {/* Importance */}
            <section id="importance" className="group p-4">
                <h2 className="text-2xl mb-8 font-semibold group-hover:text-lime-300 transition duration-500">Importance</h2>
                <p className="text-gray-700">{importance}</p>
            </section>

            {/* History */}
            <section id="history" className="group p-4">
                <h3 className="text-2xl mb-8 font-semibold group-hover:text-sky-300 transition duration-500">History</h3>
                <p className="text-gray-700">{history}</p>
            </section>

            {/* Formulas */}
            <section id="formulas" className="group p-4">
                <h3 className="text-2xl mb-8 font-semibold group-hover:text-purple-300 transition duration-500">Formulas</h3>
                <ul className="list-disc pl-5 space-y-2">
                    {formulas.map((formula, index) => (
                        <li key={index}>
                            <strong>{formula.shape}:</strong> {formula.formula} - {formula.explanation}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Fun Facts */}
            <section id="fun-facts" className="group p-4">
                <h3 className="text-2xl mb-8 font-semibold group-hover:text-lime-300 transition duration-500">Fun Fact</h3>
                <p className="text-gray-700">{funFact}</p>
            </section>

            {/* Key Takeaways */}
            <section id="key-takeaways" className="group p-4">
                <h3 className="text-2xl mb-8 font-semibold group-hover:text-orange-300 transition duration-500">Key Takeaways</h3>
                <ul className="list-disc pl-5 space-y-2">
                    {keyTakeaways.map((point, index) => (
                        <li key={index} className="text-gray-700">{point}</li>
                    ))}
                </ul>
            </section>

            {/* Glossary */}
            <section id="glossary" className="group p-4">
                <h3 className="text-2xl mb-8 font-semibold group-hover:text-sky-300 transition duration-500">Glossary</h3>
                <ul className="space-y-2">
                    {Object.entries(glossary).map(([term, definition], index) => (
                        <li key={index}>
                            <strong>{term}:</strong> {definition}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Lesson;
