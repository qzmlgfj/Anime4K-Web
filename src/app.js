var Title = {
    data: function () {
        return {
            isShaking: false,
            shakingTimes: 0,
            isFliped: true
        }
    },
    template: '<div style="width: auto; height: 80px; background-color: rgba(185, 190, 190, 0.3);" title="Do not click ME!">\
    <header style="font-size: 2em; line-height: 80px; color: rgb(54, 52, 51);" @click="shaking" @animationend="recover" class="animate__animated" :class="{animate__hinge:isShaking,animate__flipInX:isFliped}">&nbsp;<b>\
    Anime4K——简易的Web移植版本\
    </b></header>\
    </div>',
    methods: {
        shaking: function () {
            this.isShaking = true;
            this.shakingTimes = this.shakingTimes + 1;

            if (this.shakingTimes >= 10) {
                window.alert("我晕啦！！！");
                this.shakingTimes = 0;
            }
        },
        recover: function () {
            this.isShaking = false;
            this.isFliped = false;
        }
    }
}