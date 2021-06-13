import produce from 'immer'

const initialState = {
    employs: []
}

export default produce((state, action) => {
    switch (action.type) {
        case 'NEW_EMPLOY': //להוסיף שאלה לרשימה האישית 
            { state.employs.push(action.payLoad) }
            break
            case 'ADD_ QUESTIONS':
                { 
                    console.log(action)
                    state.employs = [...action.payLoad.employs] 
                    }
                break
    }
}, initialState)