import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from 'containers/Landing'
import TxPage from 'containers/TxPage'

import { Provider } from 'mobx-react'
import { MainStore } from 'stores/MainStore'

class App extends React.Component {
  mainStore = new MainStore()

  render () {
    return (
      <Provider mainStore={this.mainStore}>
        <Router>
          <div className='app'>
            <Route exact path='/' component={Landing} />
            <Route exact path='/block/:txid' component={TxPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
