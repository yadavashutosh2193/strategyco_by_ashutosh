import React, {useState }  from 'react';
import '../Components/Component.css';

const SignupLogin = (props)=>{
  
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPasword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUserName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [UserEmailId, setUserEmailId] = useState("");
  const [UserType, setUserType] = useState("Select User Type");


  const IsEmpty = (val) => val === null || val === undefined || val === "";

   const OnChangeLoginUserName = (e)=>{
    setLoginUserName(e.target.value);
   }

   const OnChangeLoginPassword = (e)=>{
     setLoginPassword(e.target.value);
   }

   const OnChangeSignupUserName = (e)=>{
     setSignupUserName(e.target.value);
   }

   const OnChangeSignupPassword = (e)=>{
     setSignupPassword(e.target.value);
   }

   const OnChangeRepeatePassword = (e)=>{
      setRepeatPassword(e.target.value);
   }

const OnChangeUserEmailId = (e)=>{
  setUserEmailId(e.target.value);
}

const OnChangeUserType = (e)=>{
     setUserType(e.target.value);
}

const LocalSigninHandler = ()=>{
  if(IsEmpty(loginUserName)){
    alert("please fill username");
    return;
  }
  if(IsEmpty(loginPasword)){
    alert("please enter password");
    return;
  }
  if(UserType === "Select User Type"){
    alert("please select user type");
    return;
  }
  else{
    props.mainLoginHandler(loginUserName, loginPasword, UserType);
  }
}

const LocalSignupHandler = ()=>{
          if(IsEmpty(signupUsername)){
            alert("please create username");
            return;
          }
          if(IsEmpty(signupPassword)){
            alert("Plaese create password");
            return;
          }
          if(signupPassword !== repeatPassword){
            alert("password and confirm password must be same");
            return;
          }
          if(IsEmpty(UserEmailId)){
            alert("Please fill Email");
            return;
          }
          if(UserType === "Select User Type"){
            alert("please select user type");
            return;
          }
          else{
            props.mainSignupHandler(signupUsername, signupPassword, UserEmailId, UserType);
          }
}

   return (<>

     <div className="row">
    <div className="col-md-6 mx-auto p-0">
        <div className="card">
            <div className="login-box">

                <div className="login-snip">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/>
                <label htmlFor="tab-1" className="tab">Login</label> 
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab">Sign Up</label>

                    <div className="login-space">
                        <div className="login">
                            <div className="group"> 
                            
                            <label htmlFor="user" className="label">Username</label> 
                            <input id="user" type="text" value = {loginUserName} 
                            onChange = {OnChangeLoginUserName} className="input" 
                            placeholder="Enter your username"/> 
                            
                            </div>
                            <div className="group"> 
                            
                            <label htmlFor="pass" className="label">Password</label> 
                            <input id="pass" type="password" value = {loginPasword} 
                            onChange = {OnChangeLoginPassword} className="input" 
                            data-type="password" placeholder="Enter your password"/> </div>
                            
                            <label htmlFor = "selection" className = "label">Select User Type</label>
                            <select id = "selection" value = {UserType} className = "w-100 mb-3 selection" onChange = {OnChangeUserType}>
                               <option value = "select user type">Select User Type</option>
                              <option value = "seller">seller</option>
                              <option value = "buyer">buyer</option>
                            </select>

                            <div className="group"> 
                            
                            <input id="check" type="checkbox" className="check" defaultChecked/> 
                            <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> 
                            
                            </div>
                            <div className="group"> 
                            
                            <input type="submit" onClick = {LocalSigninHandler} 
                            className="button" value="Sign In"/> 
                            
                            </div>
                            <div className="hr"></div>
                            <div className="foot"> 
                            <a href="#">Forgot Password?</a> 
                            </div>
                        </div>


                        <div className="sign-up-form">
                            <div className="group"> 

                            <label htmlFor="usercreate" className="label">Username</label> 
                            <input id="usercreate" type="text" value = {signupUsername} 
                            onChange = {OnChangeSignupUserName} className="input" placeholder="Create your Username"/> 

                            </div>
                            <div className="group"> 
                            
                            <label htmlFor="passcreate" className="label">Password</label> 
                            <input id="passcreate" type="password" value = {signupPassword} 
                            onChange = {OnChangeSignupPassword} className="input" 
                            data-type="password" placeholder="Create your password"/> 
                            
                            </div>
                            <div className="group"> 
                            
                            <label htmlFor="passrepeat" className="label">Repeat Password</label> 
                            <input id="passrepeat" onChange = {OnChangeRepeatePassword} 
                            value = {repeatPassword} type="password" className="input" data-type="password" 
                            placeholder="Repeat your password"/> 
                            
                            </div>
                            <div className="group"> 
                            
                            <label htmlFor="email" className="label">Email Address</label> 
                            <input id="email" type="text" value = {UserEmailId} onChange = {OnChangeUserEmailId} 
                            className="input" placeholder="Enter your email address"/> 

                             <label htmlFor = "selectioncreate" className = "label m-2">Select User Type</label>
                             <select id = "selectioncreate" value = {UserType} 
                             className = "w-100 mb-3 selection" onChange = {OnChangeUserType}>
                               <option value = "select user type">Select User Type</option>
                              <option value = "seller">seller</option>
                              <option value = "buyer">buyer</option>
                            </select>
                            </div>
                            <div className="group"> 
                            
                            <input type="submit" onClick = {LocalSignupHandler} 
                            className="button" value="Sign Up"/> 
                            
                            </div>
                            <div className="hr"></div>
                            <div className="foot"> 
                            <label htmlFor="tab-1">Already Member?</label> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   </>)
}
export default SignupLogin