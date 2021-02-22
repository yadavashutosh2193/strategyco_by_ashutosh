import React, { useEffect, useState } from 'react';
import { CardProfile } from '../UploadPic';
import OrangeDtail from './OrangeDetail';

const SellerDashboard = (props)=>{
    const [addproductflage, setProductFlag] = useState(false);
    const [productName, setProductName] = useState("");
    const [productLink, setProductLink] = useState("https://i.pinimg.com/originals/50/91/3e/50913eeb04768a5b1fa9985c16704d96.jpg");
    const [ProductDiscription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productArray, setProductArray] = useState(OrangeDtail);
    const [discription, setDiscription] = useState(props.loggedinUser.about);
    const [showDiscription, setShowDiscription] = useState(false);

    useEffect(()=>{
        setProductArray(OrangeDtail);
    }, [OrangeDtail]);

    const IsEmpty = (val) => val === null || val === undefined || val === "";

    const OnChangeProductName = (e)=>{
        setProductName(e.target.value);
    }
   const OnChangeProductLink = (e)=>{
         setProductLink(e.target.value);
    }
    const OnChangeProductDescription = (e)=>{
        setProductDescription(e.target.value);
    }
    const OnChangeProductPrice = (e)=>{
        setProductPrice(e.target.value);
    }
    const OnChangeDiscription = (e)=>{
        setDiscription(e.target.value);
    }

    const saveHandler = ()=>{
              if(IsEmpty(productName)){
                  alert("please enter product name");
                  return;
              }
              if(IsEmpty(ProductDiscription)){
                  alert("Please Enter Prodct description");
                  return;
              }
              if(IsEmpty(productPrice)){
                  alert("Please enter product price");
                  return;
              }
              else{
                  const newProduct = {
                      OrangeName: productName, 
                      OrangeImage: productLink, 
                      OrangeDiscription: ProductDiscription, 
                      OrangePrice: productPrice,
                      Seller: props.loggedinUser.userId

                };
                  productArray.push(newProduct);
                  setProductArray(productArray);
                  setProductFlag(false);
                  props.setProductDetail(newProduct);
              }
    }
    //   const ImageLink = "https://previews.123rf.com/images/budget/budget0906/budget090600433/5007708-graps.jpg";
    return <div className = "container-fluid">
         <div className = "row">
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
                         <button className = "btn p-2 bg-info" onClick = {()=>setShowDiscription(true)} >save</button>
                     </>}
                 
             </div>
             <div className = "col col-sm-4 justify-content-center">
                 <button className = "btn p-2" onClick = {()=>setProductFlag(!addproductflage)}>Add New Orange</button>
                 <button className = "btn p-2" onClick = {()=>props.setLoggedin(false)}>LogOut</button>
             </div>
         </div>
         {
             addproductflage ? <>
             <div className = "row">
             <div className = "col p-3">
             <input type = "text" value = {productName} onChange = {OnChangeProductName} placeholder = "Enter Orange Name" className = "p-2"/>
             </div> 
             <div className = "col ml-2 p-3">
             <input type = "text" value = {productLink} onChange = {OnChangeProductLink}  placeholder = "Past Orange Image link" className = "p-2"/> 
             </div>
             <div className = "col ml-2 p-3">
             <input type = "text" value = {ProductDiscription} onChange = {OnChangeProductDescription} placeholder = "Enter Orange description" className = "p-2"/> 
             </div>
             <div className = "col ml-2 p-3">
                 <input type = "number" className = "p-2" value = {productPrice} onChange = {OnChangeProductPrice} placeholder = "Enter Orange Price"/>
             </div>
             <div className = "col ml-2">
             <button onClick = {saveHandler}>Save Orange</button>
             </div>
             </div>
             </>
             : null
         }
         <div className = "row pt-3">
                    <div className = "col col-sm-2"><p>Orange Image</p></div>
                    <div className = "col col-sm-3"><p>Orange Name</p></div>
                    <div className = "col col-sm-3"><p>Orange Description</p></div>
                    <div className = "col col-sm-2"><p>Orange Price</p></div>
                    <div className = "col col-sm-2"><p>Edit Orange</p></div>
              </div>
   
      {
          productArray.map((orange, index)=>{
              return <ShowOrange setProductArray = {setProductArray} orange = {orange} id = {index} key = {index} loggedinUser = {props.loggedinUser}/>
          })
      }

    </div>
}

export default SellerDashboard;


const ShowOrange = (props)=>{
    const [showEdit, setShowEdit] = useState(false);
    const [orangeName, setOrangeName] = useState(props.orange.OrangeName);
    const [orangeDiscription, setOrangeDiscription] = useState(props.orange.OrangeDiscription)
    const [orangePrice, setOrangePrice] = useState(props.orange.OrangePrice);

    const EditSaveHandler = ()=>{
        const index = props.id;
        const updatedOrange = {
                      OrangeName: orangeName, 
                      OrangeImage: props.orange.OrangeImage, 
                      OrangeDiscription: orangeDiscription, 
                      OrangePrice: orangePrice,
                      Seller: props.orange.Seller,
                      OrangeId: props.orange.OrangeId
        }
        OrangeDtail.splice(index, 1, updatedOrange);
        props.setProductArray(OrangeDtail);
        setShowEdit(false)
    }
    
    return <>
    {
        props.orange.Seller === props.loggedinUser.userId ?<>
        {
            !showEdit ? <div className = "row mt-2">
                   <div className = "col col-sm-2"><img className = "rounded-circle" src = {props.orange.OrangeImage} style = {{width: 100 + 'px', height: 100 + 'px'}} alt = {props.orange.OrangeName}/> </div>
                   <div className = "col col-sm-3 pt-3">{props.orange.OrangeName}</div>
                   <div className = "col col-sm-3 p-3">{props.orange.OrangeDiscription}</div>
                   <div className = "col col-sm-2 p-3">{props.orange.OrangePrice}</div>
                   <div className = "col col-sm-2" onClick = {()=>setShowEdit(true)}><button>Edit</button></div>
           </div>
    : <div className = "row mt-2">
      <div className = "col col-sm-2"><img className = "rounded-circle" src = {props.orange.OrangeImage} style = {{width: 100 + 'px', height: 100 + 'px'}} alt = {props.orange.OrangeName}/> </div>
      <div className = "col col-sm-3 pt-3">
      <input type = "text" value = {orangeName} onChange = {(e)=>setOrangeName(e.target.value)}/>
       </div>
      <div className = "col col-sm-3 p-3">
          <input type = "text" value = {orangeDiscription} onChange = {(e)=>setOrangeDiscription(e.target.value)}/>
      </div>
      <div className = "col col-sm-2 p-3">
      <input type = "text" value = {orangePrice} onChange = {(e)=>setOrangePrice(e.target.value)}/>
      </div>
      <div className = "col col-sm-2" onClick = {EditSaveHandler}><button>save</button></div>
</div>
        }</>
: null
    }
</>
}