    'use strict';

    import {Menu} from "./../menu/menu";
    import {Form} from "./../form/form";
    import {LinksService} from "./../services/links.service";



    class App {
        constructor({el}) {
            this.menu = new Menu ({
                el: el.querySelector('.js-menu'), 
                data: {}
            })


       
    

            
            let form = new Form ({
                el: el.querySelector('.js-form'), 
                data: {}
            })

            

            form.render();
            
            

            form.addEventListener("save", (event) => {
                this.menu.addItem(event.detail);
                
                LinksService.putLinks(this.menu.data, (data) => {
                    this.menu.setData(data);
                });
            });

                LinksService.getLinks((LinksData) => {
                    this.menu.setData(LinksData);
                });
                
                 

            

        }


        
          
    }


window.App = App;




