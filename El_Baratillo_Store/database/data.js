const categories = [ 
    {
        id: 1,
        name: 'Healthy Food',
        description: 'Your welfare is the most important aspect in your life. Feeding correctly with high quality products support you to achieve your goals',
        image: 'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
        products: [
            {
                id: 11,
                name:"Whole grain cookies",
                description:"Lorem ipsum dolor sit amet consectetur adipiscing elit, turpis arcu mollis sem iaculis ad porta vehicula, class nisi luctus platea primis ante. Mi maecenas habitasse laoreet interdum odio enim, ornare class suspendisse volutpat. Interdum urna torquent dis quam proin lacus aliquet, ut vulputate facilisis quis inceptos duis himenaeos enim, fermentum nec congue suspendisse et tristique.",
                image:"https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                price: "2.000",
            },
            {
                id: 12,
                name:"Sweet salad",
                description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
                image:"https://images.unsplash.com/photo-1557568951-a691f75c810f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                price: "5.000,"
            },
        ]
    },
    {
        id: 2,
        name: 'Videogames',
        description: 'Looking for something to entertaiment? Here yu can find the best consoles and videogames to do it!',
        image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        products: [
            {   
                id: 21,
                name:"Playstation 5",
                description:"Lorem ipsum dolor sit amet consectetur adipiscing elit, turpis arcu mollis sem iaculis ad porta vehicula, class nisi luctus platea primis ante. Mi maecenas habitasse laoreet interdum odio enim, ornare class suspendisse volutpat. Interdum urna torquent dis quam proin lacus aliquet, ut vulputate facilisis quis inceptos duis himenaeos enim, fermentum nec congue suspendisse et tristique.",
                image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                price: "3.250.000",
            },
            {
                id: 22,
                name:"XBox series x",
                description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
                image:"https://images.unsplash.com/photo-1583505222294-f21455e8dc1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                price: "3.000.000",
            },
        ]
    },
    {
        id: 3,
        name: 'Phones',
        description: 'Get the best phones in the market. Do not doubt if you search something  to leverage yur life',
        image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1192&q=80',
        products: [
            {
                id: 31,   
                name:"Samsung Galaxy Note 9",
                description:"Lorem ipsum dolor sit amet consectetur adipiscing elit, turpis arcu mollis sem iaculis ad porta vehicula, class nisi luctus platea primis ante. Mi maecenas habitasse laoreet interdum odio enim, ornare class suspendisse volutpat. Interdum urna torquent dis quam proin lacus aliquet, ut vulputate facilisis quis inceptos duis himenaeos enim, fermentum nec congue suspendisse et tristique.",
                image:"https://images.unsplash.com/photo-1590459963567-1bf6b8595be1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
                price: "2.250.000",
            },
            {
                id: 32,
                name:"Samsung Galaxy S20",
                description:"Interdum aptent semper varius leo eleifend nam senectus etiam, lobortis viverra hac facilisis phasellus conubia lacus maecenas, platea molestie sodales dignissim nibh at massa. Vulputate felis sollicitudin sem ultricies nulla dictum cubilia, blandit dignissim donec fames nostra nam taciti varius, massa vel suscipit tempor iaculis habitasse. Commodo facilisi netus fringilla augue eleifend cras libero integer, himenaeos etiam ultrices eros blandit mi arcu orci ut, ad sociosqu curabitur suspendisse nam non hac.",
                image:"https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1192&q=80",
                price: "3.500.000",
            },
            {
                id: 33,
                name:"xiaomi note 10 pro",
                description:"Nam dictumst eu placerat quis consequat aenean ut, taciti libero litora hac parturient urna nulla, massa tempus eleifend turpis ultrices natoque. Montes class malesuada auctor interdum sodales ut proin diam potenti etiam habitant, magnis euismod ligula posuere libero feugiat laoreet id condimentum. Curae dictumst gravida rutrum eu eros pretium per egestas, nec venenatis maecenas tincidunt malesuada commodo ridiculus, porta litora nulla quisque ornare etiam fringilla. Himenaeos curabitur etiam primis sagittis mollis tellus ultrices ornare, lobortis luctus egestas cubilia auctor sodales urna nisi, tortor ante dignissim mauris conubia porttitor turpis, penatibus euismod dapibus phasellus netus suspendisse arcu.",
                image:"https://images.unsplash.com/photo-1591531040045-f67662954f54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=942&q=80",
                price: "2.100.000",
            },
            {
                id: 34,
                name:"Iphone 11 pro max",
                description:"Habitant diam phasellus gravida primis orci eget, congue habitasse imperdiet integer accumsan convallis eleifend, fusce condimentum non tellus sagittis. Habitant pharetra hac ante mus faucibus tristique aenean duis morbi venenatis sodales proin sagittis ad, metus cum vestibulum pulvinar curae viverra semper penatibus vivamus imperdiet ultricies volutpat cras. Libero fusce netus pharetra nulla tincidunt enim ultricies, nam praesent ullamcorper dapibus condimentum id convallis cursus, porttitor ultrices mollis inceptos dictum congue.",
                image:"https://images.unsplash.com/photo-1600262606081-f35dc8db9055?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                price: "4.500.000",
            },
        ]
    },
    {
        id: 4,
        name: 'Books',
        description: 'Spread your knowledge, image new universe, listen new stories. All you need you have it here!',
        image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        products: [
            {
                id: 41,
                name:"Don Quijote de la Mancha",
                description:"Lorem ipsum dolor sit amet consectetur adipiscing elit, turpis arcu mollis sem iaculis ad porta vehicula, class nisi luctus platea primis ante. Mi maecenas habitasse laoreet interdum odio enim, ornare class suspendisse volutpat. Interdum urna torquent dis quam proin lacus aliquet, ut vulputate facilisis quis inceptos duis himenaeos enim, fermentum nec congue suspendisse et tristique.",
                image:"https://images.unsplash.com/photo-1547760916-b23a6eb6014d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                price: "60.000",
            },
            {
                id: 42,
                name:"You are your only limit",
                description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
                image:"https://images.unsplash.com/photo-1549122728-f519709caa9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
                price: "100.000",
            },
            {
                id: 43,
                name:"Milk and honey",
                description:"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
                image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                price: "80.000",
            },
        ]
    }
];

module.exports = categories;