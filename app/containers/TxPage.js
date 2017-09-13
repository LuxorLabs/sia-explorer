import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { ArrowRight, Activity } from 'react-feather'
import Nav from 'components/Nav'
import TxHeader from 'components/TxHeader'

@inject('mainStore')
@observer
class TxPage extends Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='container grid-xl'>
          <TxHeader title='Siacoin Address'>
            <div className='column col-4 col-md-12'>
              <div className='h6 text-gray'>Total Sent</div>
              <div className='h4'>5000 SC</div>
            </div>
            <div className='column col-4 col-md-12'>
              <div className='h6 text-gray'>Total Received</div>
              <div className='h4'>5000 SC</div>
            </div>
            <div className='column col-4 col-md-12'>
              <div className='h6 text-gray'>Total Balance</div>
              <div className='h4'>0 SC</div>
            </div>
          </TxHeader>
          <div className='tx-section'>
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
                    <tr>
                      <td>Successful Storage Proofs</td>
                      <td>85 500</td>
                    </tr>
                  </tbody>
                </CardTable>
              </div>
              <div className='column col-6 col-md-12'>
                <AddressTable className='table table-striped'>
                  <tbody>
                    <tr>
                      <th colSpan='6'>Hashes</th>
                    </tr>
                    <tr>
                      <td colSpan='1'>Block Hash</td>
                      <td colSpan='5'>
                        000000000000002b6e40e39dfd43cb7e8b0cda64202f9ac90ab4822fddf3b070
                      </td>
                    </tr>
                    <tr>
                      <td colSpan='1'>Prev Hash</td>
                      <td colSpan='5'>
                        000000000b353b5c1df255936a2e9f56430b2c81294a3c2d3935ae064a7fedd7
                      </td>
                    </tr>
                    <tr>
                      <td colSpan='1'>Next Hash</td>
                      <td colSpan='5'>
                        000000001cac1b1e04aec4a74f364f76c65794238f97c43a3fad5085b945caca
                      </td>
                    </tr>
                    <tr>
                      <td colSpan='1'>Merkle Root</td>
                      <td colSpan='5'>
                        9e9363d6c93e66f14759cecdb45521653874b5d562289caecaa364ce16f28550
                      </td>
                    </tr>
                  </tbody>
                </AddressTable>
              </div>
            </div>
          </div>
          <div className='tx-section columns'>
            <CardHeader>Transaction Summary</CardHeader>
            <div className='column col-12'>
              <div className='card'>
                <div className='card-header'>
                  <div className='card-title h5'>
                    31fd0949097db70973201d79d783872c458c211cc35fb9b740872b90310a7b1c
                  </div>
                  <div className='card-subtitle text-gray'>
                    Storage Contract
                  </div>
                </div>
                <div className='card-body'>
                  <div className='columns'>
                    <div className='column col-5'>
                      <div className='card mt-2'>
                        <div className='card-body'>
                          <span className='text-gray'>
                            5 SC from{' '}
                          </span>
                          44207d74fb7c6ab55aba13929e7259287bd7282112d5c216cd10e7d5430cbb4d446155eaa0f9
                        </div>
                      </div>
                      <div className='card mt-2'>
                        <div className='card-body'>
                          <span className='text-gray'>
                            5 SC from{' '}
                          </span>
                          <span>
                            4c357a07dcd57017ef368f1dd96185d345554bbaeeb5dc90cb6d48b1c0768ce555119cdd76d3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='column col-2 flex-center'>
                      <ArrowRight />
                    </div>
                    <div className='column col-5'>
                      <div className='card mt-2'>
                        <div className='card-body'>
                          <span className='text-gray'>
                            10 SC to{' '}
                          </span>
                          <span>
                            4c357a07dcd57017ef368f1dd96185d345554bbaeeb5dc90cb6d48b1c0768ce555119cdd76d3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

const CardHeader = styled.h5`
  margin-bottom: 0.8rem;
`

const CardTable = styled.table`
  margin-bottom: 0.8rem;
`

export default TxPage
