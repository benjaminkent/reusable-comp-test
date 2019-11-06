import { storiesOf } from '@storybook/vue'
import NumberMathFact from './NumberMathFact.vue'

storiesOf('NumberMathFact', module)
    .add('normal', () => ({
        components: { NumberMathFact },
        template: `<NumberMathFact />`
    }))