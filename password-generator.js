import * as gen from 'password-generate'
const password = gen.generate({
    length: 69,
    numbers: true
})
console.log(password)