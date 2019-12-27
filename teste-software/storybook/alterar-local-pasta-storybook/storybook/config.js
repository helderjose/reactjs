
import { configure } from '@kadira/storybook'

/*
const req = require.context('../src/components', true, /\.story\.js$/)
primeiro parâmetro: pasta
segundo parâmetro: true, para procurar em subdiretórios
terceiro parâmetro: regex
*/
const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
