	//定义 城市 数据数组
	cityArray = new Array();
	cityArray[0] = new Array("北京市","北京"); 
	cityArray[1] = new Array("上海市","上海"); 
	cityArray[2] = new Array("天津市","天津"); 
	cityArray[3] = new Array("重庆市","重庆"); 
	cityArray[4] = new Array("河北省","石家庄市|邯郸市|邢台市|保定市|张家口市|承德市|廊坊市|唐山市|秦皇岛市|沧州市|衡水市"); 
	cityArray[5] = new Array("山西省","太原市|大同市|阳泉市|长治市|晋城市|朔州市|吕梁市|忻州市|晋中市|临汾市|运城市"); 
	cityArray[6] = new Array("内蒙古自治区","呼和浩特市|包头市|乌海市|赤峰市|呼伦贝尔市|阿拉善盟|兴安盟|乌兰察布|锡林郭勒盟|巴彦淖尔市|鄂尔多斯市|通辽市"); 
	cityArray[7] = new Array("辽宁省","沈阳市|大连市|鞍山市|抚顺市|本溪市|丹东市|锦州市|营口市|阜新市|辽阳市|盘锦市|铁岭市|朝阳市|葫芦岛市"); 
	cityArray[8] = new Array("吉林省","长春市|吉林市|四平市|辽源市|通化市|白山市|松原市|白城市|延边"); 
	cityArray[9] = new Array("黑龙江省","哈尔滨市|齐齐哈尔市|牡丹江市|佳木斯市|大庆市|绥化市|鹤岗市|鸡西市|黑河市|双鸭山市|伊春市|七台河市"); 
	cityArray[10] = new Array("江苏省","南京市|镇江市|苏州市|南通市|扬州市|盐城市|徐州市|连云港市|常州市|无锡市|宿迁市|泰州市|淮安市"); 
	cityArray[11] = new Array("浙江省","杭州市|宁波市|温州市|嘉兴市|湖州市|绍兴市|金华市|衢州市|舟山市|台州市|丽水市"); 
	cityArray[12] = new Array("安徽省","合肥市|芜湖市|蚌埠市|马鞍山市|淮北市|铜陵市|安庆市|黄山市|滁州市|宿州市|池州市|淮南市|巢湖市|阜阳市|六安市|宣城市|亳州市"); 
	cityArray[13] = new Array("福建省","福州市|厦门市|莆田市|三明市|泉州市|漳州市|南平市|龙岩市|宁德市"); 
	cityArray[14] = new Array("江西省","南昌市|景德镇市|九江市|鹰潭市|萍乡市|新余市|赣州市|吉安市|宜春市|抚州市|上饶市"); 
	cityArray[15] = new Array("山东省","济南市|青岛市|淄博市|枣庄市|东营市|烟台市|潍坊市|济宁市|泰安市|威海市|日照市|莱芜市|临沂市|德州市|聊城市|滨州市|菏泽市|曲阜市"); 
	cityArray[16] = new Array("河南省","郑州市|开封市|洛阳市|平顶山市|安阳市|鹤壁市|新乡市|焦作市|濮阳市|许昌市|漯河市|三门峡市|南阳市|商丘市|信阳市|周口市|驻马店市|济源市"); 
	cityArray[17] = new Array("湖北省","武汉市|宜昌市|荆州市|襄阳市|黄石市|荆门市|黄冈市|十堰市|恩施市|潜江市|天门市|仙桃市|随州市|咸宁市|孝感市|鄂州市");
	cityArray[18] = new Array("湖南省","长沙市|常德市|株洲市|湘潭市|衡阳市|岳阳市|邵阳市|益阳市|娄底市|怀化市|郴州市|永州市|湘西|张家界市|吉首市"); 
	cityArray[19] = new Array("广东省","广州市|深圳市|珠海市|汕头市|东莞市|中山市|佛山市|韶关市|江门市|湛江市|茂名市|肇庆市|惠州市|梅州市|汕尾市|河源市|阳江市|清远市|潮州市|揭阳市|云浮市"); 
	cityArray[20] = new Array("广西壮族自治区","南宁市|柳州市|桂林市|梧州市|北海市|防城港市|钦州市|贵港市|玉林市|贺州市|百色市|河池市"); 
	cityArray[21] = new Array("海南省","海口市|三亚市|三沙市"); 
	cityArray[22] = new Array("四川省","成都市|绵阳市|德阳市|自贡市|攀枝花市|广元市|内江市|乐山市|南充市|宜宾市|广安市|达州市|雅安市|眉山市|甘孜|凉山|泸州市|巴中市|西昌市"); 
	cityArray[23] = new Array("贵州省","贵阳市|六盘水市|遵义市|安顺市|铜仁市|毕节市|黔东南|黔南|黔西南"); 
	cityArray[24] = new Array("云南省","昆明市|大理|曲靖市|玉溪市|昭通市|楚雄市|红河|文山|思茅市|西双版纳|保山市|德宏|临沧市|普洱市");
	cityArray[25] = new Array("西藏自治区","拉萨市"); 
	cityArray[26] = new Array("陕西省","西安市|宝鸡市|咸阳市|铜川市|渭南市|延安市|榆林市|汉中市|安康市|商洛市"); 
	cityArray[27] = new Array("甘肃省","兰州市|嘉峪关市|金昌市|白银市|天水市|酒泉市|张掖市|武威市|定西市|陇南市|平凉市|庆阳市|临夏市|甘南市"); 
	cityArray[28] = new Array("宁夏回族自治区","银川市|吴忠市|固原市"); 
	cityArray[29] = new Array("青海省","西宁市|格尔木市|德令哈市|海西"); 
	cityArray[30] = new Array("新疆维吾尔自治区","乌鲁木齐市|克拉玛依市|伊犁哈萨克自治州|昌吉回族自治州|喀什市|阿克苏市|库尔勒市|哈密市"); 
	cityArray[31] = new Array("香港特别行政区","香港特别行政区"); 
	cityArray[32] = new Array("澳门特别行政区","澳门特别行政区"); 
	cityArray[33] = new Array("台湾省","无");
	cityArray[33] = new Array("省份","城市");

	//修改省市下拉的id
	function getCity(currCity) //城市信息
	{
		currProvince = $("#province").val();
		//alert("currProvince=="+currProvince);
		//当前 所选择 的 省
		var currProvincecurrProvince = currProvince;
		var i, j, k;
		//清空 城市 下拉选单
		document.all.city.length = 0;
		//alert("dfd=="+cityArray.length);

		for (i = 0; i < cityArray.length; i++) {
			//得到 当前省 在 城市数组中的位置
			if (cityArray[i][0] == currProvince) {
				//得到 当前省 所辖制的 地市
				tmpcityArray = cityArray[i][1].split("|");
        document.all.city.options[0]=new Option("城市", "城市");

				for (j = 0; j < tmpcityArray.length; j++) {
					//填充 城市 下拉选单
					document.all.city.options[document.all.city.length] = new Option(tmpcityArray[j], tmpcityArray[j]);

					if (currCity == tmpcityArray[j]) {
						document.all.city.options[j].selected = 'true';

					}
				}
			}
		}
	}
    //修改省市下拉的id2
    function getCity2(currCity) //城市信息
    {
      currProvince = $("#province2").val();
      //当前 所选择 的 省
      var currProvincecurrProvince = currProvince;
      var i, j, k;
      //清空 城市 下拉选单
      document.all.city2.length = 0;
      //alert("dfd=="+cityArray.length);

      for (i = 0; i < cityArray.length; i++) {
        //得到 当前省 在 城市数组中的位置
        if (cityArray[i][0] == currProvince) {
          //得到 当前省 所辖制的 地市
          tmpcityArray = cityArray[i][1].split("|");
        document.all.city2.options[0]=new Option("城市", "城市");

          for (j = 0; j < tmpcityArray.length; j++) {
            //填充 城市 下拉选单
            document.all.city2.options[document.all.city2.length] = new Option(tmpcityArray[j], tmpcityArray[j]);

            if (currCity == tmpcityArray[j]) {
              document.all.city2.options[j].selected = 'true';

            }
          }
        }
      }
    }



	//princeArray=new Array();
	PrinceArray = new Array("省份","北京市","上海市","天津市","重庆市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","宁夏回族自治区","青海省","新疆维吾尔自治区","香港特别行政区","澳门特别行政区","台湾省","其他");
	


	function getPrince(Prinvince) { //省份信息显示
		//alert(Prinvince);
		//alert(PrinceArray.length);
		var s;
		document.getElementById("province").options.length = 0;
		for (s = 0; s < PrinceArray.length; s++) {
			//alert(s);
			//填充省分下拉列表框
			//document.getElementById("province").options[s]=new Option(PrinceArray[s]);
			document.getElementById("province").options[s] = new Option(PrinceArray[s]);
			if (Prinvince == PrinceArray[s]) {
				document.getElementById("province").options[s].selected = 'true';

			}
			//alert(shengArray[s]);
		}

	}

    function getPrince2(Prinvince) { //省份信息显示2
      //alert(Prinvince);
      //alert(PrinceArray.length);
      var s;
      document.getElementById("province2").options.length = 0;
      for (s = 0; s < PrinceArray.length; s++) {
        //alert(s);
        //填充省分下拉列表框
        //document.getElementById("province").options[s]=new Option(PrinceArray[s]);
        document.getElementById("province2").options[s] = new Option(PrinceArray[s]);
        if (Prinvince == PrinceArray[s]) {
          document.getElementById("province2").options[s].selected = 'true';

        }
        //alert(shengArray[s]);
      }

    }

	//总2968个省
	xianArray = new Array();
	//北京
  xianArray[0] = new Array("东城","全部|东城区");
  xianArray[1] = new Array("西城","全部|西城区");
  xianArray[2] = new Array("崇文","全部|崇文区");
  xianArray[3] = new Array("宣武","全部|宣武区");
  xianArray[4] = new Array("朝阳","全部|朝阳区");
  xianArray[5] = new Array("丰台","全部|丰台区");
  xianArray[6] = new Array("石景山","全部|石景山区");
  xianArray[7] = new Array("海淀","全部|海淀区");
  xianArray[8] = new Array("门头沟","全部|门头沟区");
  xianArray[9] = new Array("房山","全部|房山区");
  xianArray[10] = new Array("通州","全部|通州区");
  xianArray[11] = new Array("顺义","全部|顺义区");
  xianArray[12] = new Array("昌平","全部|昌平区");
  xianArray[13] = new Array("大兴","全部|大兴区");
  xianArray[14] = new Array("平谷","全部|平谷区");
  xianArray[15] = new Array("怀柔","全部|怀柔区");
  xianArray[16] = new Array("密云","全部|密云县");
  xianArray[17] = new Array("延庆","全部|延庆县");
  //上海
  xianArray[18] = new Array("黄浦","全部|黄浦区");
  xianArray[19] = new Array("卢湾","全部|卢湾区");
  xianArray[20] = new Array("徐汇","全部|徐汇区");
  xianArray[21] = new Array("长宁","全部|长宁区");
  xianArray[22] = new Array("静安","全部|静安区");
  xianArray[23] = new Array("普陀","全部|普陀区");
  xianArray[24] = new Array("闸北","全部|闸北区");
  xianArray[25] = new Array("虹口","全部|虹口区");
  xianArray[26] = new Array("杨浦","全部|杨浦区");
  xianArray[27] = new Array("闵行","全部|闵行区");
  xianArray[28] = new Array("宝山","全部|宝山区");
  xianArray[29] = new Array("嘉定","全部|嘉定区");
  xianArray[30] = new Array("浦东","全部|浦东区");
  xianArray[31] = new Array("金山","全部|金山区");
  xianArray[32] = new Array("松江","全部|松江区");
  xianArray[33] = new Array("青浦","全部|青浦区");
  xianArray[34] = new Array("南汇","全部|南汇区");
  xianArray[35] = new Array("奉贤","全部|奉贤区");
  xianArray[36] = new Array("崇明","全部|崇明县");
  //河南
  xianArray[37] = new Array("郑州","全部|中原区|二七区|管城区|金水区|上街区|惠济区|巩义市|荥阳市|新密市|新郑市|登封市|中牟县");
  xianArray[38] = new Array("开封","全部|鼓楼区|龙亭区|顺河区|禹王台区|金明区|杞县|通许县|尉氏县|开封县|兰考县");
  xianArray[39] = new Array("洛阳","全部|西工区|老城区|瀍河区|涧西区|吉利区|洛龙区|偃师市|孟津县|新安县|栾川县|嵩县|汝阳县|宜阳县|洛宁县|伊川县");
  xianArray[40] = new Array("平顶山","全部|新华区|卫东区|湛河区|石龙区|舞钢市|汝州市|宝丰县|叶县|鲁山县|郏县");
  xianArray[41] = new Array("安阳","全部|北关区|文峰区|殷都区|龙安区|林州市|安阳县|汤阴县|滑县|内黄县");
  xianArray[42] = new Array("鹤壁","全部|淇滨区|山城区|鹤山区|浚县|淇县");
  xianArray[43] = new Array("新乡","全部|卫滨区|红旗区|凤泉区|牧野区|卫辉市|辉县市|新乡县|获嘉县|原阳县|延津县|封丘县|长垣县");
  xianArray[44] = new Array("焦作","全部|山阳区|解放区|中站区|马村区|沁阳市|孟州市|修武县|博爱县|武陟县|温县");
  xianArray[45] = new Array("濮阳","全部|华龙区|清丰县|南乐县|范县|台前县|濮阳县");
  xianArray[46] = new Array("许昌","全部|魏都区|禹州市|长葛市|许昌县|鄢陵县|襄城县");
  xianArray[47] = new Array("漯河","全部|源汇区|郾城区|召陵区|舞阳县|临颍县");
  xianArray[48] = new Array("三门峡","全部|湖滨区|义马市|灵宝市|渑池县|陕县|卢氏县");
  xianArray[49] = new Array("南阳","全部|卧龙区|宛城区|邓州市|南召县|方城县|西峡县|镇平县|内乡县|淅川县|社旗县|唐河县|新野县|桐柏县");
  xianArray[50] = new Array("商丘","全部|梁园区|睢阳区|永城市|民权县|睢县|宁陵县|柘城县|虞城县|夏邑县");
  xianArray[51] = new Array("信阳","全部|浉河区|平桥区|罗山县|光山县|新县|商城县|固始县|潢川县|淮滨县|息县");
  xianArray[52] = new Array("周口","全部|川汇区|项城市|扶沟县|西华县|商水县|沈丘县|郸城县|淮阳县|太康县|鹿邑县");
  xianArray[53] = new Array("驻马店","全部|驿城区|西平县|上蔡县|平舆县|正阳县|确山县|泌阳县|汝南县|遂平县|新蔡县");
  xianArray[54] = new Array("济源","全部|济源");
  //天津
  xianArray[55] = new Array("和平","全部|和平区");
  xianArray[56] = new Array("河北","全部|河北区");
  xianArray[57] = new Array("河西","全部|河西区");
  xianArray[58] = new Array("河东","全部|河东区");
  xianArray[59] = new Array("红桥","全部|红桥区");
  xianArray[60] = new Array("南开","全部|南开区");
  xianArray[61] = new Array("津南","全部|津南区");
  xianArray[62] = new Array("西青","全部|西青区");
  xianArray[63] = new Array("北辰","全部|北辰区");
  xianArray[64] = new Array("东丽","全部|东丽区");
  xianArray[65] = new Array("武清","全部|武清区");
  xianArray[66] = new Array("宝坻","全部|宝坻区");
  xianArray[67] = new Array("大港","全部|大港区");
  xianArray[68] = new Array("塘沽","全部|塘沽区");
  xianArray[69] = new Array("汉沽","全部|汉沽区");
  xianArray[70] = new Array("静海","全部|静海县");
  xianArray[71] = new Array("宁河","全部|宁河县");
  xianArray[72] = new Array("蓟县","全部|蓟县");
  //重庆市
  xianArray[73] = new Array("万州","全部|万州区")
  xianArray[74] = new Array("涪陵","全部|涪陵区")
  xianArray[75] = new Array("渝中","全部|渝中区")
  xianArray[76] = new Array("大渡口","全部|大渡口区")
  xianArray[77] = new Array("江北","全部|江北区")
  xianArray[78] = new Array("沙坪坝","全部|沙坪坝区")
  xianArray[79] = new Array("九龙坡","全部|九龙坡区")
  xianArray[80] = new Array("南岸","全部|南岸区")
  xianArray[81] = new Array("北碚","全部|北碚区")
  xianArray[82] = new Array("万盛","全部|万盛区")
  xianArray[83] = new Array("双挢","全部|双桥区")
  xianArray[84] = new Array("渝北","全部|渝北区")
  xianArray[85] = new Array("巴南","全部|巴南区")
  xianArray[86] = new Array("黔江","全部|黔江区")
  xianArray[87] = new Array("长寿","全部|长寿区")
  xianArray[88] = new Array("綦江","全部|綦江县")
  xianArray[89] = new Array("潼南","全部|潼南县")
  xianArray[90] = new Array("铜梁","全部|铜梁县")
  xianArray[91] = new Array("大足","全部|大足县")
  xianArray[92] = new Array("荣昌","全部|荣昌县")
  xianArray[93] = new Array("壁山","全部|璧山县")
  xianArray[94] = new Array("梁平","全部|梁平县")
  xianArray[95] = new Array("城口","全部|城口县")
  xianArray[96] = new Array("丰都","全部|丰都县")
  xianArray[97] = new Array("垫江","全部|垫江县")
  xianArray[98] = new Array("武隆","全部|武隆县")
  xianArray[99] = new Array("忠县","全部|忠县")
  xianArray[100] = new Array("开县","全部|开县")
  xianArray[101] = new Array("云阳","全部|云阳县")
  xianArray[102] = new Array("奉节","全部|奉节县")
  xianArray[103] = new Array("巫山","全部|巫山县")
  xianArray[104] = new Array("巫溪","全部|巫溪县")
  xianArray[105] = new Array("石柱","全部|石柱土家族自治县")
  xianArray[106] = new Array("秀山","全部|秀山土家族苗族自治县")
  xianArray[107] = new Array("酉阳","全部|酉阳土家族苗族自治县")
  xianArray[108] = new Array("彭水","全部|彭水苗族土家族自治县")
  xianArray[109] = new Array("江津","全部|江津区")
  xianArray[110] = new Array("合川","全部|合川区")
  xianArray[111] = new Array("永川","全部|永川区")
  xianArray[112] = new Array("南川","全部|南川区")
  //陕西省
  xianArray[113] = new Array("西安","全部|高陵县|户县|周至县|蓝田县|临潼区|阎良区|雁塔区|灞桥区|莲湖区|碑林区|新城区|未央区|长安区|高新区|经开区|曲江新区|浐灞生态区|沣渭新区")
  xianArray[114] = new Array("咸阳","全部|武功县|淳化县|旬邑县|长武县|彬县|永寿县|礼泉县|乾县|泾阳县|三原县|兴平市|渭城区|秦都区|泾渭新区")
  xianArray[115] = new Array("宝鸡","全部|太白县|凤县|麟游县|千阳县|陇县|眉县|扶风县|岐山县|凤翔县|陈仓区|金台区|渭滨区|高新区")
  xianArray[116] = new Array("渭南","全部|富平县|白水县|蒲城县|澄城县|合阳县|大荔县|潼关县|韩城市|临渭区|华阴市|华县")
  xianArray[117] = new Array("延安","全部|黄陵县|黄龙县|宜川县|洛川县|富县|甘泉县|吴起县|志丹县|安塞县|子长县|延川县|延长县|宝塔区")
  xianArray[118] = new Array("铜川","全部|宜君县|印台区|王益区|耀州区")
  xianArray[119] = new Array("汉中","全部|佛坪县|留坝县|镇巴县|略阳县|宁强县|勉县|西乡县|洋|县|城固县|南郑县|汉台区")
  xianArray[120] = new Array("榆林","全部|子洲县|清涧县|吴堡县|佳县|米脂县|绥德县|定边县|靖边县|横山县|府谷县|神木县|榆阳区|经济开发区")
  xianArray[121] = new Array("安康","全部|白河县|旬阳县|镇坪县|平利县|岚皋县|紫阳县|宁陕县|石泉县|汉阴县|汉滨区")
  xianArray[122] = new Array("商洛","全部|柞水县|镇安县|山阳县|商南县|丹凤县|洛南县|商州区")
  xianArray[123] = new Array("杨凌","全部|杨凌示范区")
  //甘肃省
  xianArray[124] = new Array("兰州","全部|城关区|七里河区|西固区|安宁区|红古区|永登县|皋兰县|榆中县")
  xianArray[125] = new Array("嘉峪关","全部|嘉峪关市")
  xianArray[126] = new Array("金昌","全部|金川区|永昌县")
  xianArray[127] = new Array("白银","全部|白银区|平川区|靖远县|会宁县|景泰县")
  xianArray[128] = new Array("天水","全部|秦州区|麦积区|清水县|秦安县|甘谷县|武山县|张家川回族自治县")
  xianArray[129] = new Array("武威","全部|凉州区|民勤县|古浪县|天祝藏族自治县")
  xianArray[130] = new Array("张掖","全部|甘州区|民乐县|临泽县|高台县|山丹县|肃南裕固族自治县")
  xianArray[131] = new Array("平凉","全部|崆峒区|泾川县|灵台县|崇信县|华亭县|庄浪县|静宁县")
  xianArray[132] = new Array("酒泉","全部|肃州区|玉门市|敦煌市|金塔县|瓜州县|肃北蒙古族自治县|阿克塞哈萨克族自治县")
  xianArray[133] = new Array("庆阳","全部|西峰区|庆城县|环县|华池县|合水县|正宁县|宁|县|镇原县")
  xianArray[134] = new Array("定西","全部|安定区|通渭县|陇西县|渭源县|临洮县|漳县|岷县")
  xianArray[135] = new Array("陇南","全部|武都区|成县|文县|宕昌县|康县|西和县|礼县|徽县|两当县")
  xianArray[136] = new Array("甘南","全部|合作市|临潭县|卓尼县|舟曲县|迭部县|玛曲县|碌曲县|夏河县")
  xianArray[137] = new Array("临夏","全部|临夏市|临夏县|康乐县|永靖县|广河县|和政县|东乡族自治县|积石山保安族东乡族撒拉族自治县")
  //四川省
  xianArray[138] = new Array("成都","全部|锦江区|青羊区|金牛区|武侯区|成华区|龙泉驿区|青白江区|新都区|温江区|都江堰市|彭州市|崇州市|邛崃市|金堂县|双流县|郫县|大邑县|蒲江县|新津县")
  xianArray[139] = new Array("自贡","全部|自流井区|贡井区|大安区|沿滩区|荣县|富顺县")
  xianArray[140] = new Array("攀枝花","全部|东区|西区|仁和区|米易县|盐边县")
  xianArray[141] = new Array("泸州","全部|江阳区|纳溪区|龙马潭区|泸县|合江县|叙永县|古蔺县")
  xianArray[142] = new Array("德阳","全部|旌阳区|广汉市|什邡市|绵竹市|罗江县|中江县")
  xianArray[143] = new Array("绵阳","全部|涪城区|游仙区|江油市|三台县|盐亭县|安县|梓潼县|平武县|北川羌族自治县")
  xianArray[144] = new Array("广元","全部|利州区|元坝区|朝天区|旺苍县|青川县|剑阁县|苍溪县")
  xianArray[145] = new Array("遂宁","全部|船山区|安居区|蓬溪县|射洪县|大英县")
  xianArray[146] = new Array("内江","全部|市中区|东兴区|威远县|资中县|隆昌县")
  xianArray[147] = new Array("乐山","全部|市中区|沙湾区|五通桥区|金口河区|峨眉山市|犍为县|井研县|夹江县|沐川县|峨边彝族自治县|马边彝族自治县")
  xianArray[148] = new Array("南充","全部|顺庆区|高坪区|嘉陵区|阆中市|南部县|营山县|蓬安县|仪陇县|西充县")
  xianArray[149] = new Array("宜宾","全部|翠屏区|宜宾县|南溪县|江安县|长宁县|高县|珙县|筠连县|兴文县|屏山县")
  xianArray[150] = new Array("广安","全部|广安区|华蓥市|岳池县|武胜县|邻水县")
  xianArray[151] = new Array("达州","全部|通川区|万源市|达|县|宣汉县|开江县|大竹县|渠县")
  xianArray[152] = new Array("眉山","全部|东坡区|仁寿县|彭山县|洪雅县|丹棱县|青神县")
  xianArray[153] = new Array("雅安","全部|雨城区|名山县|荥经县|汉源县|石棉县|天全县|芦山县|宝兴县")
  xianArray[154] = new Array("巴中","全部|巴州区|通江县|南江县|平昌县")
  xianArray[155] = new Array("资阳","全部|雁江区|简阳市|安岳县|乐至县")
  xianArray[156] = new Array("阿坝","全部|马尔康县|汶川县|理县|茂县|松潘县|九寨沟县|金川县|小金县|黑水县|壤塘县|阿坝县|若尔盖县|红原县")
  xianArray[157] = new Array("甘孜","全部|康定县|泸定县|丹巴县|九龙县|雅江县|道孚县|炉霍县|甘孜县|新龙县|德格县|白玉县|石渠县|色达县|理塘县|巴塘县|乡城县|稻城县|得荣县")
  xianArray[158] = new Array("凉山","全部|西昌市|盐源县|德昌县|会理县|会东县|宁南县|普格县|布拖县|金阳县|昭觉县|喜德县|冕宁县|越西县|甘洛县|美姑县|雷波县|木里自治县")
  //山西省
  xianArray[159] = new Array("太原","全部|杏花岭区|小店区|迎泽区|尖草坪区|万柏林区|晋源区|古交市|阳曲县|清徐县|娄烦县")
  xianArray[160] = new Array("大同","全部|城区|矿区|南郊区|新荣区|大同县|天镇县|灵丘县|阳高县|左云县|广灵县|浑源县")
  xianArray[161] = new Array("阳泉","全部|城区|矿区|郊区|平定县|盂县")
  xianArray[162] = new Array("长治","全部|城区|郊区|潞城市|长治县|长子县|平顺县|襄垣县|沁源县|屯留县|黎城县|武乡县|沁县|壶关县")
  xianArray[163] = new Array("晋城","全部|城区|高平市|泽州县|陵川县|阳城县|沁水县")
  xianArray[164] = new Array("朔州","全部|朔城区|平鲁区|山阴县|右玉县|应县|怀仁县")
  xianArray[165] = new Array("晋中","全部|榆次区|介休市|昔阳县|灵石县|祁县|左权县|寿阳县|太谷县|和顺县|平遥县|榆社县")
  xianArray[166] = new Array("运城","全部|盐湖区|河津市|永济市|闻喜县|新绛县|平陆县|垣曲县|绛县|稷山县|芮城县|夏县|万荣县|临猗县")
  xianArray[167] = new Array("忻州","全部|忻府区|原平市|代县|神池县|五寨县|五台县|偏关县|宁武县|静乐县|繁峙县|河曲县|保德县|定襄县|岢岚县|经济开发区")
  xianArray[168] = new Array("临汾","全部|尧都区|侯马市|霍州市|汾西县|吉县|安泽县|大宁县|浮山县|古县|隰县|襄汾县|翼城县|永和县|乡宁县|曲沃县|洪洞县|蒲县")
  xianArray[169] = new Array("吕梁","全部|离石区|孝义市|汾阳市|文水县|中阳县|兴县|临县|方山县|柳林县|岚县|交口县|交城县|石楼县")
  //宁夏回族自治区
  xianArray[170] = new Array("银川","全部|兴庆区|金凤区|西夏区|永宁县|贺兰县|灵武市")
  xianArray[171] = new Array("石嘴山","全部|大武口区|惠农区|平罗县")
  xianArray[172] = new Array("吴忠","全部|利通区|盐池县|同心县|青铜峡市")
  xianArray[173] = new Array("固原","全部|原州区|西吉县|隆德县|泾源县|彭阳县")
  xianArray[174] = new Array("中卫","全部|沙坡头区|中宁县|海原县")
  //山东省
  xianArray[175] = new Array("济南","全部|历下区|市中区|槐荫区|天桥区|历城区|长清区|章丘市|平阴县|济阳县|商河县|高新区")
  xianArray[176] = new Array("青岛","全部|市南区|市北区|四方区|黄岛区|崂山区|李沧区|城阳区|胶州市|即墨市|平度市|胶南市|莱西市")
  xianArray[177] = new Array("淄博","全部|张店区|淄川区|博山区|临淄区|周村区|桓台县|高青县|沂源县")
  xianArray[178] = new Array("枣庄","全部|市中区|薛城区|峄城区|台儿庄区|山亭区|滕州市")
  xianArray[179] = new Array("东营","全部|东营区|河口区|垦利县|利津县|广饶县")
  xianArray[180] = new Array("烟台","全部|芝罘区|福山区|牟平区|莱山区|龙口市|莱阳市|莱州市|蓬莱市|招远市|栖霞市|海阳市|长岛县")
  xianArray[181] = new Array("潍坊","全部|潍城区|寒亭区|坊子区|奎文区|青州市|诸城市|寿光市|安丘市|高密市|昌邑市|临朐县|昌乐县")
  xianArray[182] = new Array("威海","全部|环翠区|文登市|荣成市|乳山市")
  xianArray[183] = new Array("济宁","全部|市中区|任城区|曲阜市|兖州市|邹城市|微山县|鱼台县|金乡县|嘉祥县|汶上县|泗水县|梁山县")
  xianArray[184] = new Array("泰安","全部|泰山区|岱岳区|新泰市|肥城市|宁阳县|东平县")
  xianArray[185] = new Array("日照","全部|东港区|岚山区|五莲县|莒县")
  xianArray[186] = new Array("莱芜","全部|莱城区|钢城区")
  xianArray[187] = new Array("临沂","全部|兰山区|罗庄区|河东区|沂南县|郯城县|沂水县|苍山县|费县|平邑县|莒南县|蒙阴县|临沭县")
  xianArray[188] = new Array("德州","全部|德城区|乐陵市|禹城市|陵县|宁津县|庆云县|临邑县|齐河县|平原县|夏津县|武城县")
  xianArray[189] = new Array("聊城","全部|东昌府区|临清市|阳谷县|莘县|茌平县|东阿县|冠县|高唐县")
  xianArray[190] = new Array("滨州","全部|滨城区|惠民县|阳信县|无棣县|沾化县|博兴县|邹平县")
  xianArray[191] = new Array("菏泽","全部|牡丹区|曹县|单县|成武县|巨野县|郓城县|鄄城县|定陶县|东明县")
  //河北省
  xianArray[192] = new Array("石家庄","全部|长安区|桥东区|桥西区|新华区|井陉矿区|裕华区|辛集市|藁城市|晋州市|新乐市|鹿泉市|井陉县|正定县|栾城县|行唐县|灵寿县|高邑县|深泽县|赞皇县|无极县|平山县|元氏县|赵县")
  xianArray[193] = new Array("唐山","全部|路北区|路南区|古冶区|开平区|丰南区|丰润区|遵化市|迁安市|滦县|滦南县|乐亭县|迁西县|玉田县|唐海县")
  xianArray[194] = new Array("秦皇岛","全部|海港区|山海关区|北戴河区|昌黎县|抚宁县|卢龙县|青龙满族自治县")
  xianArray[195] = new Array("邯郸","全部|丛台区|邯山区|复兴区|峰峰矿区|武安市|邯郸县|临漳县|成安县|大名县|涉县|磁县|肥乡县|永年县|邱县|鸡泽县|广平县|馆陶县|魏县|曲周县")
  xianArray[196] = new Array("邢台","全部|桥东区|桥西区|南宫市|沙河市|邢台县|临城县|内丘县|柏乡县|隆尧县|任县|南和县|宁晋县|巨鹿县|新河县|广宗县|平乡县|威县|清河县|临西县")
  xianArray[197] = new Array("保定","全部|新市区|北市区|南市区|涿州市|定州市|安国市|高碑店市|满城县|清苑县|涞水县|阜平县|徐水县|定兴县|唐县|高阳县|容城县|涞源县|望都县|安新县|易县|曲阳县|蠡县|顺平县|博野县|雄县")
  xianArray[198] = new Array("张家口","全部|桥西区|桥东区|宣化区|下花园区|宣化县|张北县|康保县|沽源县|尚义县|蔚县|阳原县|怀安县|万全县|怀来县|涿鹿县|赤城县|崇礼县")
  xianArray[199] = new Array("承德","全部|双桥区|双滦区|鹰手营子矿区|承德县|兴隆县|平泉县|滦平县|隆化县|丰宁满族自治县|宽城满族自治县|围场满族蒙古族自治县")
  xianArray[200] = new Array("沧州","全部|运河区|新华区|泊头市|任丘市|黄骅市|河间市|沧县|青县|东光县|海兴县|盐山县|肃宁县|南皮县|吴桥县|献县|孟村回族自治县")
  xianArray[201] = new Array("廊坊","全部|安次区|广阳区|霸州市|三河市|固安县|永清县|香河县|大城县|文安县|大厂回族自治县")
  xianArray[202] = new Array("衡水","全部|桃城区|冀州市|深州市|枣强县|武邑县|武强县|饶阳县|安平县|故城县|景县|阜城县")
  //湖北省
  xianArray[203] = new Array("武汉","全部|江岸区|江汉区|硚口区|汉阳区|武昌区|青山区|洪山区|东西湖区|汉南区|蔡甸区|江夏区|黄陂区|新洲区")
  xianArray[204] = new Array("黄石","全部|黄石港区|西塞山区|下陆区|铁山区|大冶市|阳新县")
  xianArray[205] = new Array("襄阳","全部|襄城区|樊城区|襄阳区|老河口市|枣阳市|宜城市|南漳县|谷城县|保康县|高新区")
  xianArray[206] = new Array("十堰","全部|茅箭区|张湾区|丹江口市|郧县|郧西县|竹山县|竹溪县|房县")
  xianArray[207] = new Array("荆州","全部|沙市区|荆州区|石首市|洪湖市|松滋市|公安县|监利县|江陵县")
  xianArray[208] = new Array("宜昌","全部|西陵区|伍家岗区|点军区|猇亭区|夷陵区|宜都市|当阳市|枝江市|远安县|兴山县|秭归县|长阳土家族自治县|五峰土家族自治县")
  xianArray[209] = new Array("荆门","全部|东宝区|掇刀区|钟祥市|京山县|沙洋县")
  xianArray[210] = new Array("鄂州","全部|鄂城区|梁子湖区|华容区")
  xianArray[211] = new Array("孝感","全部|孝南区|应城市|安陆市|汉川市|孝昌县|大悟县|云梦县")
  xianArray[212] = new Array("黄冈","全部|黄州区|麻城市|武穴市|团风县|红安县|罗田县|英山县|浠水县|蕲春县|黄梅县")
  xianArray[213] = new Array("咸宁","全部|咸安区|赤壁市|嘉鱼县|通城县|崇阳县|通山县")
  xianArray[214] = new Array("随州","全部|曾都区|广水市")
  xianArray[215] = new Array("恩施","全部|恩施市|利川市|建始县|巴东县|宣恩县|咸丰县|来凤县|鹤峰县")
  xianArray[216] = new Array("仙桃","全部|仙桃市")
  xianArray[217] = new Array("潜江","全部|潜江市")
  xianArray[218] = new Array("天门","全部|天门市")
  xianArray[219] = new Array("神农架","全部|神农架林区")
  //内蒙古自治区  城市有错误需要修改  鄂尔多斯又名伊克昭盟
  xianArray[220] = new Array("呼和浩特","全部|回民区|新城区|玉泉区|赛罕区|托克托县|武川县|清水河县|土默特左旗|和林格尔县")
  xianArray[221] = new Array("包头","全部|昆都仑区|东河区|青山区|石拐区|白云矿区|九原区|固阳县|达尔罕茂明安联合旗|土默特右旗")
  xianArray[222] = new Array("乌海","全部|海勃湾区|海南区|乌达区")
  xianArray[223] = new Array("赤峰","全部|红山区|元宝山区|松山区|林西县|宁城县|巴林左旗|巴林右旗|克什克腾旗|翁牛特旗|喀喇沁旗|敖汉旗|阿鲁科尔沁旗")
  xianArray[224] = new Array("哲里木盟","全部|科尔沁区|霍林郭勒市|开鲁县|库伦旗|奈曼旗|扎鲁特旗|科尔沁左翼中旗|科尔沁左翼后旗")
  xianArray[225] = new Array("伊克昭盟","全部|东胜区|达拉特旗|准格尔旗|鄂托克旗|杭锦旗|乌审旗|伊金霍洛旗|鄂托克前旗")
  xianArray[226] = new Array("呼伦贝尔盟","全部|海拉尔区|满洲里市|牙克石市|扎兰屯市|额尔古纳市|根河市|阿荣旗|陈巴尔虎旗|新巴尔虎左旗|新巴尔虎右旗|莫力达瓦达斡尔族自治旗|鄂伦春自治旗|鄂温克族自治旗")
  xianArray[227] = new Array("巴彦淖尔盟","全部|临河区|五原县|磴口县|乌拉特前旗|乌拉特中旗|乌拉特后旗|杭锦后旗")
  xianArray[228] = new Array("乌兰察布盟","全部|集宁区|丰镇市|卓资县|化德县|商都县|兴和县|凉城县|察哈尔右翼前旗|察哈尔右翼中旗|察哈尔右翼后旗|四子王旗")
  xianArray[229] = new Array("兴安盟","全部|乌兰浩特市|阿尔山市|突泉县|科尔沁右翼前旗|科尔沁右翼中旗|扎赉特旗")
  xianArray[230] = new Array("锡林郭勒盟","全部|二连浩特市|锡林浩特市|多伦县|阿巴嘎旗|苏尼特左旗|苏尼特右旗|东乌珠穆沁旗|西乌珠穆沁旗|太仆寺旗|镶黄旗|正镶白旗|正蓝旗")
  xianArray[231] = new Array("阿拉善盟","全部|阿拉善左旗|阿拉善右旗|额济纳旗")
  //新疆维吾尔族自治区
  xianArray[232] = new Array("乌鲁木齐","全部|天山区|沙依巴克区|新市区|水磨沟区|头屯河区|达坂城区|米东区|乌鲁木齐县")
  xianArray[233] = new Array("克拉玛依","全部|克拉玛依区|独山子区|白碱滩区|乌尔禾区")
  xianArray[234] = new Array("吐鲁番","全部|吐鲁番市|托克逊县|鄯善县")
  xianArray[235] = new Array("哈密","全部|哈密市|伊吾县|巴里坤哈萨克自治县")
  xianArray[236] = new Array("和田","全部|和田市|和田县|洛浦县|民丰县|皮山县|策勒县|于田县|墨玉县")
  xianArray[237] = new Array("阿克苏","全部|阿克苏市|阿拉尔市|温宿县|库车县|沙雅县|新和县|拜城县|乌什县|阿瓦提县|柯坪县")
  xianArray[238] = new Array("喀什","全部|喀什市|疏附县|疏勒县|英吉沙县|泽普县|莎车县|叶城县|麦盖提县|岳普湖县|伽师县|巴楚县|塔什库尔干塔吉克自治县")
  xianArray[239] = new Array("塔城","全部|塔城市|乌苏市|额敏县|沙湾县|托里县|裕民县|和布克赛尔蒙古自治县")
  xianArray[240] = new Array("阿勒泰","全部|阿勒泰市|布尔津县|富蕴县|福海县|哈巴河县|青河县|吉木乃县")
  xianArray[241] = new Array("克孜勒苏柯尔克孜","全部|阿图什市|阿克陶县|阿合奇县|乌恰县")
  xianArray[242] = new Array("巴音郭楞","全部|库尔勒市|轮台县|尉犁县|若羌县|且末县|和静县|和硕县|博湖县|焉耆回族自治县")
  xianArray[243] = new Array("昌吉","全部|昌吉市|阜康市|呼图壁县|玛纳斯县|奇台县|吉木萨尔县|木垒哈萨克自治县")
  xianArray[244] = new Array("博尔塔拉","全部|博乐市|精河县|温泉县")
  xianArray[245] = new Array("伊犁哈萨克","全部|伊宁市|奎屯市|伊宁县|霍城县|巩留县|新源县|昭苏县|特克斯县|尼勒克县|察布查尔锡伯自治县")
  xianArray[246] = new Array("石河子","全部|石河子市")
  xianArray[247] = new Array("阿拉尔","全部|阿拉尔市")
  xianArray[248] = new Array("图木舒克","全部|图木舒克市")
  xianArray[249] = new Array("五家渠","全部|五家渠市")
  //安徽省
  xianArray[250] = new Array("合肥","全部|庐阳区|瑶海区|蜀山区|包河区|长丰县|肥东县|肥西县")
  xianArray[251] = new Array("芜湖","全部|镜湖区|弋江区|鸠江区|三山区|芜湖县|繁昌县|南陵县")
  xianArray[252] = new Array("蚌埠","全部|蚌山区|龙子湖区|禹会区|淮上区|怀远县|五河县|固镇县")
  xianArray[253] = new Array("淮南","全部|田家庵区|大通区|谢家集区|八公山区|潘集区|凤台县")
  xianArray[254] = new Array("马鞍山","全部|雨山区|金家庄|花山区|当涂县")
  xianArray[255] = new Array("淮北","全部|相山区|杜集区|烈山区|濉溪县")
  xianArray[256] = new Array("铜陵","全部|铜官山区|狮子山区|郊区|铜陵县")
  xianArray[257] = new Array("安庆","全部|迎江区|大观区|宜秀区|桐城市|怀宁县|枞阳县|潜山县|太湖县|宿松县|望江县|岳西县")
  xianArray[258] = new Array("黄山","全部|屯溪区|黄山区|徽州区|歙县|休宁县|黟县|祁门县")
  xianArray[259] = new Array("滁州","全部|琅琊区|南谯区|天长市|明光市|来安县|全椒县|定远县|凤阳县")
  xianArray[260] = new Array("阜阳","全部|颍州区|颍东区|颍泉区|界首市|临泉县|太和县|阜南县|颍上县")
  xianArray[261] = new Array("宿州","全部|埇桥区|砀山县|萧县|灵璧县|泗县")
  xianArray[262] = new Array("巢湖","全部|居巢区|庐江县|无为县|含山县|和县")
  xianArray[263] = new Array("六安","全部|金安区|裕安区|寿县|霍邱县|舒城县|金寨县|霍山县")
  xianArray[264] = new Array("亳州","全部|谯城区|涡阳县|蒙城县|利辛县")
  xianArray[265] = new Array("池州","全部|贵池区|东至县|石台县|青阳县")
  xianArray[266] = new Array("宣城","全部|宣州区|宁国市|郎溪县|广德县|泾县|绩溪县|旌德县")
  //黑龙江省
  xianArray[267] = new Array("哈尔滨","全部|松北区|道里区|南岗区|道外区|平房区|香坊区|呼兰区|阿城区|双城市|尚志市|五常市|依兰县|方正县|宾县|巴彦县|木兰县|通河县|延寿县")
  xianArray[268] = new Array("齐齐哈尔","全部|龙沙区|建华区|铁锋区|昂昂溪区|富拉尔基区|碾子山区|梅里斯区|讷河市|龙江县|依安县|泰来县|甘南县|富裕县|克山县|克东县|拜泉县")
  xianArray[269] = new Array("牡丹江","全部|爱民区|东安区|阳明区|西安区|绥芬河市|海林市|宁安市|穆棱市|东宁县|林口县")
  xianArray[270] = new Array("佳木斯","全部|前进区|向阳区|东风区|郊区永红|同江市|富锦市|桦南县|桦川县|汤原县|抚远县")
  xianArray[271] = new Array("大庆","全部|萨尔图区|龙凤区|让胡路区|红岗区|大同区|肇州县|肇源县|林甸县|杜尔伯特蒙古族自治县")
  xianArray[272] = new Array("鸡西","全部|鸡冠区|恒山区|滴道区|梨树区|城子河区|麻山区|虎林市|密山市|鸡东县")
  xianArray[273] = new Array("双鸭山","全部|尖山区|岭东区|四方台区|宝山区|集贤县|友谊县|宝清县|饶河县")
  xianArray[274] = new Array("伊春","全部|伊春区|南岔区|友好区|西林区|翠峦区|新青区|美溪区|金山屯区|五营区|乌马河区|汤旺河区|带岭区|乌伊岭区|红星区|上甘岭区|铁力市|嘉荫县")
  xianArray[275] = new Array("七台河","全部|桃山区|新兴区|茄子河区|勃利县")
  xianArray[276] = new Array("鹤岗","全部|兴山区|向阳区|工农区|南山区|兴安区|东山区|萝北县|绥滨县")
  xianArray[277] = new Array("黑河","全部|爱辉区|北安市|五大连池市|嫩江县|逊克县|孙吴县")
  xianArray[278] = new Array("绥化","全部|北林区|安达市|肇东市|海伦市|望奎县|兰西县|青冈县|庆安县|明水县|绥棱县")
  xianArray[279] = new Array("大兴安岭","全部|加格达奇区|松岭区|新林区|呼中区|呼玛县|塔河县|漠河县")
  //吉林省
  xianArray[280] = new Array("长春","全部|朝阳区|南关区|宽城区|二道区|绿园区|双阳区|德惠市|九台市|榆树市|农安县")
  xianArray[281] = new Array("吉林","全部|船营区|昌邑区|龙潭区|丰满区|蛟河市|桦甸市|舒兰市|磐石市|永吉县")
  xianArray[282] = new Array("四平","全部|铁西区|铁东区|公主岭市|双辽市|梨树县|伊通满族自治县")
  xianArray[283] = new Array("辽源","全部|龙山区|西安区|东丰县|东辽县")
  xianArray[284] = new Array("通化","全部|东昌区|二道江区|梅河口市|集安市|通化县|辉南县|柳河县")
  xianArray[285] = new Array("白山","全部|八道江区|江源区|临江市|抚松县|靖宇县|长白朝鲜族自治县")
  xianArray[286] = new Array("松原","全部|宁江区|长岭县|乾安县|扶余县|前郭尔罗斯蒙古族自治县")
  xianArray[287] = new Array("白城","全部|洮北区|洮南市|大安市|镇赉县|通榆县")
  xianArray[288] = new Array("延边","全部|延吉市|图们市|敦化市|珲春市|龙井市|和龙市|汪清县|安图县")
  //辽宁省
  xianArray[289] = new Array("沈阳","全部|沈河区|和平区|大东区|皇姑区|铁西区|苏家屯区|东陵区|沈北新区|于洪区|新民市|辽中县|康平县|法库县")
  xianArray[290] = new Array("大连","全部|西岗区|中山区|沙河口区|甘井子区|旅顺口区|金州区|瓦房店市|普兰店市|庄河市|长海县|经济技术开发区")
  xianArray[291] = new Array("鞍山","全部|铁东区|铁西区|立山区|千山区|海城市|台安县|岫岩满族自治县")
  xianArray[292] = new Array("抚顺","全部|顺城区|新抚区|东洲区|望花区|抚顺县|新宾满族自治县|清原满族自治县")
  xianArray[293] = new Array("本溪","全部|平山区|溪湖区|明山区|南芬区|本溪满族自治县|桓仁满族自治县")
  xianArray[294] = new Array("丹东","全部|振兴区|元宝区|振安区|东港市|凤城市|宽甸满族自治县")
  xianArray[295] = new Array("锦州","全部|太和区|古塔区|凌河区|凌海市|北镇市|黑山县|义县")
  xianArray[296] = new Array("营口市","全部|站前区|西市区|鲅鱼圈区|老边区|盖州市|大石桥市")
  xianArray[297] = new Array("阜新","全部|海州区|新邱区|太平区|清河门区|细河区|阜新蒙古族自治县|彰武县")
  xianArray[298] = new Array("辽阳","全部|白塔区|文圣区|宏伟区|弓长岭区|太子河区|灯塔市|辽阳县")
  xianArray[299] = new Array("盘锦","全部|兴隆台区|双台子区|大洼县|盘山县")
  xianArray[300] = new Array("铁岭","全部|银州区|清河区|调兵山市|开原市|铁岭县|西丰县|昌图县")
  xianArray[301] = new Array("朝阳","全部|双塔区|龙城区|北票市|凌源市|朝阳县|建平县|喀喇沁左翼蒙古族自治县")
  xianArray[302] = new Array("葫芦岛","全部|龙港区|连山区|南票区|兴城市|绥中县|建昌县")
  //江苏省
  xianArray[303] = new Array("南京","全部|玄武区|白下区|秦淮区|建邺区|鼓楼区|下关区|浦口区|栖霞区|雨花台区|江宁区|六合区|溧水县|高淳县")
  xianArray[304] = new Array("无锡","全部|崇安区|南长区|北塘区|滨湖区|锡山区|惠山区|江阴市|宜兴市")
  xianArray[305] = new Array("徐州","全部|云龙区|鼓楼区|九里区|贾汪区|泉山区|新沂市|邳州市|丰县|沛县|铜山县|睢宁县")
  xianArray[306] = new Array("常州","全部|钟楼区|天宁区|戚墅堰区|新北区|武进区|溧阳市|金坛市")
  xianArray[307] = new Array("苏州","全部|金阊区|沧浪区|平江区|虎丘区|吴中区|相城区|常熟市|张家港市|昆山市|吴江市|太仓市")
  xianArray[308] = new Array("南通","全部|崇川区|港闸区|启东市|如皋市|通州市|海门市|海安县|如东县")
  xianArray[309] = new Array("连云港","全部|新浦区|连云区|海州区|赣榆县|东海县|灌云县|灌南县")
  xianArray[310] = new Array("淮安","全部|清河区|清浦区|楚州区|淮阴区|涟水县|洪泽县|盱眙县|金湖县")
  xianArray[311] = new Array("盐城","全部|亭湖区|盐都区|东台市|大丰市|响水县|滨海县|阜宁县|射阳县|建湖县")
  xianArray[312] = new Array("扬州","全部|广陵区|邗江区|维扬区|仪征市|高邮市|江都市|宝应县")
  xianArray[313] = new Array("镇江","全部|京口区|润州区|丹徒区|丹阳市|扬中市|句容市")
  xianArray[314] = new Array("泰州","全部|海陵区|高港区|兴化市|靖江市|泰兴市|姜堰市|经济开发区")
  xianArray[315] = new Array("宿迁","全部|宿城区|宿豫区|沭阳县|泗阳县|泗洪县")
  //江西省
  xianArray[316] = new Array("南昌","全部|东湖区|西湖区|青云谱区|湾里区|青山湖区|南昌县|新建县|安义县|进贤")
  xianArray[317] = new Array("景德镇","全部|珠山区|昌江区|乐平市|浮梁县")
  xianArray[318] = new Array("萍乡","全部|安源区|湘东区|莲花县|芦溪县|上栗县")
  xianArray[319] = new Array("九江","全部|浔阳区|庐山区|瑞昌市|九江县|武宁县|修水县|永修县|德安县|星子县|都昌县|湖口县|彭泽县")
  xianArray[320] = new Array("新余","全部|渝水区|分宜县")
  xianArray[321] = new Array("鹰潭","全部|月湖区|贵溪市|余江县")
  xianArray[322] = new Array("赣州","全部|章贡区|瑞金市|南康市|赣|县|信丰县|大余县|上犹县|崇义县|安远县|龙南县|定南县|全南县|宁都县|于都县|兴国县|会昌县|寻乌县|石城县")
  xianArray[323] = new Array("吉安","全部|吉州区|青原区|井冈山市|吉安县|吉水县|峡江县|新干县|永丰县|泰和县|遂川县|万安县|安福县|永新县")
  xianArray[324] = new Array("宜春","全部|袁州区|丰城市|樟树市|高安市|奉新县|万载县|上高县|宜丰县|靖安县|铜鼓县")
  xianArray[325] = new Array("抚州","全部|临川区|南城县|黎川县|南丰县|崇仁县|乐安县|宜黄县|金溪县|资溪县|东乡县|广昌县")
  xianArray[326] = new Array("上饶","全部|信州区|德兴市|上饶县|广丰县|玉山县|铅山县|横峰县|弋阳县|余干县|鄱阳县|万年县|婺源县")
  //福建省
  xianArray[327] = new Array("福州","全部|鼓楼区|台江区|仓山区|马尾区|晋安区|福清市|长乐市|闽侯县|连江县|罗源县|闽清县|永泰县|平潭县")
  xianArray[328] = new Array("厦门","全部|思明区|海沧区|湖里区|集美区|同安区|翔安区")
  xianArray[329] = new Array("莆田","全部|城厢区|涵江区|荔城区|秀屿区|仙游县")
  xianArray[330] = new Array("三明","全部|梅列区|三元区|永安市|明溪县|清流县|宁化县|大田县|尤溪县|沙县|将乐县|泰宁县|建宁县")
  xianArray[331] = new Array("泉州","全部|鲤城区|丰泽区|洛江区|泉港区|石狮市|晋江市|南安市|惠安县|安溪县|永春县|德化县|金门县")
  xianArray[332] = new Array("漳州","全部|芗城区|龙文区|龙海市|云霄县|漳浦县|诏安县|长泰县|东山县|南靖县|平和县|华安县")
  xianArray[333] = new Array("南平","全部|延平区|邵武市|武夷山市|建瓯市|建阳市|顺昌县|浦城县|光泽县|松溪县|政和县")
  xianArray[334] = new Array("龙岩","全部|新罗区|漳平市|长汀县|永定县|上杭县|武平县|连城县")
  xianArray[335] = new Array("宁德","全部|蕉城区|福安市|福鼎市|霞浦县|古田县|屏南县|寿宁县|周宁县|柘荣县")
  //广东省
  xianArray[336] = new Array("广州","全部|越秀区|荔湾区|海珠区|天河区|白云区|黄埔区|番禺区|花都区|南沙区|萝岗区|增城市|从化市")
  xianArray[337] = new Array("深圳","全部|福田区|罗湖区|南山区|宝安区|龙岗区|盐田区|高新区|光明新区")
  xianArray[338] = new Array("珠海","全部|香洲区|斗门区|金湾区")
  xianArray[339] = new Array("汕头","全部|金平区|龙湖区|濠江区|潮阳区|潮南区|澄海区|南澳县")
  xianArray[340] = new Array("韶关","全部|浈江区|武江区|曲江区|乐昌市|南雄市|始兴县|仁化县|翁源县|新丰县|乳源瑶族自治县")
  xianArray[341] = new Array("佛山","全部|禅城区|南海区|顺德区|三水区|高明区")
  xianArray[342] = new Array("江门","全部|江海区|蓬江区|新会区|台山市|开平市|鹤山市|恩平市")
  xianArray[343] = new Array("湛江","全部|赤坎区|霞山区|坡头区|麻章区|廉江市|雷州市|吴川市|遂溪县|徐闻县")
  xianArray[344] = new Array("茂名","全部|茂南区|茂港区|高州市|化州市|信宜市|电白县")
  xianArray[345] = new Array("肇庆","全部|端州区|鼎湖区|高要市|四会市|广宁县|怀集县|封开县|德庆县")
  xianArray[346] = new Array("惠州","全部|惠城区|惠阳区|博罗县|惠东县|龙门县")
  xianArray[347] = new Array("梅州","全部|梅江区|兴宁市|梅|县|大埔县|丰顺县|五华县|平远县|蕉岭县")
  xianArray[348] = new Array("汕尾","全部|城区|陆丰市|海丰县|陆河县")
  xianArray[349] = new Array("河源","全部|源城区|紫金县|龙川县|连平县|和平县|东源县")
  xianArray[350] = new Array("阳江","全部|江城区|阳春市|阳西县|阳东县")
  xianArray[351] = new Array("清远","全部|清城区|英德市|连州市|佛冈县|阳山县|清新县|连山壮族瑶族自治县|连南瑶族自治县")
  xianArray[352] = new Array("东莞","全部|东莞市")
  xianArray[353] = new Array("中山","全部|中山市")
  xianArray[354] = new Array("潮州","全部|湘桥区|潮安县|饶平县")
  xianArray[355] = new Array("揭阳","全部|榕城区|普宁市|揭东县|揭西县|惠来县")
  xianArray[356] = new Array("云浮","全部|云城区|罗定市|新兴县|郁南县|云安县")
  //湖南省   错误 吉首市 属于湘西
  xianArray[357] = new Array("长沙","全部|芙蓉区|天心区|岳麓区|开福区|雨花区|浏阳市|长沙县|望城县|宁乡县")
  xianArray[358] = new Array("株洲","全部|荷塘区|芦淞区|石峰区|天元区|醴陵市|株洲县|攸|县|茶陵县|炎陵县")
  xianArray[359] = new Array("湘潭","全部|雨湖区|岳塘区|湘乡市|韶山市|湘潭县")
  xianArray[360] = new Array("衡阳","全部|珠晖区|雁峰区|石鼓区|蒸湘区|南岳区|耒阳市|常宁市|衡阳县|衡南县|衡山县|衡东县|祁东县")
  xianArray[361] = new Array("邵阳","全部|双清区|大祥区|北塔区|武冈市|邵东县|新邵县|邵阳县|隆回县|洞口县|绥宁县|新宁县|城步自治县")
  xianArray[362] = new Array("岳阳","全部|岳阳楼区|云溪区|君山区|汨罗市|临湘市|岳阳县|华容县|湘阴县|平江县")
  xianArray[363] = new Array("常德","全部|武陵区|鼎城区|津市市|安乡县|汉寿县|澧县|临澧县|桃源县|石门县")
  xianArray[364] = new Array("张家界","全部|永定区|武陵源区|慈利县|桑植县")
  xianArray[365] = new Array("益阳","全部|资阳区|赫山区|沅江市|南县|桃江县|安化县")
  xianArray[366] = new Array("郴州","全部|北湖区|苏仙区|资兴市|桂阳县|宜章县|永兴县|嘉禾县|临武县|汝城县|桂东县|安仁县")
  xianArray[367] = new Array("永州","全部|零陵区|冷水滩区|祁阳县|东安县|双牌县|道县|江永县|宁远县|蓝山县|新田县|江华瑶族自治县")
  xianArray[368] = new Array("怀化","全部|鹤城区|洪江市|沅陵县|辰溪县|溆浦县|中方县|会同县|麻阳苗族自治县|新晃侗族自治县|芷江侗族自治县|靖州苗族侗族自治县|通道侗族自治县")
  xianArray[369] = new Array("娄底","全部|娄星区|冷水江市|涟源市|双峰县|新化县")
  xianArray[370] = new Array("湘西","全部|吉首市|泸溪县|凤凰县|花垣县|保靖县|古丈县|永顺县|龙山县")
  //云南省 错误 思茅 属于 普洱市
  xianArray[371] = new Array("昆明","全部|五华区|盘龙区|官渡区|西山区|东川区|安宁市|呈贡县|晋宁县|富民县|宜良县|嵩明县|石林彝族自治县|禄劝彝族苗族自治县|寻甸回族自治县")
  xianArray[372] = new Array("曲靖","全部|麒麟区|宣威市|马龙县|陆良县|师宗县|罗平县|富源县|会泽县|沾益县")
  xianArray[373] = new Array("玉溪","全部|红塔区|江川县|澄江县|通海县|华宁县|易门县|峨山彝族自治县|新平彝族傣族自治县|元江哈尼族彝族傣族自治县")
  xianArray[374] = new Array("保山","全部|隆阳区|施甸县|腾冲县|龙陵县|昌宁县")
  xianArray[375] = new Array("昭通","全部|昭阳区|鲁甸县|巧家县|盐津县|大关县|永善县|绥江县|镇雄县|彝良县|威信县|水富县")
  xianArray[376] = new Array("丽江","全部|古城区|永胜县|华坪县|玉龙纳西族自治县|宁蒗彝族自治县")
  xianArray[377] = new Array("普洱","全部|思茅区|宁洱哈尼族彝族自治县|墨江哈尼族自治县|景东彝族自治县|景谷彝族傣族自治县|镇沅彝族哈尼族拉祜族自治县|西盟佤族自治县|江城哈尼族彝族自治县|孟连傣族拉祜族佤族自治县|澜沧拉祜族自治县")
  xianArray[378] = new Array("临沧","全部|临翔区|凤庆县|云县|永德县|镇康县|双江县|耿马县|沧源县")
  xianArray[379] = new Array("红河","全部|蒙自县|开远市|个旧市|绿春县|建水县|石屏县|弥勒县|红河县|泸西县|元阳县|金平苗族瑶族傣族自治县|河口瑶族自治县|屏边苗族自治县")
  xianArray[380] = new Array("大理","全部|大理市|祥云县|宾川县|弥渡县|永平县|云龙县|洱源县|剑川县|鹤庆县|漾濞彝族自治县|南涧彝族自治县|巍山彝族回族自治县")
  xianArray[381] = new Array("楚雄","全部|楚雄市|双柏县|牟定县|南华县|姚安县|大姚县|永仁县|元谋县|武定县|禄丰县")
  xianArray[382] = new Array("文山","全部|文山县|砚山县|西畴县|麻栗坡县|马关县|丘北县|广南县|富宁县")
  xianArray[383] = new Array("西双版纳","全部|景洪市|勐海县|勐腊县")
  xianArray[384] = new Array("德宏","全部|潞西市|瑞丽市|梁河县|盈江县|陇川县")
  xianArray[385] = new Array("怒江","全部|泸水县|福贡县|贡山独龙族怒族自治县|兰坪白族普米族自治县")
  xianArray[386] = new Array("迪庆","全部|香格里拉县|德钦县|维西傈僳族自治县")
  //广西壮族自治区
  xianArray[387] = new Array("南宁","全部|兴宁区|青秀区|江南区|西乡塘区|良庆区|邕宁区|武鸣县|隆安县|马山县|上林县|宾阳县|横县")
  xianArray[388] = new Array("柳州","全部|城中区|鱼峰区|柳南区|柳北区|柳江县|柳城县|鹿寨县|融安县|融水苗族自治县|三江侗族自治县")
  xianArray[389] = new Array("桂林","全部|秀峰区|叠彩区|象山区|七星区|雁山区|阳朔县|临桂县|灵川县|全州县|兴安县|永福县|灌阳县|资源县|平乐县|荔浦县|龙胜各族自治县|恭城瑶族自治县")
  xianArray[390] = new Array("梧州","全部|万秀区|蝶山区|长洲区|苍梧县|藤县|蒙山县|岑溪市")
  xianArray[391] = new Array("北海","全部|海城区|银海区|铁山港区|合浦县")
  xianArray[392] = new Array("防城港","全部|港口区|防城区|上思县|东兴市")
  xianArray[393] = new Array("崇左","全部|江州区|扶绥县|宁明县|龙州县|大新县|天等县|凭祥市")
  xianArray[394] = new Array("钦州","全部|钦南区|钦北区|灵山县|浦北县")
  xianArray[395] = new Array("贵港","全部|港北区|港南区|覃塘区|平南县|桂平市")
  xianArray[396] = new Array("玉林","全部|玉州区|容县|陆川县|博白县|兴业县|北流市")
  xianArray[397] = new Array("百色","全部|右江区|田阳县|田东县|平果县|德保县|靖西县|那坡县|凌云县|乐业县|田林县|西林县|隆林各族自治县")
  xianArray[398] = new Array("贺州","全部|八步区|昭平县|钟山县|富川瑶族自治县")
  xianArray[399] = new Array("河池","全部|金城江区|宜州市|南丹县|天峨县|凤山县|东兰县|罗城仫佬族自治县|环江毛南族自治县|巴马瑶族自治县|都安瑶族自治县|大化瑶族自治县")
  xianArray[400] = new Array("来宾","全部|兴宾区|合山市|忻城县|象州县|武宣县|金秀瑶族自治县")
  //浙江省
  xianArray[401] = new Array("杭州","全部|拱墅区|上城区|下城区|江干区|西湖区|滨江区|萧山区|余杭区|建德市|富阳市|临安市|桐庐县|淳安县")
  xianArray[402] = new Array("宁波","全部|海曙区|江东区|江北区|北仑区|镇海区|鄞州区|余姚市|慈溪市|奉化市|象山县|宁海县")
  xianArray[403] = new Array("温州","全部|鹿城区|龙湾区|瓯海区|瑞安市|乐清市|洞头县|永嘉县|平阳县|苍南县|文成县|泰顺县")
  xianArray[404] = new Array("嘉兴","全部|南湖区|秀洲区|海宁市|平湖市|桐乡市|嘉善县|海盐县")
  xianArray[405] = new Array("湖州","全部|吴兴区|南浔区|德清县|长兴县|安吉县")
  xianArray[406] = new Array("绍兴","全部|越城区|诸暨市|上虞市|嵊州市|绍兴县|新昌县")
  xianArray[407] = new Array("金华","全部|婺城区|金东区|兰溪市|义乌市|东阳市|永康市|武义县|浦江县|磐安县")
  xianArray[408] = new Array("衢州","全部|柯城区|衢江区|江山市|常山县|开化县|龙游县")
  xianArray[409] = new Array("舟山","全部|定海区|普陀区|岱山县|嵊泗县")
  xianArray[410] = new Array("台州","全部|椒江区|黄岩区|路桥区|温岭市|临海市|玉环县|三门县|天台县|仙居县")
  xianArray[411] = new Array("丽水","全部|莲都区|龙泉市|青田县|缙云县|遂昌县|松阳县|云和县|庆元县|景宁畲族自治县")
  //海南省
  //省辖县   临高县 澄迈县 定安县 屯昌县 昌江黎族自治县 白沙黎族自治县 琼中黎族苗族自治县 陵水黎族自治县
  xianArray[412] = new Array("文昌","全部|文昌市")
  xianArray[413] = new Array("琼海","全部|琼海市")
  xianArray[414] = new Array("万宁","全部|万宁市")
  xianArray[415] = new Array("五指山","全部|五指山市")
  xianArray[416] = new Array("东方","全部|东方市")
  xianArray[417] = new Array("儋州","全部|儋州市")
  xianArray[418] = new Array("海口","全部|龙华区|秀英区|琼山区|美兰区")
  xianArray[419] = new Array("三亚","全部|河东区|河西区")
  xianArray[420] = new Array("三沙","全部|三沙市")
  //青海省
  xianArray[421] = new Array("西宁","全部|城东区|城中区|城西区|城北区|湟中县|湟源县|大通回族土族自治县")
  xianArray[422] = new Array("海东","全部|平安县|乐都县|民和回族土族自治县|互助土族自治县|化隆回族自治县|循化撒拉族自治县")
  xianArray[423] = new Array("海北","全部|海晏县|祁连县|刚察县|门源回族自治县")
  xianArray[424] = new Array("黄南","全部|同仁县|尖扎县|泽库县|河南蒙古族自治县")
  xianArray[425] = new Array("海南","全部|共和县|同德县|贵德县|兴海县|贵南县")
  xianArray[426] = new Array("果洛","全部|玛沁县|班玛县|甘德县|达日县|久治县|玛多县")
  xianArray[427] = new Array("玉树","全部|玉树县|杂多县|称多县|治多县|囊谦县|曲麻莱县")
  xianArray[428] = new Array("海西","全部|德令哈市|格尔木市|乌兰县|都兰县|天峻县|冷湖行委|大柴旦行委|茫崖行委")
  //贵州省
  xianArray[429] = new Array("贵阳","全部|乌当区|南明区|云岩区|花溪区|白云区|小河区|清镇市|开阳县|息烽县|修文县|金阳新区")
  xianArray[430] = new Array("六盘水","全部|钟山区|六枝特区|水城县|盘县")
  xianArray[431] = new Array("遵义","全部|红花岗区|汇川区|赤水市|仁怀市|遵义县|桐梓县|绥阳县|正安县|凤冈县|湄潭县|余庆县|习水县|道真仡佬族苗族自治县|务川仡佬族苗族自治县")
  xianArray[432] = new Array("安顺","全部|西秀区|平坝县|普定县|镇宁布依族苗族自治县|关岭布依族苗族自治县|紫云苗族布依族自治县")
  xianArray[433] = new Array("铜仁","全部|万山特区|铜仁市|江口县|石阡县|思南县|德江县|玉屏侗族自治县|印江土家族苗族自治县|沿河土家族自治县|松桃苗族自治县")
  xianArray[434] = new Array("毕节","全部|毕节市|大方县|黔西县|金沙县|织金县|纳雍县|赫章县|威宁彝族回族苗族自治县")
  xianArray[435] = new Array("黔西南","全部|兴义市|兴仁县|普安县|晴隆县|贞丰县|望谟县|册亨县|安龙县")
  xianArray[436] = new Array("黔东南","全部|凯里市|黄平县|施秉县|三穗县|镇远县|岑巩县|天柱县|锦屏县|剑河县|台江县|黎平县|榕江县|从江县|雷山县|麻江县|丹寨县")
  xianArray[437] = new Array("黔南","全部|都匀市|福泉市|荔波县|贵定县|瓮安县|独山县|平塘县|罗甸县|长顺县|龙里县|惠水县|三都水族自治县")
  //西藏自治区
  xianArray[438] = new Array("拉萨","全部|城关区|林周县|当雄县|尼木县|曲水县|堆龙德庆县|达孜县|墨竹工卡县")
  xianArray[439] = new Array("那曲","全部|那曲县|嘉黎县|比如县|聂荣县|安多县|巴青县|尼玛县|索县|班戈县|申扎县")
  xianArray[440] = new Array("昌都","全部|昌都县|江达县|贡觉县|类乌齐县|丁青县|察雅县|八宿县|左贡县|芒康县|洛隆县|边坝县")
  xianArray[441] = new Array("山南","全部|乃东县|扎囊县|贡嘎县|桑日县|琼结县|曲松县|洛扎县|加查县|隆子县|错那县|浪卡子县|措美县")
  xianArray[442] = new Array("日喀则","全部|日喀则市|南木林县|江孜县|定日县|萨迦县|拉孜县|昂仁县|谢通门县|白朗县|仁布县|康马县|定结县|仲巴县|亚东县|吉隆县|聂拉木县|萨嘎县|岗巴县")
  xianArray[443] = new Array("阿里","全部|噶尔县|普兰县|札达县|日土县|革吉县|改则县|措勤县")
  xianArray[444] = new Array("林芝","全部|林芝县|工布江达县|米林县|墨脱县|波密县|察隅县|朗县")
  //台湾省
  xianArray[445] = new Array("台北","全部|中正区|大同区|中山区|松山区|大安区|万华区|信义区|士林区|北投区|内湖区|南港区|文山区")
  xianArray[446] = new Array("高雄","全部|新兴区|前金区|芩雅区|盐埕区|鼓山区|旗津区|前镇区|三民区|左营区|楠梓区|小港区")
  xianArray[447] = new Array("基隆","全部|仁爱区|信义区|中正区|中山区|安乐区|暖暖区|七堵区")
  xianArray[448] = new Array("台中","全部|中区|东区|南区|西区|北区|北屯区|西屯区|南屯区")
  xianArray[449] = new Array("新竹","全部|东区|北区|香山区")
  xianArray[450] = new Array("台南","全部|中西区|东区|南区|北区|安平区|安南区")
  xianArray[451] = new Array("嘉义","全部|东区|西区")
  xianArray[452] = new Array("屏东","全部|屏东县")
  xianArray[453] = new Array("南投","全部|南投县")
  xianArray[454] = new Array("云林","全部|云林县")
  xianArray[455] = new Array("彰化","全部|彰化县")
  xianArray[456] = new Array("苗栗","全部|苗栗县")
  xianArray[457] = new Array("花莲","全部|花莲县")
  xianArray[458] = new Array("桃园","全部|桃园县")
  xianArray[459] = new Array("宜兰","全部|宜兰县")
  xianArray[460] = new Array("台东","全部|台东县")
  xianArray[461] = new Array("金门","全部|金门县")
  xianArray[462] = new Array("马祖","全部|马祖县")
  xianArray[463] = new Array("澎湖","全部|澎湖县")
  //香港特别行政区
  xianArray[464] = new Array("香港特别行政区","全部|香港特别行政区")
  //澳门特别行政区
  xianArray[465] = new Array("澳门特别行政区","全部|澳门特别行政区")


	function getXian(currCounty) {
		currCity = $("#selCity").val();
		//alert("currCity=="+currCity);
		//当前 所选择 的 省
		var currProvincecurrCity = currCity;
		var i, j, k;
		//清空 城市 下拉选单
		document.all.selCounty.length = 0;
		//alert("dfd="+xianArray.length);
		for (i = 0; i < xianArray.length; i++) {
			//得到 当前省 在 城市数组中的位置
			//alert(xianArray[i][0]);
			if (xianArray[i][0] == currCity) {
				//得到 当前省 所辖制的 地市


				tmpxianArray = xianArray[i][1].split("|")

				// alert(tmpxianArray);
				for (j = 0; j < tmpxianArray.length; j++) {
					//填充 城市 下拉选单
					document.all.selCounty.options[document.all.selCounty.length] = new Option(tmpxianArray[j], tmpxianArray[j]);

					if (currCounty == tmpxianArray[j]) {
						document.all.selCounty.options[j].selected = 'true';

					}
				}
			}
		}
	}



	function getDealer(carbrand, carmodel) { //经销商提示信息显示
		$.ajax({
			type: "POST",
			//url: "http://www.jac.com.cn/jacservice/searchdealers",
      url: "dealer.php",
			data: {
				city: $("#city option:selected").text(),
				prince: $("#province option:selected").text(),
				type: 3,
				jacmodel: carmodel,
				jacbrand: carbrand
			},
			success: function(data) {
				var msg = eval(data);
				var value = "";
				$.each(msg, function(i) {
					var $bean = msg[i];

					value += '<option value="' + $bean.Id + '" phone="' + $bean.Salestell + '">' + $bean.DealerName + '</option>';
				});

				$("#dealer").html('<option>经销商</option>' + value);
			}
		});
	}
    function getDealer2(carbrand, carmodel) { //经销商提示信息显示2
      $.ajax({
        type: "POST",
        //url: "http://www.jac.com.cn/jacservice/searchdealers",
        url: "dealer.php",
        data: {
          city: $("#city2 option:selected").text(),
          prince: $("#province2 option:selected").text(),
          type: 3,
          jacmodel: carmodel,
          jacbrand: carbrand
        },
        success: function(data) {
          var msg = eval(data);
          var value = "";
          $.each(msg, function(i) {
            var $bean = msg[i];

            value += '<option value="' + $bean.Id + '" phone="' + $bean.Salestell + '">' + $bean.DealerName + '</option>';
          });

          $("#dealer2").html('<option>经销商</option>' + value);
        }
      });
    }
