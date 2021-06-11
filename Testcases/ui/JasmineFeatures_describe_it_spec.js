/**
 * describe = Suite
 * it = Test
 * expect = assert
 * beforeEach =  beforeMthod
 * beforeAll = beforeSuite
 * afterAll = afterSuite
 */
beforeAll(function(){
    console.log('BeforeAll...')
})
 // Runs before each it blokc present in current spec
beforeEach(function () {
    console.log('BeforeEach ....')
})

// Runs after each it blokc present in current spec
afterEach(function(){
    console.log('AfterEach...')
})
afterAll(function(){
    console.log('AfterAll...')
})
describe("First Test Suite", function () {

    it("First suite-First test case", function () {

        console.log('First it block- First suite')


    })
    it("First suite-Second test case", function () {

        console.log('Second it block- First suite')

    })

})

fdescribe("Second suite", function () {
    it("Second suite-first it block", function () {
        console.log('First it block- Second suite')
    })
})

