//检查是否显示文本卡片
export function checkTextShow(that){
  //获取本地存储
  wx.getStorage({
    key:"switchOn"
  }).then(res=>{
    that.setData({
      switchOn:res.data //返回是个对象，要取出data
    })
  })
};
//检查是否打卡
export function checkClock(){
  //发送请求，检查用户是否打卡，如果打卡不显示打卡按钮

}