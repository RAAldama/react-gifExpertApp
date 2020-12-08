import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    //Cambia el valor de la variable por medio de la función
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input 
                type="text"
                placeholder="Ingrese Categoría"
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
