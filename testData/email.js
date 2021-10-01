let email= function(){
    let subject="First mail"
    let body="Hi automation using protractor"
    let To="xyx@gmail.com"
   // const FromPerson="abc@gmail.com"

    this.getSubject=function(){
        return subject
    }

    this.getBody=function(){
        return body
    }

    this.getTo=function(){
        return To
    }

    // this.getFrom=function(){
    //     return FromPerson
    // }
}
module.exports=new email()