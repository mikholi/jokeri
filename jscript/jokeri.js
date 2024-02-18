const joker_table = document.querySelector('table')
const addButton = document.querySelector('button')
const p_elementti = document.querySelector('p')

let Rivit = 0

addButton.addEventListener('click', function() {
    const numbers = []
    while(numbers.length < 7) {
        const random_numbers = Math.floor(Math.random() * 9) + 1
        numbers.push(random_numbers)
    }

    const tr = joker_table.insertRow()
    for (let i = 0; i < 7; i++) {
        const td = tr.insertCell()
        td.innerHTML = numbers[i]
    }

    Rivit++
    p_elementti.textContent = `Valmiita rivejä: ${Rivit}`
})
