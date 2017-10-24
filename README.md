# BikoinAfricaChallenge - Bitkoin Africa FE Application Code Challenge
Create an Angular Universal Project (Angular 4.0.0 or above)
Create 3 routes:

Home at /
About at /about
Contact at /contact

- Make the contact page a lazy loaded feature module

- On the contact page, create a form with the following fields: Full Name, Email Address, Repeat Email Address, Message

- Make sure that the form cannot be submitted until all fields have been submitted

- Make sure that the form cannot be submitted until the email address and repeat email address fields are identical

- If there is no JavaScript enabled, add a message to the user to let them know the form will not be able to be submitted 😕😕: It's an angular app so if JS is disabled page will not be accessible

- Create a ContactService which saves the data from the contact form to the browser’s localStorage

- Make sure each page has the appropriate metadata for SEO purposes. E.g. the title, meta description, etc. These metadata should be rendered on the server application so it is fetchable when the link is pasted in services like Slack

- Deploy your application to Heroku

- Also push the code to a repository on Github


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
