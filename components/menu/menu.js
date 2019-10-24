(function() {
    'use strict';
    const tmpl = windows.menuTmpl;


    class Menu {
        constructor(opts) {
            this.el = opts.el;
            this.data = opts.data;
            this.onPick = opts.onPick;
            this._initEvents();

        }

        _initEvents() {
            this.el.addEventListener("click", this.removeItem.bind(this));              
            
        }

        setData() {

        }

        addItem() {
            

        }

        removeItem() {

        }

        render() {
            this.el = tmpl(this.data);
        }


    }
})()
