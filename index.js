const jokes = document.getElementById("joke");
const button = document.getElementById("btn");

button.addEventListener("click", generateJokes)


async function generateJokes() {

    try {
        const setHeaders = {
            headers: {
                "Accept": "application/json"
            }
        }

        const response = await fetch("https://icanhazdadjoke.com", setHeaders)
        const data = await response.json()
        jokes.innerHTML = data.joke

    } catch (error) {
        jokes.innerHTML = error
    }

}