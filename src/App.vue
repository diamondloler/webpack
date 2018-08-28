<template>
    <div class="asd">
       {{six}}
       <img src="./assets/hzz.jpg" />
    </div>
</template>
<script>
 export default {
    data() {
        return {
            six: 66666644465465
        }
    },
    async mounted() {
        var p1 = new Promise((resovle) => {
            setTimeout(() => {
                resovle(10086)
            }, 1000)
        })

        var res = await p1

        console.log(res, '666')
    }
}
</script>
<style lang="css" scoped>
    .asd {
        color: #ccc;
        background: tomato;
    }
</style>