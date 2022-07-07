import {getPlaceHolderObjectType} from '../api/apiPlaceHolder';

export const InitialState: getPlaceHolderObjectType[] = []
export const JsonPlaceHolderReducer = (state = InitialState, action: generalType) => {
    switch (action.type) {
        case 'GET': {
            return [...state, ...action.payload.data];
        }
        default:
            return state;
    }
}

type generalType = getACType;

export type getACType = ReturnType<typeof getAC>

export const getAC = (data: getPlaceHolderObjectType[]) => {
    return {
        type: 'GET',
        payload: {
            data
        }
    } as const
}

