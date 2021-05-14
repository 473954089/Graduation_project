/*
 Navicat Premium Data Transfer

 Source Server         : WWC
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : question_and_answer

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 11/05/2021 17:04:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer`  (
  `answer_id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `answer_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '回答内容',
  `answer_time` datetime(0) NULL DEFAULT NULL COMMENT '回答时间',
  `answer_edit_time` datetime(0) NULL DEFAULT NULL COMMENT '回答修改时间',
  `answer_author` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '回答人',
  `answer_question` int NULL DEFAULT NULL COMMENT '所回答的问题',
  `comment_num` int NULL DEFAULT 0 COMMENT '评论数',
  `like_num` int NULL DEFAULT 0 COMMENT '点赞数',
  PRIMARY KEY (`answer_id`) USING BTREE,
  INDEX `回答的用户名`(`answer_author`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '回答';

-- ----------------------------
-- Records of answer
-- ----------------------------
BEGIN;
INSERT INTO `answer` VALUES (1, '最值得关注的是生育政策是否转向。从政策的文字中可以看出来政府的真实想法，简单说，凡是不肯投入人力财力的，统统都可以认为是不受重视的。比如教育，“将幼儿园纳入义务教育范畴”和“鼓励民办幼儿园发展”是两种办法，前者要真金白银花钱。比如房地产，“为多孩家庭提供差异化的首付和信贷政策”和“支持各地开展相关探索”是两种力度，前者会减少税收。比如校外机构，“以学校为主体，普遍建立延迟放学制度”和“引入社会力量，统筹解决三点半难题”是两种思路，前者是要增加教师工作时间。等新政策出台，特别是各部委和地方的配套规定，大家有兴趣的话可以翻翻看里面有多少明确的鼓励生育的内容，就能知道国家和地方对于人口和生育的真实态度。', '2021-05-11 15:38:00', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 1, 1, 0), (2, '既然20%的人掌握80%的钱，那也要20%的人生80%的人口我竟有种看热闹的兴奋，是不是不太好，但又压抑不住仿佛回到了高中，对即将发的试卷结果一点不慌，因为我是学渣，习惯了就目前来看，外地人30岁后回乡是必然趋势​，那么问题来了，保人口，还是保楼市？不好意思，全都要目前来看，数据显示是一切顺利，人口持续增长，​我们又可以放心单身了​(狗头)难道我们现在指望的是生育率很高，老龄化压力一点都没有？一催年轻人他们就结婚，还生两个，不会吧？所以，年轻人学习日本少子化没毛病，对不对？况且我小的时候受到的教育是少生优生，所以长大后的我决定不生，有什么问题么？更何况，我生什么我又不优(狗头)开局的彩礼，到结婚举办，然后房子车子，都要钱，小孩出生了也奶粉学区房，感觉结婚后自己要走的路就已经铺好了而且很难走，​我单身不舒服了还是不自由了，根本没那个时间，没那么多钱来承担起结婚后的责任，那么我又为什么要生孩子，让孩子来遭罪呢​前两天去侄女初中学校看了一眼，现在的孩子脸上一点朝气没有，还没入设会，满满的世俗感​(可能他们看我也是一副咸鱼样)不说了，过好自己吧，古人云，穷则独善其身，富则成家立业。二十到三十年后我们再见。', '2021-05-11 15:39:02', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 1, 1, 0), (3, '我想说两个方面。  首先，经济发展不是只有利用人口红利这一种模式，随着教育水平提高和经济发展阶段的向前推进，应该有越来越多的人意识到这一点才对。  到从农村人口向城市的转移基本完成之时（目前似乎处于第二阶段?)，资本深化、技术扩散、制度变革更应该成为增长的源泉。  应该思考的不是怎样继续维持当前已经庞大和紧张的人口数量，或者是从何处引进廉价外劳以供本国产业部门使用（剥削），并且同时客观上可能加剧与国人的摩擦。而是应该考虑如何提高本国劳动力的待遇，提高劳动力的使用效率，让他们也能更饱满的精力、积极性和创造力的态度来驾驭未来堆叠在他们身上的越来越多的人均资本和技术要素。  撑起一个优质消费市场的不该继续是规模极其庞大的低收入者，而是应该转向规模稍小但收入更加丰厚的中等收入阶层。继续推进已经贯彻了好几年的转变经济发展模式这一中央精神，追求高质量的“发展”，而不仅仅是规模上的“增长”，这并不是一句空话。', '2021-05-11 15:40:45', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 1, 1, 0), (4, '感觉现有的很多回答已经不是在讨论数据本身，而是在表达诉求。某个存在低级错误的回答，仍然能拿到近两万赞，我认为多少也说明了目前知乎大量用户群体的焦虑和愤懑情绪。在立场先行的情况下，数据分析和解读已经意义不大了。我就简单说点个人看法吧：1，考虑到新冠疫情可能的影响，未来还需结合2021乃至2022的数据进一步观察，但现有数据已经不算乐观2，未来政策肯定会逐渐转向，但考虑到产业发展以及财政现状，预计政策转向需要比较长的过程3，长远来看，即使产业升级顺利完成，即使鼓励生育的政策全面推行，生育率也很难抬升到2.1的水平因为生育并不仅仅是经济问题，还有文化观念问题。在这个前提下，未来可能会从菲律宾等国适当引入家政服务业人员。4，我个人对中国的产业升级非常有信心，考虑到中国较为漫长的陆地边境线，未来中国可能面临比现在欧美更严重的非法移民问题5，在上述前提下，对外能否保持强势文化输出，对内进一步塑造文化认同，整合东亚儒家文化圈，可能是真正的关键。', '2021-05-11 15:41:23', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 1, 1, 0), (5, '很多人从实际收入，消费指数，经济等方面说了，都很有道理。我不是学经济的，一向不太敢做这些专业的事。所以我只说几句不专业的个人感受。那就是：节假日出游，不值。而且越来越多人正在意识到这一点。小日子过得还凑合，也不是没钱出去游玩，但我现在出游的欲望非常低，潜规则涨价是其中最重要的一个点。某些经济发达地方一到节假日和周末，一个破房间甚至破千，行，我不去还不行吗？我不是没有那个钱，但我并不愿意莫名其妙就多花钱，出去看人头飞来飞去，体验极差。我个人的出游经验里，一直以来最烦的就是莫名其妙的潜规则涨价，谁爱去谁去，老子不伺候。真就不缺你这个破风景，真以为自己胜却人间无数了？你说节假日旺季当然要涨价，那是站在旅游产业的立场。而站在出行者的立场，这就是在非法的收割消费者，这种潜规则绑架了无数人，而且一直都是有恃无恐。但时代变了，很多人都不愿意再被“来都来了”“出来玩要开心”等等资本圈套绑架了。我出来玩一个，花比平时别人多一倍的钱，开心了旅馆老板，自己还不开心，图啥？可见鬼去吧。我真就挺不CARE那些路线攻略旅游攻略的，个人认为出去玩的主要目的是放松心情，结果现在出行旅游多数都搞得跟游戏里做任务看攻略一样，这跟996有什么区别嘛？一脉相承的玩意儿。出去玩还那么心累，不如在家看书听歌睡大觉。有些人会说你可以找便宜的啊，各种APP找折扣优惠啊，那是不是浪费精力？我找啊，我当然找，因为如果我不找我不研究，我家的败家娘们儿就能住几千的网红酒店，客栈，民宿，吃那些乱七八糟的网红大餐小吃。我不是缺那几千块钱，收入不高但我消费也低，我会省钱。我特么就是觉得心累啊，这算什么旅游算什么出去玩，这就是折腾我的身体和精神好吧。我也算是爱玩喜欢旅游的人，虽然抠门爱省钱，但该花的个人评估值得的从来不吝啬。然而我几乎去过一个旅游点，都觉得毫无兴致。为啥，就是不值，我花的钱没有换来该有的精神回报。国内的文旅，旅游产业，有一说一，我个人体验过的，九成以上都是一坨屎。剩下一成，勉强应付事。我个人希望在未来，人们的旅游世界可以更加轻松自在，而不是继续身心都被折磨，我们这几代是不行了，这盘子从底子里都是烂的。附加：我打完之后看了一下全文，虽然没什么逻辑，算是个人发泄。不过我这人喜欢各种角度想事情，我估摸着有人还是会说，你这就是钱不够多啊，钱够多就不会想着省钱了，不在乎钱，财务自由就怎么花都开心了。我仔细想想，嘿！这也真是个理，卷是卷不过了，也卷不动了。都这么大个人了，这就去研究怎么投胎。', '2021-05-11 15:42:44', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 3, 0, 0), (6, '调休国内耍猴般的五一小长假之所以能成为“黄金周”，不是因为朝三暮四的调整拼凑假期有多么高明，也不是五一的劳动者在消费上也格外光荣，而是因为我们没得选。从全球放假天数情况来看，中国11天的法定假日并不算少，但休假的主要矛盾在于中国人带薪年假太少，且这里拿出去比较的带薪年假和康师傅包装上“图片仅供参考，请以实物为准”一样“真实”，要出远门旅游、探亲，就不得不捏着鼻子当冤大头，给东拼西凑的小长假贴金，让它们显得金碧辉煌。自疫情爆发以来，长时间被困在家、被动“休假”的情况下，真正尝到了长休甜头的一些人，已经对调休拼凑小长假失去了耐心，加上经济和工作上的因素，出行人数不符合砖家们预期就顺理成章了。', '2021-05-11 15:43:11', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 3, 0, 0), (7, '我说句难听的，选择长假期间旅游，不管长途还是短途，都是伞兵。我曾经也是伞兵中的一员。', '2021-05-11 15:43:36', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 3, 0, 0), (8, '我这样拉跨程序员写的程序经常这样:不做异步,就在UI线程上搞事情.任何事做完之前.程序都是卡的不做并行,不管你是多少核cpu.我只有单线程使用网络资源的时候,不处理UI.甚至就干等,如果网络不稳定.程序就卡住,其实CPU根本没干活写很多大量无效的类型转换/装箱拆箱,声明使用一大堆集合为了重用代码,同时也懒得优化代码,一件简单的事情,交给一个很复杂的模块处理,说人话就是, 你需要一个螺母,你不直接买一个螺母,你买了一辆汽车,然后把螺母拆下来用,下次我需要一个螺丝,我甚至不用之前买的那辆汽车的螺丝,我再买一辆新的....不管用不用得着,总是使用原始的高清资源.比如用户头像.贪方便.我直接用1080P的图也不压缩...不缓存任何资源,哪怕一个东西反复被使用,依然不停从数据源获取数据...使用完数据不释放.... 比如我买了车取下它的螺母用,但是我车也不处理掉,还放在那做摆设.因为懒得写合理的数据传递.明明要用参数传递的数据一股脑放在全局变量. 拿生活做比喻就是我明明只是和你发私信,但是因为懒得写收件人信息,直接登人民日报...哦.最重要的,我们拉跨程序员不觉得卡是bug.我们只觉得报错/崩溃/错误的数据展示是BUG...', '2021-05-11 15:48:14', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 4, 0, 0), (9, '数亿次够干啥的？以专业图形渲染为例（区别于使用GPU的游戏渲染）假设你要渲染1080p的画面，这就是1080*1920两百万个像素。每个像素都要路径追踪得到应有的颜色，比如假设有1000条光线射到这个像素点，取平均才能得到应有的颜色。然后这每一条光线简单起见经过一次反射就能从光源射到这个像素。每一次反射要计算很多信息，以计算反射角的三角函数为例，假设用三阶展开简化计算，这就得十几次乘法。每次乘法都是对于64位浮点数*64位浮点数计算。你算算这一帧都多少次计算了？', '2021-05-11 15:49:59', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 4, 1, 0), (10, '程序卡不一定是CPU算力不够的原因，卡顿的原因更多来自于IO，比如网络、存储器和内存。很多时候，因为IO的延迟，CPU不得不放空自己等待IO响应。另外，你可能对算力的数量级没有概念，一亿算力并不多。最简单的，一张4K的BMP图片，现在对其每一个像素的RGB颜色值都+1（很常见的淡出操作），就有4096x2160x3 = 26,542,080次运算，也就是说，这么简单的事儿，用每秒运算一亿次的算力来做，每秒也达不到5帧，这还是刨除了其他所有因素的情况下得到的结果。实际因为需要有读写内存和数据拆分的过程会更慢。', '2021-05-11 15:50:20', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 4, 3, 1), (11, '去年武汉封城，印度还未有病例的时候，知乎的大佬们已经开始预测疫情的可能发展方向。其中最怕的就是印度，当时就被称为王炸。理论依据有：一、新冠病毒作为rna病毒很容易变异。二、印度恰恰人口众多又密集。三、印度基本不可能有效阻止病毒的传播。四、ade效应、变异、人本身抗体的持续时间这些问题会导致群体免疫不可能实现，甚至连疫苗都会失效。推导出的结果就是印度将诞生一个毒王，而这个毒王会比最早的版本强上不知道几倍。现在担心的问题再加上很多国家根本扛不住疫情再次爆发。现在看来中国式封城果然是成本最低的方法。', '2021-05-11 15:51:09', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 5, 0, 0), (12, '新冠很可能换变成类似1918大流感的全球灾难级瘟疫。要知道1918流感可不是一次就杀了5000万人，而是在全球不停传播来回变异，总共分成3大波席卷全球，杀死了5000万。就算你得了一次痊愈，都有可能死在第二波，第三波里。现在新冠杀死的主要还是老年人和并发症人群，但难保不会变异成会引发免疫风暴专杀免疫力强的年轻人的病毒。印度这个人口密度很可能会贡献大量DNA点数，玩过瘟疫公司的都懂。', '2021-05-11 15:51:31', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 5, 0, 0), (13, '我强调一下，我并不是说装修公司都是坏人，而是立场不同，行事目的也不同。相反，我立场和你相同，作为一个不从事装修行业的抠门业主，以分享自己实战经验帮助朋友避坑，来自我实现和自我娱乐而已，我们利益不想关，我想以这种形式穿越时空帮助到当年的自己，以及与那时我一样迷茫的你。资料放在公众号里也是这边有的资料确实不好公开直接发，比如经常提到的几本书，你关注了，拿了资料直接取关就好啦，前面说了，我是画漫画的，虎册这些笔记我画了小半年了也就收到2块钱的打赏，冲着钱的话有这时间我多接点商业订单不美吗哈哈。', '2021-05-11 15:52:59', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 6, 0, 0), (14, '自己装修肯定省钱咯。本人从09年开始至今装修过十多套房子和门店。无一例外都是自己装修从来没有找装修公司做过大包。其实自己装修也可以很省事，拿现在住的这套举例说明。接房前我已经被本市各大装修公司电话骚扰无数次了，行业前几名的大公司在电骚的时候我就加了几个微信。接房后我专门花了一天时间约了四家公司的设计师和业务员上门（免费），我告诉她们我的想法，居住要求。她们现场量尺寸，告诉我设计思路，哪里拆墙哪里改门窗，大概费用，设计风格等等。一天之内集齐了四家公司的设计方案，好辛苦。综合权衡各家设计思路，脑壳里大概有个轮廓了。然后去业主群问问谁家在装修，一一上门查看，看他们的装修工人现场施工水平，看了大概七八家，然后挑了一个干活老练，言谈举止老实的泥瓦工问他 包活不？他说包 喊我找他们领头的谈。给我个电话号码。我打过去聊了两句，感觉比较靠谱就约了去他办公室详谈。是一家皮包公司，一个接活谈单的老板，四十多岁，手底下带着几支装修队伍，办公室就他和一个画图的小年轻，还装模作样挂了个牌子。我心想，要的就是你，便宜。我言简意赅的想他说了我的想法然后带他看现场，当天就把价格谈妥签了合同，让他两天给我出设计图，一周之内开工。180平基装包工包料（只包辅料：水泥河沙、线、管子、腻子粉、石膏板等）。打包价：8万8。当然合同得约定材料的品牌规格型号。', '2021-05-11 15:53:29', NULL, 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 6, 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `comment_id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `comment_answer` int NULL DEFAULT NULL COMMENT '评论回答',
  `comment_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '内容',
  `from_uuid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '评论用户',
  `comment_time` datetime(0) NULL DEFAULT NULL COMMENT '评论时间',
  `like_num` int NULL DEFAULT 0 COMMENT '点赞数',
  `is_read` int NULL DEFAULT 0 COMMENT '用户是否已读',
  PRIMARY KEY (`comment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '评论';

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES (10, 14, '可以的', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', '2021-05-11 16:08:10', 0, 1), (11, 15, '感谢这位朋友的帮助！', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', '2021-05-11 16:12:25', 0, 1), (12, 17, '好的，谢谢答主！', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', '2021-05-11 16:25:23', 0, 1);
COMMIT;

-- ----------------------------
-- Table structure for comment_reply
-- ----------------------------
DROP TABLE IF EXISTS `comment_reply`;
CREATE TABLE `comment_reply`  (
  `comment_reply_id` bigint NOT NULL AUTO_INCREMENT COMMENT '二级回复ID',
  `comment_id` bigint NULL DEFAULT NULL COMMENT '该回复挂载的根评论ID',
  `reply_id` bigint NULL DEFAULT NULL COMMENT '回复目标ID',
  `reply_type` int NULL DEFAULT NULL COMMENT '0代表回复评论，1代表回复的是回复',
  `reply_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '回复内容',
  `from_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '回复用户id',
  `to_uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '目标用户id',
  `comment_reply_time` datetime(0) NULL DEFAULT NULL COMMENT '回复时间',
  `like_num` int NULL DEFAULT 0 COMMENT '点赞数',
  PRIMARY KEY (`comment_reply_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '评论回复（二级评论）';

-- ----------------------------
-- Records of comment_reply
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback`  (
  `feedback_id` int NOT NULL AUTO_INCREMENT COMMENT '反馈ID',
  `feedback_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '反馈标题',
  `feedback_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '反馈内容',
  `feedback_author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '反馈人',
  `feedback_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '反馈时间',
  PRIMARY KEY (`feedback_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户反馈\n';

-- ----------------------------
-- Records of feedback
-- ----------------------------
BEGIN;
INSERT INTO `feedback` VALUES (1, NULL, '小程序还可以进一步优化哟', 'WWC', '2021-05-11 16:13:51'), (2, NULL, '请继续优化好小程序！', 'WWC', '2021-05-11 16:27:03');
COMMIT;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question`  (
  `question_id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `question_title` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '问题标题',
  `question_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '问题内容',
  `question_author` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '提问人',
  `answer_num` int NULL DEFAULT 0 COMMENT '回答数',
  `hot_rate` int NULL DEFAULT 0 COMMENT '热门度',
  `question_time` datetime(0) NULL DEFAULT NULL COMMENT '提问时间',
  `question_edit_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  `question_is_delete` int NULL DEFAULT 0 COMMENT '是否删除，1代表删除，0代表没有',
  PRIMARY KEY (`question_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '问题';

-- ----------------------------
-- Records of question
-- ----------------------------
BEGIN;
INSERT INTO `question` VALUES (1, '第七次全国人口普查数据：中国总人口超 14.1 亿，10 年来保持低速增长，还有哪些信息值得关注？', '国家统计局11日公布第七次全国人口普查主要数据结果。全国人口共141178万人，与2010年(第六次全国人口普查数据)的133972万人相比，增加7206万人，增长5.38%，年平均增长率为0.53%，比2000年到2010年的年平均增长率0.57%下降0.04个百分点。数据表明，我国人口10年来继续保持低速增长态势。', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 4, 22, '2021-05-11 15:36:33', '2021-05-11 15:54:08', 0), (3, '如何看待「2021年五一假期仅2.3亿人出游，旅游板块大跌」？什么原因导致的？', '今年五一假期调休至5天，大家对旅游业的复苏抱有很大的期望。\n\n此前，交通运输部新闻发言人孙文剑表示，今年“五一”期间全国客运量将达2.65亿人次，客流总量上升接近2019年水平，比2020年同期上升120.1%。\n\n还有第三方测评机构CAPSE预计，“五一”假期国内旅游收入将超过2000亿元，将远超2019年同期1176亿元收入。', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 3, 17, '2021-05-11 15:41:52', '2021-05-11 15:54:18', 0), (4, '为什么现代CPU每秒数亿次计算，但是程序仍旧很卡?', '难道每次点开APP，程序在后台都要模拟一次阿波罗登月任务后在开始干正事么？然后时不时的再计算一次核反应方程？\n\n\n', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 3, 19, '2021-05-11 15:45:04', '2021-05-11 15:54:34', 0), (6, '装修不请装修公司，自己动手，真的省钱吗？', '要装修，不请装修公司，自己动手，真的省钱吗？要装修，不请装修公司，自己动手，真的省钱吗？', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 2, 14, '2021-05-11 15:52:35', '2021-05-11 15:54:23', 0), (14, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 2, 0, '2021-05-11 16:11:58', '2021-05-11 16:13:31', 1), (15, '测试一下', '测试一下', NULL, 0, 0, '2021-05-11 16:16:32', NULL, 0), (16, '测试一下', '测试一下', NULL, 0, 0, '2021-05-11 16:16:45', NULL, 0), (17, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 0, 0, '2021-05-11 16:16:57', '2021-05-11 16:17:02', 1), (18, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 0, 0, '2021-05-11 16:17:46', '2021-05-11 16:19:18', 1), (19, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 0, 0, '2021-05-11 16:19:40', '2021-05-11 16:22:26', 1), (20, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 0, 0, '2021-05-11 16:22:17', '2021-05-11 16:22:25', 1), (21, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 0, 0, '2021-05-11 16:22:36', '2021-05-11 16:22:41', 1), (22, '该问题已删除', '该问题已删除', 'oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 1, 0, '2021-05-11 16:24:44', '2021-05-11 16:26:42', 1);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `uuid` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '主键ID',
  `nickname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `stu_num` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学号',
  `major` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '专业',
  `gender` int NULL DEFAULT NULL COMMENT '性别 0代表女，1代表男',
  `personal_signature` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '个性签名',
  `user_create_time` datetime(0) NULL DEFAULT NULL COMMENT '用户创建时间',
  PRIMARY KEY (`uuid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户信息';

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('oUK9f5Q7Ox_2gJ5z5ai-Z2gr0BWo', 'WWC', 'https://thirdwx.qlogo.cn/mmopen/vi_32/g5JWOPiaT9mgsewYFTSIg2H3tXC6KBLqWbaqBXjzUKhLascn8ymmbqpeMtECCib8ja2cicLUL4DxeS0YDDxqNOC3w/132', '2017133123', '通信工程', 1, '生活就像海洋，只有意志坚强的人才能到达彼岸', '2021-05-11 15:06:22');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
