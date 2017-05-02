// 保存名字
var names = ['程亚兰','王月','王旭','王凯','孙刚勇','桑海斌','范本杰','罗婷','樊朝强','李鑫','杨巍','何梦丹','沈乾','张琪','康晓宇','连园园','耿树正','黄丹娣','李博文','孙瑞','刘兴鹏','李强','王小雨','第五岚岚','钱亨利','王运通','肖旭明','陈咏欣','姚梅梅','贾魁','郭萌萌','齐巍','索宇航','牛磊','梁晨','王安东','郭亮','穆晓平','王海荣','黄安','刘欢','刘琼','杨子','田鹏江','马炜','张新龙','杨家松','李丹'
	];
	// 为避免全局污染，写成面向对象形式，写成变量形式；
	var takingName = {
		timer : null,
		init : function (names){
			var box = document.getElementsByClassName('take-name-box')[0];
				if(box) {
					var newBtn = document.createElement('button');
					var oDiv = document.createElement('div');
					oDiv.className ='take-name';
					oDiv.innerHTML = '<p>开始点名</p>';
					newBtn.innerHTML = '开始';
					box.appendChild(oDiv);
					box.appendChild(newBtn);
					this.toTakeNames(names);
				}
		},
		toTakeNames : function (names){
				var self = this;
				var rand = 0;
				var oBtn = document.getElementsByTagName('button')[0];
				var msn = document.getElementsByTagName('p')[0];
				var oDiv = document.getElementsByTagName('div')[0];
				oBtn.onclick = function (){
			// 修改this指向，并进行传参；
				var that = this;
				self.toStartOrPause(msn,that,names);
			};
		},
		toStartOrPause : function (msn,that,names){
			if(that.innerHTML === '开始'){
					that.innerHTML = '停止';
					this.takeNames(msn,names);
				} else {
					that.innerHTML = '开始';
					clearInterval(takingName.timer);
				}
		},
		takeNames : function (msn,names){

			var that = this;
			this.timer = setInterval(function (){
			// 生成0到57随机数
			rand = Math.floor(Math.random()*(names.length-1)) + 1;
			msn.innerHTML = names[rand-1];
		},200)
		}
	};
	// // 封装完毕，进行调用；
	takingName.init(names);