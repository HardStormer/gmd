import React, {useState} from "react";
import {
    createRoomByName,
    CreateRoomData,
} from "../../entities";
import {useNavigate} from "react-router";

const CreateRoomFeature = (request : CreateRoomData) => {
    const [name,setName] = useState(String);

    const navigate = useNavigate()

    const handleInputChange = (e : React.ChangeEvent<any>) => {
        const {id , value} = e.target;
        switch (id){
            case "name":
                setName(value);
                break;
            default:
                break;
        }
    }

    async function fetchData() {
        try {
            let createRoomRequest: CreateRoomData = {
                name: name,
            }
            const response = await createRoomByName(
                createRoomRequest
            );
            let id = response.id
            window.location.replace(`#/chat?roomId=${id}`)
        } catch (error) {
            console.error('Error create:', error);
        }
    }

    return (
        <>
            <form className="form">
                <div className="form-body">
                    <div className="name">
                        <label className="form-label" htmlFor="login">Имя </label>
                        <input  type="login" id="name" className="form-control" value={name} onChange = {(e) => handleInputChange(e)} placeholder="Имя"/>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={fetchData} type="submit" className="btn">Создать</button>
                </div>
            </form>
        </>
    );
}

export default CreateRoomFeature