import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { ArrowRight, Activity } from 'react-feather'
import Nav from 'components/Nav'
import TxHeader from 'components/TxHeader'
import axios from 'axios'

@inject('mainStore')
@observer
class TxPage extends Component {
  componentWillMount () {
    this.props.mainStore.loading = true
  }
  componentDidMount () {
    this.props.mainStore.selectedHash = this.props.match.params.txid
    axios
      .get(`/api/hash/${this.props.mainStore.selectedHash}`)
      .then(({ data }) => {
        console.log(data)
        this.props.mainStore.selectedHashData = data
        this.props.mainStore.loading = false
      })
  }
  render () {
    const ms = this.props.mainStore
    const hd = this.props.mainStore.selectedHashData
    if (!ms.loading) {
      return (
        <div>
          <Nav />
          <div className='container grid-xl'>
            {hd.hashtype !== 'blockid' &&
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
              </TxHeader>}
            <div className='tx-section'>
              <CardHeader>Block Height: {hd.block.height}</CardHeader>
              <div className='columns'>
                <div className='column col-6 col-md-12'>
                  <CardTable className='table table-striped'>
                    <tbody>
                      <tr>
                        <th colSpan='2'>Summary</th>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{hd.block.height}</td>
                      </tr>
                      <tr>
                        <td>Number Of Transactions</td>
                        <td>{hd.block.transactions.length}</td>
                      </tr>
                      <tr>
                        <td>Output Total</td>
                        <td>{hd.block.siacoinoutputcount} SC</td>
                      </tr>
                      <tr>
                        <td>Estimated Hashrate</td>
                        <td>{hd.block.estimatedhashrate}</td>
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
                          {hd.block.blockid}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan='1'>Prev Hash</td>
                        <td colSpan='5'>
                          {hd.block.rawblock.parentid}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan='1'>Next Hash</td>
                        <td colSpan='5'>
                          TODO
                        </td>
                      </tr>
                      <tr>
                        <td colSpan='1'>Merkle Root</td>
                        <td colSpan='5'>
                          TODO
                        </td>
                      </tr>
                    </tbody>
                  </AddressTable>
                </div>
                <div className='column col-12'>
                  <CardTable className='table'>
                    <tbody>
                      <tr>
                        <th colSpan='2'>File Contract Summary</th>
                      </tr>
                      <tr>
                        <td>Active File Contracts</td>
                        <td>{hd.block.activecontractcount}</td>
                      </tr>
                      <tr>
                        <td>Total File Contract Value</td>
                        <td>{hd.block.activecontractcost}</td>
                      </tr>
                      <tr>
                        <td>Successful Storage Proofs</td>
                        <td>{hd.block.storageproofcount}</td>
                      </tr>
                      <tr>
                        <td>File Contract Size</td>
                        <td>{hd.block.activecontractsize}</td>
                      </tr>
                    </tbody>
                  </CardTable>
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
    } else {
      return <h1>Loading</h1>
    }
  }
}

const TxTable = styled.table`
  td:last-child {
    text-align: right;
  }

`

const AddressTable = styled.table`
margin-bottom: 0.8rem;
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
