export const ErrorAlert = (response) => {
    switch (response.status) {
        case 400:
            return "Preencha todos os campos solicitados";
        case 401:
            return "Usuário não cadastrado";
        case 403:
            return "Email já cadastrado";
        case 404:
            return "Usuário não encontrado";
                  
    }
}



