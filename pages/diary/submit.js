export function submit(that){
  wx.uploadFile({
    filePath: that.data.blogImg,
    name: 'file',
    url: 'http://localhost:80/upImgs',
    success(res){
      console.log(res)
    },
    fail(err){
      console.log(err)
    }
  })
  that.setData({
    blogPage:false
  })
};

export function cancel(that){
that.setData({
  blogPage:false
})
}