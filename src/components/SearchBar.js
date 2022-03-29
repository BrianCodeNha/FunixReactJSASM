import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './SearchBar.css'
import AddEmployee from './Modal'

export default function SearchBar(props) {

    const [term, setTerm] = useState('')
    const [option, setOption] = useState('tên')
    
    const history = useHistory();   
     
    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push(`/search?term=${term}&option=${option}`)
        
    }
  return (
    <div className='row'>
    <div className='col-8'>
    <form onSubmit={handleSubmit} >
            <label htmlFor='search'>Tìm kiếm nhân viên</label>
            <div className='select'>
            <select onChange={(e) => setOption(e.target.value)}>
                <option value='tên'>Tên</option>
                <option value='id'>Id</option>
                <option value='doB'>Ngày sinh</option>
            </select>            
            </div>
            <input onChange={(e) => setTerm(e.target.value.toLowerCase())} type='text' id="search" />
            <div className='sort'>
            <label>Sort by </label>
            <select onChange={(e) => props.getSortEntry(e.target.value)}>
                <option value='name'>Tên asc</option>
                <option value='id'>Id desc</option>
                <option value='doB'>Ngày sinh asc</option>
            </select>           
            </div>
        </form> 
    </div>
    <div style={{padding: '15px'}} className='col-4'>
    <AddEmployee getEmployee = {(employee) => props.getEmployee(employee)} className='col' />
    </div>
             
        
    </div>
  )
}
