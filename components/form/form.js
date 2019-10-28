(function() {
    'use strict';
    const tmpl = window.formTmpl;

    class Form {
        constructor(opts) {
            this.el = opts.el;
            this.data = opts.data;

            this._initEvents();
        }


        _initEvents() {
            this.el.addEventListener("submit", this._onSubmit.bind(this));
        }

        _onSubmit(event) {
            
            event.preventDefault();
            this.trigger('save', {
                title: this.el.querySelector('input[name="title"]').value,
            });
            event.target.reset();
            
        }

                /**
         * Подписка на события
         * @param {string} eventName
         * @param {Function} callback
         */
        addEventListener(eventName, callback) {
            this.el.addEventListener(eventName, callback);
        }

        

        trigger(eventName, eventData) {
            let event = new CustomEvent(eventName, {
                detail: eventData                
            });
            
            this.el.dispatchEvent(event);
        }

        render() {
            
           this.el.innerHTML = tmpl();

                        
        }

    }

    // export
    window.Form = Form;

})()