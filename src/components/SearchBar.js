import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './SearchBar.css'

export default function SearchBar() {

    const [term, setTerm] = useState('')
    const [option, setOption] = useState('tên')
    const history = useHistory();
    
     
    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push(`/search?term=${term}&option=${option}`)
        console.log(option)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Tìm kiếm nhân viên</label>
            <select onChange={(e) => setOption(e.target.value)}>
                <option value='tên'>Tên</option>
                <option value='id'>Id</option>
            </select>
            <input onChange={(e) => setTerm(e.target.value)} type='text' id="search" />
        </form>
    </div>
  )
}
