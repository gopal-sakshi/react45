import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
    const initialState = {
        companyName: "",
        phone: "",
        email: "",
        location: "",
        link: "",
        description: "",
    };
    const [crud, setCrud] = useState(initialState);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        async function postCrud() {
            try {
                const response = await post("/api/cruds/", crud);
                navigate(`/cruds/${response.data._id}`);
            } catch (error) {
                console.log("error", error);
            }
        }
        postCrud();     // Why define a function & then invoke it... why not write function code outside itself ??
    }

    function handleChange(event) {
        setCrud({ ...crud, [event.target.name]: event.target.value });
    }

    function handleCancel() {
        navigate("/cruds");
    }

    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h1>Create CRUD</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input name="companyName" value={crud.companyName} onChange={handleChange}/>
                <input name="phone" value={crud.phone} onChange={handleChange}/>
                <input name="email" value={crud.email} onChange={handleChange}/>
                <input name="location" value={crud.location} onChange={handleChange}/>
                <input name="link" value={crud.link} onChange={handleChange}/>
                <input name="description" value={crud.description} onChange={handleChange}/>
                <input type="submit" value="Submit"/>
                <button type="button" onClick={handleCancel}> Cancel </button>
            </form>
        </div>
    );
}

export default CrudAdd;