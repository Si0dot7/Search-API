import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Card from './components/Card'
import Nav from './components/Nav'

function App() {

  const [countries,setCountries] = useState([])
  const [word,setWord] = useState('')
  const [dataFilter] = useState(['name','capital'])

  const fetchData =async()=>{
    const url = `https://restcountries.com/v3.1/all`
    const response = await fetch(url)
    const data = await response.json()
    setCountries(data)
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  const searchCountries=(countries)=>{
    return countries.filter((item)=>{
      return dataFilter.some((filter)=>{
        if (filter === 'name' && item.name && item.name.common) {
          return item.name.common.toLowerCase().includes(word.toLowerCase())
        } else if (filter === 'capital' && item.capital) {
          return item.capital.toString().toLowerCase().includes(word.toLowerCase())
        }
        return false
      })
    })
  }

 

  return (
    <div className=' bg-blue-200 min-h-screen'>
      <Nav/>
      <div className='py-10 justify-center flex '>
        <input 
          type='text' 
          placeholder='Search name or capital' 
          className='w-7/12 py-3 rounded-md focus:outline-gray-200 hover:shadow-md text-xl pl-4'
          value={word}
          onChange={(e)=>setWord(e.target.value)}
        />
      </div>
      <div className='mx-10'>
        <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8'>
            {searchCountries(countries).map((items)=>{         
              return <Card {...items}  key={items.cca3}/>
            })} 
        </ul>
      </div>
    </div>
  )
}

export default App
