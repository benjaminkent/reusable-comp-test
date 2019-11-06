import { storiesOf } from '@storybook/vue'
import BTable from './BTable.vue'

let items = [
    [ 'Joe Pesci', 'joey@email.com' ],
    [ 'Robert Dinero', 'bobby@email.com' ],
    [ 'Ray Liotta', 'big-ray@email.com' ],
    [ 'Jake Peralta', 'jake@email.com' ],
    [ 'Charles Boyle', 'boyle@email.com' ],
    [ 'Amy Santiago', 'aims@email.com' ],
    [ 'Rosa Diaz', 'rosarosarosa@email.com' ]
]

storiesOf('BTable', module)
    .add('with 7 items', () => ({
        components: { BTable },
        template: `<BTable :items="items" />`,
        data: () => ({
            items
        })
    }))