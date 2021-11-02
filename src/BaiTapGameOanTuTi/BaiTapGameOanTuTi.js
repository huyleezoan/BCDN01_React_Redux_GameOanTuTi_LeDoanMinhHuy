import React, { Component } from 'react'
import './BapTapGameOanTuTi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux'
class BaiTapGameOanTuTi extends Component {

    render() {
        return (
            <div className="gameOanTuTi">
                <div className="row text-center mt-3">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button onClick={
                            () => {
                                this.props.playGame()
                            }
                        } className="bnt btn-danger" style={{ fontSize: "24px" }}>Play Game</button>
                        <button onClick={() => {
                            this.props.resetGame()
                        }} className="mx-3" style={{ fontSize: "18px" }} >
                            Reset
                        </button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: "RAN_DOM"
                })
                count++;
                if (count >= 16) {
                    // dừng setInterval
                    clearInterval(randomComputerItem);
                    dispatch({
                        type: "END_GAME",

                    })
                }
            }, 150)
        },
        resetGame: () => {
            dispatch({
                type: "RESET"
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(BaiTapGameOanTuTi)
