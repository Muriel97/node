/**
 * Created by root on 8/30/16.
 */
var __name,__age;
var name="匿名",age=19;
var zm=function (name,age) {
    __name=name;
    __age=age;
}
zm.prototype.getName=function () {
    return __name;
}

zm.prototype.getAge=function () {
    return __age;
}

zm.prototype.setName=function (name) {
    __name=name;
}
zm.prototype.setAge=function (age) {
    if(age<10 || age>100){
        __age=18;
    }else{
        __age=age;
    }
}

zm.prototype.toString=function () {
    return "name="+__name+"  age="+__age;
}

zm.prototype.name=name;  //将初始化姓名传递到模块外
module.exports=zm;