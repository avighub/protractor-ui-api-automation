//Importing API Util
var api = require("../../Util/utilApi");
var axios = require("axios").default;

beforeAll(function () {
    console.log('BeforeAll...');

})
// var baseUrl = 'https://reqres.in/api/users/2';
describe("First Test Suite", function () {

    it("API Test using Custom API Function", async () => {
        // const headers = {
        //     // 'Accept': 'application/json'
        // }
        const params = {
            "page": 2
        }
        const res = await api.getRequest('/users', '', params);
        console.log('Response status: ' + res.status);
        console.log('Response Body: ' + JSON.stringify(res.data));
        console.log('Email : ' + res.data.data[0].email);

        var responseBodyToString = JSON.stringify(res.data)
        var obj = JSON.parse(responseBodyToString)
        expect(res.status).toBe(200);
    })

    it("API Test using Custom POST API Function", async () => {
        const data = {
            "name": "Avi",
            "job": "leader"
        };
        const headers = {
            // 'Accept': 'application/json'
        }
        const res = await api.postRequest('/users', data, headers, '');
        console.log('Response status: ' + res.status);
        console.log('Response Body: ' + JSON.stringify(res.data));
        var name = res.data.name;
        console.log('Name : ' + name);
        expect(name).toBe('Avi');
        expect(res.status).toBe(201);

        var responseBodyToString = JSON.stringify(res.data)
        var obj = JSON.parse(responseBodyToString)
    })

    xit("API Test using default get function of Axios", async () => {
        const response = await axios.get('https://reqres.in/api/users/2');
        console.log('Response=' + JSON.stringify(response.data))
        expect(response.status).toBe(200);
    })

    xit("API Test using then()", function () {
        axios.get()
            .then(function (response) {
                console.log('Response=' + JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log("Finally Block...");

            })

    })

    it("API Test using Custom PUT API Function", async () => {
        const data = {
            "name": "Avishek",
            "job": "leader"
        };
        const headers = {
            // 'Accept': 'application/json'
        }
        const res = await api.putRequest('/users/2', data, headers, '');
        console.log('Response status: ' + res.status);
        console.log('Response Body: ' + JSON.stringify(res.data));
        var name = res.data.name;
        console.log('Name : ' + name);
        expect(name).toBe('Avishek');
        expect(res.status).toBe(200);
    })

    it("API Test using Custom DELETE API Function", async () => {
        const res = await api.deleteRequest('/users/2');
        console.log('Response status: ' + res.status);
        expect(res.status).toBe(204);
    })


})



afterAll(function () {
    console.log("AfterAll: Closing browser..")

})

