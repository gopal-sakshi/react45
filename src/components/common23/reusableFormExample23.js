import { useRef, useState } from "react";
import CustomForm from "./reusableForm23";

function Show_Resuable_Form() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const clubnameRef = useRef();
    const managerRef = useRef();

    const handleLike = () => {
        console.log("like mgr ===> ", clubnameRef.current.value, managerRef.current.value);
    }
    const handleLogin = () => {
        console.log("login ===> ", usernameRef.current.value, passwordRef.current.value);
    };
    const handleRegister = () => {
        console.log("register ===> ", usernameRef.current.value, passwordRef.current.value);
    };
    return (
        <div className="App">
            <CustomForm
                username={{ label: "Username", placeholder: "Enter Username", ref: usernameRef, isInput: true }}
                password={{ type: "password", label: "Password", placeholder: "Enter Password", ref: passwordRef, isInput: true }}
                loginButton={{ handler: handleLogin, buttonText: "Login", isInput: false }}
                registerButton={{ handler: handleRegister, buttonText: "Register", isInput: false }}
            />
            <CustomForm
                clubname={{ label: "clubname", placeholder: "Enter clubname", ref: clubnameRef, isInput: true }}
                manager={{ type: "manager", label: "manager", placeholder: "Enter manager", ref: managerRef, isInput: true }}
                likeButton={{ handler: handleLike, buttonText: "Like", isInput: false }}                
            />
        </div>
    );
}

export default Show_Resuable_Form;
