package com.wwc.question_answer.service;

import com.wwc.question_answer.pojo.CommentReply;

public interface CommentReplyService {

    Boolean uploadCommentReply(CommentReply commentReply);

    Boolean deleteCommentReply(Long comment_reply_id);

    //    删除某一级评论下的所有二级评论
    Boolean deleteCommentReplyUnderComment(Long comment_id);
}
