const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './imgGameOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './imgGameOanTuTi/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './imgGameOanTuTi/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {
        ma: 'keo', hinhAnh: './imgGameOanTuTi/bao.png', datCuoc: false
    }
}
export const GameOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false };
            })
            // let index = mangDatCuocUpdate.findIndex((item) => {

            //     return item.ma === action.maCuoc
            // })
            // if (index !== -1) {
            //     mangDatCuocUpdate[index].datCuoc = true;
            // }
            state.mangDatCuoc = mangDatCuocUpdate;
            console.log(action);
            return { ...state }
        }
        case "RAN_DOM": {
            let randomNum = Math.floor(Math.random() * 3);
            state.computer = { ...state.mangDatCuoc[randomNum] };
            return { ...state }
        }
        case "END_GAME": {
            state.soBanChoi += 1;
            let computer = state.computer;
            let player = state.mangDatCuoc.find((item) => {
                return item.datCuoc === true;
            })
            switch (player.ma) {
                case 'keo': {
                    if (computer.ma === 'keo') {
                        state.ketQua = "Tao với mày hòa OKE !!!"
                    } else if (computer.ma === 'bua') {
                        state.ketQua = "Tao Nhường Đó !"
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, I love you 3000 <3"
                    }
                    break;
                }
                case 'bua': {
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, I love you 3000 <3"
                    } else if (computer.ma === 'bua') {
                        state.ketQua = "Tao với mày hòa OKE !!!"
                    } else {
                        state.ketQua = "Tao Nhường Đó !"
                    }
                    break;
                }
                case 'bao': {
                    if (computer.ma === 'keo') {
                        state.ketQua = "Tao Nhường Đó !"
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, I love you 3000 <3"
                    } else {
                        state.ketQua = "Tao với mày hòa OKE !!!"
                    }
                    break;
                }

                default: {
                    break;
                }
            }
            return { ...state }
        }
        case "RESET": {
            console.log("reset");
            state.ketQua = "I'm iron man, i love you 3000 !!!";
            state.soBanThang = 0;
            state.soBanChoi = 0;
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

