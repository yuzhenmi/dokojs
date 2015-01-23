dokojs
======

Overview
------

dokojs is a JavaScript framework for building scalable and maintainable web applications. Its architecture pattern is similar to an MVC with the distinction that the View layer is broken down to two layers: Renderer and Parser. While popular frameworks such as Angular and Ember maintains a single View layer through two-day data-binding, dokojs chooses to let the developer manage the two directions of data-binding separately. Although this puts more work to the developer, it eliminates the challenge of facilitating two-way data-binding (e.g. dirty-checking performance with Angular, awkward syntax with Ember). Additionally, having a parser layer makes back-end rendered applications more convenient to manage. Data can be customly extracted from the back-end rendered DOM without any restrictions.


Architecture
------

There are 4 major layers for an application built with this framework:
* DataManager
* Controller
* Renderer
* Parser

DataManager
DataManagers occupy the model layer of MVC. They are objects that provide data access and manipulation through instance methods. Only DataManagers are capable of persisting data and state information beyond a function call.

Controller
Controllers are the glue of the application. They are responsible for orchestrating changes in the application in response to events. The only way to communicate to a controller is through events. Usually, each controller is associated with a distinct component within the application.

Renderer
Renderers are responsible for setting the state of the DOM. They expose instance methods to the controller to manipulate the DOM. Only renderers are capable of changing the DOM state.

Parser
Parsers are responsible for reading the state of the DOM. They expose instance methods to the controller to retrieve state information. Only parsers are capable of exposing DOM state.
