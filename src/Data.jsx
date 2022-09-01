import React from 'react'
import { createContext,useState } from 'react';
export const Store = createContext();
const Data = (props) => {
const [details,setDetails] = useState([
    {
    'id':1,
    'otherName':'Auther',
    'image': "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg" ,
},
    {
    'id':2,
    'otherName':'Auther1',
    'image': "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg" ,
},
    {
    'id':3,
    'otherName':'Auther2',
    'image': "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg" ,
},
    {
    'id':4,
    'otherName':'Auther3',
    'image': "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg" ,
},
    {
    'id':5,
    'otherName':'Auther4',
    'image': "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg" ,
}
]);

  return (
    <div >
       <Store.Provider value={[details,setDetails]}>
       {props.children}
       </Store.Provider>
    </div>
  )
}

export default Data;