export const voteReact = () =>{
    return{
        type: 'VOTE_REACT'
    }
}

export const voteAngular = () =>{
    return{
        type: 'VOTE_ANGULAR'
    }
}

export const voteVuejs = () =>{
    return{
        type: 'VOTE_VUEJS'
    }
}

export const changeUserInfo = (name, value) => {

        switch (name) {
            case 'username':
                return{ type:'LOGIN_CHANGE_USERNAME', value }
                
            case 'password':
                return{ type: 'LOGIN_CHANGE_PASSWORD', value }
            default:
                break;
        };
    
}

export const userLogin = (isLoggedIn) =>{
    return{
        type:'USER_LOGIN', isLoggedIn
    }
}

export const getButtonList = (buttonList) =>{
    return{
        type: "BUTTON_LIST", buttonList
    }
}

export const isNewRecord = (isNewRecord) =>{
    return{
        type: "IS_NEW_RECORD", isNewRecord
    }
}

export const actionBarClick = (name) => {
    return{
        type: 'ACTION_BAR_CLICK', name
    }
}