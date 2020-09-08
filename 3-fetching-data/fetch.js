const data = fetch('https://api.github.com/users/denoland')

data.then(res => res.json())
    .then(jsonData => console.log(jsonData))

// The following code will also produce the same result
// since Deno supports top-level await. 
const awaitData = await fetch('https://api.github.com/users/denoland')

console.log(await awaitData.json())
