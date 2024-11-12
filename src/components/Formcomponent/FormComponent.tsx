import {useState} from "react";


export const formComponents = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmitForm = () => {

    };

    return(
        <div>
            <div>
                <h2>Formualario</h2>
            </div>
            <div style={ { display: "flex", flexDirection: "column" , gap:"2vh"} }>
                <input value={email} onChange={ () => { }} type="email" placeholder="example@"/>
                <input value={name}  onChange={ () => { }} type="text" placeholder="Name" />
                <input value={age}   onChange={ () => { }} type="number" placeholder="Age" />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Send form</button>
            </div>
        </div>
    )
}