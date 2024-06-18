const profile:any = [{
    id:1,
    userName: "Nguyễn Đình Dương",
    gender: "Nam",
    dateBirth: "13/01/2005",
    address: "Yên Thành"
}]

const reducerProfile = (state=profile,action:any) => {
    switch (action.type) {
        case "RENDER":
            return state
        default:
            return state
    }
}

export default reducerProfile