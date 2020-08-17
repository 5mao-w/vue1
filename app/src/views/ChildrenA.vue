<template>
    <div id="ChildrenA">
        儿子级组件A：childrenA
    </div>
</template>

<script>
    export default {
        name: "ChildrenA"
    }
</script>

<style scoped>
    #ChildrenA {
        display: flex;
        height: calc(80vh);
        width: 20%;
        flex-grow: 1;
        margin: 20px 20px;
        background-color: cornflowerblue;
    }
</style>