import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@inject('mainStore')
@observer
class TxPage extends Component {
  render () {
    return (
      <div>
        <div className='bg-primary'>
          <Nav className='container grid-xl text-light'>
            <header className='navbar'>
              <section className='navbar-section'>
                <Logo to='/' className='navbar-brand'>
                  Sia Explorer
                </Logo>
                <a href='#' className='btn btn-link'>API</a>
                <a href='#' className='btn btn-link'>Map</a>
                <a href='#' className='btn btn-link'>Network</a>
              </section>
              <section className='navbar-section'>
                <input className='form-input' />
              </section>

            </header>
          </Nav>
        </div>
        <div className='container grid-xl'>
          <Card>
            <CardHeader>Block Height: 1108</CardHeader>
            <div className='columns'>
              <div className='column col-6 col-md-12'>
                <CardTable className='table table-striped'>
                  <tbody>
                    <tr>
                      <th>Summary</th>
                      <th />
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>5040</td>
                    </tr>
                    <tr>
                      <td>Number Of Transactions</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Output Total</td>
                      <td>5000 SC</td>
                    </tr>
                    <tr>
                      <td>Active File Contracts</td>
                      <td>65 520</td>
                    </tr>
                    <tr>
                      <td>Total File Contract Value</td>
                      <td>47 478 373 SC</td>
                    </tr>
                    <tr>
                      <td>Estimated Hashrate</td>
                      <td>239 850 TH</td>
                    </tr>
                  </tbody>
                </CardTable>
              </div>
              <div className='column col-6 col-md-12'>
                <AddressTable className='table table-striped'>
                  <tbody>
                    <tr>
                      <th>Hashes</th>
                      <th />
                    </tr>
                    <tr>
                      <td>Block Hash</td>
                      <td>
                        000000000000002b6e40e39dfd43cb7e8b0cda64202f9ac90ab4822fddf3b070
                      </td>
                    </tr>
                    <tr>
                      <td>Prev Hash</td>
                      <td>
                        000000000b353b5c1df255936a2e9f56430b2c81294a3c2d3935ae064a7fedd7
                      </td>
                    </tr>
                    <tr>
                      <td>Next Hash</td>
                      <td>
                        000000001cac1b1e04aec4a74f364f76c65794238f97c43a3fad5085b945caca
                      </td>
                    </tr>
                    <tr>
                      <td>Merkle Root</td>
                      <td>
                        9e9363d6c93e66f14759cecdb45521653874b5d562289caecaa364ce16f28550
                      </td>
                    </tr>
                  </tbody>
                </AddressTable>
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader>Transaction Summary</CardHeader>
          </Card>
        </div>
      </div>
    )
  }
}

const AddressTable = styled.table`
tr {
  th:last-child {
    width: 80%;
  }
  td:last-child {
    font-size: 0.6rem;
  }
}
`
const Card = styled.div`
  margin: 2rem;
  padding: 0.8rem;
`

const CardHeader = styled.h5`
  margin-bottom: 0.8rem;
`

const CardTable = styled.table`
  margin-bottom: 0.8rem;
`

const Logo = styled(Link)`
  margin-right: 1rem;
  height: 1.25rem;
`

const Nav = styled.div`
  padding: 2rem;
  background: transparent;
  .navbar-section {
    a {
      color: white;
    }
  }
`

export default TxPage
