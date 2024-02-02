import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import $ from "jquery";
function Httprequest() {

    // const [login, setLogin] = useState(true);
    // const [logout, setLogout] = useState(true);
        const [allData, setAllData] = useState([]);
        
        const [count, setCount]=useState(1);

        const add = () => {
            if(count<100){
              setCount(count + 1); }
             }
          const sub = () => {
            if(count>=1)
            { setCount(count -1); } 
          }

    function ajaxRe()
     {
        $.ajax({
            type :"GET",
            url:"http://localhost:1000"+"/"+count,
            success:(resp)=>
            {
                setAllData(resp);

            }
        })
     }
        useEffect(()=> {        
            ajaxRe();
        },[count])

      function Card({data}) {
       return (
        <>
           <div className="card my-3 shadow-sm ">
             <div className="card-header fw-bold text-capitalize">{data.title}</div>
             <div className="card-body">{data.body}</div>
           </div>
        </>
       )
     }
     

  return (
    <> 
    {/* <h1 className='text-center me-2'>USE EFFECT</h1>
    <Button id="mybtn" className='me-2'>Click Me</Button>
    <Button onClick={ajaxRe}>click</Button> */}
     <div className="container mt-2  bg-primary bg-opacity-10 py-2 px-5">
        <h1 className='text-center me-2'>HTTP Req</h1>

        <div className="d-flex justify-content-between align-item-center">
            <div className="display-4 fw-bold">Comment</div>
             <div className="fs-4 shadow-sm bg-secondary bg-opacity-25 rounded px-2">
                New Comment {count}
             </div>
        </div>
        
        {
        // JSON.stringify(allData)
         allData.map((item, index) => {
             return <Card data={item} key={index}/>
         })
         } 
         < div className="float-end">
            <Button className="me-2" onClick={()=>{
                setCount()}}>
                <i className="fa fa-angle-left"></i>
            </Button>
            <Button className="me2" onClick={()=>{setCount(count+1)}}>
                <i className="fa fa-angle-right"></i>
            </Button>
         </div>
         
    </div>


    </> 
 )
}

export default Httprequest;