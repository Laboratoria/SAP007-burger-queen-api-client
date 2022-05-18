import appSettings from "../appSettings";

export async function postAuth(email, password) {
    const headers = new Headers();
    
    headers.append("Content-Type", "application/json");

    // cria uma constante chamada option - meu objeto é method e tem o valor POST
    const options = {
        method: "POST",
        // body é o que a gente tá enviando e só pode enviar string 
        body: JSON.stringify({ email, password }),
        headers,
    };
    // cria uma const chamada req e eu espero que o servidor me responda / POST tipo de req / por padrão ele envia o method GET
    const req = await fetch(`${appSettings.api.urlBase}/auth`, options);
    return req.json();
}