
    'use strict';

    import {Menu} from "./../menu/menu";
    import {Form} from "./../form/form";



    class App {
        constructor({el}) {
            this.menu = new Menu ({
                el: el.querySelector('.js-menu'), 
                data: {}
            })


       
    
            this.loadData();
     
        //menu.setData(data);

            
            let form = new Form ({
                el: el.querySelector('.js-form'), 
                data: {}
            })

            

            form.render();
            
            

            form.addEventListener("save", (event) => {
                this.menu.addItem(event.detail);
                this.uploadData();
            })       

            

        }


        
            /** 
             * Load Data from server
            */

           loadData() {
            const url = 'https://components-2130.firebaseio.com/menu/-M-Bg4b7mtRo6BO8FiSA.json';
            
            const xhr = new XMLHttpRequest();

            

            xhr.addEventListener("readystatechange", (event) => {
                if (xhr.readyState === 4) {
                    if (xhr.status !== 200) {
                        console.error('Сетевая ошибка', xhr);
                    } else {
                        const resp = xhr.responseText;
                        this.menu.setData(JSON.parse(resp));
                    }

                }
               
            });

            xhr.open('GET', url, true);
            xhr.send();
        }

        /**
         * Upload data to server
         */


         uploadData () {
             const url = 'https://components-2130.firebaseio.com/menu/-M-Bg4b7mtRo6BO8FiSA.json';
             const xhr = new XMLHttpRequest();

             xhr.open('PUT', url, true);
             xhr.onload = (event) => {
                 console.log('DONE');
             };

             xhr.send(JSON.stringify(this.menu.data));
         }
    }


window.App = App;



