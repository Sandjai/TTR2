(function() {
    'use strict';
    const tmpl = window.menuTmpl;
    


    class Menu {
        constructor(opts) {
            this.el = opts.el;
            this.data = opts.data;  
            
            /*this._initEvents();*/
            

        }

      

        _initEvents() {
            this.el.addEventListener("click", this.removeItem.bind(this));              
            
        }

        /**
         * @param {object} data
         */

        setData(data) {
            
             
            this.data = data;       
            
            
            this.render(data.title, this.renderItems(data.items));
        }

        renderItems(items) {


            
            return items;
        }

        

        _addItem() {
            this.data = opts.data;
            this.render();
            

        }

        removeItem() {

        }

        render(title, items) {
            
            /*this.el.innerHTML = tmpl({data: this.data});*/
            this.el.innerHTML = tmpl({title: title, items: items});

                        
        }


    }



    //export
    window.Menu = Menu;
})();
