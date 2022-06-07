export function FeedbackSucess (response){
  switch (response.status){
      case 200:
           return "Usuário cadastrado com sucesso";
           default:
            return "Sucesso";

  };
};