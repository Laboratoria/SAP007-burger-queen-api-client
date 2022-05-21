import { Button } from '../components/Button'
function Kitchen (){
    
    function handleLogout(){
        window.history.back()

    }
    return(
        <div>
            <p>Cozinha</p>
            <Button text="sair" onClick={handleLogout} />
        </div>
    )
}

export default Kitchen