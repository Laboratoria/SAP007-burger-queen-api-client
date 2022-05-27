export function ErrorsMessage(resultMessage) {
    switch (resultMessage.status) {
        case 400:
            return 'Preencha todos os campos.';
        case 401:
            return 'Usuário não identificado.';
        case 403:
            return 'Email já cadastrado ou dados insuficientes.';
        case 404:
            return 'Usuário não encontrado';
        default:
            return 'Ocorreu algum erro.';
    }
}