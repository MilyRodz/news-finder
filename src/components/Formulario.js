import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';

const Formulario = ({saveCategory}) => {

    const options = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'},
    ]

    //use custom hook
    const [ category, SelectNews ] = useSelect('general', options);
    
    // submit form, go to category to app.js
    const searchNews = e => {
        e.preventDefault();

        saveCategory(category);

    }
    
    return ( 
        <div className={`${styles.finder} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Find news by category</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
 
export default Formulario;