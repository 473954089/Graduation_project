package com.wwc.question_answer.dao;

import com.wwc.question_answer.pojo.Comment;
import com.wwc.question_answer.pojo.CommentReply;
import com.wwc.question_answer.vo.CommentReplyVO;
import org.apache.ibatis.annotations.*;

import java.util.List;

//二级评论
@Mapper
public interface CommentReplyMapper {

//    新增二级评论（回复）
    @Insert("insert into comment_reply (`comment_reply_id`,`comment_id`, `reply_id`, `reply_type`, `reply_content`,`from_uuid`,`to_uuid`,`comment_reply_time`,`like_num`) values (#{commentReply.comment_reply_id}, #{commentReply.comment_id},#{commentReply.reply_id}, #{commentReply.reply_type}, #{commentReply.reply_content},#{commentReply.from_uuid},#{commentReply.to_uuid},#{commentReply.comment_reply_time},#{commentReply.like_num})")
    void uploadCommentReply(@Param("commentReply") CommentReply commentReply);

    //通过comment_reply_id删除二级评论
    @Delete("delete from comment_reply where comment_reply_id=#{comment_reply_id}")
    void deleteCommentReply(@Param("comment_reply_id") Long comment_reply_id);

    //    通过comment_id删除二级评论
    @Delete("delete from comment_reply where comment_id=#{comment_id}")
    void deleteCommentRelyByCommentId(@Param("comment_id") Long comment_id);

    //    通过commentID查询二级评论
    @Select("select c.*,u.nickname as from_user,us.nickname as to_user from comment_reply c inner join users u on u.uuid=c.from_uuid inner join users us on us.uuid=c.to_uuid where  comment_id=#{comment_id} order by comment_reply_time asc")
    List<CommentReplyVO> selectComentReplyByCommentId(@Param("comment_id") long comment_id);

    //    通过comment_reply_id查询二级评论
    @Select("select * from comment_reply where comment_reply_id=#{comment_reply_id}")
    CommentReply selectCommentReplyById(@Param("comment_reply_id") Long comment_reply_id);



}
