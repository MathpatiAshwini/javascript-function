function Array(user,callback){
    user.push(500);
    callback()
}
var user=[2,4,6,8];

Array(user,function(){
    console.log(user);
});