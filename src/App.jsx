import React from 'react'
import './css/index.css'
import Table from './Components/Table'


function App() {
  const [query, setQuery] = React.useState('')
  return (
    <div>
       <div className='header'>
            <p className='user'>Users</p>
            <input  className='search-bar' type="text" placeholder='Search...' onChange={e=>setQuery(e.target.value.toLocaleLowerCase())}/>
            <button className='add-btn'>+ New User</button>
        </div>

      <Table find={query}/> 
    </div>
      
  )
}

export default App
