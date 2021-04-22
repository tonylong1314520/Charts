import React from 'react';
import Chart from 'react-apexcharts'
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Icon, Image, Grid, } from 'semantic-ui-react';
/* eslint-disable max-len */
class PieChart extends React.Component {
  render() {
      this.state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
    return (
        <Menu borderless className="PieChart">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class BarGraph extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-Charts-logo.png' size='medium' centered />
    )
  }
}

class LineChart extends React.Component {
  render() {
    return (
        <Grid centered container>
          <Dropdown item text="MALE"></Dropdown>
          <Dropdown item text="WOMEN"></Dropdown>
          <Dropdown item text="KIDS"></Dropdown>
          <Dropdown item text="BRAND"></Dropdown>
          <Dropdown item text="SALE" icon=""></Dropdown>
        </Grid>
    )
  }
}

class Charts extends React.Component {

  render() {
    return (
        <div>
          <PieChart/>
          <BarGraph/>
          <LineChart/>
        </div>
    );
  }
}

ReactDOM.render(<Charts/>, document.getElementById('root'));