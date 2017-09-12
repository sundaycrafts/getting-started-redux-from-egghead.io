import './index.css'
import registerServiceWorker from './registerServiceWorker'
import counter from './counter'
import { createStore } from 'redux'

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
