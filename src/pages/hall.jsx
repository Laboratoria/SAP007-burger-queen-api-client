import { Button } from '../components/Button'

function Hall() {

    function handleLogout() {
        window.history.back()

    }
    return (
        <div>
            <p>Cozinha</p>
            <Button text="sair" onClick={handleLogout} />
        </div>
    )
}


export default Hall