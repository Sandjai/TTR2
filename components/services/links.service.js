/* eslint-disable no-undef */
const BASE_URL = 'https://components-2130.firebaseio.com/menu/-M-buribBxTNSjv-sJkM.json';


/** 
 * Data source for links collection
*/
export class LinksService {
    /** 
     * Wrapper for XMLHttpRequest
     * @param {string} type
     * @param {string} url
     * @param {Object} data
     * @param {Function} callback
    */

    static _makeRequest(type, url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(type, url, true);

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.error('Сетевая ошибка', xhr);
                } else {
                    callback(JSON.parse(xhr.responseText));
                }
    
            }
           
        });

        if (typeof data !== 'undefined') {
            data = JSON.stringify(data);
        }

        xhr.send(data);
    }



  

    /** 
     * Get collection
     * @param {Function} callback
    */
    static getLinks(callback) {
        this._makeRequest('GET', BASE_URL, undefined, callback);
    }

    /** 
     * Update collections
     * @param {Object} links
     * @param {Function} callback
    */
    static putLinks(links, callback) {
        this._makeRequest('PUT', BASE_URL, links, callback);
    }
}
