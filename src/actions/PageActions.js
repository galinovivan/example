/**
 * Created by ivan on 19.03.17.
 */
import {
    GET_PHOTO_REQUEST,
    GET_PHOTO_SUCCESS
} from '../constans/Page'

export function getPhotos(year) {

    return (dispatch) => {
        dispatch({
            type: GET_PHOTO_REQUEST,
            payload: year
        })

        setTimeout( () => {
            dispatch({
                type: GET_PHOTO_SUCCESS,
                payload: [1, 2, 3, 4, 5]
            })
        }, 1000)
    }
}