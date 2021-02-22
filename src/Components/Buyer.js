import React, { useState } from 'react';
import { CardProfile } from '../UploadPic';
import OrangeDtail from './OrangeDetail';
import UserDetail from './UserDetail';


const Buyer = (props)=>{

    const [showDiscription, setShowDiscription] = useState(false);
    const [discription, setDiscription] = useState(props.loggedinUser.about);
    //  const ImageLink = "https://previews.123rf.com/images/budget/budget0906/budget090600433/5007708-graps.jpg";
     

     const OnChangeDiscription = (e)=>{
        setDiscription(e.target.value);
    }
    return (
        <div className = "container-fluid">
            <div className = "row mb-3">
             <div className = "col col-sm-3">
             <CardProfile/>
                {/* <button><img src = {ImageLink} alt = {props.username} style = {{width: 100 + 'px', height: 100 + 'px'}}/> </button> */}
             </div>
             <div className = "col col-sm-5 mt-3">
                 <p>Welcome: {props.loggedinUser.userName}</p>
                 
                     {
                         showDiscription ? <> {discription} <button onClick = {()=>setShowDiscription(false)}>Edit</button></> : <>
                         <input type = "text" placeholder = "Please discribe your self" value = {discription} 
                             onChange = {OnChangeDiscription}
                         />
                         <buton className = "btn p-2 bg-info" onClick = {()=>setShowDiscription(true)} >save</buton>
                     </>}
                 
             </div>
             <div className = "col col-sm-4 justify-content-center">
                 <button className = "btn p-2" onClick = {()=>props.setLoggedin(false)}>LogOut</button>
             </div>
         </div>
             {
                UserDetail.map((seller, index)=>{
                    return <>
                        {
                            seller.type === "seller" ? <SellerRow key = {index} seller = {seller}/>
                            : null
                        }
                    </>
                 })
             }
             <div className ="row" style = {{height: 100 + 'px'}}></div>
        </div>
    )
}

const SellerRow = (props)=>{
    const [showProduct, setShowProduct] = useState(false);

    const ImageLink = "https://previews.123rf.com/images/budget/budget0906/budget090600433/5007708-graps.jpg";
    return (<>
        <div className = "row border bg-dark text-white buyerpage" onClick = {()=>setShowProduct(!showProduct)}>
           <div className = "col">
           <img className = "rounded-circle" src = {ImageLink} alt = {props.seller.userName} style = {{width: 100 + 'px', height: 100 + 'px'}}/> </div>
           <div className = "col mt-3">{props.seller.userName}</div>
           <div className = "col m-3">{props.seller.about}</div>
        </div>
        {
           showProduct ? 
            OrangeDtail.map((Orange, index)=>{
                return <> { Orange.Seller === props.seller.userId ?
                    <div className="card d-inline-block m-3" style={{width: 18 + "rem"}} key = {index}>
                       <img src= {Orange.OrangeImage} className="card-img-top" alt="..."/>
                       <div className="card-body">
                       <h5 className="card-title">{Orange.OrangeName}</h5>
                       <p className="card-text">{Orange.OrangeDiscription}</p>
                       <p className="btn btn-primary">{Orange.OrangePrice}</p>
                   </div>
                  </div> : null}</>
            })
        : null}
    </>)
}

export default Buyer;