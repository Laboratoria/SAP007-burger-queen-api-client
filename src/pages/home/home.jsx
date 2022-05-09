import { useHistory } from 'react-router-dom';


const Home = () => {
  const history = useHistory();
  return (
    <main className='main'>
      <header className='logo-field'>
      </header>
      <section className='card-container'>
        <button className='cards' onClick={() => { history.push('/login') }}>
          <p className='card-name'>Menu</p>
        </button>
        <button className='cards' onClick={() => { history.push('/login') }}>
          <p className='card-name'>Cozinha</p>
        </button>
        <button className='cards' onClick={() => { history.push('/signup') }}>
          <p className='card-name'>Cadastro</p>
        </button>
      </section>
    </main>
  );
}

export default Home;