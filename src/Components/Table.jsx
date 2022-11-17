import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
query{
    users{
      data{
        id
        name
        username
        email
        phone
        website
        address
        {
            street
        }
        
      }
    }
  }
`

export default function Table(props) {
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
   const keys=["name","email","phone","website","username"]
   const [checkData, setCheckData] = React.useState(
    {
        ischecked: true
    }
)
    return(
        <div>
        <div className='table-header'>
                <input 
               checked={checkData.ischecked}
                className='checkbox'  
                type="checkbox" 
                id="first-cbx"
                onChange={e=>setCheckData({ischecked:e.target.checked})}
                />
                <p className='name'>Name</p>
                <p className='usrname' >Username</p>
                <p className='email'>Email</p>
                <p className='phone'>Phone</p>
                <p className='site'>website</p>
                <p className='addr'>Address</p> 
        </div>
        {data.users.data.filter((user)=>
        keys.some(key=>user[key].toLowerCase().includes(props.find))||user.address.street.toLowerCase().includes(props.find)
        )
        .map(user => 
            <div className='table'>
                <input  checked={checkData.ischecked} className='checkbox' type="checkbox" name="" id=""></input>
                <p className='name'>{user.name}</p>
                <p className='usrname'>{user.username}</p>
                <p className='email'>{user.email}</p>
                <p className='phone'>{user.phone}</p>
                <p className='site'>{user.website}</p>
                <p className='addr'>{user.address.street}</p> 
            </div>
                )}
             
                
        </div>
    )
}