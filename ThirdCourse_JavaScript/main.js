alert("Hello "+Math.sin(233));

console.log("Hello".length);
console.log("Hello".charAt(0));
console.log("Hello World".replace("Hello", "Goodbye"));
console.log("Hello World".toUpperCase());

var NameA = "DasAuto";//var是全局变量
console.log(NameA);

let a = 1 + 1;//let是局部变量, 用于存放数字时类似于C语言中的double型
console.log(a);

NameA = "Simon";
console.log(NameA);

const LowAccuracyPi = 3.14;
console.log(LowAccuracyPi);
// LowAccuracyPi = 3.14159;//执行这一行会报错,因为const类型的变量不可修改

a = "3" + "4" + 5;
console.log(a);

a = 3 + 4 + "5";//这个地方是算完3+4之后发现接了个字符"5", 所以进行了类型转换, 变成了"7"+"5"
console.log(a);

console.log( a == 75);
console.log( a === 75 );//使用"==="进行"绝对等于"判断, 因为a在上面转换时最终被转换为字符串"75", 故此处输出为false

console.log( 1 == true);
console.log( 1 === true);

if( NameA == "Simon" && a === 75 ) {
    console.log( "NameA is Simon");
} else {//else if就不写了, 懒
    console.log( "NameA isn't Simon");
}

for( let i = 0; i < 10; i ++ ){
    console.log(i);
}//所以这家伙为什么和C语言完全一样啊...

var allowed = ( a >= 66 ) ? "Yes" : "No";
console.log(allowed);

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/
//我们经过严谨认真仔细的考古, 发现C语言好像是某些编程语言的爹

var data1 = new Object();//对象
var data2 = {};

data1 = {
    name:"Simon",
    age:20,
    Email:"#$%^%$_-__-@__--_.com",
    contact:{
        tel:"12313412",
        Telegram:"12423313",
    }
}

console.log(data1);
console.log(data1.name);
console.log(data1.contact);
console.log(data1.contact.tel);
data1.contact.tel = "52331338";
console.log(data1["contact"]["tel"]);
data1.contact.WeChat = "234234234";
console.log(data1.contact.WeChat);

var group1 = new Array();//数组
var group2 = [];

group1[0] = "dog";
group1[1] = "cat";
group1[5] = "tiger";
console.log(group1);
console.log(group1.length);
console.log(group1[2]);

group2 = ["dog", "cat", "tiger"];
console.log(group2);

group1.push("sheep");//在数组末尾添加元素
group1.push("sheep");

for( let i in group1 ){
    console.log(group1[i]);
}

group1.pop();//删除数组末尾的元素
console.log(group1);

group2.reverse();//倒序数组
console.log(group2);

group2.unshift("lion");//在开头添加元素
console.log(group2);

function SUM(){//JavaScript中的函数
    let sum =0;
    for ( let i = 0, j = arguments.length; i < j; i++ ){
        sum += arguments[i];
    }
    return sum;
}

a = SUM( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
console.log(a);


function Adder(a) {//函数闭包, 虽然不知道有什么必须要用它的场景, 但是这种想法和操作方式很酷
    return function(b) {
        return a + b;
    }
}
a = Adder(5);
NameA = a(6);
console.log(a);
console.log(NameA);