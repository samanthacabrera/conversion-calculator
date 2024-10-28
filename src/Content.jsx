import React from 'react';

const Content = () => {
    return (
        <div className="w-2/3 py-12">

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="text-lg space-y-1">
                    <h4 className="font-semibold tracking-wide">What is Calcalooza?</h4>
                    <p className="text-gray-700">Calcalooza is an online calculator platform designed to simplify various calculations. It provides a user-friendly interface with multiple calculators to meet your specific needs.</p>

                    <h4 className="font-semibold tracking-wide">How do I use the calculators on Calcalooza?</h4>
                    <p className="text-gray-700">Using Calcalooza is straightforward! Select the calculator that fits your needs from the main menu. Input the required values into the designated fields, your results will render instantly.</p>

                    <h4 className="font-semibold tracking-wide">Are the calculators regularly updated?</h4>
                    <p className="text-gray-700">Yes, we continuously update our calculators to ensure accuracy and add new features based on user feedback. Stay tuned for updates on new calculators or enhancements.</p>

                    <h4 className="font-semibold tracking-wide">Is Calcalooza mobile-friendly?</h4>
                    <p className="text-gray-700">Yes! Calcalooza is designed to be responsive and works well on both desktop and mobile devices. You can perform your calculations anytime, anywhere, making it convenient for on-the-go users.</p>

                    <h4 className="font-semibold tracking-wide">What browsers work best with Calcalooza?</h4>
                    <p className="text-gray-700">Calcalooza is compatible with most modern browsers, including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser.</p>
                    
                    <h4 className="font-semibold tracking-wide">What if I encounter an issue while using Calcalooza?</h4>
                    <p className="text-gray-700">If you experience any issues, reach out to our support team. We’re here to assist you and ensure a smooth experience while using Calcalooza.</p>
                </div>
            </section>

            <section className="mb-12 space-y-2">
                <h3 className="text-2xl font-semibold mb-4">Common Mistakes to Avoid</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    While calculators make life easier in many ways, there are common pitfalls that users often fall into. One of the most frequent mistakes is inputting the wrong numbers or using incorrect units of measurement. For example, when converting between systems—such as imperial and metric—it’s important to ensure that you’re using the right units. Even small errors, like confusing feet and meters or grams and ounces, can significantly distort the results, leading to costly or time-consuming corrections later on.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Another common mistake is over-reliance on the calculator's output without critically thinking about the result. Just because a calculator spits out an answer doesn’t necessarily mean that the answer makes sense. For instance, if you're calculating a loan repayment amount and the result seems too low or too high, it's essential to go back and check your inputs before trusting the result blindly. This critical thinking step is often skipped, leading to decisions based on incorrect information.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Rounding errors are another issue to be mindful of. Most calculators round numbers at a certain point to keep the display manageable, but this rounding can lead to slight inaccuracies in the final result—especially in long, multi-step calculations. To mitigate this, make sure you're aware of how and when rounding occurs and adjust your interpretation of the result accordingly. If you're doing scientific or financial calculations where even small errors can be significant, consider using a calculator with higher precision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Finally, many users overlook the importance of understanding the context of a formula before using it. For instance, if you're using a financial calculator to estimate savings growth, the formula for compound interest assumes a certain compounding period (e.g., monthly, quarterly, or annually). If you don't match the correct compounding period to your actual savings plan, the result will not accurately reflect your expected returns. Always take the time to understand the assumptions built into a formula, and double-check that they apply to your specific scenario.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    By being mindful of these common mistakes—incorrect inputs, over-reliance on results, rounding issues, and misunderstanding formulas—you can avoid costly errors and use your calculator to its fullest potential. Remember, calculators are powerful tools, but like any tool, they must be used with care and attention to detail to achieve the best results.
                </p>
            </section>

            <section className="mb-12 space-y-2">
                <h3 className="text-2xl font-semibold mb-4">Resources</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    At Calcalooza, we believe that knowledge is just as important as the tools we provide. To empower our users and enhance their understanding of various calculations, we've compiled a range of educational resources tailored to different skill levels and needs. Whether you are a student trying to grasp fundamental concepts or a professional seeking to refine your expertise, we have something for you.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our <a href="/tutorials" className="text-blue-600">How to Use Our Calculators</a> guide offers step-by-step instructions on navigating our platform, ensuring that you get the most out of each calculator. We understand that not everyone is familiar with how online calculators function, so we've designed this resource to be intuitive and easy to follow. From selecting the right calculator to inputting values and interpreting results, this guide covers all the essentials.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Additionally, we recommend exploring external educational resources like <a href="https://www.khanacademy.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">Khan Academy</a>, which offers a large variety of tutorials covering a wide range of subjects, from basic math to advanced calculus. Their structured courses and practice exercises can provide valuable support as you work through various calculations and concepts.
                </p>
            </section>

            <section className="mb-12 space-y-2">
                <h3 className="text-2xl font-semibold mb-4">Upcoming Features</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    At Calcalooza, we are committed to continuously improving our platform to meet the evolving needs of our users. Our development team is hard at work on several exciting features and enhancements that will be rolled out in the near future. Here’s a comprehensive look at what you can expect:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    One of our most anticipated features is the <strong>Unit Conversion Calculator</strong>. This tool will simplify the process of converting measurements between different units—be it from miles to kilometers, pounds to kilograms, or gallons to liters. Understanding unit conversions is essential in various fields, from cooking to engineering, and we aim to make this process seamless and user-friendly. Our user interface will allow for quick and accurate conversions, helping users avoid common errors associated with manual calculations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Additionally, we are developing a <strong>Slope Calculator</strong>. This tool will be invaluable for those in construction, architecture, and landscaping, providing users with the ability to calculate slopes, gradients, and angles with ease. By simply inputting the rise and run values, users can obtain precise slope measurements that are essential for various projects. This feature aims to enhance project accuracy and efficiency, reducing the likelihood of costly errors.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We invite our users to stay tuned for updates on these features and more. Your feedback and suggestions are crucial in shaping the future of Calcalooza, so please don’t hesitate to share your thoughts on what features you would find most beneficial. 
                </p>
            </section>

        </div>
    );
};

export default Content;
