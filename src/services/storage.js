export function setToken(token){
    localStorage.setItem("token", token)
}

export function getToken(){
    return localStorage.getItem("token")
}

export function removeToken(){
    return localStorage.removeItem("token")
}

export function removeName(){
    return localStorage.removeItem("name")
}

export function removeRole(){
    return localStorage.removeItem("role")
}