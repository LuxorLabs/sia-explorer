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
                      <th colSpan='2'>Summary</th>
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
                      <th colSpan='2'>Hashes</th>
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
            <div className='column col-12'>
              <TxTable className='table table-striped'>
                <tbody>
                  <tr>
                    <td colSpan='3'>
                      31fd0949097db70973201d79d783872c458c211cc35fb9b740872b90310a7b1c
                    </td>
                    <td>
                      <span className='chip'>
                        File Contract
                      </span>
                      <span className='chip'>
                        Total Value: 10 SC
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      44207d74fb7c6ab55aba13929e7259287bd7282112d5c216cd10e7d5430cbb4d446155eaa0f9
                      <br />
                      4c357a07dcd57017ef368f1dd96185d345554bbaeeb5dc90cb6d48b1c0768ce555119cdd76d3
                    </td>
                    <td>
                      2e584daf2976aa73476ff61b07b6b75f6874de854a38a6680cdc8fef787d3a3a
                    </td>
                    <td>
                      10 SC
                    </td>

                  </tr>
                  <tr>
                    <td colSpan='3'>
                      fb7a7c894003c1d2544bf3a2f3a7fdff67a2b10b2686b7a54c080a7d58cc54ac
                    </td>
                    <td>
                      <span className='chip'>
                        Transaction
                      </span>
                      <span className='chip'>
                        Total Value: 30 SC
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      efa6b8d7539cb58c5d884931f0da8aa07e181a85099c08e33aa7c7c04a4d87e76b20b96e9178
                    </td>
                    <td colSpan='1'>
                      f7b878f69bde9aa1e22ef08635c48bb0e5a1915599d10d60ac2f8fa15efe52dc39a1d424ce5b
                      <br />
                      f59bf52310168a4ecba52db2aeb2ee689e8b9360d2d50db8877af674fc49cb8695835b397a7e
                    </td>
                    <td>
                      10 SC<br />
                      20 SC

                    </td>
                  </tr>
                </tbody>
              </TxTable>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

const TxTable = styled.table`
  td:last-child {
    text-align: right;
  }
  
`

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
