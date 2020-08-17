<template>
    <div id="app">
        <h1>祖父级组件：father</h1>
        <div id="father">
            VUEX的数据【number】:{{count}}我再次修改几个字
            <br>
            <button @click="add(5)">点击++</button>
            <button @click="reduce(6)">点击-</button>
            <button @click="async">number延时3秒加10</button>
        </div>
        <div class="father2">
            <ChildrenA/>
            <ChildrenB/>
            <ChildrenC/>
        </div>
    </div>
</template>

<script>
    import ChildrenA from './views/ChildrenA'
    import ChildrenB from "./views/ChildrenB";
    import ChildrenC from "./views/ChildrenC";

    export default {
        name: 'father',
        components: {
            ChildrenA,
            ChildrenB,
            ChildrenC,
        },
        computed: {
            count() {
                return '这是VUEX中定义的Num' + this.$store.state.num
            },

        },
        methods: {
            reduce(n) {
                this.$store.commit('reduce', n)
            },
            add(n) {
                this.$store.commit('add', n)
            },
            async() {
                this.$store.dispatch('async')
            }
        }
    }

</script>

<style lang="scss">
    #app {
        text-align: center;
        color: #2c3e50;
        background-color: skyblue;
    }

    #father {
        width: calc(100% - 50px);
        height: 100px;
        display: inline-block;
        border: 1px solid yellow;
    }
    .father2{
        display: flex;
        flex-flow:nowrap;
    }

</style>
