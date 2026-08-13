import api from "../../utils/axios";

async function logout() {
    try{
        const {data} = await api.get("/api/auth/logout")
        console.log(data)
    
    } catch (error) {
        console.error("Error occurred while logging out:", error);
    }
}

export default logout;