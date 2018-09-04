import React, {Component, Fragment} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {paths} from '@/constants/config';

import styles from './header.scss';

class Header extends Component {

    render() {

        return (
            <Fragment>
                <header
                    ref="header"
                    className={styles.header}
                >
                    <div className="container">
                        <Link to={paths.HOME} className={styles.logo}>
                            <img src="/svg/logo.svg" alt="logo"/>
                        </Link>
                        <nav className={styles.navbar}>
                            <ul className={styles.navbarNav}>
                                <li className={styles.navItem}>
                                    <NavLink
                                        exact
                                        to={paths.HOME}
                                        activeClassName={styles.active}
                                        className={styles.navLink}
                                    >
                                        <span className={styles.content}>
                                            About us
                                        </span>
                                    </NavLink>
                                </li>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to={paths.SKICAMS}
                                        activeClassName={styles.active}
                                        className={styles.navLink}
                                    >
                                        <span className={styles.content}>
                                            Skicam
                                        </span>
                                    </NavLink>
                                </li>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to={paths.CONTACT}
                                        activeClassName={styles.active}
                                        className={styles.navLink}
                                    >
                                        <span className={styles.content}>
                                            Contact
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;
