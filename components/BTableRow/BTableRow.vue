<template>
    <tr>
        <td v-for="(value, index) in values" :key="index">
            {{ value }}
        </td>
    </tr>
</template>

<script>
export default {
    name: 'BTableRow',
    props: {
        values: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
tr {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 #22222280;
}
td {
    padding: 8px;
}
</style>