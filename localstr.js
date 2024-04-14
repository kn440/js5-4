//const LocalData = localStorage.setItem('myData','SomeData');

const url = 'https://jsonplaceholder.typicode.com/users';



const getData = async(url) => {
    try {
        const res = await fetch(url);
        const content = await res.json();
        return content
    } catch (error) {
        console.log(error.message);
    }
}
const content= await getData(url);
console.log(content);
let user = [];
const body = document.querySelector('body');
content.forEach(element => {for (const key in element) {
            body.insertAdjacentHTML('beforeend',
            `<p>${element[key]}</p>`)
            }});

localStorage.setItem('user', JSON.stringify(content));