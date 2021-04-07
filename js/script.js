function init() {
    new Vue({
        el: '#app',

        data:{
            'imgPath': "img/pic-",
            'imgNum': 1
        },

        mounted: function () {
            setInterval(this.next,2000)
        },

        methods:{
            prev: function () {
                if (this.imgNum == 0) {
                    this.imgNum = 2
                }else {
                    this.imgNum --
                }
            },
            next: function () {
                if (this.imgNum == 2) {
                    this.imgNum = 0
                }else {
                    this.imgNum ++
                }
            },
        }
    });
}

$(init);
