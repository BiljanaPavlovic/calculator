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
let del = document.querySelector('#del')

let output = document.createElement('p')

function broj() {

    let niz = []
    let i
    let y
    jedan.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '1'
        niz.push(i)
        console.log(niz)
    }
    )
    dva.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '2'
        console.log(2)
        niz.push(i)
        console.log(niz)
    }
    )
    tri.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '3'
        console.log(3)
        niz.push(i)
        console.log(niz)
    }
    )
    cetiri.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '4'
        console.log(4)
        niz.push(i)
        console.log(niz)
    }
    )
    pet.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '5'
        console.log(5)
        niz.push(i)
        console.log(niz)
    }
    )
    sest.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '6'
        console.log(6)
        niz.push(i)
        console.log(niz)
    }
    )
    sedam.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '7'
        console.log(7)
        niz.push(i)
        console.log(niz)
    }
    )
    osam.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '8'
        console.log(8)
        niz.push(i)
        console.log(niz)
    }
    )
    devet.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '9'
        console.log(9)
        niz.push(i)
        console.log(niz)
    }
    )
    nula.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '0'
        console.log(typeof (output))
        niz.push(i)
        console.log(niz)
    }
    )
    plus.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '+'
        console.log('+')
        niz.push(i)
        console.log(niz)
    }
    )
    minus.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '-'
        console.log(0)
        niz.push(i)
        console.log(niz)
    }
    )
    podeljeno.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '/'
        console.log(0)
        niz.push(i)
        console.log(niz)
    }
    )
    puta.addEventListener('click', () => {
        input.appendChild(output)
        i = output.textContent += '*'
        console.log(0)
        niz.push(i)
        console.log(niz)
    }
    )
    jednako.addEventListener('click', () => {
        input.appendChild(output)
        //menja zareze u stringu za prazan string
        let x = String(niz[niz.length - 1]).replace(/,/g, "")
        console.log(x)
        console.log(typeof (x))
        y = eval(x)
        console.log(niz)
        output.textContent = y
        console.log(y)
    }
    )
    del.addEventListener('click', () => {
        input.appendChild(output)
        location.reload()
    })
}

broj()



