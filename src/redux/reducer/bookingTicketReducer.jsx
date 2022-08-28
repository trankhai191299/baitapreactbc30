const stateDefault = {
    listGheDangDat:[
        // {soGhe:"A1",gia:75000},
    ]
}
export const bookingTicketReducer = (state= stateDefault,action) =>{
    switch(action.type){
        case 'DAT_GHE':{
            let {datGhe} = action.payload
            let listGheUpdate = [...state.listGheDangDat]
            let gheCanDat = listGheUpdate.find(gheCanDat => gheCanDat.soGhe === datGhe.soGhe)
            if(!gheCanDat){
                listGheUpdate.push(datGhe)
            }else{
                listGheUpdate = listGheUpdate.filter(gheDaCo => gheDaCo.soGhe !== datGhe.soGhe)
            }
            state.listGheDangDat = listGheUpdate
            return {...state}
        };
        case "HUY_GHE":{
            let {huyGhe} = action.payload
            let listGheUpdate = [...state.listGheDangDat]
            listGheUpdate = listGheUpdate.filter(gheCanHuy => gheCanHuy.soGhe !== huyGhe.soGhe)

            state.listGheDangDat = listGheUpdate
            return {...state}
        }

        default : return state
    }
}