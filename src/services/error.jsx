export function codeError (response){
    switch (response.status){
        case 400:
            return"Preencha todos os campos";
        case 401:
            return"Usuário não autenticado";
        case 403:
            return"Email já cadastrado ou dados não preenchidos";
        case 404:
            return"Usuário não encontrado";
        default:
            return "Ocorreu algum erro";
    }
}