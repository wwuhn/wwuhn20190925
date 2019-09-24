<!--tab control：tab1-5,8--> 
function tabSwitch(tab,ao) {
	var h = document.getElementById(tab).getElementsByTagName("h3");
	var d = document.getElementById(tab).getElementsByTagName("div");
	for (var i = 0; i < 10; i++) {
		if (ao - 1 == i) {
			h[i].className += " up";
			d[i].className += " block";
		} else {
			h[i].className = " ";
			d[i].className = " ";
		}
	}
}
<!--tab6、tab7-->
function tabSwitch2(tab,ao) {
    var d = document.getElementById(tab).getElementsByTagName("div");
    for (var i = 0; i < 10; i++) {
        if (ao - 1 == i) {
            d[i].className += " block";
        } else {
            d[i].className = " ";
        }
    }
}
<!--control tab6、tab7-->

<!-- 两个CSS样式应用-->
function changecss(nh) {
	CSS.href="";
	CSS.href=nh;
}
<!--两个CSS样式应用-->

<!--两类链接的窗口打开方式javascript:void(null)-->	
function mytarget(){
var links = document.links;
for(var i =0; i < links.length;i++)
	{
		if (links[i].href == "javascript:void(null)") 
			{
			links[i].target="_self";
			}
		else
			{
			links[i].target="_blank";
			}
		//alert(links[i].href);
	
	}
}

<!-- floating image Dreamweaver Extension-->
var brOK = false;
var mie = false;
var aver = parseInt(navigator.appVersion.substring(0, 1));
var aname = navigator.appName;
//check browser   
function checkbrOK() {
    if (aname.indexOf("Internet Explorer") != -1) {
        if (aver >= 4) brOK = navigator.javaEnabled();
        mie = true;
    }
    if (aname.indexOf("Netscape") != -1) {
        if (aver >= 4) brOK = navigator.javaEnabled();
    }
}

var vmin = 5;
var vmax = 2;
var vr = 2;
var timer1;

function Chip(chipname, width, height) {
    this.named = chipname;
    this.vx = vmin + vmax * Math.random();
    this.vy = vmin + vmax * Math.random();
    this.w = width;
    this.h = height;
    this.xx = 0;
    this.yy = 0;
    this.timer1 = null;
}

function movechip(chipname) {
    if (brOK) {
        eval("chip=" + chipname);
        if (!mie) {
            pageX = window.pageXOffset;
            pageW = window.innerWidth;
            pageY = window.pageYOffset;
            pageH = window.innerHeight;
        } else {
            pageX = window.document.body.scrollLeft;
            pageW = window.document.body.offsetWidth - 8;
            pageY = window.document.body.scrollTop;
            pageH = window.document.body.offsetHeight;
        }
        chip.xx = chip.xx + chip.vx;
        chip.yy = chip.yy + chip.vy;
        chip.vx += vr * (Math.random() - 0.5);
        chip.vy += vr * (Math.random() - 0.5);
        if (chip.vx > (vmax + vmin)) chip.vx = (vmax + vmin) * 2 - chip.vx;
        if (chip.vx < (-vmax - vmin)) chip.vx = (-vmax - vmin) * 2 - chip.vx;
        if (chip.vy > (vmax + vmin)) chip.vy = (vmax + vmin) * 2 - chip.vy;
        if (chip.vy < (-vmax - vmin)) chip.vy = (-vmax - vmin) * 2 - chip.vy;
        if (chip.xx <= pageX) {
            chip.xx = pageX;
            chip.vx = vmin + vmax * Math.random();
        }
        if (chip.xx >= pageX + pageW - chip.w) {
            chip.xx = pageX + pageW - chip.w;
            chip.vx = -vmin - vmax * Math.random();
        }
        if (chip.yy <= pageY) {
            chip.yy = pageY;
            chip.vy = vmin + vmax * Math.random();
        }
        if (chip.yy >= pageY + pageH - chip.h) {
            chip.yy = pageY + pageH - chip.h;
            chip.vy = -vmin - vmax * Math.random();
        }
        if (!mie) {
            eval('document.' + chip.named + '.top =' + chip.yy);
            eval('document.' + chip.named + '.left=' + chip.xx);
        } else {
            eval('document.all.' + chip.named + '.style.pixelLeft=' + chip.xx);
            eval('document.all.' + chip.named + '.style.pixelTop =' + chip.yy);
        }
        chip.timer1 = setTimeout("movechip('" + chip.named + "')", 100);
    }
}

function stopme(chipname) {
    if (brOK) { //alert(chipname)  
        eval("chip=" + chipname);
        if (chip.timer1 != null) {
            clearTimeout(chip.timer1)
        }
    }
}

function MM_displayStatusMsg(msgStr) { //v1.0
    status = msgStr;
    document.MM_returnValue = true;
}

function MM_controlSound(x, _sndObj, sndFile) { //v3.0
    var i, method = "",
        sndObj = eval(_sndObj);
    if (sndObj != null) {
        if (navigator.appName == 'Netscape') method = "play";
        else {
            if (window.MM_WMP == null) {
                window.MM_WMP = false;
                for (i in sndObj) if (i == "ActiveMovie") {
                    window.MM_WMP = true;
                    break;
                }
            }
            if (window.MM_WMP) method = "play";
            else if (sndObj.FileName) method = "run";
        }
    }
    if (method) eval(_sndObj + "." + method + "()");
    else window.location = sndFile;
}
<!-- floating image Dreamweaver Extension-->

	
<!--显示\隐藏层的代码；-->
function MM_showHideLayers() { //v6.0
    var i, p, v, obj, args = MM_showHideLayers.arguments;
    for (i = 0; i < (args.length - 2); i += 3) if ((obj = MM_findObj(args[i])) != null) {
        v = args[i + 2];
        if (obj.style) {
            obj = obj.style;
            v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
        }
        obj.visibility = v;
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
}
<!--显示\隐藏层的代码；-->


<!--按星期显示TV table-->
function tvset() {
	var today2 = new Date();
	var isnDay = new
	Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun.");
	var h = document.getElementById("tab5").getElementsByTagName("h3");
	var d = document.getElementById("tab5").getElementsByTagName("div");
	switch (isnDay[today2.getDay()]) {
	case "Sat.":
		h[0].className += " ";
		d[0].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[2].className += " up";
		d[2].className += " block";
		h[3].className += " ";
		d[3].className += " ";
		break;
	case "Sun.":
		h[3].className += " up";
		d[3].className += " block";
		h[0].className += " ";
		d[0].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[2].className += " ";
		d[2].className += " ";
		break;
	case "Fri.":
		h[0].className += " up";
		d[0].className += " block";
		h[2].className += " ";
		d[2].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[3].className += " ";
		d[3].className += " ";
		break;
	case "Mon.":
		h[0].className += " up";
		d[0].className += " block";
		h[2].className += " ";
		d[2].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[3].className += " ";
		d[3].className += " ";
		break;
	case "Tue.":
		h[0].className += " up";
		d[0].className += " block";
		h[2].className += " ";
		d[2].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[3].className += " ";
		d[3].className += " ";
		break;
	case "Wed.":
		h[0].className += " up";
		d[0].className += " block";
		h[2].className += " ";
		d[2].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[3].className += " ";
		d[3].className += " ";
		break;
	case "Thu.":
		h[0].className += " up";
		d[0].className += " block";
		h[2].className += " ";
		d[2].className += " ";
		h[1].className += " ";
		d[1].className += " ";
		h[3].className += " ";
		d[3].className += " ";
		break;
	}
}
<!--按星期显示TV table-->


<!--clock func-->
function init() { <!--初始化 -->
    /*tim2.style.left=tim1.style.posLeft;*/
    <!--将第二个时间得左侧与第一个时间的左侧对齐 -->
    /*tim2.style.top=tim1.style.posTop+tim1.offsetHeight-6;*/
    <!--第二个时间在第一个时间的下方 -->
    settimes(); <!--调用settimes()函数 -->
}

function settimes() {
    var stime = new Date(); <!--获取当前日期 -->
    hours = stime.getHours(); <!--获取当前时间 - 小时 -->
    mins = stime.getMinutes(); <!--获取当前时间 - 分钟 -->
    secs = stime.getSeconds(); <!--获取当前时间 - 秒 -->
    if (hours < 10) <!--如果小时仅有一位，在前面补零 -->
    hours = "0" + hours;
    if (mins < 10) <!--如果分钟仅有一位，在前面补零 -->
    mins = "0" + mins;
    if (secs < 10) <!--如果秒仅有一位，在前面补零 -->
    secs = "0" + secs;

    var today2 = new Date();
    var event1 = "New Day"
    var cdtime = "10/19/2019";
    var festive = new Date(cdtime);
    festive1 = parseInt((festive - today2) / spd);
    festive2 = parseInt((festive - today2) / spd * 24) - parseInt(festive1 * 24);
    festive3 = parseInt((festive - today2) / spd * 24 * 60) - parseInt(festive1 * 24 * 60) - parseInt(festive2 * 60);
    festive4 = 60 - secs
    festivewri.innerHTML = event1 + "</br>" + cdtime + "</br>" + "count down:" + "</br>" + festive1 + "天" + festive2 + "时" + "</br>" + festive3 + "分" + festive4 + "</br>" + "</br>" + "学会从容" + "</br>" + "减少欲求" + "</br>" + "&nbsp;" + "</br>" + "由今往昔" + "</br>" + "一日三省" + "</br>" + "前瞻五年" + "</br>" + "未来的你" + "</br>" + "回溯如今" + "</br>" + "审视反省" + "</br>" + "思维行动" + "</br>" + "修正调整" + "</br>" + "" + "</br>" + "真善美爱" + "</br>" + "Truth" + "</br>" + "Kindness" + "</br>" + "Beauty" + "</br>" + "Love" + "</br>" + "" + "</br>" + "知行勤思" + "</br>" + "Knowledgement" + "</br>" + "Action" + "</br>" + "Diligent" + "</br>" + "Reflection"; <!--设置festivewri的格式 -->
    tim1.innerHTML = hours + ":" + mins + ":" + secs; <!--设置tim1和tim2的格式 -->
    /*tim2.innerHTML=hours+":"+mins+":"+secs*/
    setTimeout1('settimes()', 1000); <!--每1秒更新一次时间 -->
}
	
function MM_displayStatusMsg(msgStr) { //v1.0
	status=msgStr;
	document.MM_returnValue = true;
}
<!--clock func-->

<!--tab control-->
//综合搜索
function search(){
if(formmain.urldecode.checked) //chrome复制的url包含中文时，会转为编码，下面js可以转回
{
    var str = decodeURI(formmain.searchkey.value);
	//var str = decodeURI(document.location.href);
    var str2 = str.substring(8);
    //str.slice(8);
    //str.replace("file:///","");
    formmain.searchkey.value = str;//str2
	var Url2=document.getElementById("urldecode");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
	target.value=formmain.searchkey.value;
	target.select();
	js=myimg.createTextRange();
	js.execCommand("Copy");
}

if(formmain.rdbaidu.checked)
window.open("http://www.baidu.com/baidu?tn=zhongguosou&ct=&lm=&z=&rn=&word="+formmain.searchkey.value+"&_si.x=4&_si.y=2");
if(formmain.rd360sou.checked)
window.open("http://www.so.com/s?ie=utf-8&src=360sou_home&q=" + encodeURI(formmain.searchkey.value) + "&_re=0"); 

//if(formmain.rdgoogle.checked)
//window.open("http://www.google.com.hk/search?hl=zh-CN&q=" + encodeURI(formmain.searchkey.value));

if(formmain.rdbaidupic.checked)
window.open("http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=" + encodeURI(formmain.searchkey.value));

if(formmain.rd_bing.checked)
  window.open("http://www.bing.com/search?q="+encodeURI(formmain.searchkey.value));

if(formmain.rdsogou.checked)
window.open("http://www.sogou.com/web?query="+formmain.searchkey.value+"&sogouhome=");

if(formmain.rdsoso.checked)
window.open("http://www.soso.com/q?pid=s.idx&w=" + formmain.searchkey.value);

if(formmain.rd_cibo.checked)
window.open("http://www.cibo.cn/search.php?dictkeyword=" + encodeURI(formmain.searchkey.value)); 


if(formmain.rdbingzonghe.checked)
window.open("https://cn.bing.com/dict/search?q=" + decodeURI(encodeURI(formmain.searchkey.value)));
if(formmain.rdcidu.checked)
window.open("http://www.dictall.com/dictall/result.jsp?cd=UTF-8&keyword="+encodeURI(formmain.searchkey.value)); 

if(formmain.rd_wiki.checked)
  window.open("https://en.wikipedia.org/wiki/" + encodeURI(formmain.searchkey.value));

if(formmain.rddcping.checked)
window.open("http://cn.bing.com/dict/search?q=" + formmain.searchkey.value);

if(formmain.rdbdmap.checked)
window.open("https://map.baidu.com/search/"+ formmain.searchkey.value);
																																								//https://map.baidu.com/search/唐阁村/@12605919.934999999,2647180.885,16z?querytype=s&da_src=shareurl&wd=唐阁村&c=257&src=0&pn=0&sug=0&l=13&b=(12587965,2639228;12631645,2662364)&from=webmap&biz_forward=%7B"scaler":1,"styles":"pl"%7D&device_ratio=1
//https://map.baidu.com/search/长沙市
///@12573169,3258221.75,12z?querytype=s&da_src=shareurl&wd=长沙市&c=257&src=0&pn=0&sug=0&l=16&b=(12603189.934999999,2645734.885;12608649.934999999,2648626.885)&from=webmap&biz_forward=%7B"scaler":1,"styles":"pl"%7D&device_ratio=1																																		

//if(formmain.bdbaike.checked)
//window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.searchkey.value) + "&tn=bds&cl=3&ct=2097152&si=baike.baidu.com&s=on"); 
//}



if(formmain.rd_gzlib.checked)
window.open("http://www.gzlib.gov.cn/member/loanRenew.jspx"); 

if(formmain.bdbaike.checked)
window.open("https://baike.baidu.com/item/" + encodeURI(formmain.searchkey.value)); 
}




//google搜索搜索特定网站;

function customSearch() {
    window.open("http://www.google.com.hk/search?q=" + formCustom.q.value + "&sitesearch=" + formCustom.sitesearch.value + "&domains=" + formCustom.sitesearch.value + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg"); 
}


var menuids=["menu1"]

// 定义主函数
function buildsubmenus_horizontal() {
    for (var i = 0; i < menuids.length; i++) {
        //  获取指定的DIV容器中的列表元素UL
        var ultags = document.getElementById(menuids[i]).getElementsByTagName("ul")
        for (var t = 0; t < ultags.length; t++) {
            if (ultags[t].parentNode.parentNode.id == menuids[i]) { // 假如是顶级子菜单列表
                ultags[t].style.top = ultags[t].parentNode.offsetHeight + 0 + "px" //则设置它的位置
                // 定义类名，套用CSS样式
                ultags[t].parentNode.getElementsByTagName("a")[0].className = "mainfoldericon"
            } else { //假如是子菜单列表(ul)
                ultags[t].style.left = ultags[t - 1].getElementsByTagName("a")[0].offsetWidth + "px" //则设置它的位置
                // 定义类名，套用CSS样式
                ultags[t].parentNode.getElementsByTagName("a")[0].className = "subfoldericon"
            }
            //  定义鼠标事件函数
            ultags[t].parentNode.onmouseover = function() {
                // 鼠标移上去时显示其子列表
                this.getElementsByTagName("ul")[0].style.visibility = "visible"
            }
            //  鼠标移开时将其隐藏
            ultags[t].parentNode.onmouseout = function() {
                this.getElementsByTagName("ul")[0].style.visibility = "hidden"
            }
        }
    }
}
//  添加页面事件
if (window.addEventListener)
	window.addEventListener("load", buildsubmenus_horizontal, false)
//  attachEvent 方法监视页面中的事件
else if (window.attachEvent)
	window.attachEvent("onload", buildsubmenus_horizontal)

function copyclip(txt) {
    if (window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", txt);
    } else if (navigator.userAgent.indexOf("Opera") != -1) {
        window.location = txt;
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("您的firefox安全限制限制您进行剪贴板操作，请在新窗口的地址栏里输入'about:config'然后找到'signed.applets.codebase_principal_support'设置为true'");
            return false;
        }
        var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
        if (!clip) return;
        var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
        if (!trans) return;
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);
        var clipid = Components.interfaces.nsIClipboard;
        if (!clip) return false;
        clip.setData(trans, null, clipid.kGlobalClipboard);
    }
}