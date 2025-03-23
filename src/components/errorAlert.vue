<template>
    <dialog>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog{
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    display: block;
    top:2vh
}
</style>