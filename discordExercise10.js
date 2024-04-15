/* Exercise 10: Async/Await
Write an async function named fetchData that usesfetch to retrieve data from
https://jsonplaceholder.typicode.com/posts/1. The function then logs the JSON response to the console. Handle the potential error with a try-catch block. */ 

async function usesfetch (URL) { 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json(); 
        console.log(data);
    } catch (error) { 
        console.error('Error fetching data:', error);
    }
 }