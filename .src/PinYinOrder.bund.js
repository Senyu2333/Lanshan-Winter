(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(typeof self !== 'undefined' ? self : this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 0);
        /******/ })
        /************************************************************************/
        /******/ ([
            /* 0 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                var dic = __webpack_require__(1);

                function _compareCharactor(charactor1, charactor2) {
                    if (charactor1 === charactor2) {
                        return 0;
                    } else {
                        return charactor1 < charactor2 ? -1 : 1;
                    }
                }
                /**
                 * a,b是数组下标
                 * 将array[a]与array[b]交换
                 */
                function _exchange(array, a, b) {
                    var c = array[a];
                    array[a] = array[b];
                    array[b] = c;
                }
                /**
                 * 将一个string倒转
                 * hello->olleh
                 */
                function _reverse(string) {
                    var arr = string.split("");
                    arr.reverse();
                    return arr.join("");
                }
                /**
                 * 比较两个word的第一个字的unicode
                 */
                function _compareCharCode(a, b) {
                    if (a.charCodeAt(0) > b.charCodeAt(0)) {
                        return 1;
                    } else if (a.charCodeAt(0) < b.charCodeAt(0)) {
                        return -1;
                    } else {
                        return 0;
                    }
                }

                var PinYinOrder = function () {
                    function PinYinOrder() {
                        _classCallCheck(this, PinYinOrder);
                    }

                    _createClass(PinYinOrder, [{
                        key: "sort",
                        value: function sort(array) {
                            /**
                             * 将给定的数组进行元素排序
                             * 注意：不会产生新的数组，会在原数组上排序
                             * @returns sortedArray
                             */
                            for (var i = 0; i < array.length; i++) {
                                var k = i;
                                for (var j = i; j < array.length; j++) {
                                    if (this.compareWord(array[j], array[k]) < 0) {
                                        k = j;
                                    }
                                }
                                _exchange(array, i, k);
                            }
                            return array;
                        }
                    }, {
                        key: "compareWord",
                        value: function compareWord(word1, word2) {
                            /**
                             * @description
                             * 根据拼音排序，比较两个单词，与compareInPinYin不同的是，本方法比较的是整个单词
                             * 把单词的每一个字的首字母拿出来进行比对，同音的情况，两个字的小于三个字
                             * @returns
                             * 如果word1排在word12前面，返回-1，反之返回1，相等返回0
                             * @example
                             * 曹山===曹珊===曹水（都是C,S）
                             * 曹山<曹山山（两个字的小于三个字的）
                             */
                            if (!word1) {
                                return 1;
                            }

                            if (!word2) {
                                return -1;
                            }

                            if (!word1 && !word2) {
                                return 0;
                            }

                            var weightMagicNumber = 100; //权重值
                            var weightOfWord1 = 1; //第一个词的初始权重值
                            var weightOfWord2 = 1; //第二个词的初始权重值

                            //传入的两个字符串长度不同，将i设置为最长的那个数字
                            var i = word1.length > word2.length ? word1.length : word2.length;

                            var returnValueBetweenFirstCharactor = this.compareInPinYin(word1[0], word2[0]);

                            if (returnValueBetweenFirstCharactor != 0) {
                                //如果第一个字不相等，则直接返回结果
                                return returnValueBetweenFirstCharactor;
                            }

                            for (var j = 0; j < i; j++) {
                                if (!word1[j]) {
                                    weightOfWord2 += weightOfWord2 + Math.pow(weightMagicNumber, i - j);
                                    break;
                                }
                                if (!word2[j]) {
                                    weightOfWord1 += weightOfWord1 + Math.pow(weightMagicNumber, i - j);
                                    break;
                                }
                                if (this.compareInPinYin(word1[j], word2[j]) > 0) {
                                    weightOfWord1 += weightOfWord1 + Math.pow(weightMagicNumber, i - j);
                                } else if (this.compareInPinYin(word1[j], word2[j]) < 0) {
                                    weightOfWord2 += weightOfWord2 + Math.pow(weightMagicNumber, i - j);
                                }
                            }

                            if (weightOfWord1 > weightOfWord2) {
                                return 1;
                            } else if (weightOfWord1 < weightOfWord2) {
                                return -1;
                            } else {
                                return 0;
                            }
                        }
                    }, {
                        key: "compareInPinYin",
                        value: function compareInPinYin(charactor1, charactor2) {
                            /**
                             * @description
                             * 根据拼音排序，比较两个字符串或者字符，如果是字符串，只比较第一个字符；
                             * 英文字符排在汉字前面,
                             * 特殊字符排在最后
                             * 1.6新增 对数字进行对比    数字<英文<汉字<特殊字符
                             * @returns
                             * 如果charactor1排在charactor2前面，返回-1，反之返回1，相等返回0
                             */

                            var sourceCharactorPinyin = this.getCharactorFirstPinYinWord(charactor1);
                            var targetCharactorPinyin = this.getCharactorFirstPinYinWord(charactor2);

                            if (sourceCharactorPinyin && targetCharactorPinyin) {
                                var pinyinCompareResult = _compareCharactor(sourceCharactorPinyin, targetCharactorPinyin);
                                if (pinyinCompareResult == 0) {
                                    return _compareCharCode(charactor1, charactor2);
                                }
                                return pinyinCompareResult;
                            } else if (!sourceCharactorPinyin && targetCharactorPinyin) {
                                return 1;
                            } else if (sourceCharactorPinyin && !targetCharactorPinyin) {
                                return -1;
                            } else {
                                return 0;
                            }
                        }
                    }, {
                        key: "getCharactorFirstPinYinWord",
                        value: function getCharactorFirstPinYinWord(charactor) {
                            /**@description
                             * 得到一个字符的拼音首字母
                             * @param 字符串或者字
                             * @returns
                             * 如果是汉字，返回拼音首字母，
                             * 如果是英文，返回首字母的大写，
                             * 如果是特殊字符，返回false
                             */
                            for (var key in dic) {
                                if (dic[key].indexOf(charactor[0]) >= 0) {
                                    return key;
                                }
                            }

                            if ("A" <= charactor[0] && charactor[0] <= "Z" || "a" <= charactor[0] && charactor[0] <= "z" || "0" <= charactor[0] && charactor[0] <= "9") {
                                return charactor[0].toUpperCase();
                            }

                            return false;
                        }
                        /**
                         * checkCharactorIsChinese
                         * @description
                         * 输入一个参数，返回这个参数的第一个字符是不是汉字
                         *
                         * 注意：只判断第一个字符。
                         * “I am 超级玛丽”，返回false，第一个字符为“I”
                         * “超级玛丽 is me”，返回true，第一个字符为“超”
                         */

                    }, {
                        key: "checkCharactorIsChinese",
                        value: function checkCharactorIsChinese(word) {
                            //在unicode编码中，汉字的第一个字符位置是0x4e00，转换为十进制是19968
                            //最后一个汉字位置是0x9fff，转换为十进制是40959
                            //由于操作系统字库的原因，其实从19968到40959之间有很多字是显示不出来的，会显示为一个方块
                            var charactor = word.toString();
                            return 19968 <= charactor.charCodeAt(0) && charactor.charCodeAt(0) <= 40959;
                        }
                    }]);

                    return PinYinOrder;
                }();

                if (typeof window != 'undefined') {
                    window.PinYinOrder = PinYinOrder;
                }

                module.exports = PinYinOrder;

                /***/ }),
            /* 1 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                module.exports = {
                    "a": "啊阿吖嗄哎哀唉埃挨锿捱皑癌嗳矮蔼霭艾爱砹隘嗌嫒碍暧瑷僾薆安桉氨庵谙腤鹌鞍鮟盫啽垵俺唵埯铵揞犴岸按案胺暗黯肮昂枊盎醠凹坳垇爊敖嗷嶅廒獒遨熬璈翱聱螯謷鳌鏖芺袄媪岙傲奡奥骜澳懊鏊",
                    "b": "八巴叭扒朳吧夿岜芭疤捌笆粑豝鲃拔茇胈菝跋魃把靶坝弝爸罢鲅霸灞掰白百佰柏栢捭摆呗败拜稗扳攽班般颁斑搬斒瘢癍阪坂板版钣舨蝂魬办半伴扮姅拌绊瓣邦帮梆浜绑榜膀蚌傍棒谤塝稖蒡磅镑勹包孢苞胞煲龅褒雹宝饱保鸨堡葆褓报抱豹趵菢鲍暴虣爆陂卑杯悲碑鹎北贝狈邶备背钡倍悖被偝惫焙辈碚蓓褙骳糒鞴鐾奔贲倴锛本苯畚坌笨伻崩绷嘣甭菶琫泵迸甏镚蹦屄逼鲾柲荸鼻匕比佊吡妣沘彼秕俾笔舭鄙币必毕闭庇诐邲畀哔毖珌荜陛毙狴铋婢庳敝梐萆堛弼愊愎皕筚赑滗煏痹腷蓖裨跸閟弊碧箅蔽馝駜髲壁嬖篦薜觱避鮅濞臂髀奰璧饆襞襣躄鷩边砭笾编煸箯蝙鳊鞭贬扁窆匾惼碥稨褊藊卞弁忭抃汳汴苄便变昪揙缏遍艑辨辩辫彪标飑猋幖滮骠熛膘瘭镖飙飚瀌镳表婊裱褾檦俵鳔憋鳖别蹩瘪邠宾彬傧斌滨缤槟镔濒豳蠙摈殡膑髌鬓冰兵栟丙邴秉柄炳饼蛃禀并幷病摒拨波玻剥袯钵饽啵脖菠嶓播伯孛驳帛泊瓝勃亳浡钹铂舶博渤葧鹁搏馎鲌僰箔膊踣镈薄襮礴跛簸擘檗峬庯逋钸晡餔醭卜卟补哺捕不布步怖钚部埠瓿蔀篰簿玢夯疒瀑",
                    "c": "嚓擦礤猜才材财裁采彩睬綵踩菜蔡縩参骖餐残蚕惭惨憯黪黲灿粲璨仓伧沧苍舱藏鑶操糙曹嘈漕槽艚螬草册侧厕恻测敇策箣岑梣涔噌层蹭叉杈臿嗏插馇锸艖垞查茬茶嵖搽猹槎察碴檫衩镲汊岔侘诧姹差拆钗侪柴豺虿瘥觇掺搀幨婵谗孱禅馋缠蝉鋋廛潺镡瀍蟾巉躔镵产刬浐谄铲阐蒇冁繟忏颤羼韂伥昌娼猖菖阊琩鲳肠苌尝偿常徜嫦鲿厂场昶惝敞氅鋹怅玚畅倡鬯唱暢韔抄弨怊钞焯超晁巢朝嘲潮吵炒眧麨耖车砗唓扯彻坼掣撤澈抻郴琛嗔尘臣忱沉辰陈宸晨谌趻碜墋踸闯衬疢称龀趁榇谶柽偁蛏铛牚琤赪撑瞠丞成呈承枨诚郕城宬乘埕脭铖惩程裎塍酲澄橙逞骋秤吃哧蚩鸱瓻眵笞嗤媸摛痴螭魑弛池驰迟茌持墀踟篪尺侈齿耻豉褫彳叱斥赤饬抶炽翅敕啻傺憏瘛充冲忡茺翀舂憃憧艟虫崇宠铳抽瘳篘犨仇俦帱惆绸畴愁稠筹酬踌懤雠丑瞅臭殠出初摴樗刍除厨滁锄蜍雏橱幮躇蹰杵础储楮楚褚齼亍处怵绌琡搐触憷歜黜矗搋膗揣啜嘬踹巛川氚穿传舡船遄椽歂舛荈喘僢串钏囱疮窗摐床噇创怆吹炊垂陲捶菙棰槌锤春堾椿蝽鰆纯唇莼淳鹑漘醇踳蠢踔戳辵娖绰逴辍龊歠呲玼疵词祠茈茨瓷慈辞磁雌鹚糍此佌次佽刺赐从匆苁枞葱骢璁聪丛淙琮凑楱腠辏粗徂殂促猝蔟醋簇蹙蹴汆撺镩蹿窜篡爨崔催摧榱璀脆啐悴淬萃毳瘁粹翠村皴存忖寸搓磋撮蹉嵯痤矬鹾脞厝挫措锉错刹畜曾膪澶骣粢",
                    "d": "襜裯篅錞哒耷搭嗒褡达妲怛笪答瘩靼鞑打大呆歹傣代岱甙绐迨带待怠殆玳贷埭袋逮戴黛丹单担眈耽郸聃殚瘅箪儋胆疸紞掸旦但诞啖弹惮淡萏蛋氮澹当裆挡党谠凼宕砀荡档菪刀叨忉氘导岛倒捣祷蹈到悼盗道稻纛得锝德的灯登噔簦蹬等戥邓凳嶝瞪磴镫低羝堤嘀滴镝鞮狄籴迪敌涤荻笛觌嫡氐诋邸坻底抵柢砥骶地弟玓帝娣递第谛棣睇缔蒂碲嗲掂滇颠巅癫典点碘踮电佃甸阽坫店垫玷钿惦淀奠殿癜簟刁叼凋貂碉雕鲷吊钓掉铞爹跌迭垤瓞谍堞揲耋叠牒碟蝶蹀鲽丁仃叮玎疔盯钉耵酊顶鼎订定啶腚碇锭丢铥东冬咚岽鸫董懂蕫动冻侗垌峒恫栋洞胨胴硐都兜蔸篼斗抖陡蚪豆郖逗痘窦嘟督毒读渎椟牍犊黩髑独笃堵赌睹芏妒杜肚度渡镀蠹端短段断缎椴煅锻簖堆队对兑祋怼碓憝镦吨惇敦墩礅蹲盹趸沌炖盾砘钝顿遁多咄哆裰夺铎掇敚踱朵哚垛缍躲剁沲堕舵惰跺赕铫町铤",
                    "e": "砵妸屙讹俄娥峨莪锇鹅蛾额婀厄阨呃扼苊轭垩恶饿谔鄂阏愕萼遏腭锷鹗颚噩諤鳄恩蒽摁儿而鸸鲕尔耳迩洱饵珥铒二佴贰唔诶",
                    "f": "祊偪发乏伐垡罚阀筏法砝珐帆番幡翻藩凡矾钒烦樊蕃燔璠繁蹯瀿蘩鐇反返氾犯汎泛饭范贩畈梵方邡坊芳枋钫防妨房肪鲂仿访纺昉舫放飞妃非啡婓绯菲扉蜚霏鲱肥淝腓匪诽悱斐榧翡篚吠废沸狒肺费痱镄分吩纷芬氛酚坟汾棼焚鼢粉份奋忿偾愤粪鲼瀵丰风沣沨枫封疯砜峰烽葑锋蜂酆冯逢缝讽唪凤奉俸缶否夫呋肤趺麸稃跗孵敷弗伏凫孚扶芙芾怫拂服绂绋苻俘枹氟祓罘茯郛浮砩莩蚨匐桴涪琈符艴菔袱幅福辐幞蝠黻抚甫府拊斧俯釜辅腑滏腐黼父讣付妇负附咐阜驸复赴副傅富赋缚腹鲋赙蝜蝮鳆覆馥",
                    "g": "旮伽钆尜嘎噶尕尬该陔垓赅改丐钙盖溉戤概干甘迀杆肝坩泔苷柑竿疳酐尴秆赶敢感澉橄擀旰矸绀淦幹赣冈刚岗纲肛缸钢罡港杠筻戆皋羔高睾膏篙糕杲搞缟槁稿镐藁告诰郜锆戈圪纥疙哥胳袼鸽割搁歌阁革格鬲葛隔嗝塥搿膈镉骼哿舸个各虼硌铬箇根跟哏亘艮茛更庚耕赓羹郠哽埂绠耿梗鲠工弓公功攻供肱宫恭蚣躬龚觥巩汞拱珙共贡勾佝沟钩缑緱篝鞲岣狗苟枸玽笱构诟购垢够媾彀遘觏估咕姑孤沽轱鸪菇菰蛄觚辜酤毂箍鹘古汩诂谷股牯骨罟钴蛊鼓嘏穀臌瞽固故顾崮梏牿雇痼锢鲴瓜刮胍鸹呱剐寡卦诖挂褂乖拐怪关观官冠倌棺鳏馆管贯惯掼涫盥灌瓘鹳罐光咣桄胱广犷逛归圭妫龟规皈闺硅瑰鲑宄轨庋匦诡癸鬼晷簋刽刿柜炅贵桂跪鳜衮绲辊滚磙鲧棍呙埚郭崞聒锅蝈囯国帼掴虢馘果猓椁蜾裹过桧咯莞呷",
                    "h": "餲侅蛤鹄铪哈嗨孩骸海胲醢亥骇害氦顸蚶酣憨鼾邗含邯函浛晗涵焓寒韩罕喊汉汗旱悍捍焊琀菡傼颔撖憾撼翰瀚杭绗航颃沆蒿嚆薅蚝毫嗥豪嚎壕濠好郝号昊浩耗淏皓颢灏灝诃呵喝嗬禾合何劾和河曷阂核盍荷涸盒菏訸颌阖翮佫贺褐赫鹤壑黑嘿痕很狠恨亨哼恒桁珩横衡蘅轰哄訇烘薨弘红宏闳泓洪荭虹鸿蕻黉讧侯喉猴瘊篌糇骺吼后郈厚逅候堠鲎乎呼忽烀轷唿惚滹囫弧狐胡壶斛湖猢葫煳瑚鹕槲糊蝴醐觳虎浒唬琥互户冱护沪岵怙戽祜笏扈瓠鄠鹱花华哗骅铧滑猾化划画话桦怀徊淮槐踝坏欢獾还环洹桓萑锾寰缳鬟缓幻奂宦唤换浣涣患焕逭痪豢漶鲩擐肓荒慌皇凰隍黄徨惶湟遑煌潢璜篁蝗癀磺簧蟥鳇恍晃晄谎幌滉灰诙咴恢挥虺晖珲辉麾徽隳回洄茴蛔悔卉汇会讳哕浍绘荟诲恚烩贿彗晦秽喙惠缋毁慧蕙蟪昏荤婚阍浑馄魂诨混溷耠锪劐豁攉活火伙钬夥或货获祸惑霍镬嚯瀖藿蠖行砉圜",
                    "i": "",
                    "j": "皀筴伡諔丌讥击叽饥乩圾机玑肌芨矶鸡咭迹剞唧姬屐积笄基绩嵇犄缉赍畸跻箕畿稽齑墼激羁及吉岌汲级即极亟佶姞急笈疾戢棘殛集嫉楫蒺辑瘠蕺籍几己虮挤脊掎戟嵴麂计记伎纪妓忌技芰际剂季哜既洎济继觊偈寂寄悸祭蓟暨跽霁鲚稷鲫冀髻骥加夹佳迦枷浃珈家痂笳袈葭跏嘉镓岬郏荚恝戛铗蛱颊甲胛贾钾瘕价驾架假嫁稼戋奸尖幵坚歼间肩艰兼监笺菅湔犍缄搛煎缣蒹鲣鹣篯瀐鞯囝拣枧俭柬茧捡笕减剪检趼睑硷裥锏简谫戬碱翦謇蹇见件建饯剑牮荐贱健涧舰渐谏楗毽溅腱践鉴键僭箭踺江姜将茳浆豇僵缰礓疆讲奖桨蒋耩匠降洚绛酱犟糨艽交郊姣娇浇茭骄胶椒焦蛟跤僬鲛蕉礁鹪鐎角佼挢狡绞饺皎矫脚铰搅剿敫徼缴叫轿较教窖酵噍醮阶疖皆接秸喈嗟揭街孑节讦劫杰诘拮洁结桀婕捷颉睫截碣竭鲒羯姐解介戒芥届界疥诫借蚧骱藉巾今斤金津矜衿琎筋襟仅卺紧堇谨锦廑馑槿瑾尽劲妗近进荩晋浸烬赆缙禁靳觐噤京泾经茎荆惊旌菁晶腈睛粳兢精鲸井阱刭肼颈景儆憬警净弪径迳胫痉竞婧竟敬靖境獍静镜扃迥炯窘纠究鸠赳阄啾揪鬏九久灸玖韭酒旧臼咎疚柩桕厩救就舅僦鹫居拘狙苴驹疽掬椐琚锔裾雎鞠鞫局桔菊橘咀沮举矩莒榉榘龃踽句巨讵姖拒苣具炬钜俱倨剧惧据距犋飓锯窭聚屦踞遽醵娟捐涓鹃镌蠲卷锩倦桊狷绢隽眷鄄噘撅孓决诀抉玦珏绝觉倔崛掘桷觖厥劂谲獗蕨橛爵镢蹶嚼矍爝攫军君均钧皲菌筠麇俊郡峻捃浚骏珺竣挟",
                    "k": "蚵槛咔咖喀卡佧胩开揩锎凯剀垲恺铠慨蒈楷锴忾刊勘龛堪戡坎侃砍莰看阚瞰康慷糠鱇扛亢伉邟囥抗闶炕钪尻考拷栲烤铐犒靠坷苛柯珂科轲疴钶棵颏稞窠颗瞌磕蝌髁壳咳可岢渴克刻客恪课氪骒缂嗑溘锞肯垦恳啃裉吭坑铿空倥崆箜孔恐控抠芤眍口叩扣寇筘蔻刳枯哭堀窟骷苦库绔喾裤酷夸侉垮挎胯跨蒯块快侩郐哙狯脍筷宽髋梡款匡诓哐筐狂诳夼邝圹纩况旷矿贶框眶亏岿悝盔窥奎逵馗喹揆葵暌魁睽蝰夔傀跬匮喟愦愧溃蒉馈匱篑聩坤昆焜琨锟髡醌鲲悃捆阃壸梱困扩括栝蛞阔廓",
                    "l": "鄜靓摎樛垃拉啦翋邋旯砬喇剌腊瘌蜡辣来崃徕涞莱铼赉睐赖濑癞籁兰岚拦栏婪阑蓝谰澜褴斓篮镧览揽缆榄漤罱懒烂滥啷郎狼莨廊琅榔稂锒螂朗阆浪蒗捞劳牢唠崂痨铹醪老佬姥栳铑潦涝烙耢酪嫪仂乐叻玏泐勒鳓雷嫘缧檑镭羸耒诔垒傫磊蕾儡肋泪类累酹擂嘞塄棱楞冷愣厘梨狸离莉骊犁喱犂鹂漓缡蓠蜊嫠璃鲡黎篱罹藜黧蠡礼李里俚哩娌逦理锂鲤澧醴鳢力历厉立吏丽利励呖坜沥苈例戾枥疠隶俐俪栎疬荔轹郦栗猁珕砺砾莅唳笠粒粝蛎傈痢詈跞雳溧篥俩奁连帘怜涟莲联裢廉鲢濂臁镰蠊敛琏脸裣蔹练娈炼恋殓链楝潋良凉梁涼椋粮粱墚踉两魉亮谅辆晾量辽疗聊僚寥廖嘹寮撩獠缭燎镣鹩钌蓼了尥料撂咧列劣冽洌埒烈捩猎裂趔躐鬣邻林临啉淋琳粼嶙遴辚霖瞵磷鏻鳞驎麟凛廪懔檩吝赁蔺膦躏拎伶灵囹岭泠苓柃玲瓴凌铃陵棂淩琌绫羚翎聆菱蛉零龄鲮酃领令另呤溜熘刘浏流留琉硫旒遛馏骝榴瘤镏鎏柳绺锍六鹨龙咙泷茏栊珑胧砻笼聋隆癃窿陇垄垅拢娄偻喽蒌楼耧蝼髅嵝搂篓陋漏瘘镂露噜撸卢庐芦垆泸炉栌胪轳鸬舻颅鲈瓐卤虏掳鲁橹镥甪陆侓坴录赂辂渌逯鹿琭禄碌路漉戮辘潞璐簏鹭麓鏴氇驴闾吕侣旅缕履律虑率绿孪峦挛栾鸾脔滦銮卵乱掠略锊抡仑伦囵沦纶轮论捋罗猡脶萝逻椤锣箩骡镙螺倮裸瘰蠃泺洛络荦骆珞落摞漯雒",
                    "m": "苾貉妈嬷麻蟆马犸玛码蚂杩祃骂唛傌鬕吗嘛埋霾买荬劢迈麦卖脉颟蛮馒樠瞒鞔鳗满螨曼谩墁幔慢漫缦蔓熳镘邙忙芒盲茫硭莽漭蟒猫毛矛牦茅旄蛑锚髦蝥蟊卯峁泖茆昴铆茂冒贸耄袤帽鄚瑁瞀貌懋么没枚玫眉莓梅媒嵋湄猸楣煤酶镅鹛霉每美浼渼镁妹昧媚寐魅门扪钔闷焖懑们氓虻萌盟甍瞢朦檬礞艨勐猛蒙锰艋蜢懵蠓孟梦咪弥祢迷猕谜醚糜縻麋靡蘼米芈弭洣敉脒眯糸汨宓泌觅秘密幂谧嘧蜜芇眠绵棉免沔黾勉眄娩冕湎缅腼面喵苗描瞄鹋杪眇秒淼渺缈藐邈妙庙咩灭蔑篾蠛民岷旻玟苠珉缗皿闵抿泯闽悯敏湣愍鳘名明鸣茗冥铭鄍溟暝瞑螟酩命谬缪摸谟嫫馍摹模膜麽摩磨蘑魔抹末殁沫茉陌秣莫寞漠蓦貊墨瘼镆默貘耱哞牟侔眸谋鍪某母毪亩牡姆拇木仫目沐坶牧苜钼募墓幕睦慕暮穆渑",
                    "n": "拗耏乜拿镎哪内那纳肭娜衲钠捺乃奶艿氖奈柰耐萘鼐囡男侽南难喃遖楠赧揇湳腩蝻婻囔囊馕曩攮孬呶挠猱蛲垴恼脑瑙闹婥淖讷呐呢馁嫩能妮尼坭怩泥倪铌猊霓鲵伲你拟旎昵逆匿溺睨腻拈年鲇鲶黏捻辇撵碾廿念埝娘酿鸟茑袅嬲尿脲捏陧涅聂臬啮嗫镊镍颞蹑孽蘖您宁咛拧狞柠聍凝佞泞甯妞牛忸扭狃纽杻钮农侬哝浓脓弄槈耨奴孥驽努弩胬怒女钕恧衄疟虐暖挪傩诺喏搦锘懦糯恁蔫",
                    "o": "噢哦讴欧殴瓯鸥呕偶耦藕怄沤",
                    "p": "湴棓琲絣鎞辟鞞萹拚徧骉麃藨穮摽馞鵏吥彷脯尨妑趴啪葩杷爬耙琶筢帕怕拍俳徘排牌箄哌派湃蒎眅潘攀爿柈盘磐蹒蟠坢判泮叛盼畔袢襻乓滂庞逄旁螃耪胖抛脬刨咆庖狍炮袍匏跑泡疱呸胚醅陪培赔锫裴沛佩帔旆珮配辔霈喷盆湓怦抨砰烹嘭芃朋倗堋彭棚傰搒硼蓬鹏澎篷膨蟛捧剻碰丕伾批邳坯披砒铍劈霹皮芘枇毗疲蚍郫陴啤埤椑琵脾罴蜱貔鼙匹仳圮痞癖屁媲睥僻譬片偏犏篇翩骈胼蹁谝骗剽漂缥飘螵瓢殍瞟票嘌嫖氕撇瞥苤姘拼贫嫔频颦品榀牝娉聘乒俜平评凭坪苹郱屏枰洴玶瓶萍鲆钋坡泼颇婆鄱皤叵钷笸迫珀哱破粕魄剖掊裒仆攴扑铺噗鯆匍莆菩葡蒲璞濮镤朴圃埔浦普溥谱氆镨蹼曝",
                    "q": "儭琯袷彊湫峤趄瞿七沏妻柒凄栖桤戚萋期欺嘁槭漆蹊亓祁齐圻岐芪其奇歧祈耆脐颀崎淇畦萁骐骑棋琦琪祺蛴旗綦蜞蕲鳍麒乞企屺岂芑启杞起绮綮气讫汔迄弃汽泣契砌荠葺碛器憩掐葜恰洽髂千仟阡扦芊迁佥岍钎牵悭铅谦愆签骞搴褰前钤虔钱钳乾掮箝潜黔浅肷慊遣谴缱欠芡茜倩堑嵌椠歉呛羌戕戗枪跄腔蜣锖锵镪强墙嫱蔷樯抢羟襁炝悄硗跷鄡劁敲锹橇缲蹻乔侨荞桥谯憔鞒樵瞧巧愀俏诮峭窍翘撬鞘切茄且妾怯窃挈惬箧锲亲侵钦衾嵚芩芹秦琴禽勤嗪溱噙擒檎螓锓寝吣沁揿青氢轻倾卿圊清蜻鲭情晴氰擎檠黥苘顷请謦庆箐磬罄跫銎邛穷穹茕筇琼蛩丘邱秋蚯萩楸鳅囚犰求虬泅俅酋逎逑球赇巯遒裘蝤鼽糗区曲岖诎驱屈祛蛆躯蛐趋麯麴黢劬朐鸲渠蕖磲璩蘧氍癯衢蠼取娶龋去阒觑趣悛圈鐉全权诠泉荃拳辁痊铨筌蜷醛鬈颧犬畎绻劝券炔缺瘸却悫雀确阕阙鹊榷逡裙群郄",
                    "r": "蚺然髯燃冉苒染瀼禳瓤穰嚷壤攘让荛饶桡扰娆绕惹热人仁壬忍荏稔刃认仞讱任纫妊轫韧饪衽扔仍礽日戎肜狨绒茸荣容嵘溶蓉榕熔蝾镕融瀜冗柔揉糅蹂鞣肉如茹铷儒嚅孺濡薷襦蠕颥汝乳辱鄏入洳溽缛蓐褥阮朊软蕤蕊芮枘蚋锐瑞睿闰润若偌弱鄀婼渃箬",
                    "s": "杓偲穇懆摻綝匙輴鏸葚仨撒洒卅飒脎萨塞腮噻鳃赛三叁毵伞散糁馓桑嗓搡磉颡丧搔骚缫臊鳋扫嫂埽瘙色涩啬铯琗瑟穑森僧杀沙纱砂莎铩痧裟鲨傻唼啥歃煞霎筛晒山彡删杉芟姗衫钐埏珊舢跚煽潸膻闪陕讪汕疝苫扇善骟鄯缮嬗擅膳赡蟮鳝伤殇商觞墒熵裳垧晌赏上尚绱捎梢烧稍筲艄蛸勺芍韶少劭卲邵绍哨潲奢猞赊畲舌佘蛇舍厍设社射涉赦慑摄滠麝申伸身侁呻绅诜珅娠砷深神沈审哂矧谂婶渖肾甚胂渗慎椹蜃升生声牲胜笙甥绳省眚圣晟盛剩嵊尸失师诗邿施狮湿酾十什石时识实拾蚀食史矢使始驶士氏世仕市示式事侍势视试饰室是柿适轼逝谥释筮誓奭收手守首艏寿受狩兽售授绶瘦书殳抒纾叔枢陎姝倏殊梳淑菽鄃疏舒摅毹输蔬秫孰赎塾熟璹暑黍署鼠蜀薯曙术戍束沭述树竖恕庶数腧墅漱澍刷唰耍衰摔甩帅蟀闩拴栓涮双霜孀爽谁水税睡吮顺舜瞬说妁烁朔铄硕嗍搠蒴嗽槊厶丝司私咝思鸶斯缌蛳锶嘶撕澌死巳四寺汜伺似佀兕姒祀泗饲驷俟笥耜嗣肆騃忪松娀凇崧淞菘嵩怂悚耸竦讼宋诵送颂嗖搜溲馊飕锼艘螋叟嗾瞍擞薮苏酥稣俗玊夙诉肃涑素速粟谡嗉塑愫溯僳蔌觫璛簌狻酸蒜算虽荽眭葰睢濉绥隋随髓岁祟谇遂碎隧燧穗邃孙狲荪飧损笋隼榫唆娑挲桫梭睃嗦羧蓑缩所唢索琐锁厦莘疋栅属",
                    "t": "俶沓呔焘调钭囤她苕他它趿铊塌溻塔獭鳎挞闼遢榻踏蹋骀胎台邰抬苔炱跆鲐薹太汰态肽钛泰酞坍贪摊滩瘫坛昙谈郯覃痰锬谭潭檀忐坦袒钽毯叹炭探碳汤铴羰镗饧唐堂棠塘搪溏瑭樘膛糖螗螳醣帑倘淌傥耥躺烫趟弢涛绦掏慆滔韬饕洮逃桃陶啕梼淘萄檮鼗讨套忑忒特铽慝疼腾誊滕藤剔梯锑踢绨珶啼提缇鹈漽题蹄醍体屉剃倜悌涕逖惕替裼嚏天添田恬畋甜填阗忝殄淟琠腆舔掭佻挑祧条迢笤龆蜩髫鲦窕眺粜跳贴萜铁帖餮厅汀听烃廷亭庭莛停婷葶蜓霆挺梃珽艇通嗵仝同佟彤茼桐砼铜童酮僮潼瞳统捅桶筒恸痛偷头投骰透凸秃突图凃徒涂荼途屠酴土吐钍兔堍菟湍团抟疃彖推颓腿退煺蜕褪吞暾屯饨豚臀氽乇托拖脱驮佗陀坨沱驼柁砣鸵跎酡橐鼍妥庹椭拓柝唾箨",
                    "u": "",
                    "v": "",
                    "w": "哇娃挖洼娲蛙瓦佤袜腽歪崴外弯剜湾蜿豌丸纨芄完玩顽烷宛挽晚婉惋绾脘菀琬皖畹碗万腕汪亡王网往枉罔惘辋魍妄忘旺望危威偎逶隈葳微煨薇巍为韦围帏沩违闱桅涠唯帷惟维嵬湋潍伟伪尾纬苇委炜玮洧娓诿萎隗猥蒍痿艉韪鲔卫未位味畏胃軎尉谓喂渭猬蔚慰魏温瘟文纹闻蚊阌雯刎吻紊稳问汶璺翁嗡蓊瓮蕹挝倭涡莴喔窝蜗我沃肟卧偓幄握渥硪斡龌乌圬污邬呜巫屋诬钨无毋吴吾芜梧浯蜈鼯五午仵伍坞妩庑忤怃迕武侮捂牾珷鹉舞兀勿务戊阢扤杌芴物误悟晤焐婺痦骛雾寤鹜鋈",
                    "x": "扱滀滈觟郇叚徦噱釐棲荨繻姺宿潚圩夕兮汐西吸希昔析矽穸郗唏奚娭息晞浠牺悉惜欷淅烯硒菥傒晰犀稀粞翕舾溪皙锡僖熄熙蜥嘻嬉膝樨歙熹羲螅燨蟋谿雟醯曦鼷习席袭觋媳隰檄洗玺徙铣喜葸屣蓰禧鱚戏系饩细郤阋舄隙禊虾瞎匣侠狎峡柙狭硖遐暇瑕辖霞黠下吓夏罅仙先纤氙祆籼莶掀跹酰锨鲜暹伭闲弦贤咸涎娴舷衔痫鹇嫌冼显险猃蚬筅跣藓燹县岘苋现线限宪陷馅缐羡献腺線霰乡芗相香厢湘缃葙箱襄骧镶详庠祥翔享响饷飨想鲞向巷项象像橡蟓枭削哓枵骁宵消绡逍萧硝销潇箫霄魈嚣崤淆小晓筱孝肖哮效校笑啸些楔歇蝎协邪胁偕斜谐携勰撷缬鞋写泄泻绁卸屑偰械亵渫谢榍榭廨懈獬薤邂燮瀣蟹躞心邤忻芯辛昕欣锌新歆薪馨鑫囟信衅兴星惺猩腥刑邢形陉型硎醒擤杏姓幸性荇婞悻涬凶兄匈芎讻汹胸訩雄熊休修咻庥羞鸺貅馐髹朽秀岫绣袖琇锈溴戌盱胥须訏顼虚欻嘘需墟俆徐许诩栩珝糈旭序叙恤洫勖绪续酗婿溆絮嗅煦蓄蓿轩宣谖喧揎萱暄煊睻儇玄玹痃悬旋漩璇选烜癣泫炫绚眩铉琄渲楦碹镟靴薛穴学泶踅雪鳕血谑勋埙熏窨獯薰曛醺寻巡旬驯询峋恂洵浔紃荀珣循鄩鲟训讯汛迅徇逊殉巽蕈吁",
                    "y": "叆媕闇晻墺訑侥俓妜鐍剡涒涴琟郚丫压呀押鸦桠鸭牙伢岈芽厓琊蚜崖涯睚衙哑痖雅亚讶迓垭娅砑氩揠咽恹烟胭崦淹焉菸阉湮腌傿鄢嫣延闫严妍芫言岩沿炎研盐阎筵蜒颜檐兖奄俨匽衍偃厣掩眼琰罨演魇鼹厌彦砚唁宴晏艳验谚堰焰焱雁滟酽谳燕赝嬿央泱殃秧鸯鞅扬羊阳旸杨炀佯疡徉洋烊崵蛘暘卬仰养氧痒怏恙样漾幺夭吆妖腰邀爻尧肴姚轺珧窑傜谣徭摇遥瑶繇鳐杳咬窈舀崾药要鹞曜耀椰噎爷耶揶铘也冶野业叶曳页邺夜晔烨液谒腋靥一伊衣医依祎咿猗铱壹揖欹漪噫黟仪圯夷沂诒宜怡迤饴咦姨荑贻眙胰酏痍移詒遗颐疑嶷彝乙已以钇佁矣苡舣蚁倚椅旖义亿弋刈忆艺仡议亦屹异佚呓役抑译邑佾峄怿易绎诣驿奕弈疫羿轶悒挹益谊埸翊翌逸意溢缢肄裔瘗蜴毅熠镒劓殪燚薏翳翼臆癔镱繶瀷懿因阴姻洇茵荫音殷氤铟喑堙吟垠狺珢寅淫银鄞夤龈霪尹引吲饮蚓隐瘾印茚胤应英莺婴渶瑛嘤撄缨罂樱璎鹦膺鹰迎茔盈荥荧莹萤营萦楹滢蓥潆蝇嬴赢瀛郢颍颖影瘿映硬媵哟唷佣拥痈邕庸鄘雍墉慵壅臃鳙饔喁永甬咏泳俑勇涌恿蛹踊用优忧攸呦幽悠尢尤由犹邮油柚疣莜莸铀蚰游鱿猷蝣友有卣酉羑莠铕牖黝又右幼佑侑囿宥祐诱蚴釉鼬纡迂淤渝瘀于予邘余妤欤玙於盂臾鱼俞禺竽舁娱狳谀馀渔萸隅雩嵛愉揄腴逾愚榆瑜虞觎窬舆蝓与伛宇屿羽雨俣禹语圄圉庾鄅萭瘐窳龉玉驭聿芋妪饫育郁彧昱狱峪浴钰预域欲淯谕阈喻寓御琙裕遇鹆愈煜蓣誉毓蜮豫燠鹬鬻鸢冤眢鸳渊箢元员园沅垣爰原圆袁援缘鼋塬源猿辕橼螈远苑怨院媛瑗愿曰约月刖礿岳钥悦钺阅跃粤越樾龠瀹黦云匀妘沄纭芸昀郧耘氲允狁陨殒孕运郓恽晕酝愠缊韫韵熨蕴",
                    "z": "嶒蹅茝僝长鼌胵絺紬搊偢骴薋泚跐酢欑亶喋篸剸匝咂拶杂砸灾甾哉栽菑宰载崽再在糌簪咱昝攒儹趱暂赞錾瓉瓒赃臧驵奘脏葬遭糟凿早枣蚤澡藻灶皂唣造噪燥躁则择泽责迮啧帻笮舴箦赜仄昃贼怎谮增憎缯罾锃甑赠吒咋哳喳揸渣楂齄齇扎札轧闸铡眨砟乍诈咤炸痄蚱榨斋摘宅翟窄债砦寨瘵沾毡旃粘詹谵瞻鳣斩展盏崭搌辗占佔战栈站绽湛蘸张章鄣嫜彰漳獐樟璋蟑仉涨掌丈仗帐杖胀账障嶂幛瘴钊招昭啁找沼召兆诏赵笊棹照罩肇肈蜇遮折哲辄蛰谪摺磔辙者锗赭褶这柘浙蔗鹧贞针侦浈珍桢真砧祯斟甄蓁榛箴臻鍼诊枕胗轸畛疹缜稹圳阵鸩振朕赈镇震争姃征怔峥挣狰钲睁铮筝蒸徵拯整正证诤郑帧政症之支卮汁芝吱枝知织肢栀祗胝脂臸蜘执侄直值埴职植殖絷跖摭踯止只旨址沚纸芷祉咫指枳轵趾黹酯至志忮豸制帙帜治炙质郅峙栉陟挚晊桎秩致贽轾掷痔窒鸷彘智滞痣蛭骘稚置雉膣觯踬瓆中妐忠终盅钟舯衷锺螽肿种冢踵仲众重州舟诌周洲郮粥妯轴碡肘帚纣咒宙绉昼胄荮皱酎骤籀朱侏诛邾洙茱株珠诸猪铢蛛槠潴橥竹竺烛逐舳瘃躅主拄罜渚煮嘱麈瞩伫住助苎杼注贮驻柱炷祝疰著蛀筑註铸箸翥抓爪拽专砖颛转啭赚撰篆馔妆庄桩装壮状幢撞戅隹追骓椎锥坠缀惴缒赘肫窀谆准卓拙倬捉桌棁涿琸灼茁斫浊浞诼酌啄着琢禚擢濯镯灂仔孜兹咨姿茲赀资淄缁谘孳嵫滋辎觜趑锱龇髭鲻籽子姊秭耔笫梓紫滓訾字自恣渍眦宗综棕腙踪鬃总偬纵粽邹驺诹郰陬鄹鲰走奏揍租菹足卒族傶镞诅阻组俎珇祖躜缵纂钻攥嘴最罪蕞醉尊遵樽鐏鳟僔撙昨左佐作坐阼怍柞祚胙唑座做"
                };

                /***/ })
            /******/ ]);

});
