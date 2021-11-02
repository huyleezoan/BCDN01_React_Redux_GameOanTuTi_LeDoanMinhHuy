import React, { Component } from 'react'
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        let { mangDatCuoc } = this.props;
        console.log(mangDatCuoc);
        return (
            <div className="text-center playerGame">
                <div className="suyNghi mt-3">
                    <img width="50px" height="50px" style={{ marginTop: "30px" }} src={this.props.mangDatCuoc.find(tuTi => tuTi.datCuoc === true
                    ).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: "120px", height: "120px" }} src="./imgGameOanTuTi/player.png" alt="" />

                <div className="row">
                    {this.props.mangDatCuoc.map((tuTi, index) => {

                        let borderSelected = {};
                        if (tuTi.datCuoc) {
                            borderSelected = { border: '3px solid yellow' };
                        }
                        return <div className="col-4" key={index}>
                            <button className="btnItem" style={borderSelected} onClick={() => {
                                this.props.datCuoc(tuTi.ma)
                            }}>
                                <img src={tuTi.hinhAnh} alt="" />
                            </button>
                        </div>
                    })}

                    {/* <div className="col-4">
                        <button className="btnItem">
                            <img src="./imgGameOanTuTi/bua.png" alt="" />
                        </button>

                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img src="./imgGameOanTuTi/keo.png" alt="" />
                        </button>

                    </div> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        mangDatCuoc: rootReducer.GameOanTuTiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            const action = {
                type: "CHON_KEO_BUA_BAO",
                maCuoc
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)
