/****************************************
 * https://www.npmjs.com/package/axios
 * @author : Avishek Behera
 * This is API Utility 
 ****************************************/

//In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS
// imports with require() use the following approach
var axios = require("axios").default;
axios.defaults.baseURL = 'https://reqres.in/api';
axios.defaults.headers = {
    'Accept': 'application/json'
}
// const https = require('https');
// require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();


var apiHelper = function () {

    /****************************************************************
    * ======GET function ======
    * path - the resource path excluding baseUrl
    * header(s) - single or multiple headers
    * param(s) - single or multiple query parameters
    * Note: path is mandatory and headers and params are optional
    ******************************************************************/
    this.getRequest = async (path, headers, params) => {
        try {
            const response = await axios({
                method: 'get',
                url: path,
                headers: headers,
                params: params
            })
            console.log('GET request: Success...' + axios.defaults.baseURL + path);
            return await response;

        } catch (error) {
            console.log('Failed to execute GET request : ' + axios.defaults.baseURL + getReqUrl + 'Error: ', error);

        }
    },

        /**********************************************************
         * ===============POST function===========================
         * path - the resource path excluding baseUrl
         * data - Request body
         * header(s) - single or multiple headers
         * param(s) - single or multiple query parameters
         * Note: path is mandatory and headers and params are optional
         **********************************************************/
        this.postRequest = async (path, data, headers, params) => {
            try {
                const response = await axios({
                    method: 'post',
                    url: path,
                    headers: headers,
                    data: data,
                    params: params
                })

                console.log('POST request: Success...' + axios.defaults.baseURL + path);
                return await response;

            } catch (error) {
                console.log('Failed to execute POST request : ' + axios.defaults.baseURL + path + 'Error: ', error)
            }

        }

    /**********************************************************
     * ===============POST function===========================
     * path - the resource path excluding baseUrl
     * data - Request body
     * header(s) - single or multiple headers
     * param(s) - single or multiple query parameters
     * Note: path is mandatory and headers and params are optional
     **********************************************************/

    this.putRequest = async (path, data, headers, params) => {
        try {
            const response = await axios({
                method: 'put',
                url: path,
                headers: headers,
                data: data,
                params: params
            })

            console.log('PUT request: Success...' + axios.defaults.baseURL + path);
            return await response;

        } catch (error) {
            console.log('Failed to execute PUT request : ' + axios.defaults.baseURL + path + 'Error: ', error)
        }

    }

    /**********************************************************
     * ===============POST function===========================
     * path - the resource path excluding baseUrl
     * data - Request body
     * header(s) - single or multiple headers
     * param(s) - single or multiple query parameters
     * Note: path is mandatory and headers and params are optional
     **********************************************************/
    this.deleteRequest = async (path, data, headers, params) => {
        try {
            const response = await axios({
                method: 'delete',
                url: path,
                headers: headers,
                data: data,
                params: params
            })

            console.log('DELETE request: Success...' + axios.defaults.baseURL + path);
            return await response;

        } catch (error) {
            console.log('Failed to execute DELETE request : ' + axios.defaults.baseURL + path + 'Error: ', error)
        }

    }



}


//Exporting it so that it will be available to import in other places
module.exports = new apiHelper();

