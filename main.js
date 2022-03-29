const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany' },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz' },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' }]

// consol(packages)

let boxHere = []

let compChoice = packages[1]

// function consol(packages) {
//     packages.forEach(package => {
//         (console.log(package))
//     });
// }

function startGame(){
    boxHere = packages
    const index = Math.floor(Math.random() * (boxHere.length -1))
    draw()
}

function draw(){
    let template =''
let boxHere = packages
    for (let i = 0; i < boxHere.length; i++) {
        const box = boxHere[i];
        template += `
        <div class="col-3 p-2">
                    <div class="card brown object-fit box-card text-light">
                        <p> ${box.heavy} ${box.priority} ${box.fragile} ${box.to} ${box.trackingNumber}</p>
                    </div>
                </div>  
        `
    }
    document.getElementById('boxes').innerHTML = template
}

function weight(){
    
    boxHere = boxHere.filter(b => !b.heavy)
    draw()
}





startGame()

// draw()