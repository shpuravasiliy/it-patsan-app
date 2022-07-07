import {getPlaceHolderObjectType} from '../api/apiPlaceHolder';

export const InitialState: getPlaceHolderObjectType[] = []
export const JsonPlaceHolderReducer = (state = InitialState, action: generalType) => {
    switch (action.type) {
        case 'xxx': {
            return state;
        }
        default:
            return state;
    }
}

type generalType = getACType;

export type getACType = ReturnType<typeof getAC>

export const getAC = () => {
    return {
        type: 'xxx',
        payload: {}
    } as const
}

