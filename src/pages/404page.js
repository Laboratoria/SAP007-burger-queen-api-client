import notFoundImg from  '../images/not-found.gif';

const NotFound = () => {
    return (
        <main className="page-not-found">
            <p>Erro 404: página não encontrada</p>
            <img src={notFoundImg} alt="Gif Página Não Encontrada" />

        </main>
    )
}

export default NotFound
