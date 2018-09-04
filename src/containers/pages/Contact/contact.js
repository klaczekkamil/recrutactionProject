import React, {Component} from 'react';
import Form from './Components/Form'
import styles from './contact.scss'

class Contact extends Component {

    handleSubmit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <Form
                onSubmit={this.handleSubmit}
                className={styles.formWrapp}
            />
        )
    }
}

export default Contact;