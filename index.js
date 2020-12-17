

let jedan = document.querySelector('#jedan');
let dva = document.querySelector('#dva');
let tri = document.querySelector('#tri');
let cetiri = document.querySelector('#cetiri');
let pet = document.querySelector('#pet');
let sest = document.querySelector('#sest');
let sedam = document.querySelector('#sedam');
let osam = document.querySelector('#osam');
let devet = document.querySelector('#devet');
let nula = document.querySelector('#nula');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let puta = document.querySelector('#puta');
let podeljeno = document.querySelector('#podeljeno');
let jednako = document.querySelector('#dis-btn');
let input = document.querySelector('#dis');


let output = document.createElement('p')

function broj() {


    jedan.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 1
        console.log(1)
    }
    )
    dva.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 2
        console.log(2)
    }
    )
    tri.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 3
        console.log(3)
    }
    )
    cetiri.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 4
        console.log(4)
    }
    )
    pet.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 5
        console.log(5)
    }
    )
    sest.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 6
        console.log(6)
    }
    )
    sedam.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 7
        console.log(7)
    }
    )
    osam.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 8
        console.log(8)
    }
    )
    devet.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 9
        console.log(9)
    }
    )
    nula.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent += 0
        console.log(0)
    }
    )
}
//operatori
function operatori() {


    plus.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent = '+'
        console.log('+')
    }
    )
    minus.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent = '-'
        console.log(0)
    }
    )
    podeljeno.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent = '/'
        console.log(0)
    }
    )
    puta.addEventListener('click', () => {
        input.appendChild(output)
        output.textContent = '*'
        console.log(0)
    }
    )
}
jednako.addEventListener('click', () => {
    input.appendChild(output)
    output.textContent = eval(broj() + operatori() + broj())
    console.log(output)
}
)

broj()
operatori()