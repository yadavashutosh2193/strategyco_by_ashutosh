import React, { useState } from 'react';
import Buyer from './Buyer';
import SellerDashboard from './SellerDashboard';
import SignupLogin from './SingupLogin';
import UserDetail from './UserDetail'


const Home = ()=>{
    const [loggedin, setLoggedin] = useState(false);
    const [userType, setUserType] = useState();
    const [userDetail, setUserDetail] = useState(UserDetail);
    const [productDetail, setProductDetail] = useState([]);
    const [loggedinUser, setLoggedInUser] = useState([])


    const mainLoginHandler = (userName, password, userType)=>{
        const getuser = UserDetail.find(user => user.userName === userName && user.password === password && user.type === userType);
        if(getuser !== undefined){
            setLoggedInUser(getuser);
            setUserType(userType);
            setLoggedin(true);
        }else{
            alert(`username ${userName} is not present please signup`);
        }
        console.log(userName + " " + getuser + "" + password + " " + userType);
                
    }
    const mainSignupHandler = (newUserName, newPassword, email, newUserType)=>{
        const getuser = UserDetail.find(user => user.userName === newUserName || user.email === email);
        if(getuser !== undefined){
            alert(`username ${newUserName} or email ${email} is alraedy exits`);
        }else{
            const newuser = {
                userName: newUserName, 
                password: newPassword, 
                about: "new user in real", 
                email: email, 
                type: newUserType,
                userId: UserDetail.length
            }
            UserDetail.push(newuser);
            setUserDetail(userDetail);
            setLoggedInUser(newuser);
            setUserType(newUserType);
            setLoggedin(true);
        }
        
    }
    return (
        <div>
        {!loggedin ? <SignupLogin mainLoginHandler = {mainLoginHandler}
         mainSignupHandler = {mainSignupHandler}/> 
         : <>
         {
             userType === "buyer" ? 
             <Buyer setLoggedin = {setLoggedin} loggedinUser = {loggedinUser} sellerDetail = {userDetail} product = {productDetail}/> 
             : <SellerDashboard setLoggedin = {setLoggedin} loggedinUser = {loggedinUser} setProductDetail = {setProductDetail}/>
         }
         
         </>}
        </div>
        )
}
export default Home;