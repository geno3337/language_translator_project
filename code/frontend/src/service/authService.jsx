import axios from "axios";

const URL="http://127.0.0.1:5000/"

function Translate(requestParams){

    return(axios.post(URL+"translate",requestParams))

}

const AuthService={
    Translate
}
export default AuthService