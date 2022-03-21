import './ProfileStyle.css'
import React from 'react'

export default function Profile (props){
    return (
        <div className='perfil'>
            <img src= {props.pic} alt="img" />
            <div>
                <div className= 'dados'>
                    <h2>{props.name}</h2>
                    <h4>{props.work}</h4>
                </div>
                <div className = 'click'>
                    <button>Call</button>
                    <button>Send Email</button>
                </div>
            </div>
        </div>
      
    )


}
