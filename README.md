# cs465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture
## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

This project utilizes the MEAN stack, which is a Javacript-based stack that is made up of MongoDB, Express, AngularJS, and Node.js. The front end is specifically designed according to the Single Page Application standards. This design is supported by the dynamic nature of Angular applicaitons. CRUD operations are able to be performed with live updates reflected immediately in the database and website. 

The advantages  of the SPA design include:
1.	Application resources are used by the user’s browser rather than the server.
2.	High Interactivity with streamlined functionality
3.	Dynamic page loading provides a faster user experience due to minimal data retrieval and few page reloads

The disadvantages of SPA design are:
1.	Initial load time of SPA has higher load times
2.	More difficult for certain use-cases and SEO optimization
3.	Higher utilization of user Browser resources


## Why did the backend use a NoSQL MongoDB database?

Use of MongoDB, a NoSQL database, is in line with the standard set by the MEAN stack of maintaining Javascript throughout the entire application. MongoDB uses the same Javascript base which allows for easy integration of methods and API rather than having to interface with a separate language like SQL. MongoDB is also one of the industry standard database options available with open source support and thorough documentation for easier troubleshooting. 

# Functionality
## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

Although JSON is derived from Javascript, it represesnts a data format that is independent of any programming language. This makes it ideal for use in contining data used by the programming languages responsible for accessing and manipulating that data. In this manner, JSON is very limited and rigid because it cannot be used as its own independent programming language. Instead it is a form of universal presentation of data that makes it able to be parsed by many different programming languages. This rigidity represents a specialized purpose, for which JSON is highly efficient and universal. 

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

An example of refactoring that occured was introducing Handlebars and Partials. This provided a method to transition previously static HTML content to a dynamic form. This supports integration with what would become the front end of the applciation. 
Another example was modifying the POST, PUT, and DELETE functionality to require a JWT Webtoken Authentication. This benefited the application by introducing a layer of defense to prevent unauthorized database queries that could compromise trip data. 

# Testing
## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Tests for the SPA have been completed via GET and PUT commands called by using the admin SPA site itself. GET API calls are completed when loading the trips in the trip list. PUT API calls are completed when attempting to edit or update a trip. The command will commence, and information on the SPA will update dynamically, indicating a successful command. The browser’s inspect function may also be use to check console logs, as log functionality has been included as an optional feature in the application. DELETE calls were also tested after adding a test trip. Careful attention must be made to ensure that the client and admin npm start and ng serve commands have been given to commence testing. Also, user details and JWT information must be carefully checked to ensure that authorization is completed, as all commands are protected by JTW authentication. 

Security for this application is currently limited to credential verification for authentication of users. This has the potential to be expanded to include Authorization and Access Privelages as well as additional layers of security, however the current design provides for a streamlined testing experience. 

# Reflection
## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me in reaching my professional goals in two primary ways. The first is that it was the first opportunity I have had to complete the development process for a full-stack application. This hands-on experience helped solidify my understanding of the basics of full-stack development.
This also provided excellent experience working with Javascript and the MEAN stack. Previously, my experience with Javascript was limited to mobile development. This has added to my experience which now consists of both mobile and full-stack Javascript development. Full-stack development is one of my interests in the field of computer science, so gaining experience in this is paramount. 
