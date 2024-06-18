const listUser:any = [ { id: 1, userName: "Nguyễn Đình Dương", gender: "Nam", dateBirth: "13/01/2005", address: "Yên Thành" },
    { id: 2, userName: "Nguyễn Văn A", gender: "Nam", dateBirth: "01/02/2005", address: "Hà Nội" },
    { id: 3, userName: "Trần Thị B", gender: "Nữ", dateBirth: "03/03/2005", address: "Đà Nẵng" },
    { id: 4, userName: "Lê Văn C", gender: "Nam", dateBirth: "04/04/2005", address: "TP. Hồ Chí Minh" },
    { id: 5, userName: "Phạm Thị D", gender: "Nữ", dateBirth: "05/05/2005", address: "Hải Phòng" }]

    const reducerListUser = (state=listUser,action:any) => {
        switch (action.type) {
            case "RENDER":
                return state
            default:
                return state
        }
    }
    
    export default reducerListUser