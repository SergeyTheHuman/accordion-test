import { isWebp } from './components/isWebp.js'
import { Accordion } from './components/accordion.js'
isWebp()

const myAccordion = new Accordion('.accordion')
myAccordion.init()
