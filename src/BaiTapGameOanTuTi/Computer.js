import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyFrame = `@keyframes randomItem${Date.now()}{
           0%{top:-28px;}
           25%{top:62px;}
           50%{top:-28px;}
           75%{top:62px;}
           100%{top:0px;}
        }`
        return (
            <div className="text-center computerGame" style={{ position: "relative" }}>
                <style>
                    {keyFrame}
                </style>
                <div className="suyNghi mt-3">
                    <img style={{
                        position: "absolute",
                        animation: `randomItem${Date.now()} 0.5s`,
                        left: "44%",
                        marginTop: "30px"
                    }} width="50px" height="50px" src={this.props.computer.hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: "120px", height: "120px" }} src='./imgGameOanTuTi/playerComputer.png' alt="" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.GameOanTuTiReducer.computer
    }
}
export default connect(mapStateToProps)(Computer)