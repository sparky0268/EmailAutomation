let userCredentials= function(){
    let userName="xyz@gmail.com"
    let password="12345"

    this.getUserName=function(){
        return userName
    }

    this.getPassword=function(){
        return password
    }
}
module.exports=new userCredentials()