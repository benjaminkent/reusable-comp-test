import { storiesOf } from '@storybook/vue'
import NumberMathFact from './NumberMathFact.vue'

storiesOf('NumberMathFact', module)
    .add('math fact', () => ({
        components: { NumberMathFact },
        template: `<NumberMathFact :factType="factType" />`,
        data: () => ({
            factType: 'math'
        })
    }))

storiesOf('NumberMathFact', module)
    .add('trivia fact', () => ({
        components: { NumberMathFact },
        template: `<NumberMathFact :factType="factType" />`,
        data: () => ({
            factType: 'trivia'
        })
    }))