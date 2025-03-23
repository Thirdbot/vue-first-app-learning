<template>
    <base-card >
        <ul>
            <li v-for="goal in goals" :key="goal">
                <slot :item="goal" another-prop="...">
                </slot>
            </li>
        </ul>
    </base-card>
</template>

<script>
export default{
    props:['goals']
}
</script>

<style>
</style>