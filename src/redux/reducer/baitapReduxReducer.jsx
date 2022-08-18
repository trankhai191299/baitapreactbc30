
const stateDefault = {
    arrSV : [
        {maSV:1,tenSV:"Nguyen Tran A",sdt:"0123456789",email:"ATrN2302@gmail.com"},
        {maSV:2,tenSV:"Nguyen Van B",sdt:"9876543210",email:"BVaN2609@gmail.com"},
        {maSV:3,tenSV:"Mai Van H",sdt:"246813579",email:"HVaM1512@gmail.com"},
    ],
    sinhVien :{
        maSV:"",
        tenSV:"",
        sdt:"",
        email:""
    },
    error :{
        maSV:"",
        tenSV:"",
        sdt:"",
        email:""
    },
    arrSvSearch : [],
}

export const baitapReduxReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'HANDLE_CHANGE_INPUT':{
            let {id,value,pattern} = action.payload
            let errorMess = ''
            let otherID = ''
            switch (id){
                case 'maSV': otherID = "Mã sinh viên" 
                    break;
                case 'tenSV': otherID = "Tên sinh viên"
                    break;
                case 'sdt': otherID = "Số điện thoại"
                    break;
                case 'email': otherID = "Email"
                    break;
            }
            // kiểm tra rỗng
            if(value.trim() === ''){
                errorMess = otherID + " không được để trống"
            }
            // kiểm tra pattern
            const regrexEmail = new RegExp(pattern)
            if (!regrexEmail.test(value)){
                errorMess = otherID + " không hợp lệ";
            }
            state.error[id] = errorMess
            state.sinhVien[id] = value
            state.error = {...state.error}
            state.sinhVien = {...state.sinhVien}

            return {...state}
        }
        case 'HANDLE_SUBMIT':{
            let {newSinhVien} = action.payload

            let arrSvUpdate = [...state.arrSV]
            arrSvUpdate.push(newSinhVien)
            
            state.arrSV = arrSvUpdate
            return {...state}
        }
        case 'DELETE_SV' : {
            let {maSV} = action.payload

            let arrSvUpdate = [...state.arrSV]
            arrSvUpdate = arrSvUpdate.filter(sv => sv.maSV !== maSV)

            state.arrSV = arrSvUpdate
            return {...state}
        }
        case 'SEARCH_NAME' :{
            debugger
            let {searchName} = action.payload
            searchName = searchName.trim().toLowerCase()
            
            let arrSvUpdate = [...state.arrSV]
            arrSvUpdate = arrSvUpdate.filter(sv => sv.tenSV.trim().toLowerCase().includes(searchName))
            
            state.arrSvSearch = arrSvUpdate;
            return {...state}
        }
        default : return state
    }
}