const firstName = 'Willian'
const lastName = 'Wonka'
const country = 'Brazil'
const city = 'São Paulo'
const age = 25
const isMarried = false
const year = 2022

console.log( typeof(firstName) == typeof(lastName) )

console.log( typeof(10) == typeof('10') )

variables = [ firstName, lastName, country, city, age, isMarried, year]

variables.forEach(variable => console.log(variable))

console.log( '3' !== 3 )
console.log( '4' !== 3 )
console.log( '3' == 3 )

console.log( 'willian'.length == 'Wonka'.length )
console.log( undefined != null )
console.log( '' != 0 )

pythonJargon = 'python'.length == 'jargon'.length

variablesTeste = [ 4 > 3, 4 >= 3, 4 < 3, 4 == 4, 4 === 4, 4 != 4, 4 !== 4, 4 != '4' ]

variablesTeste.forEach( variable => console.log(variable) )

const now = new Date

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
