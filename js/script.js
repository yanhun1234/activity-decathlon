
function clickCounter()
{
	if(typeof(Storage)!=="undefined")
	{
		if (sessionStorage.clickcount)
		{
			sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
		}
		else
		{
			sessionStorage.clickcount=1;
		}
	}
	else
	{
		document.getElementById("result").innerHTML="抱歉，您的浏览器不支持 web 存储";
	}
}
function jss(){
	alert(`完成答题可以获得 20-5优惠卷\n但是只有一次机会`)
}
// function fz(){
// 	console.log('javascript:document.body.contentEditable=true;document.designMode=on; void 0')
// 	alert(`快来领取迪卡侬20-5优惠券\n答对所有题就能获得!!!`)
// }
/**
 * 返回当前元素的文本内容
 * @parm {DOM} element 当前DOM元素
 */
function selectText(element){
    return element.innerText;
}
/**
 * @param {String} text 需要复制的内容
 * @return {Boolean} 复制成功:true或者复制失败:false  执行完函数后，按ctrl + v试试
*/
function copyText(text){
    var textareaC = document.createElement('textarea');
    textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
    textareaC.value = text;
    document.body.appendChild(textareaC); //将textarea添加为body子元素
    textareaC.select();
    var res = document.execCommand('copy');
    document.body.removeChild(textareaC);//移除DOM元素
    console.log("复制成功");
    return res;
}
