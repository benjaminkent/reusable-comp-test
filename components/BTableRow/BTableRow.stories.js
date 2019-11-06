import { storiesOf } from '@storybook/vue'
import BTableRow from './BTableRow.vue'

storiesOf('BTableRow', module)
    .add('with 2 values', () => ({
        components: { BTableRow },
        template: `<BTableRow :values="values"/>`,
        data: () => ({
            values: [
                'Ben Jehl',
                'ben@email.com'
            ]
        })
    }))