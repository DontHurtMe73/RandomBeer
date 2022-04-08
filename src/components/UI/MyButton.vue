<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
    .btn {
        padding: 10px 15px;
        border: 1px solid teal;
        background-color: transparent;
        font-size: 20px;
        transition: all .2s ease;
    }

    .btn:hover{
        transform: scale(1.1);
    }
</style>