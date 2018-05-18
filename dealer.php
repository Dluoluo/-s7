<?php
function request($url = '', $parameter_data ="") {	
	$postUrl = $url;
	$curlPost = $parameter_data;
	$ch = curl_init();//初始化curl
	curl_setopt($ch, CURLOPT_URL,$postUrl);//抓取指定网页
	curl_setopt($ch, CURLOPT_HEADER, 0);//设置header
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上
	curl_setopt($ch, CURLOPT_POST, 1);//post提交方式
	curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
	$data = curl_exec($ch);//运行curl
	curl_close($ch);
	return $data;
}

//测试地址

//经销商
$Host = "http://www.jac.com.cn/jacservice/searchdealers";
//正式地址
//$Host = "http://www.changan.com.cn/api.php";
$getDate = $_SERVER['QUERY_STRING'];
$postDate = file_get_contents("php://input");
echo request($Host."?".$getDate,$postDate);