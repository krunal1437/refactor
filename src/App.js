import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Row from 'react-bootstrap/Row'
import hotels from './hotels';
import './index.css';

function App() {
  const [hotelColor, setHotelColor] = useState('text-primary');

  const hotel1options = {
    title: {
      text: hotels[0].brandId
    },
    xAxis: {
      categories: ['2017', '2018', '2019', '2020', '2021']
    },
    series: [{
      type: 'spline',
      name: 'year',
      data: [1, 2, 3, 3, 5]
    }]
  }

  const hotel2options = {
    title: {
      text: hotels[1].brandId
    },
    xAxis: {
      categories: ['Jan-Mar', 'Apr-June', 'July-Sep', 'Oct-Dec']
    },
    series: [{
      data: [11, 5, 24, 9],
      name: 'Rooms available',
      type: 'column',
    }],
  }

  const hotel3options = {
    title: {
      text: hotels[2].brandId
    },
    series: [{
      data: [{
        y: 55,
        name: 'Filled'
      },
      {
        y: 38,
        name: 'Empty'
      },
      {
        y: 7,
        name: 'Renovation'
      }],
      type: 'pie',
      name: 'Rooms'
    }]
  }

  const ButtonComponent = () => {
    return (
      <div className="buttons">
        <Button size='sm' className="primaryButton" variant='primary' onClick={() => setHotelColor('text-primary')}>Primary Color</Button>
        <Button size='sm' className="secondaryButton" variant='secondary' onClick={() => setHotelColor('text-secondary')}>Secondary Color</Button>
      </div>
    );
  }

  return (
    <Container className="container">
      <Card>
        <Card.Header className="header">Welcome To Your Dashboard</Card.Header>
        <ButtonComponent />
        <Row>
          <Col>
            <Card>
              <Card.Header>{hotels[0].name}</Card.Header>
              <Card.Body className={hotelColor}>
                <Card.Title>Welcome to the lovely {hotels[0].name}!</Card.Title>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={hotel1options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>{hotels[1].name}</Card.Header>
              <Card.Body className={hotelColor}>
                <Card.Title>Welcome to the lovely {hotels[1].name}!</Card.Title>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={hotel2options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>{hotels[2].name}</Card.Header>
              <Card.Body className={hotelColor}>
                <Card.Title>Welcome to the lovely {hotels[2].name}!</Card.Title>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={hotel3options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default App;
