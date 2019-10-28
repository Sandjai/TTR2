(function() {
    'use strict';
    

    class App {
        constructor({el}) {
            let menu = new window.Menu ({
                el: el.querySelector('.js-menu'), 
                data: {}
            })


           
        menu.setData({
                title: "Категория 1",
                items: [
                    {title: "Product 1"},
                    {title: "Product 2"},
                    {title: "Product 3"},               
                    {title: "Product 4"},
                    {title: "Product 5"},
                    {title: "Product 6"}
                ]
            })

            
            let form = new window.Form ({
                el: el.querySelector('.js-form'), 
                data: {}
            })

            

            form.render();
            
            

            form.addEventListener("save", function(event) {
                menu.addItem(event.detail.title);
            })

            

            

        }
    }




//export
window.App = App;

})()