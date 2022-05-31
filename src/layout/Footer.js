export function Footer() {
    return (
        <>
            <footer className="footer">
                <p><img src={require('../images/Sprout.png')} alt="imagem-eco" width="20px" />Este estabelecimento é amigo da natureza e utiliza produtos, embalagens e utensílios que não agridem o meio ambiente.</p>
                <p>Desenvolvido por
                    <a
                        href="https://github.com/Fe-Monteiro"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Fernanda Monteiro
                    </a>{" "}
                    |
                    <a
                        href="https://github.com/natalieiss"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Natalie Silva
                    </a>
                </p>
            </footer>
        </>
    );
}