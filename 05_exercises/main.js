let emptyArr = []
let moreThanFiveElementy = Array(6).fill('test')

console.log(moreThanFiveElementy.length)

let testArray = [
	'test_1',
	'test_2',
	'test_3',
	'test_4',
	'test_5',
	'test_6',
	'test_7',
]

console.log(`Primeiro: ${testArray[0]}, Meio: ${testArray[testArray.length/2]}, último: ${testArray.length-1}`)

let mixedDataTypes = ['Teste', 25, [], {}, 25.6, true]

let itCompanies = ['Face', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)
console.log(itCompanies.length)

itCompanies.forEach( company => {
	console.log(company.toUpperCase())
})

console.log(itCompanies.join(', '))

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(4,7))

console.log(itCompanies.shift())
console.log(itCompanies.pop())
console.log(itCompanies.splice())

