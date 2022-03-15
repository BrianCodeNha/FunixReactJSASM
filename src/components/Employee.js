import React from 'react'
import {useParams} from 'react-router-dom'

export default function Employee(props) {

  const param = useParams()

  return (
    <div>
     {param.staffId}
    </div>
  )
}
