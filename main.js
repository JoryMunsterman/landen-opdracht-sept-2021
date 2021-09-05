// stappenplan

// 1. asynchrone functie (async)
// 2. try/catch blok
// 3. het daadwerkelijke request maken met axios + await

// 1
async function fetchData() {
    try {
        // request maken
        // axios
        //
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium?fullText=true');
        console.log(result.data);
    } catch (error) {
        console.error(error)
    }
}
fetchData();