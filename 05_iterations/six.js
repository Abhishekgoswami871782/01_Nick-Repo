const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach.forEach((item) => {
//         console.log(item)
//         return item
// })

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 1)
// console.log(newNums);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => { 
//     return num > 1
// })
// console.log(newNums);


// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title: 'Book One', ganre: 'Fiction', publish: 1992},
    {title: 'Book One', ganre: 'Science', publish: 1995},
    {title: 'Book One', ganre: 'History', publish: 1951},
    {title: 'Book One', ganre: 'Non-Fiction', publish: 1989},
    {title: 'Book One', ganre: 'science', publish: 1998},
    {title: 'Book One', ganre: 'Fiction', publish: 1986},
    {title: 'Book One', ganre: 'History', publish: 1996},
]

const userBooks = books.filter((bk) =>{
    return bk.ganre === 'History'
})

console.log(userBooks)
