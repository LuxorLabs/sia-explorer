import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import GoogleMapReact from 'google-map-react'
import mapStyle from '../lib/mapStyle'

import 'styles/spectre.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const mapOptions = {
  styles: mapStyle,
  minZoomOverride: true,
  minZoom: 1
}

@inject('mainStore')
@observer
class Landing extends React.Component {
  static defaultProps = {
    center: { lat: 40, lng: 10 },
    zoom: 0
  }
  render () {
    return (
      <div>
        <div className='bg-dark-gradient'>
          <Nav className='container grid-xl text-light'>
            <header className='navbar'>
              <section className='navbar-section'>
                <div>
                  <h6><small>$0.69 USD/TB</small></h6>
                </div>
              </section>
              <section className='navbar-center'>Explorer</section>
              <section className='navbar-section'>
                <a href='#' className='btn btn-link'>API</a>
                <a href='#' className='btn btn-link'>Map</a>
                <a href='#' className='btn btn-link'>Network</a>
              </section>
            </header>
          </Nav>
          <Hero>
            <div className='container grid-xl text-center'>
              <HeaderText className='text-light'>
                Begin your journey into the Sia Blockchain
              </HeaderText>
              <SubHeaderText className='text-light'>
                this is a brand new explorer redesigned for simplicity
              </SubHeaderText>
              <div className='col-5 col-md-9 col-mx-auto'>
                <input
                  placeholder='Search for address, block, txid...'
                  className='form-input'
                  type='text'
                />
              </div>
            </div>
          </Hero>
        </div>

        <div className='container grid-xl'>
          <div className='columns'>
            <Card className='column col-md-6 col-sm-12'>
              <CardHeader className='h4-caps'>Latest Transactions</CardHeader>
              <AddressTable className='table table-striped'>
                <tbody>
                  <tr>
                    <th>Hash</th>
                    <th>Value Out</th>
                  </tr>
                  <tr>
                    <td>
                      <Link to='/block/e55d94f425bed1a6a3f08c114ba64d1f5cff8e5887fdc6c57707380d17493094'>
                        e55d94f425bed1a6a3f08c114ba64d1f5cff8e5887fdc6c57707380d17493094
                      </Link>
                    </td>
                    <td>100 SC</td>
                  </tr>
                </tbody>
              </AddressTable>
            </Card>
            <Card className='column col-md-6 col-sm-12'>
              <CardHeader>659 Hosts in 50 Countries</CardHeader>
              <MapWrap>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyAHiC21Pj15eIOmhAiBFBwpl82ALMqkQYA'
                  }}
                  options={mapOptions}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                  />
                </GoogleMapReact>
              </MapWrap>
            </Card>
          </div>
        </div>
        <Footer className='container grid-xl'>
          <div className='col-6 text-left'>
            Yunbi Sia Explorer
          </div>
          <div className='col-6 text-right'>
            Luxor Explorer API v1.0
          </div>
        </Footer>
      </div>
    )
  }
}

const AddressTable = styled.table`
  tr {
    th:first-child {
      width: 80%;
    }
  }
`

const CardHeader = styled.h6`
  margin-bottom: 1rem;
`

const MapWrap = styled.div`
  height: 40vh;
`

const HeaderText = styled.h2`
  margin-bottom: 0.6rem;
`

const SubHeaderText = styled.h5`
  margin-bottom: 2rem;
`

const Card = styled.section`
  padding: 2rem;
`

const Hero = styled.div`
  padding: 150px 0;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Nav = styled.div`
  padding: 2rem;
  background: transparent;
`

const Footer = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Landing
