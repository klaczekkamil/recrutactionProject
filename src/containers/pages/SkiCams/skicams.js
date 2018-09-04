import React, {Component} from 'react';

import styles from './skicams.scss'
import Preloader from '@/components/html/Preloader';
import * as camsActions from '@/actions/cams';
import classNames from 'classnames'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Skicams extends Component {

    componentDidMount() {
        this.props.getCams();
    }

    getCam(cams) {
        const camsArray = Object.values(cams);
        const andalo = camsArray.find(cam => cam.name === 'Andalo');
        const monteBondone = camsArray.find(cam => cam.name === 'Vigo di Fassa'); // change from Monte Bondone to Vigo di Fassa to display some views
        return {andalo, monteBondone};
    }

    viewsMap(camsViews, viewsLength) {
        const camsArray = Object.values(camsViews);
        const newCamsArray = [];
        for (let i = 0; i < viewsLength; i++) {
            camsArray[i] && (newCamsArray.push(camsArray[i]))
        }
        return newCamsArray;
    }


    render() {
        const andaloAndMnte = this.getCam(this.props.cams.camsViews);
        const andalo = andaloAndMnte.andalo;
        const monteBondone = andaloAndMnte.monteBondone;
        let andaloCams, monteBondoneCams = [];
        andalo && (andaloCams = this.viewsMap(andalo.cams, 2));
        monteBondone && (monteBondoneCams = this.viewsMap(monteBondone.cams, 2));

        return (
            <div className={styles.skiCamsPage}>
                <Preloader active={!this.props.cams.isShowing}/>
                <div className={styles.camGrid}>
                    <div className={styles.camWrapp}>
                        <div className={styles.header}>
                            <p className={classNames(styles.date, 'text-right')}>
                                25-11-2015
                            </p>
                            <h2 className={classNames(styles.title, 'text-center')}>
                                Andalo
                            </h2>
                        </div>
                        <div className={styles.photosWrapp}>
                            {andaloCams && andaloCams.length > 0 && (
                                andaloCams.map((cam, index) => <img key={index} src={cam.url} alt={cam.name}/>)
                            )}
                        </div>
                    </div>
                    <div className={styles.camWrapp}>
                        <div className={styles.header}>
                            <p className={classNames(styles.date, 'text-right')}>
                                25-11-2015
                            </p>
                            <h2 className={classNames(styles.title, 'text-center')}>
                                Vigo di Fassa
                            </h2>
                        </div>
                        <div className={styles.photosWrapp}>
                            {monteBondoneCams && monteBondoneCams.length > 0 && (
                                monteBondoneCams.map((cam, index) => <img key={index} src={cam.url} alt={cam.name}/>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cams: state.cams,
})

const mapDispatchToProps = dispatch => ({
    getCams: bindActionCreators(camsActions.getCams, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Skicams);
