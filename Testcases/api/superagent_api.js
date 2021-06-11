const superagent = require('superagent');

describe('Superagent test',function(){
    it('Test1', async ()=>{
        try {
            const res = await superagent.get('https://reqres.in/api/users/2');
            console.log('Response'+res);
            // console.log('Response'+res);
          } catch (err) {
            console.error(err);
          }


    })


})