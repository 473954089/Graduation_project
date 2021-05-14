package com.wwc.question_answer.dao;

import com.wwc.question_answer.pojo.Answer;
import com.wwc.question_answer.vo.AnswerVO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AnswerMapper {

//    写新回答
    @Insert("insert into answer (`answer_id`, `answer_content`, `answer_time`, `answer_edit_time`, `answer_author`, `answer_question`,`comment_num`,`like_num`) values (#{answer.answer_id}, #{answer.answer_content}, #{answer.answer_time}, #{answer.answer_edit_time}, #{answer.answer_author}, #{answer.answer_question},#{answer.comment_num},#{answer.like_num})")
    void uploadAnswer(@Param("answer") Answer answer);

//    根据回答ID删除回答
    @Delete("delete from answer where answer_id=#{answer_id}")
    void deleteByAnswerId(@Param("answer_id") Integer answer_id);

    //根据问题ID删除回答
    @Delete("delete from answer where answer_question=#{question_id}")
    void deleteByQuestionId(@Param("question_id") Integer question_id);

//    根据问题id查询筛选回答
    @Select("select a.*,u.nickname,u.avatar,u.personal_signature,q.question_title from answer a inner join users u ON u.uuid=a.answer_author inner join question q on q.question_id=a.answer_question where answer_question=#{question_id} order by answer_time desc")
    List<AnswerVO> selectAnswerByQuestionId(@Param("question_id") Integer question_id);

//    根据用户id查询筛选回答
    @Select("select a.*,u.nickname,u.avatar,u.personal_signature,q.question_title from answer a inner join users u ON u.uuid=a.answer_author inner join question q on q.question_id=a.answer_question where answer_author=#{uuid} order by answer_time desc")
    List<AnswerVO> selectAnswerByUserId(@Param("uuid") String uuid);

//    根据回答id筛选回答
    @Select("select a.*,u.nickname,u.avatar,u.personal_signature,q.question_title from answer a inner join users u ON u.uuid=a.answer_author inner join question q on q.question_id=a.answer_question where answer_id=#{answer_id} order by answer_time desc")
    AnswerVO selectAnswerByAnswerId(@Param("answer_id") Integer answer_id);

//    给回答加赞
    @Update("update answer set like_num=like_num+1 where answer_id=#{answer_id}")
    void addAnswerLike(@Param("answer_id") Integer answer_id);

//    修改回答
    @Update("update answer set answer_content=#{answer.answer_content},answer_edit_time=#{answer.answer_edit_time} where answer_id=#{answer.answer_id}")
    void updateAnswer(@Param("answer") Answer answer);

    //评论数增加
    @Update("update answer set comment_num=comment_num+1 where answer_id=#{answer_id}")
    void addCommentNum(@Param("answer_id") Integer answer_id);

    //评论数减少
    @Update("update answer set comment_num=comment_num-1 where answer_id=#{answer_id}")
    void minusCommentNum(@Param("answer_id") Integer answer_id);
}
