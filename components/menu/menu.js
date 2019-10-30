
    const tmpl = window.menuTmpl;




    export class Menu {
        constructor(opts) {
            this.el = opts.el;
            this.data = opts.data;
              
        
            this._initEvents();
            

        }

      

        _initEvents() {
           /* this.el.addEventListener("click", this.removeItem.bind(this));        */
           this.el.addEventListener("click", this._onClick.bind(this));
                 
            
        }

            /**
    * Клик в любую область меню
    * @param {Event} event
    * @private
    */
    _onClick(event) {
        event.preventDefault();
        let item = event.target;

        switch (item.dataset.action) {
        case 'remove':
        this._onRemoveClick(item);
        break;


        case 'pick':
        this._onPickClick(item);
        break;
        }
    }


        /**
         * @param {object} data
         */

        setData(data) {
            this.data = data;    
            this.render(data.title, data.items);
        }


        /**
            * Удаления элемента меню
            * @param  {Element} item
            * @private
            */
        _onRemoveClick(item) {
            
            let el = /** @type {Element} */ item.parentNode;
            let index = parseInt(item.parentNode.dataset.index, 10);

            
            el.addEventListener('animationend',
            this.removeItem.bind(this, {index}));
            el.classList.add('bounce-out-right');


            
            
            /*el.classList.add('bounce-out-right');
            let nextEl = el.nextElementSibling;
            el.parentNode.removeChild(el);*/
            /*if (nextEl.classList.contains("menu-list")) {
                nextEl.parentNode.removeChild(nextEl);
            }*/
            
            
        }




        removeItem(removedItem) {
            
            
            this.data.items = this.data.items.filter((item, index) => {
                return index !== removedItem.index;
            });
            
            this.render(this.data.title, this.data.items);
            
            
        }
    



        render(title, items) {
            
            this.el.innerHTML = tmpl({title: title, items: items});

                        
        }



        addItem(title) {

            
            this.data.items.push({title: title});
           
            this.render(this.data.title, this.data.items);
            
        }
        

        


    }





    

