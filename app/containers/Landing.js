import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import GoogleMapReact from 'google-map-react'
import mapStyle from '../lib/mapStyle'

import 'styles/spectre.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>

console.log(mapStyle)
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
        <div className='bg-secondary'>
          <Nav className='container grid-xl'>
            <header className='navbar'>
              <section className='navbar-section'>
                <div>
                  <h6><small className='label'>$0.69 USD/TB</small></h6>
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
              <HeaderText>
                Begin Your Journey into the Sia Blockchain
              </HeaderText>
              <SubHeaderText>
                with a brand new explorer redesigned for simplicity
              </SubHeaderText>
              <div className='col-6 col-md-9 col-mx-auto'>
                <input className='form-input' type='text' />
              </div>
            </div>
          </Hero>
        </div>

        <Body className='container grid-xl'>
          <div className='columns'>
            <Card className='column col-md-6 col-sm-12'>
              <h4>Latest Transactions</h4>
              <table className='table table-striped'>
                <tbody>
                  <tr>
                    <th>Hash</th>
                    <th>Value Out</th>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>100 SC</td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <Card className='column col-md-6 col-sm-12'>
              <h4>659 Hosts is 50 Countries</h4>
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
        </Body>
        <Footer className='container grid-xl'>
          Luxor Explorer API v1.0
        </Footer>
      </div>
    )
  }
}

const MapWrap = styled.div`
  height: 40vh;
`

const HeaderText = styled.h2`
  margin-bottom: 0.2rem;
`

const SubHeaderText = styled.h4`
  margin-bottom: 2rem;
`

const Card = styled.section`
  padding: 2rem;
`

const Body = styled.div``

const Hero = styled.div`
  padding: 150px 0;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Nav = styled.div`
  padding: 30px 0;
  background: transparent;
`

const Footer = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Landing
