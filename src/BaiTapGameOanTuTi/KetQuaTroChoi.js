import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning" style={{ fontSize: "40px" }}>{this.props.ketQua}</div>
                <div className="text-success" style={{ fontSize: "40px" }}>Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span> </div>
                <div className="text-success" style={{ fontSize: "40px" }}>Số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span> </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        ketQua: rootReducer.GameOanTuTiReducer.ketQua,
        soBanThang: rootReducer.GameOanTuTiReducer.soBanThang,
        soBanChoi: rootReducer.GameOanTuTiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi);