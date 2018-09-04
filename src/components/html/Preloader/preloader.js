import React, { Component } from 'react';

import styles from './preloader.scss';

import classNames from 'classnames';

class Preloader extends Component{

    render(){
        return (
            <div className={classNames(styles.preloader,{[styles.active]:this.props.active})}>
                <div className={styles.loader}></div>
            </div>
        )
    }
}

export default Preloader;