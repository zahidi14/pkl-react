export default (state,action) => {
    switch(action.type) {
        case "progressChange":
            return {
                ...state,
                progress: action.payload
            };
        case "nama":
            return {
                ...state,
                nama: action.payload
            };
        case "noTel":
            return{
                ...state,
                noTel: action.payload
            }
        case "pickupDate":
            return{
                ...state,
                pickupDate: action.payload
            };
        case "dropoffDate":
            return{
                ...state,
                dropoffDate: action.payload
            };
        case "Car":
            return {
                ...state,
                Car: action.payload
            }
        default:
            return state;
    }
}