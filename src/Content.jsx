import React from 'react';

const Content = () => {
    return (
        <div className="w-2/3 py-12">

            <section className="my-6 py-12 border-b border-gray-300">
                <h3 className="text-2xl mb-4">Frequently Asked Questions</h3>
                <div className="text-lg space-y-4">
                    <h4 className="text-xl">What is Calcalooza?</h4>
                    <p className="pl-6 text-gray-700">Calcalooza is an online calculator platform designed to simplify various calculations. Our user-friendly interface features multiple calculators designed to make calculations easy and accessible.</p>

                    <h4 className="text-xl">Are the calculators regularly updated?</h4>
                    <p className="pl-6 text-gray-700">Yes, we continuously update our calculators to ensure accuracy and add new features based on user feedback. Stay tuned for updates on new calculators or enhancements.</p>

                    <h4 className="text-xl">What should I do if I encounter an issue while using Calcalooza?</h4>
                    <p className="pl-6 text-gray-700">
                        If you experience any issues, please reach out to our support team by clicking <a href="mailto:samanthal.n.cabrera@gmail.com?subject=Calcalooza%20Feedback" className="text-blue-600 hover:underline">here</a>.
                    </p>
                </div>
            </section>

            <section className="my-6 py-12 border-b border-gray-300 space-y-4">
                <h3 className="text-2xl mb-4">Understanding Calculator Precision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Calcalooza’s calculators are designed to balance readability with accuracy, using rounding to avoid overly complex decimal results. However, it’s important to understand how rounding can impact certain types of calculations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    For straightforward calculators like basic arithmetic or unit conversions, results are rounded to two decimal places to keep outputs simple and user-friendly. Our rounding approach means that some very small fractional values might be trimmed in intermediate steps. If precision is vital, double-checking with a scientific calculator for multi-step calculations can be beneficial. 
                </p>
            </section>

            <section className="my-6 py-12 border-b border-gray-300 space-y-4">
                <h3 className="text-2xl mb-4">Upcoming Features</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    One of our most anticipated features is the <strong>Distance Calculators</strong>. For 2D space, users can easily input the coordinates of two points on a Cartesian plane, and the calculator will utilize the distance formula to provide an accurate measurement of the straight-line distance between them. Users will also be able to find distances between points in three-dimensional space.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Additionally, we are developing a <strong>Slope Calculator</strong>. By simply inputting the rise and run values, users can obtain precise slope measurements that are essential for various projects. 
                </p>
            </section>

            <section className="my-6 py-12 border-b border-gray-300 space-y-4">
                <h3 className="text-2xl mb-4">Educational Resources</h3>
                <p className="text-lg text-gray-700 leading-relaxed">At Calcalooza, we encourage our users to utilize our tools for learning and growth. To support this, we have compiled a variety of educational resources tailored to different skill levels and needs.</p>
                <p className="text-lg text-gray-700 leading-relaxed">We recommend exploring the following educational resources:</p>
                <ul className="list-disc ml-8 space-y-2 mt-4 text-lg text-gray-700 leading-relaxed">
                    <li>
                        <a href="https://www.khanacademy.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">Khan Academy</a> - Offers a large variety of tutorials covering subjects from basic math to advanced calculus.
                    </li>
                    <li>
                        <a href="https://www.brilliant.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">Brilliant</a> - Interactive learning in math and science through engaging challenges and problem-solving.
                    </li>
                    <li>
                        <a href="https://www.mathsisfun.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">Math is Fun</a> - A resource for basic math concepts, with explanations and examples tailored for learners of all ages.
                    </li>
                </ul>
            </section>

        </div>
    );
};

export default Content;
