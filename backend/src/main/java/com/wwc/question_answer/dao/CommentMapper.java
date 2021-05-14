package com.wwc.question_answer.dao;

import com.wwc.question_answer.pojo.Comment;
import com.wwc.question_answer.vo.AnswerVO;
import com.wwc.question_answer.vo.CommentVO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {

    //    新增评论
    @Insert("insert into comment (`comment_id`, `comment_answer`, `comment_content`, `from_uuid`, `comment_time`,`like_num`) values (#{comment.comment_id}, #{comment.comment_answer}, #{comment.comment_content}, #{comment.from_uuid}, #{comment.comment_time}, #{comment.like_num})")
    void uploadComment(@Param("comment") Comment comment);

    //    根据评论ID删除评论
    @Delete("delete from comment where comment_id=#{comment_id}")
    void deleteCommentById(@Param("comment_id") Long comment_id);

    //    根据评论ID查询评论
    @Select("select * from comment where comment_id=#{comment_id}")
    Comment selectCommentById(@Param("comment_id") Long comment_id);

    //    根据回答ID查看评论
    @Select("select c.*,u.nickname,u.avatar from comment c inner join users u ON u.uuid=c.from_uuid  where comment_answer=#{answer_id} order by comment_time desc")
    List<CommentVO> selectCommentByAnswerId(@Param("answer_id") Integer answer_id);


    //已读评论
    @Update("update comment set is_read=1 where comment_id=#{comment_id}")
    void isread(@Param("comment_id") Integer comment_id);

}