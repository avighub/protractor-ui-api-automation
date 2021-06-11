// import  tags  from 'mocha-tags'
const request = require('supertest')

const baseUrl = 'https://reqres.in/api/users/2'
const app = request(baseUrl)




    it("API Test using Mocha", async (done) => {
        const response = await app.get('').expect(200)
        console.log('Response code: '+ await response.status);
        console.log('Response code: '+ await response);
        // console.log('Response: '+ JSON.stringify(response));
        done();

    })
    
    
