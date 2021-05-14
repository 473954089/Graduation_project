package com.wwc.question_answer.service.impl;

import com.wwc.question_answer.dao.AnswerMapper;
import com.wwc.question_answer.dao.CommentMapper;
import com.wwc.question_answer.dao.CommentReplyMapper;
import com.wwc.question_answer.pojo.Comment;
import com.wwc.question_answer.service.CommentReplyService;
import com.wwc.question_answer.service.CommentService;
import com.wwc.question_answer.utils.DateUtils;
import com.wwc.question_answer.vo.AnswerVO;
import com.wwc.question_answer.vo.CommentReplyVO;
import com.wwc.question_answer.vo.CommentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private AnswerMapper answerMapper;

    @Autowired
    private CommentReplyMapper commentReplyMapper;

    @Autowired
    private CommentReplyService commentReplyService;

    @Transactional
    // 写评论
    @Override
    public Boolean uploadComment(Comment comment) {
        comment.setComment_time(DateUtils.getDate());
        comment.setLike_num(0);
        commentMapper.uploadComment(comment);
        answerMapper.addCommentNum(comment.getComment_answer());
        return true;
    }

    // 删除评论
    @Override
    public Boolean deleteComment(Long comment_id) {
        // 查询评论的回答ID
        Comment comment = commentMapper.selectCommentById(comment_id);

        // 回答中评论数减少
        answerMapper.minusCommentNum(comment.getComment_answer());

        //还要删除该评论下的二级评论回复
        commentReplyService.deleteCommentReplyUnderComment(comment_id);

        // 删除评论
        commentMapper.deleteCommentById(comment_id);
        return true;
    }

//    查询评论
    @Override
    public List<CommentVO> queryAnswerComment(Integer answer_id) {
//        查询一级评论
        List<CommentVO> commentVOS = commentMapper.selectCommentByAnswerId(answer_id);
//        遍历查询二级评论
        for (CommentVO commentvo : commentVOS) {
            List<CommentReplyVO> commentReplyVOS = commentReplyMapper.selectComentReplyByCommentId(commentvo.getComment_id());
            commentvo.setCommentReplyList(commentReplyVOS);
        }
        return commentVOS;
    }

    @Override
    public List<CommentVO> getNewComment(String uuid) {
        List<CommentVO> commentVOS = new ArrayList<CommentVO>();;
        List<CommentVO> commentVOSTemps=null;
        List<AnswerVO> answerVOS = answerMapper.selectAnswerByUserId(uuid);
        for (AnswerVO answerVO : answerVOS) {
            String answer_id = answerVO.getAnswer_id();
            int i = Integer.parseInt(answer_id);
            commentVOSTemps=commentMapper.selectCommentByAnswerId(i);
            for (CommentVO commentVOSTemp : commentVOSTemps) {
                if (commentVOSTemp.getIs_read() == 0) {
                    commentVOS.add(commentVOSTemp);
                }
            }
        }
        System.out.println(commentVOS);
        return commentVOS;
    }

    @Override
    public Boolean isread(Integer comment_id) {
        commentMapper.isread(comment_id);
        return null;
    }
}
