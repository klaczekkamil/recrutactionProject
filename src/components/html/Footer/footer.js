import React, {Component} from 'react';

import styles from './footer.scss'


class Footer extends Component {

    render() {

        return (
            <footer
                className={styles.footer}
            >
                <div className={styles.content}>
                    Powered by pgs
                </div>
            </footer>
        )
    }
}

export default Footer;