
const initialState = {
    username: "",
    pasword: "",
    userInfo: {},
    activePage: "",
    isLoggedIn: false,
    buttonList: null,
    isNewRecord: false
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

        case 'IS_NEW_RECORD':
            return Object.assign({}, state, {
                isNewRecord: action.isNewRecord
            })

        default:
            return state
    }
}