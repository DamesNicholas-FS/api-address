import { useState } from 'react'
import './App.css'
import axios, { AxiosHeaders } from 'axios'

function App() {

  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [county, setCounty] = useState('')
  const [areaCodes, setAreaCodes] = useState('')
  const [imei, setImei] = useState('')

  const getZip = async () => {
      try{
      const res = await axios.get(`https://api.api-ninjas.com/v1/zipcode?zip=${zip}`, {
        headers: {
          'X-Api-Key': ''
        },
      });

      setCity(res.data[0].city)
      setState(res.data[0].state)
      setCounty(res.data[0].county)
      setAreaCodes(res.data[0].area_codes)

      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='p-10 flex flex-col gap-3 min-h-screen bg-slate-700 justify-start'>
      <h1 className='text-xl font-semibold text-white'>Address Lookup</h1>
      <div className='flex text-white'>
        <input
          className='border rounded w-32 py-1 px-1 text-center text-black'
          type="number"
          minLength={5}
          maxLength={5}
          onChange={(e) => setZip(e.target.value)}
          required
        />
        <div className='px-5 flex gap-2'>
        <input className='border rounded w-32 py-1 px-1 text-center' type="text" disabled value={city} />
        <input className='border rounded w-32 py-1 px-1 text-center' type="text" disabled value={state} />
        <input className='border rounded w-32 py-1 px-1 text-center' type="text" disabled value={county} />
        <input className='border rounded w-32 py-1 px-1 text-center' type="text" disabled value={areaCodes} />
        </div>
      </div>
      <button className='w-32 p-2 bg-slate-100 rounded-md border' onClick={getZip} >Find</button>
    </div>
  )
}

export default App
