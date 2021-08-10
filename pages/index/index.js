// index.js
// 获取应用实例
//const app = getApp()

Page({
  onLoad(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
     })
  },
  onShareTimeline(){
    return{
      title:"做个决定吧",
      imageUrl: ''
    }
  },
  onShareAppMessage: function () {
    return{
      title:'做个决定吧',

      path:'pages/index/index'
    }
},
  data:{
     // show:true,
      play:false,
      start:"做个决定吧",
      // pic1:"https://static.7ait.com/2021/06/16/347a482d43729.jpg",
      // pic2:"https://static.7ait.com/2021/06/16/6b6471a29fcb7.jpg",
      // pic3:"https://static.7ait.com/2021/06/16/abb99435e23f0.jpg",
      // pic4:"https://static.7ait.com/2021/06/16/f8b24e858731e.jpg",
      // pic5:"https://static.7ait.com/2021/06/16/69c20c46df57e.jpg",
      // pic6:"https://static.7ait.com/2021/06/16/8f447e05b9c0c.jpg",
      // pic7:"https://static.7ait.com/2021/06/16/235d0b113037c.jpg",
      // pic8:"https://static.7ait.com/2021/06/16/c3cb4fc065b26.jpg",
      // pic9:"https://static.7ait.com/2021/06/16/20a1445af2175.jpg",
      picArr:["https://static.7ait.com/2021/06/18/8ab8a0920a801.png",
      "https://static.7ait.com/2021/06/18/46a8ba25b8ddd.png",
      "https://static.7ait.com/2021/06/18/0f4432c7b3be1.png",
      "https://static.7ait.com/2021/06/18/df729ad92abb5.png",
      "https://static.7ait.com/2021/06/18/36fa895a910b4.png",
      "https://static.7ait.com/2021/06/18/3b84b3b7ac018.png",
      "https://static.7ait.com/2021/06/18/268ee9ec9a8a0.png",
      "https://static.7ait.com/2021/06/18/86adc78d05417.png",
      "https://static.7ait.com/2021/06/18/d1354b18d8c8b.png"]
  },
  catchTouchMove(){
      return false;
  },
  start(){
      this.setData({
        play: !this.data.play,
        start:this.data.start=="做个决定吧"?"停":"做个决定吧"       
      })
      if(this.data.play==false){
        let foodArr=['火锅','日料','拉面','烧烤','烤鸭','西式快餐','自助餐','寿司','麻辣烫']
        let skillArr=['Ps','Ai','Java','Mysql','Javascript','Pr','Ae','Lr','Linux']
        let allArr=[foodArr,skillArr]
        let parentArrNum=Math.floor(Math.random()*allArr.length);
        //console.log(allArr[parentArrNum])
        let childArrNum=Math.floor(Math.random()*allArr[parentArrNum].length)
        //console.log(arr[i])
        wx.showModal({
          //cancelColor: 'cancelColor',
          //cancelText: '返回',
          //confirmColor: 'lightskyblue',
          confirmText: '好的',
          content: parentArrNum==0?"周末去吃"+allArr[parentArrNum][childArrNum]:"我要学习"+allArr[parentArrNum][childArrNum],
          //editable: true,
         // placeholderText: 'placeholderText',
          showCancel: false,
          title: '做个决定吧',
          success (result)  {
              if(result.confirm){
                
              }
          },
          fail: (res) => {},
          complete: (res) => {},
        })
      }
     
      
  }
})
