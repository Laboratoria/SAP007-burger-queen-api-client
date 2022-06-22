const mainUrl = "https://lab-api-bq.herokuapp.com";
const urlUsers = `${mainUrl}/users`;
const urlAuth = `${mainUrl}/auth`;
const headers = { "Content-Type": "application/json" };

export const createUser = (user) => {
    return fetch(urlUsers, {
        method: "POST",
        headers,
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            restaurant: "Five Starts"
        })
    })
}

export const userLogin = async (user) => {
    try {
        const res = await fetch(urlAuth, {
            method: "POST",
            headers,
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            })
        })

        return res
    } catch (error) {
        return error
    }
}