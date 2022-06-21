function ErrorsMessage(resultMessage) {
    switch (resultMessage.status) {
        case 200:
            return 'Usuário cadastrado com sucesso';
        case 400:
            return 'Email/Senha não fornecido.';
        case 401:
            return 'Usuário não identificado.';
        case 403:
            return 'Email já cadastrado ou dados insuficientes.';
        case 404:
            return 'Usuário não encontrado';
        default:
            return 'Ocorreu algum erro.';
    };
};

export default ErrorsMessage;