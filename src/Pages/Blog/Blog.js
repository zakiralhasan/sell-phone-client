import React from "react";


const Blog = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-8">
                <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
                    <h1 className="text-2xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </h1>
                    <div className="my-2">
                        <p>
                            <span className="text-xl font-semibold"></span> There are four main types of state need to properly manage in your React apps:
                        </p>
                    </div>
                    <div className="my-2">
                        <ul className="sm:flex gap-6 list-inside list-decimal">
                            <li>Local state</li>
                            <li>Global state</li>
                            <li>Server state</li>
                            <li>URL state</li>
                        </ul>
                    </div>
                    <div className="my-2">
                        <p>
                            <span className="text-xl font-semibold">Local state:</span>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
                        </p>
                    </div>
                    <div className="my-2">
                        <p>
                            <span className="text-xl font-semibold">Global state:</span>Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        </p>
                    </div>
                    <div className="my-2">
                        <p>
                            <span className="text-xl font-semibold">Server state:</span>Data that comes from an external server that must be integrated with our UI state.
                        </p>
                    </div>
                    <div className="my-2">
                        <p>
                            <span className="text-xl font-semibold">URL state:</span>Data that exists on our URLs, including the pathname and query parameters.
                        </p>
                    </div>
                </div>
                <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
                    <h1 className="text-2xl font-medium">
                        How does prototypical inheritance work?
                    </h1>
                    <div className="my-2">
                        <p>
                            <span className="text-xl font-semibold">Ans:</span>
                            Every object with its methods and properties contains an internal and hidden property known as <b>Prototype</b>. The <b>Prototypal Inheritance</b> is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </h1>
                <div className="my-2">
                    <p>
                        <span className="text-xl font-semibold">Unit Test:</span> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                    </p>
                </div>
                <div className="my-2">
                    <p>
                        <span className="text-xl font-semibold">Why we need Unit Test:</span> The main objective of <b>unit testing</b> is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
            </div>
            <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-medium">
                    React vs. Angular vs. Vue?
                </h1>
                <div className="my-2">
                    <p>
                        <span className="text-xl font-semibold">React:</span> Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are lots of advantages. One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.
                    </p>
                </div>
                <div className="my-2">
                    <p>
                        <span className="text-xl font-semibold">Angular:</span> AngularJS was developed in 2009 by Google. The first version was Angular.js. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.
                        Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time.
                    </p>
                </div>
                <div className="my-2">
                    <p>
                        <span className="text-xl font-semibold">Vue:</span> Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps efficiently develop user interfaces, be they simple or complex.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Blog;