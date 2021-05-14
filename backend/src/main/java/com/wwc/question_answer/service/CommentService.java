package com.wwc.question_answer.service;

import com.wwc.question_answer.pojo.Comment;
import com.wwc.question_answer.vo.CommentVO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CommentService {

    Boolean uploadComment(Comment comment);

    Boolean deleteComment(Long comment_id);

    List<CommentVO> queryAnswerComment(Integer answer_id);

    List<CommentVO> getNewComment(String uuid);

    Boolean isread(Integer comment_id);
}
