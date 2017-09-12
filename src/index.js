import './index.css'
import registerServiceWorker from './registerServiceWorker'
import counter from './counter'
// import { createStore } from 'redux'
const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({})

  return { getState, dispatch, subscribe }
}

// creatStore()にリデューサーを渡す
const store = createStore(counter)

const render = () => {
  document.body.innerText = store.getState()
}

// storeの変更を監視して実行されるコールバックを登録(ここではレンダー関数)
store.subscribe(render)
// 初期表示
render()

document.addEventListener('click', () => {
  // dispatchでアクションタイプを渡してリデューサーを実行
  store.dispatch({ type: 'INCREMENT' })
})

registerServiceWorker()
