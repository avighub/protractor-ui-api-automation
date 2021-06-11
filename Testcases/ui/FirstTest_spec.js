// import {browser} from "protractor"
import { browser, element, by } from "protractor"
// import { protractor } from "protractor/built/ptor";

beforeAll(function(){
    console.log('BeforeAll...')
    //Making it false for Non Angular websites, else it will look for angular 
    // And throw angular error:  Angular could not be found on the page
    browser.waitForAngularEnabled(true);

})
describe("First Test Suite", function () {

    it("First suite-First test case", function () {
               
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login')  
        
        browser.manage().window().maximize()
        expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails")

        //Entering username and password using ng model locator
        element(by.model("user.name")).sendKeys("Luke")
        element(by.model("user.password")).sendKeys("Skywalker")
        element(by.buttonText("Login")).click()

        var greetMsg=element(by.id("greetings"))
        expect(greetMsg.getText()).toBe("Hello Luke")

        var logoutBtnText=element(by.xpath("//p[contains(.,'Logout')]"))
        expect(logoutBtnText.isPresent()).toBe(true)

        logoutBtnText.click()
        
       
        

    })
})



afterAll(function(){
    console.log("AfterAll: Closing browser..")
    browser.close()
})

