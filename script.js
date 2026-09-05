const names = ['john', 'bob', 'mary', 'joe', 'Miguel', 'Justin', 'Abe', 'Timmy', 'Stan']

for (let i = 0; i < 10; i++) {
    // console.log("Loop #s " + i)
}  

for (let i = -45; i < 0; i++) {
    // console.log(i)
} 

for (let i = 5; i >= 5 && i<= 10; i++) {
    // console.log(i)
}

for (let i = 0; i <= 6; i++) {
    // console.log(i)
} 

for (i = 0; i < 100; i++) {
    // console.log('this is another loop ' + i)
}

for (i = 0; i < 5; i++) {
    // console.log(`loops for days ${myName} ` + i)
}

for (i = 0; i < 11; i++) {
    // console.log(`lets fucking loop ${myName} ` + i)
   // if (i === 5) break
}

for (let i = 0; i < names.length; i++) {
    console.log('Lets fucking GO ' + `${names[i]}  `)
    // console.log(names[i])
}

for (engineer of names) {
    console.log('Lets Fucking GO Engineer ' + engineer)
}

------------------------------

let i = 0
while(i < 10) {
    i++
    console.log(i)
}

let i = 0 
do {
    i++
    if (i ===5) continue 
    console.log(i)
} while (i < 10)

-------------------------------

const animals = [ 'cat', 'dog', 'horse', 'sheep', 'pig', 'chicken', 'unicorn', 'your mom', 'bird', 'my ex']

animals.forEach(animals => {
    console.log(animals)
})