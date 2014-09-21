dokojs
======

JavaScript framework for building high performance websites


Architecture
------

* Components are the building block
* Each component has a view, a view model, and a controller
* The view consists of static DOM with data bindings from the view model
* The view model consists of data (no business logic) which is associated to the view
* The controller handles the business logic, prepares the data, and attaches the data to the view model
* The controller is free to use reusable units such as services and data models
* Models and services are available through dependency injection
* One-way data binding from view model to view via dirty-checking
* Parent component can contribute to the initial state of a child component
* Components communicate with each other through controller posting and receiving messages through the tree
* A posted message has minRange and maxRange defined which determines the relative position range in the tree the message is delivered
* Positive or negative integers can be used for minRange and maxRange, positive corresponds to below the component in the tree, negative corresponds to above the component in the tree


Backend Rendering
------

* Backend rendering is done by a node.js renderer
* The renderer takes as input JavaScript for the app and a JSON describing the component tree with view models embedded
* The renderer outputs static HTML processed from the input
* Component controllers do not take part in backend rendering
* The role of the controllers is expected to be filled by whichever backend technology is used
