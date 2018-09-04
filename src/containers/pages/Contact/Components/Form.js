import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';

import validate from '@/constants/messageValidations';
import FieldInput from '@/components/Fields/FieldInput/FieldInput';
import FieldTextarea from '@/components/Fields/FieldTextarea/FieldTextarea';

import styles from './form.scss'

class Form extends Component {
    render() {
        const { handleSubmit, formValues } = this.props;

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <Field
                    name="name"
                    type="text"
                    component={FieldInput}
                    label="Name"
                    active={formValues && formValues.name && true}
                    field="required"
                />

                <Field
                    name="email"
                    type="email"
                    component={FieldInput}
                    label="E-mail"
                    field="required"
                />

                <Field
                    name="message"
                    type="email"
                    component={FieldTextarea}
                    label="Message"
                />

                <div className={classNames('clearfix', styles.btnWrapp)}>
                    <button type="submit" className={classNames('btn', 'float-right')}>
                        Send
                    </button>
                </div>
            </form>
        );
    }
}

const FormMessage = reduxForm({
    form: 'MessageForm',
    validate
})(Form);

export default FormMessage;

