import { isWebp } from './components/isWebp.js'

isWebp()

const $accordionItems = document.querySelectorAll('.accordion__item')
const $accordionContents = document.querySelectorAll('.accordion__content')

$accordionItems.forEach((item) => {
	let opened = false
	const $accordionContent = item.querySelector('.accordion__content')
	const $accordionTitle = item.querySelector('.accordion__title')
	const accordionItemHeight = item.offsetHeight
	const accordionContentHeight = $accordionContent.offsetHeight
	item.addEventListener('click', (e) => {
		if ($accordionContent) {
			!opened ? openAccordion(item) : closeAccordion(item)
		}
	})

	function openAccordion(accordionItem) {
		accordionItem.style.height = `${accordionItemHeight + accordionContentHeight}px`
		$accordionTitle.classList.add('active')
		opened = true
	}
	function closeAccordion(accordionItem) {
		accordionItem.style.height = `${accordionItemHeight}px`
		$accordionTitle.classList.remove('active')
		opened = false
	}
})
