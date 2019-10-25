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
                    {title: "Product 3",
                    items: [
                        {title: "Product 3-1"},
                        {title: "Product 3-2",
                        items: [
                            {title: "Product 3-2-1"},
                            {title: "Product 3-2-2"},
                            {title: "Product 3-2-3"}
                            
                           
                        ]},
                        {title: "Product 3-3"},
                        {title: "Product 3-4"},
                        {title: "Product 3-5"}
                       
                    ]},
                    {title: "Product 4"},
                    {title: "Product 5"},
                    {title: "Product 6"},
                ]
            })

        }
    }




//export
window.App = App;

})()