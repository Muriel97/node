/**
 * Created by root on 8/30/16.
 */
var buf=new Buffer(10);
buf.fill(10);
console.log(buf.length);        //10
console.log(buf);       //<Buffer 0a 0a 0a 0a 0a 0a 0a 0a 0a 0a>

var buf1=new Buffer("zm","utf8");
console.log(buf1.length);       //2
console.log(buf1);      //<Buffer 7a 6d>

var str="赵萌萌";
var buf2=new Buffer(str);
console.log(str.length);        //2
console.log(buf2.length);       //6

console.log([str[1]]);      //[ '萌' ]
console.log([buf2[1]]);     //[ 181 ]

str[1]=["a"];
console.log(str);   //并没有修改   字符串对象一旦创建,将不能修改

//而buffer对象可以被修改,可以通过序列号
console.log([buf2[3]]);
console.log([buf2[4]]);
console.log([buf2[5]]);

buf2[0]=0xe8;
buf2[1]=190;
buf2[2]=176;

console.log(buf2.toString());