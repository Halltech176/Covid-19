import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import styles from './App.module.css'
import { fetchData } from './api/Index'
import {Container} from '@mui/material'

class App extends Component {
  state = {
    data :{},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data : fetchedData
    })
  }
  handleCountry = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({
      data : fetchedData,
      country : country
    })
  }
  render() {
    const {data, country} = this.state
    return (
      <Container>
        <h1>COVID 19</h1>
      <div className={styles.container}>
        <Cards data ={data}/>
        <CountryPicker handleCountry={this.handleCountry}/>
        <Chart data={data} country ={country}/>
      </div>
      </Container>
    )
  }
}
export default App