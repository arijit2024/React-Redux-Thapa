const initialState = "#e19999"
const changeColor = (state = initialState, action) => {
        switch (action.type) {
            case "COLORCHANGE":
                return action.color ;
            default:
                return state;
        }
}
export default changeColor