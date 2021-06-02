new Vue({
    el: '#notes_app',
    data: {
        stored: [],
        orders: [],
        cats: [],
        cat: "",
        name: "",
        text: "",
        date: ""
    },
    methods: {
        makeNote(id){
            const vm = this;
            arr = vm.orders;
            let i = 0;
            while(id != vm.orders[i].id){
               i++;
            }
            vm.name = vm.orders[i].name;
            vm.cat = vm.orders[i].nameCat;
            vm.text = vm.orders[i].text;
            // arr.forEach(function (item, i, arr) {
            //         if (item.id == id) {
            //             index =
            //         }
            //     });
        },
        chooseCat(id){
            const vm = this;
            vm.orders = vm.stored;
            vm.orders = vm.orders.filter(function(el){
                return el.category == id;
            });
        },
        chooseAll(){
            const vm = this;
            vm.orders = vm.stored;
        },
        chooseDate(id){
            const vm = this;
            vm.orders = vm.stored;
            vm.orders = vm.orders.filter(function(el){
                return el.date == vm.date;
            });
        },
        emptyFields() {
            const vm = this;
            vm.name = "";
            vm.cat = "";
            vm.text = "";
        },
        deleteNote: function (id){
            const vm = this;
            console.log(id)
            axios.delete('/note/'+id).then(function (response) {
                console.log(response.data)
                axios.get('/note/').then(function (response) {
                    console.log(response.data)
                    vm.orders = response.data
                })
            })

        },

        createCategory: function (){
            const vm = this;
                axios.post('/category/', {
                    name: "sd",
                    link: "sds"
             })
                .then(function (response) {
                    axios.get('/note/').then(function (response) {
                        console.log(response.data)
                        vm.orders = response.data
                    })
            })
        },
        createNote: function (){
            const vm = this;
            const arr = vm.cats;
            let nCat = "Нет категории";
            let flag = false;
            let flag2 = true;
            let index = 21;
            if (vm.cat != "") {
                arr.forEach(function (item, i, arr) {
                    if (item.name == vm.cat) {
                        flag = true;
                        index = item.id;
                    }
                });
                if (!flag) {
                    flag2 = false;
                    axios.post('/category/', {
                        name: vm.cat,
                        link: vm.cat
                    })
                        .then(function (response) {
                            index = response.data.id;
                            console.log(index);
                            axios.get('/category/').then(function (response) {
                                console.log(response.data)
                                vm.cats = response.data
                            })
                            axios.post('/note/', {
                                    name: vm.name,
                                    category: index,
                                    nameCat: vm.cat,
                                    text: vm.text
                             })
                                .then(function (response) {
                                    axios.get('/note/').then(function (response) {
                                        console.log(response.data)
                                        vm.orders = response.data
                                        vm.stored = vm.orders;
                                    })
                            })
                        })
                }
                nCat = vm.cat;
            }
            console.log(index);
            if(flag2) {
                axios.post('/note/', {
                    name: vm.name,
                    category: index,
                    nameCat: nCat,
                    text: vm.text
                })
                    .then(function (response) {
                        axios.get('/note/').then(function (response) {
                            console.log(response.data)
                            vm.orders = response.data
                            vm.stored = vm.orders;
                        })
                    })
            }
        }

    },
    created: function () {
        const vm = this;
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.get('/category/')
            .then(function (response) {
                // console.log(response.data[0.name)
                vm.cats = response.data
            })
        axios.get('/note/')
            .then(function (response) {
                console.log(response.data)
                vm.orders = response.data
                vm.stored = vm.orders;
            })
    }
}
)