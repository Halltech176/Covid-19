import React, {useState, useEffect} from 'react'
import { NativeSelect,  FormControl} from '@mui/material'
import styles from './CountryPicker.module.css'
import {fetchcountry} from '../../api/Index'
const CountryPicker =({handleCountry}) => {
    const [fetchCountries, setFetchCountries] = useState([])
    useEffect(() => {
      const fetchAPI = async () => {
        setFetchCountries(await fetchcountry());
      }
      fetchAPI()
    }, [setFetchCountries])
    return (
       <FormControl className = {styles.formControl}>
           <NativeSelect default='' onChange ={(e) => handleCountry(e.target.value)}>
               <option value =''>Global</option>
               {
                   fetchCountries.map((country, i) => <option key={i} value={country}>{country}</option>)
               }
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker