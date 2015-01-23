dokojs
======

Overview
======

dokojs is a JavaScript framework for building scalable and maintainable web applications. Its architecture pattern is similar to an MVC with the distinction that the View layer is broken down to two layers: Renderer and Parser. While popular frameworks such as Angular and Ember maintains a single View layer through two-day data-binding, dokojs chooses to let the developer manage the two directions of data-binding separately. Although this puts more work to the developer, it eliminates the challenge of facilitating two-way data-binding (e.g. dirty-checking in Angular sacrifices performance, getters and setters in Ember sacrifice straight-forward syntax). Additionally, having a parser layer makes back-end rendered applications more convenient to manage. Data can be customly extracted from the back-end rendered DOM without any restrictions.

Architecture
======

There are 4 major layers for an application built with this framework:
------
* DataManager
* Controller
* Renderer
* Parser

#### DataManager ####
DataManagers occupy the model layer of MVC. They are objects that provide data access and manipulation through instance methods. Only DataManagers are capable of persisting data and state information beyond a function call.

#### Controller ####
Controllers are the glue of the application. They are responsible for orchestrating changes in the application in response to events. The only way to communicate to a controller is through events. Usually, each controller is associated with a distinct component within the application.

#### Renderer ####
Renderers are responsible for setting the state of the DOM. They expose instance methods to the controller to manipulate the DOM. Only renderers are capable of changing the DOM state.

#### Parser ####
Parsers are responsible for reading the state of the DOM. They expose instance methods to the controller to retrieve state information. Only parsers are capable of exposing DOM state.

There are two additional types of entities available to follow DRY principles:
------
* Helper
* Mixin

#### Helper ####
Helpers contain one or more methods that are free of side-effects. Each layer can have its own helpers, and a helper can be defined as accessible to all layers. Being free of side-effects is the only restriction of helpers. They are usually used to define common requirements shared between members of the same architectural layer. The file naming convention of helpers is to have underscore as prefix (e.g. _colors.js).

#### Mixin ####
Mixins serve similar purpose as helpers in that they both define common requirements shared between members of the same architectural layer. The important differences are that all methods defined in a mixin are instance methods and a single mixin cannot be defined as accessible to all layers. These methods must be mixed into an object before they become accessible. The file naming convention of mixins is to have dash as prefix (e.g. -with-modal.js).
