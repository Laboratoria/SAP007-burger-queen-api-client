export const codeStatus = (response) => {
    switch (response.status) {
        case 400:
            return "Preencha os dados obrigatórios";
        case 401:
            return "Usuário não autenticado";
        case 403:
            return "Email já cadastrado";
        case 404:
            return "Usuário não encontrado";
        default:
            return "Ocorreu um erro, tente novamente";
    }
};