<template>
    <table>
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