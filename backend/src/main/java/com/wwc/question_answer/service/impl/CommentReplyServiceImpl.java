package com.wwc.question_answer.service.impl;

import com.wwc.question_answer.dao.AnswerMapper;
import com.wwc.question_answer.dao.CommentMapper;
import com.wwc.question_answer.dao.CommentReplyMapper;
import com.wwc.question_answer.pojo.Comment;
import com.wwc.question_answer.pojo.CommentReply;
import com.wwc.question_answer.service.CommentReplyService;
import com.wwc.question_answer.utils.DateUtils;
import com.wwc.question_answer.vo.CommentReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentReplyServiceImpl implements CommentReplyService {

    @Autowired
    private CommentReplyMapper commentReplyMapper;

    @Autowired
    private AnswerMapper answerMapper;

    @Autowired
    private CommentMapper commentMapper;


    //新增二级评论
    @Override
    public Boolean uploadCommentReply(CommentReply commentReply) {
        //给二级评论添加默认值
        commentReply.setComment_reply_time(DateUtils.getDate());
        commentReply.setLike_num(0);
        //上传二级评论至数据库
        commentReplyMapper.uploadCommentReply(commentReply);
        //查询二级评论挂靠的回答
        Comment comment = commentMapper.selectCommentById(commentReply.getComment_id());
        //回答的评论数增加
        answerMapper.addCommentNum(comment.getComment_answer());
        return true;
    }

    //删除二级评论
    @Override
    public Boolean deleteCommentReply(Long comment_reply_id) {
        //查询二级评论
        CommentReply commentReply = commentReplyMapper.selectCommentReplyById(comment_reply_id);
        //查询挂靠一级评论
        Comment comment = commentMapper.selectCommentById(commentReply.getComment_id());
        //查询挂靠回答并减少回答评论数
        answerMapper.minusCommentNum(comment.getComment_answer());
        //删除评论
        commentReplyMapper.deleteCommentReply(comment_reply_id);
        return true;
    }

    //    删除某一级评论下的所有二级评论
    @Override
    public Boolean deleteCommentReplyUnderComment(Long comment_id) {
        List<CommentReplyVO> commentReplyVOS = commentReplyMapper.selectComentReplyByCommentId(comment_id);
        for (CommentReplyVO commentReplyVO:commentReplyVOS) {
            Comment comment = commentMapper.selectCommentById(commentReplyVO.getComment_id());
            answerMapper.minusCommentNum(comment.getComment_answer());
        }
        commentReplyMapper.deleteCommentRelyByCommentId(comment_id);
        return true;
    }






}
