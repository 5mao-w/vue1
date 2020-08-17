<template>
    <div id="ChildrenB">
        儿子级组件A：childrenB
        <div id="ChildrenE">
            儿子级组件A：childrenE
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChildrenB"
    }
</script>

<style scoped>
    #ChildrenB {
        display: flex;
        height: calc(80vh);
        flex-grow: 1;
        width: 20%;
        margin: 20px 20px;
        background-color: plum;
    }
    #ChildrenE {
        width: 200px;
        height: 200px;
        margin: 20px auto;
        background-color: blue;
    }
</style>