<template>
    <table>
        <tr>
            <th v-for="(label, index) in headerItems" :key="index">{{ label }}</th>
        </tr>
        <BTableRow 
            v-for="(values, index) in items"
            :key="index"
            :values="values"
        />
    </table>
</template>

<script>
import BTableRow from '@benjaminkent/b-table-row/BTableRow'

export default {
    name: 'BTable',
    props: {
        headerItems: Array,
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        BTableRow
    }
}
</script>

<style lang="scss" scoped>
th {
    text-align: left;
    padding: 8px;
    font-size: 13px;
    color: #aaa;
}
</style>