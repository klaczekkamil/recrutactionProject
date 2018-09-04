import React, {Component} from 'react';
import {FieldLabel} from '../components/FieldLabel/FieldLabel';

import classNames from 'classnames';

class FieldTextarea extends Component {
    constructor() {
        super();

        this.state = {
            active: false,
        };

        this.handleActiveAction = this.handleActiveAction.bind(this);
    }

    handleActiveAction(value) {
        this.setState({
            active: value,
        });
    }

    render() {
        const {input, label, type, meta} = this.props;
        return (
            <div
                className={classNames('form-group', {'active': this.state.active || input.value}, {'isInvalid': meta.error && meta.touched})}
            >
                <label htmlFor={input.name}><FieldLabel {...this.props}/></label>
                <textarea
                    {...input}
                    id={input.name}
                    type={type}
                    className={'form-control'}
                    autoComplete={'off'}
                    onFocus={() => this.handleActiveAction(true)}
                    onBlur={() => this.handleActiveAction(false)}
                />

            </div>
        );
    }
}

export default FieldTextarea;