import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import App from './pageContainers/app/AppContainer'
import reducers, {epics} from './ducks'

const epicMiddleware = createEpicMiddleware(epics)
const store = createStore(reducers, applyMiddleware(epicMiddleware))
render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('react-container'))


