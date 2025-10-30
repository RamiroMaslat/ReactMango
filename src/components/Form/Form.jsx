import './Form.css'
import { useState } from "react";

function Form({ handleCheckOut }){

    const [formData, setFormData] = useState({username:'', mail:'', phone:''})

    function handleSubmit(event){
        event.preventDefault();
        handleCheckOut(formData)
    }

    function handleInputChange(event){        
        const newFormData = {...formData}
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }

    function handleReset() {
        setFormData({username:'', mail:'', phone:''})
    }
    
    return(
        <form className='form-container' onSubmit={handleSubmit}>
            <h3>Formulario de Compra</h3>
            <div className='label-container'>
                <label>Nombre: 
                    <input onChange={handleInputChange} name="username" placeholder="Nombre" value={formData.username} type="text"></input>
                </label>
                <label>Mail: 
                    <input onChange={handleInputChange} name="mail" placeholder="mail@mail.com" value={formData.mail} type="email"></input>
                </label>
                <label>Teléfono: 
                    <input onChange={handleInputChange} name="phone" placeholder="11xxxxxxxx" value={formData.phone} type="tel"></input>
                </label>
            </div>
            <div className='form-button_container'>
                <button type="submit">Enviar</button>
                <button onClick={handleReset} type="button">Cancelar</button>
            </div>
                
        </form>
    )
}

export default Form