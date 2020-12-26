//pogodi broj
let srecniBroj = Math.floor(Math.random() * 11)
console.log(srecniBroj)
let pogodiBroj = document.querySelector('#pogodiBroj')
let porukaSrecanBroj = document.querySelector('.porukaSrecanBroj')
let liPSB = document.createElement('p')

let pogodiBrojDugme = document.querySelector('#pogodiBrojBtn')
pogodiBrojDugme.addEventListener('click', () => {
    if (pogodiBroj.value == srecniBroj) {
        liPSB.textContent = 'Брависимоооо'
    } else if (pogodiBroj.value > srecniBroj) {
        liPSB.textContent = 'Замишљени број је мањи од твог броја.'

    } else {
        liPSB.textContent = 'Замишљени број је већи од твог броја.'

    }
})
let pogodiBrojNI = document.querySelector('#pogodiBrojNI')
pogodiBrojNI.addEventListener('click', () => {
    location.reload()

})
let pogodiBrojPB = document.querySelector('#pogodiBrojPB')
pogodiBrojPB.addEventListener('click', () => {
    liPSB.textContent = 'Замишљени број је:' + " " + srecniBroj
})
porukaSrecanBroj.appendChild(liPSB)


//calculator
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
let unos = document.querySelector('#polje')
let output = document.createElement('p')
let porukaKalkulator = document.querySelector('.porukaKalkulator')
let porukaRezultat = document.createElement('p')
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
        console.log(unos.value)
        console.log(typeof (unos.value))
        if (y == unos.value) {
            //alert('Bravooooo');
            porukaRezultat.textContent = 'Бравооо погодааак!'
        } else {
            //alert('Možda da probaš ponovo');
            porukaRezultat.textContent = 'Можда да покушаш поново.'

        }
        porukaKalkulator.appendChild(porukaRezultat)
    }
    )
    del.addEventListener('click', () => {
        input.appendChild(output)
        location.reload()
    })
}

broj()


