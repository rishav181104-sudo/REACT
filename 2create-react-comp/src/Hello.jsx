function Hello(){
  
  let number = 10;
  let myName = "Rishav";
  let fullName = ()=>{
    return "Rishav";
  }
  
 return <h3>
    MessageNo : {number} Hello this the future speaking . my name is {fullName()} 
  </h3>  
  //mai jaha pr v ye do bracket use krunga , waha pr mai koi bhi JS expression use kr skta hu.
}

export default Hello;