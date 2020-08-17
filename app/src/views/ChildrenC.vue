<template>
    <div id="ChildrenC">
        儿子级组件A：childrenC
        <div id="ChildrenF">
            儿子级组件A：childrenF
            <div class="box1">
                vuex 的数值<br>
                【number*2】:{{this.$store.getters.get}}
            </div>
        </div>
        <div id="ChildrenG">
            儿子级组件A：childrenG
            <div class="box2">
                vuex 的数值<br>
                【number】:{{this.$store.state.num}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChildrenC"
    }
</script>

<style scoped>
    #ChildrenC {
        display: flex;
        height: calc(80vh);
        width: 20%;
        flex-grow: 1;
        margin: 20px 20px;
        background-color: yellow;
    }


    #ChildrenF {
        width: 200px;
        height: 200px;
        margin: 20px auto;
        background-color: greenyellow;
    }

    #ChildrenG {
        width: 200px;
        height: 200px;
        margin: 20px auto;
        background-color: hotpink;
    }
    .box1 {
        width: 150px;
        height: 120px;
        border: 1px solid blue;
        margin: 20px auto;
    }

    .box2 {
        width: 150px;
        height: 120px;
        border: 1px solid greenyellow;
        margin: 20px auto;
    }
</style>