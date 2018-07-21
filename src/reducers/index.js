
const initialState = {
    username: "",
    pasword: "",
    userInfo: {},
    activePage: "",
    isLoggedIn: false,
    angular: 0,
    react: 0,
    vuejs: 0,
    buttonList:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_CHANGE_USERNAME':
            return Object.assign({}, state, {
                username: action.value
            })

        case 'LOGIN_CHANGE_PASSWORD':
            return Object.assign({}, state, {
                password: action.value
            })

        case 'USER_LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn
            })

        case 'BUTTON_LIST':
            return Object.assign({}, state, {
                buttonList: action.buttonList
            })

        default:
            return state
    }
}