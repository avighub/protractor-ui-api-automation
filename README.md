# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
1. Install Nodejs (npm comes by default)
2. checks node version: <br/>
node -v
3. checks npm version :<br/>
npm -version
4. Install protractor: <br/>
npm install -g protractor
5. Setup proxy: <br/>
npm config rm proxy
npm config rm https-proxy
npm config set proxy http://proxy.com/
npm config set https-proxy http://proxy.com/
npm config set strict-ssl = false
Npm config set color=false
6. Check WebDriver status: <br/>
webdriver-manager status
7. WebDriver install: <br/>
webdriver-manager update <br/>
Incase of any error, try below command: <br/>
webdriver-manager update --ignore_ssl --proxy ' http://proxy.com/’

* Configuration
  1. Install typescript hero and javascript extension in VS Code
  2. 
* Dependencies
* Database configuration
* How to run tests
  1. Start the WebDriver Manager (Globally): <br/>
  webdriver-manager start <br/>
  To start with standalone jar: <br/>
  java -jar selenium-server-standalone-3.141.59.jar -host 127.0.0.1 -port 4444
  2. To run: <br/>
  protractor conf.js
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Protractor knowledge base ###

* To begin with we can copy sample example_spec and conf.js from Protractor installation path<br/>
  C:\Users\username\AppData\Roaming\npm\node_modules\protractor\example
* Jasmine: <br/>
  https://jasmine.github.io/<br/><br/>

  1. Jasmine is Behavior-Driven JavaScript unit testing framework
  2. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run. 
  3. Jasmine is like TestNG in Java, it is used to design and run tests
  4. describe is works as method in Java, takes a string and a function. The string is the title of the spec and the function is the spec, or test. fdescribe is used to run focused or only selected describe block, xdescribe is uused to ignore a describe block
  5. it : contain any executable code necessary to implement the test, fit is used to run only selected it block, xit is used to ignore selected it block 
   
* specification: <br/>
  1. spec is called specification file in JS
  2. A spec contains one or more expectations that test the state of the code. An expectation in Jasmine is an assertion that is either true or false. A spec with all true expectations is a passing spec. A spec with one or more false expectations is a failing spec.

* Expectations: <br/>
  1. Expectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value

* Matchers: <br/>
1. Each matcher implements a boolean comparison between the actual value and the expected value. It is responsible for reporting to Jasmine if the expectation is true or false. Jasmine will then pass or fail the spec.
   
* Setup and Teardown: <br/>
  1. To help a test suite DRY up any duplicated setup and teardown code, Jasmine provides the global beforeEach, afterEach, beforeAll, and afterAll functions.
  2. beforeEach: called once before each spec
  3. afterEach: called once after each spec
  4. beforeAll : is called only once before all the specs in describe are run
  5. afterAll : called after all specs finish
  6. beforeAll and afterAll can be used to speed up test suites with expensive setup and teardown.
  However, be careful using beforeAll and afterAll! Since they are not reset between specs, it is easy to accidentally leak state between your specs so that they erroneously pass or fail.

* Advanced features of jasmine: <br/>
https://jasmine.github.io/tutorials/your_first_suite
* Protractor API doc <br/>
https://www.protractortest.org/#/api

* Locators:<br/>
element - finds single element<br/>
element.all - finds multiple elements
  1. Angular specific
     1. model: <br/>
     <span ng-model="value">
     element(by.model('value'))
     2. binding: <br/> (partial match)
     <span ng-model="value">
     element(by.binding('value'))
     3. exactbinding: <br/> (exact value match)
     <span ng-model="value">
     element(by.exactbinding('value'))
     4. buttonText: 
      element(by.buttonText('value'))
      5. repeater: 
      Used for ng-repeat tags
      element(by.repeater('repeaterValue').row(0))
  2. Locator inherited from browser
     1. 
     2. 
     3. 