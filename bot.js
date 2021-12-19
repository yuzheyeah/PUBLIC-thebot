    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} OK兄弟們 全體目光向我看齊！`) ;
    }) ;
	
client.on('message',msg=>{
			if(msg.content.startsWith("/簽")){
       var rnd = Random(10,1);
switch(rnd){
case 1:msg.reply("你晚上要去做豬底迪了");break;
case 2:msg.reply("你起床準備做牛郎就對了");break;
case 3:msg.reply("040");break;
case 4:msg.reply("你喇媽的勒");break;
case 5:msg.reply("好了啦~!");break;
case 6:msg.reply("阿是不會按通話喔");break;
case 7:msg.reply("你雞雞可以再小一點");break; 
case 8:msg.reply("牙籤閉嘴");break;
case 9:msg.reply("阿是乾我屁事");break;
case 10:msg.reply("開幹!");break;
  }
	}
	}) ;

client.on('message',msg=>{
			if(msg.content.startsWith("/下")){
        var rnd = Random(10,1);
switch(rnd){
case 1:msg.reply("踏馬的豬底迪");break;
case 2:msg.reply("你是在哭幾點");break;
case 3:msg.reply("040");break;
case 4:msg.reply("芒果啦幹");break;
case 5:msg.reply("札記有的寫");break;
case 6:msg.reply("我能不能也下線");break;
case 7:msg.reply("你再熬夜一次給我試試看");break;
case 8:msg.reply("下屁喔");break;
case 9:msg.reply("今天札記很多元");break;
case 10:msg.reply("Fuck u friend啦");break;
  }
	}
	}) ;


	
   client.on('message',msg=>{
	   if(msg.content.startsWith("/nothing")){
      var rnd = Random(70,1);
switch(rnd){
    case 1:msg.reply("就是賤! 你賤到骨子裡啊");break;
    case 2:msg.reply("https://imgur.com/NQinKJB");break;
    case 3:msg.reply("我的很大 你要忍一下~~");break;
    case 4:msg.reply("我現在是不是要逃命阿");break;
    case 5:msg.reply("拜訪我的家園!");break;
    case 6:msg.reply("我們昨天上到哪?");break;
    case 7:msg.reply("你找我的ID Respect You Know!");break;
	  case 8:msg.reply("垃圾。");break;
    case 9:msg.reply("早上好!");break;
		    case 10:msg.reply("媽了個擔擔麵勒");break;
    case 11:msg.reply("https://www.google.com.tw/maps/@24.9561495,121.4746869,3a,75y,99.99h,80.84t/data=!3m6!1e1!3m4!1sxUAuqJ0RQ_TYDTwg3E4Uzw!2e0!7i16384!8i8192?hl=zh-TW 歡迎你們來我們家玩");break;
    case 12:msg.reply("媽的你打這什麼垃圾指令");break;
	case 13:msg.reply("來啦奶奶夢工廠集合啦");break;
	  case 14:msg.reply("你不要過來啊啊啊");break;
	case 15:msg.reply("典中典之無聊打廢物指令");break;
	case 16:msg.reply("差不多得了😅");break;
	case 17:msg.reply("ㄖㄨㄚˋ嬰兒");break;
	  case 18:msg.reply("切磋啦 切磋啦 雞雞歪歪的 雞雞歪歪的");break;
	case 19:msg.reply("那天我們從未知道拖著藍色垃圾桶的名字");break;
		  case 20:msg.reply("ㄟ媽 有人打指令幫我回一下");break;
	  case 21:msg.reply("你很有精神 人是中午起床 下午玩 晚上熬夜 也是晚上走的");break;
	  case 22:msg.reply("你不要跟我在那邊幹幹叫");break;
		  case 23:msg.reply("你是狗是不是啦");break;
		  case 24:msg.reply("北七");break;
		  case 25:msg.reply("丟臉 丟臉!");break;
		  case 26:msg.reply("你別跟我在那邊唬爛");break;
	  case 27:msg.reply("ㄟ兒子 幹嘛?");break;
		  case 28:msg.reply("又 又舔嘴唇!!!");break;
		  case 29:msg.reply("關於我轉生成為機器人當勞工這檔事。");break;
		  case 30:msg.reply("主bo可以表演-12嗎");break;
		  case 31:msg.reply("講個笑話:欽城凡事都喜歡做反的 因此別人都做水手 他當火腿");break;
	  case 32:msg.reply("媽的 嘴臭 開光嘴");break;
		  case 33:msg.reply("你是在 靠杯喔啦");break;
		  case 34:msg.reply("你不會更新你要先講!");break;
		  case 35:msg.reply("我在頂峰看著最美的風景~");break;
		  case 36:msg.reply("這邊誰在補我的血 媽的我先刪好友");break;
	  case 37:msg.reply("阿對對對 你說的都對好吧");break;
		  case 38:msg.reply("你們怎麼總罵我舔女孩子阿?你舔的是V禿波阿 我舔的起碼真實存在阿");break;
		  case 39:msg.reply("讀書啦幹 無所事事 雞雞八八");break;
		  case 40:msg.reply("你還真就混水摸魚 摸雞偷狗 偷工減料");break;
		  case 41:msg.reply("講個笑話你的老二大");break;
	          case 42:msg.reply("召喚 肉番之神 @jasontsai#9200 ");break;
		  case 43:msg.reply("破防了破防了破防了");break;
		  case 44:msg.reply("不要讓我 飆!");break;
		  case 45:msg.reply("阿你不是五條老師 阿不是領域展開😅");break;
		  case 46:msg.reply("阿幹臭雞...看錯人了");break;
	          case 47:msg.reply("你他媽誰呢??");break;
		  case 48:msg.reply("經典滿嘴屁話,屁事不做");break;
	          case 49:msg.reply("好啦確實");break;
		  case 50:msg.reply("逃げるだよ～");break;
		  case 51:msg.reply("Fuck fukc fkuc kufc fkcu FUUUUUUUUUCK!");break;
	          case 52:msg.reply("為期104天的暑假即將結束😡");break;
		  case 53:msg.reply("牛牛小小 說話屌屌");break;
		  case 54:msg.reply("我覺得誰都可以罵我 但你這個寄吧不行");break;
		  case 55:msg.reply("等你重開了 我一定坐飛機去你的墳頭 瘋狂的偷吃你的貢品!");break;
		  case 56:msg.reply("我是你爹!");break;
		  case 57:msg.reply("亞洲第一抽蓄王的徒弟是你本人是吧");break;
		  case 58:msg.reply("操你媽hypixel的老二一定斷掉");break;
	          case 59:msg.reply("你是忘記了....還是你就是個腦殘😅");break;
		  case 60:msg.reply("安安的人都差不多了");break;
		case 61:msg.reply("");break;
		case 62:msg.reply("了");break;
		case 63:msg.reply("");break;
		case 64:msg.reply("");break;
		case 65:msg.reply("");break;
		case 66:msg.reply("");break;
		case 67:msg.reply("");break;
		case 68:msg.reply("");break;
		case 69:msg.reply("");break;
		case 70:msg.reply("");break;
		
  }
}
    }) ;

client.on('message',msg=>{
	                if(msg.content.startsWith("/pic")){
	  var rnd = Random(20,1);
          msg.channel.send({files:["./picture/"+rnd+".png"]});
			}
}) ;

	

client.on('message',msg=>{
			if(msg.content.startsWith("/睡")){
				var rnd = Random(4,1);
				switch(rnd){
					case 1:msg.reply("睡三小,你就把你人生睡掉沒關係");break;
						case 2:msg.reply("媽的新一代懶豬");break;
						case 3:msg.reply("瓜挖闢蘇");break;
						case 4:msg.reply("你睡就睡跟我講幹嘛啊?");break;
				}
			}
	});

    client.on('message',msg=>{
			if(msg.content.startsWith("/醒")){
        var rnd = Random(4,1);
  switch(rnd){
    case 1:msg.reply("死者復甦了屬實是");break;
    case 2:msg.reply("然後呢?");break;
    case 3:msg.reply("重點是、靠杯");break;
	case 4:msg.reply("Woke up on the right side of the bed");break;
  }
	}
	}) ;

client.on('message',msg=>{
			if(msg.content.startsWith("安安")){
				msg.reply("他媽的真的是一個低能兒。");
			}
	});

client.on('message',msg=>{
			if(msg.content.startsWith("o4o")){
				msg.channel.send("040");
			}
	});

	
	function Random(max,min){
             var rnd = Math.floor(Math.random()*max)+min ;
             return rnd ;
		}

    client.login(settings.token) ;
	
	
	
	
