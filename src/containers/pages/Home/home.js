import React, {Component, Fragment} from 'react';

import styles from './home.scss'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.homePage}>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.body}>
                                <div className={styles.photo}>
                                    <img src='/img/1.jpg' alt="Lorem"/>
                                </div>
                                <div className={styles.content}>
                                    <h2 className={styles.title}>
                                        Lorem Ipsum
                                    </h2>
                                    <p className={styles.description}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.body}>
                                <div className={styles.photo}>
                                    <img src='/img/2.jpg' alt="Lorem"/>
                                </div>
                                <div className={styles.content}>
                                    <h2 className={styles.title}>
                                        Lorem Ipsum
                                    </h2>
                                    <p className={styles.description}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.body}>
                                <div className={styles.photo}>
                                    <img src='/img/3.jpg' alt="Lorem"/>
                                </div>
                                <div className={styles.content}>
                                    <h2 className={styles.title}>
                                        Lorem Ipsum
                                    </h2>
                                    <p className={styles.description}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;