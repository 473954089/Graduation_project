module.exports={
  getQuestionList: getQuestionList,
  getHotQuestionList: getHotQuestionList,
  searchQuestion : searchQuestion,
  getQuestion : getQuestion ,
  getAnswer:getAnswer,
  getComment:getComment,
  getAnswerById:getAnswerById,
  submitQuestion : submitQuestion,
  getCommentList: getCommentList,
  sendComment : sendComment,
  clickGood: clickGood,
  getGoodList: getGoodList,
  getBeGoodList: getBeGoodList,
  sendUserInfo: sendUserInfo,
  uploadUserInfo:uploadUserInfo,
  getNextQuestionList: getNextQuestionList,
  getNewsList: getNewsList,
  readed: readed,
  historyed: historyed,//设置评论消息已读
  historyed2: historyed2,//设置点赞消息已读
  getMyQuestionList: getMyQuestionList,
  getMyAnswerList:getMyAnswerList,
  uploadPic: uploadPic,
  uploadVoice: uploadVoice,
  deleteQuestion: deleteQuestion,
  deleteComment: deleteComment,
  checkConcern: checkConcern,
  clickConcern: clickConcern,
  getRoomId: getRoomId,
  getMessageList: getMessageList,
  sendMessage: sendMessage,
  getRoomList : getRoomList,
  getScrollList: getScrollList,//获取轮播图信息
  getTypeQuestionList: getTypeQuestionList,
  getNextTypeQuestionList: getNextTypeQuestionList,//获取下一个类型的问题列表
  judgeNewMessage: judgeNewMessage,//判断是否有新消息
  getConcernList: getConcernList,//获取我的关注列表
  sendSuggestion: sendSuggestion ,//意见反馈
  checkAnonymous: checkAnonymous,
  sendNewAnswer:sendNewAnswer,
  getUser:getUser,
  deleteAnswer:deleteAnswer,
  giveLike:giveLike,
  giveComment:giveComment,
  getNewComment:getNewComment,
  yidu:yidu
}


var R = require("../utils/Request.js")
const app = getApp();
var baseURL = app.globalData.baseURL



function giveLike(answer_id,handle) {
  var param = {
    answer_id: answer_id,
  }
  R.request({
    url: baseURL + "/answer/like",
    data: param,
    success: function (res) {
      console.log("sssssssssssssssssssssssss")
      handle(res)
    }
  })
}


function getQuestionList(offset , pageSize , handle){
  var param = {
    pageSize : pageSize,
    offset : offset,
  }
  R.request({
    url: baseURL + '/question/new',
    data : param,
    success : function(res){
      handle(res)
    }

  })
}

function getHotQuestionList(offset,pageSize,handle){
	var param = {
	  pageSize : pageSize,
	  offset : offset,
	}
	R.request({
	  url: baseURL + '/question/hot',
	  data : param,
	  success : function(res){
	    handle(res)
	  }
	
	})
}


function getNextQuestionList(questionOffset , handle) {
  getQuestionList(questionOffset, 10 , function (res) {
    handle(res)
  })


}


function searchQuestion(keyword , handle){
  var param = {
    searchText : keyword
  }
  R.request({
    url: baseURL +"/question/search",
    data : param,
    success : function(res){
      handle(res)
    }
  })
}


function getQuestion(questionId , handle){

  var param = {
    question_id : questionId
  }

  R.request({
    url: baseURL +"/question/question",
    data: param,
    success : function(res){
        // console.log(res)
        handle(res)
    }
  })

}

function getAnswer(questionId , handle){

  var param = {
    question_id : questionId
  }

  R.request({
    url: baseURL +"/answer/question",
    data: param,
    success : function(res){
        console.log(res)
        handle(res)
    }
  })

}

function getAnswerById(answerId , handle){
  var param = {
    answer_id : answerId
  }
  R.request({
    url: baseURL +"/answer/answer",
    data: param,
    success : function(res){
        // console.log(res)
        handle(res)
    }
  })
}

function getComment(answerId , handle){
  var param = {
    answer_id : answerId
  }
  R.request({
    url: baseURL +"/comment/query",
    data: param,
    success : function(res){
      // console.log(res)
      handle(res)
    }
  })
}




function submitQuestion(param ,handle){
  var param = {
    // isAnonymous: param.anonymous,
    question_content: param.contentText,
    // contentPic: param.contentPic,
    question_title: param.contentTittle,
    // questionType: param.picker_index,
    // contentVoice:param.voice,
    // avator:param.avator,
    // nickname: param.nickName,
    question_author: param.userId,
  }
  R.request({
    url: baseURL +"/question/upload",
    data: param,
    method : 'POST',
    success : function(res){
      console.log("sbsbsbsbsbsbsbsbsbsbsbsbsbsbssbsbsb")
      handle(res)
    }
  })
}

function uploadUserInfo(uuid,user,avatar){
  var param={
    nickname: user.nickname,
    avatar:avatar,
    gender : user.gender,
    stu_num:user.stu_num,
    major:user.major,
    personal_signature:user.personal_signature,
    uuid : uuid
  }
  R.request({
    url: baseURL +"/user/update",
    data:param,
    method:'POST',
    success:function(res){
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 1000,
        success:()=>{
          setTimeout(()=> {
            wx.switchTab({
              url:'../../pages/me/me'
            })
          },1000)
        }
      })

    },
    fail:function(res){
      console.log(res,"ppppppppppppppppppppppppppppppp")

    }
  })

}




function getCommentList(limit, offset, questionId, commentType , handle){
  var param = {
    limit : limit,
    offset : offset,
    questionId : questionId,
    commentType: commentType,
  }
  R.request({
    url: baseURL +"/sdwd/api/comment/list",
    data: param,
    success : function(res){
      handle(res)
      console.log("comcomcomcomcomcomcomcomcocmlist")
    }
  })
}

function sendComment(param , handle){
  R.request({
    url: baseURL +"/sdwd/api/comment/add",
    data:JSON.stringify(param),
    method: 'POST',
    success:function(res){
      console.log("sssssssssssssssssssssssss")
      handle(res)
    }
  })
}

function clickGood(commentId , questionId , toUserId){
  var param={
    commentId: commentId,
    questionId: questionId,
    toUserId : toUserId,
  }
  R.request({
    url: baseURL +"/sdwd/api/like/clickGood",
    data : param,
    method : 'POST',
    success : function(res){
      console.log(res)
    }
  })
}


function getGoodList(questionId , handle){
  var param = {
    questionId: questionId
  }
  R.request({
    url: baseURL +"/sdwd/api/like/list",
    data:param,
    success:function(res){
      console.log("wwwwwwwwwwwwwwwww")
      handle(res)
    }
  })
}

function getBeGoodList(readFlag, handle) {
  var param = {
    readFlag: readFlag
  }
  R.request({
    url: baseURL + "/sdwd/api/like/list",
    data: param,
    success: function (res) {
      console.log("wwwwwwwwwwwwwwwww")
      handle(res)
    }
  })
}

function sendUserInfo(avatar , nickname , gender, uuid){
  var param={
    avatar: avatar,
    nickname: nickname,
    sex : gender,
    uuid : uuid
  }
  R.request({
    url: baseURL +"/user/update",
    data:param,
    method:'POST',
    success:function(res){
      wx.setStorageSync('newUser', 1)
      // while(wx.getStorageSync('newUser')!=1){}
      wx.switchTab({
        url: '../../pages/firstpage/firstpage',
      })
    },
    fail:function(res){
      console.log(res,"ppppppppppppppppppppppppppppppp")
      
    }
  })

}

function getNewsList(readFlag , handle){
  var param ={
    readFlag: readFlag  
  }
  R.request({
    url: baseURL +"/sdwd/api/comment/getNewsList",
    data:param,
    success:function(res){
      console.log("ssssssssssssssssssssss")
      handle(res)
    },
    fail:function(res){
      console.log("ffffffffffffffffffffff")
      handle(res)
    }
  })
}

function readed(list,handle){

  for (let i = 0; i <list.length; i++) {
    list[i].contentPic = JSON.stringify(list[i].contentPic)
  }

  R.request({
    url: baseURL +"/sdwd/api/comment/setReadNews",
    data:list,
    method:'POST',
    success:function(res){
      console.log("rrrrrrrrrrrrrreeeeeeeeaaaddddddded")
      handle(res)
    }
  })
}

function historyed(handle){
  R.request({
    url: baseURL + "/sdwd/api/comment/setHistoryNews",
    method: 'POST',
    success: function (res) {
      handle(res)
    }
  })
} 

function historyed2(handle) {
  R.request({
    url: baseURL + "/sdwd/api/like/setHistoryGood",
    method: 'POST',
    success: function (res) {
      handle(res)
    }
  })
}

function getMyQuestionList(uuid,handle){
  var param ={
    uuid: uuid
  }
  R.request({
    url: baseURL +"/question/history",
	data:param,
    success:function(res){
      handle(res)
    }
  })
}

function getMyAnswerList(uuid,handle){
  var param ={
    uuid: uuid
  }
  R.request({
    url: baseURL +"/answer/history",
    data:param,
    success:function(res){
      handle(res)
    }
  })
}


function uploadPic(file,handle){
  wx.uploadFile({
    url: baseURL +"/common/sysFile/upload", //开发者服务器 url
    filePath: file,//要上传文件资源的路径
    name: 'file', //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内
    success: function (res) {
      var r = JSON.parse(res.data)
      // console.log(r.fileName,"eeeeeeeeeeeeeee")
      handle(r.fileName)
    }
  })
}

function uploadVoice(file,handle){
  wx.uploadFile({
    url: baseURL + "/common/sysFile/upload",
    filePath: file,
    name: 'file',
    success: function (res) {
      var r = JSON.parse(res.data)
      handle(r.fileName)
    }
  })
}

function deleteQuestion(question_id,handle){
  var param = {
    question_id: question_id
  }
  R.request({
    url: baseURL +"/question/delete",
    data: param,
    success:function(res){
      handle(res)
    }
  })
}

function deleteAnswer(answer_id,handle){
  var param = {
    answer_id: answer_id
  }
  R.request({
    url: baseURL +"/answer/delete",
    data: param,
    success:function(res){
      handle(res)
    }
  })
}

function deleteComment(comId , handle){
  var param = {
    commentId : comId
  }
  R.request({
    url: baseURL +"/sdwd/api/comment/remove",
    data : param ,
    success : function(res){
      handle(res)
    }
  })
}

function checkConcern(questionId , handle){
  var param = {
    questionId : questionId 
  }
  R.request({
    url: baseURL +"/sdwd/api/concern/isConcern",
    data : param , 
    success:function(res){
      handle(res)
    }
  })
}

function clickConcern(questionId ,userId , handle){
  var param = {
    questionId : questionId ,
    userId : userId 
  }
  R.request({
    url: baseURL +"/sdwd/api/concern/clickConcern",
    data: param,
    method: 'POST',
    success : function(res){
      handle(res)
    }
  })
}


function getRoomId(param , handle){
  R.request({
    url: baseURL +"/sdwd/api/room/add",
    data : param,
    method : 'POST',
    success : function(res){
      handle(res)
    }
  })
}

function getMessageList(roomId , handle){
  var param = {
    roomId : roomId
  }
  R.request({
    url: baseURL +"/sdwd/api/chat/getChatList",
    data: param,
    success : function(res){
      handle(res)
    }
  })
}
function sendMessage(param , handle){
  R.request({
    url: baseURL +"/sdwd/api/chat/add",
    data : param , 
    method : 'POST',
    success : function(){
      handle()
    }
  })
}

function getRoomList(userId , handle){
  var param = {
    userId : userId 
  }
  R.request({
    url: baseURL + "/sdwd/api/room/list",
    data : param ,
    success : function(res){
      handle(res)
    }
  })
}

function getScrollList(handle){
  R.request({
    url: baseURL + '/sdwd/api/scroll/listScroll',
    success: function (res) {
      handle(res)
    }
  })
}

function getTypeQuestionList(limit, offset, isHotList, questionType, handle) {
  var param = {
    limit: limit,
    offset: offset,
    isHotList: isHotList,
    questionType: questionType,
  }
  R.request({
    url: baseURL + '/sdwd/api/question/list',
    data: param,
    success: function (res) {
      handle(res)
    }

  })
}
function getNextTypeQuestionList(questionOffset, isHotList, questionType , handle) {
  getTypeQuestionList(10, questionOffset, isHotList, questionType , function (res) {
    handle(res)
  })

}

function judgeNewMessage(handle) {
  R.request({
    url: baseURL + "/sdwd/api/comment/haveNewMessage",
    success: function (res) {
      handle(res)
    }
  })
}

function getConcernList(handle) {
  R.request({
    url: baseURL + "/sdwd/api/concern/list",
    success: function (res) {
      handle(res)
    }
  })
}

function sendSuggestion(feedback_content,feedback_author, handle) {
  var param = {
    feedback_content: feedback_content,
    feedback_author: feedback_author,
  }
  R.request({
    url: baseURL + "/feedback/upload",
    data: param,
    method: 'POST',
    success: function (res) {
      console.log("sssssssssssssssssssssssss")
      handle(res)
    }
  })
}

function checkAnonymous(handle) {
  
  R.request({
    url: baseURL + "/sdwd/api/anonymous/getAnonymous",
    success: function (res) {
      handle(res)
    }
  })
}

function sendNewAnswer(newAnswer,uuid,question_id,handle){
  var param = {
    answer_content: newAnswer,
    answer_author: uuid,
    answer_question: question_id,
  }
  R.request({
    url: baseURL + "/answer/upload",
    data : param,
    method:'post',
    success : function(res){
      handle(res)
    }
  })
}

function getUser(uuid,handle){
  var param = {
    uuid:uuid
  }
  R.request({
    url:baseURL+"/user/info",
    data : param,
    success:function (res){
      console.log(res)
      handle(res)
    }
  })
}

function giveComment(answer_id,comment_content,from_uuid,handle){
  var param = {
    comment_answer: answer_id,
    comment_content: comment_content,
    from_uuid: from_uuid,
  }
  R.request({
    url: baseURL + "/comment/upload",
    data : param,
    method:'post',
    success : function(res){
      handle(res)
    }
  })
}

function getNewComment(uuid,handle){
  var param = {
    uuid: uuid,
  }
  R.request({
    url: baseURL + "/comment/news",
    data:param,
    success: function(res){
      handle(res)
    }
  })
}
function yidu(comment_id,handle){
  var param = {
    comment_id: comment_id,
  }
  R.request({
    url: baseURL + "/comment/isread",
    data:param,
    success: function(res){
      handle(res)
    }
  })
}

