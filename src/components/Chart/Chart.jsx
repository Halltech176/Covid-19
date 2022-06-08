import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api/Index'
import { Line, Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'



import styled from './chart.module.css'
const Chart =({data, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        console.log(dailyData);
        fetchAPI()
    } ,[])
    const lineChart = (
        dailyData.length ? (<Line
        data = {{
            labels : dailyData.map(({date}) => date),
            datasets : [{
                data : dailyData.map(({confirmed}) => confirmed),
                label : 'infected',
                borederColor : '#3333ff',
                fill : true
            }, {
                data : dailyData.map(({deaths}) => deaths),
                label : 'deaths',
                borderColor : 'red',
                backgroundColor : 'rgba(255, 0, 0, 0.5))',
                fill : true

            }]
        }}
        />) : null
    )
    console.log(data.confirmed, data.recovered, data.deaths)
    const barChart = (
        data.confirmed ? (
            <Bar
            className = {styled.bar}
          data = {
                {
                 labels : ['Infected', 'Recovered', 'Deaths'],
                 datasets : [{
                     label : 'People',
                     backgroundColor: [
                         'rgba(0,0,255,0.5)',
                         'rgba(0,255,0,0.5)',
                         'rgba(255,0,0,0.5)'
                     ],
                     data : [data.confirmed.value, data.recovered.value, data.deaths.value]
                 }]
                }
                 }
            options = {
                {
                    lengend : {display :false},
                    title : {display : true, text : `current state in ${country}`}
                }
            }
            /> 
        ): null
        
    )
    return (
        <div className={styled.container}>
            {country ? barChart : lineChart}
        </div>
    )
}
export default Chart