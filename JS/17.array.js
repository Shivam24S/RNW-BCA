

const fruits=["apple","banana","cherry"]


console.log(typeof(fruits))

console.log(fruits)



let num = new Array(10,20,30,40)


console.log(num)



// accessing elements of an array


console.log(fruits[0])


console.log(num.length)


console.log(num[num.length-1])


// modifying


fruits[0] = "mango" 


console.log(fruits)

fruits.push("orange")

console.log(fruits)


fruits.unshift("strawberry")

console.log(fruits)


fruits.pop()

console.log(fruits)

fruits.shift()

console.log(fruits)


fruits.splice(1,0,"sapota",'watermelon')

console.log(fruits)


fruits.splice(1,2)

console.log(fruits)



for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}


for (let item of fruits){
    console.log(item)
}


const vegetables = ["potato","ladiesfinger","tomato"]


const shopList = fruits.concat(vegetables)


console.log(shopList)

console.log(shopList.join("-"))



let number = [
    [10,20,30,40,],
    [50,60,70,[90,10,[100]]]
]

console.log(number.flat(1))
console.log(number.flat(2))

console.log(number.flat(Infinity))

