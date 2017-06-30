import types from './types'

const exampleAction = () => {
    return {
        type: types.EXAMPLE_ACTION,
        payload: 'example'
    }
}
const exampleResponse = () => {
    return {
        type: types.EXAMPLE_RESPONSE
    }
}
export default {
    exampleAction,
    exampleResponse
}