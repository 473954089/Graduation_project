package com.wwc.question_answer.dao;

import com.wwc.question_answer.pojo.Answer;
import com.wwc.question_answer.pojo.Question;
import com.wwc.question_answer.vo.QuestionVO;
import org.apache.ibatis.annotations.*;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.util.List;

@Mapper
public interface QuestionMapper {

    //    插入新问题
    @Insert("insert into question (`question_id`, `question_title`, `question_content`, `question_author`, `question_time`, `question_edit_time`) values (#{question.question_id}, #{question.question_title}, #{question.question_content}, #{question.question_author}, #{question.question_time}, #{question.question_edit_time})")
    void uploadQuestion(@Param("question") Question question);

    //删除问题
    @Delete("delete from question where question_id=#{question_id}")
    void deleteQuestion(@Param("question_id") Integer question_id);

    //修改问题

    //查询最新问题
    @Select("select q.*,u.nickname,u.avatar,u.personal_signature from question q inner join users u on u.uuid=q.question_author where question_is_delete=0 order by question_time desc limit #{offset},#{pageSize}")
    List<QuestionVO> selectNewQuestion(@Param("offset") Integer offset,@Param("pageSize") Integer pageSize);

//    查询最热问题
    @Select("select q.*,u.nickname,u.avatar,u.personal_signature from question q inner join users u on u.uuid=q.question_author where question_is_delete=0 order by hot_rate desc limit #{offset},#{pageSize}")
    List<QuestionVO> selectHotQuestion(@Param("offset") Integer offset,@Param("pageSize") Integer pageSize);


//    以主键ID查询某个问题
    @Select("select q.*,u.nickname,u.avatar,u.personal_signature from question q inner join users u on u.uuid=q.question_author where question_id=#{id} and question_is_delete=0")
    QuestionVO selectByPrimaryKey(@Param("id") Integer id);

//    以关键词查询问题
    @Select("select q.*,u.nickname,u.avatar,u.personal_signature from question q inner join users u on u.uuid=q.question_author where question_title like concat('%',#{keyword},'%') and question_is_delete=0 order by answer_num desc")
    List<QuestionVO> selectByKeyWord(@Param("keyword") String keyword);

//    以用户ID查询问题
    @Select("select q.*,u.nickname,u.avatar,u.personal_signature from question q inner join users u on u.uuid=q.question_author where question_author=#{uuid} and question_is_delete=0 order by question_time desc")
    List<QuestionVO> selectByUserId(@Param("uuid") String uuid);


////    查询所有问题
//    @Select("select * from question")
//    List<Question> selectAll();

    @Update("update question set question_title=#{question.question_title},question_content=#{question.question_content},question_edit_time=#{question.question_edit_time},question_is_delete=#{question.question_is_delete} where question_id=#{question.question_id}")
    void updateQuestion(@Param("question") Question question);

    //回答数增加
    @Update("update question set answer_num=answer_num+1 where question_id=#{question_id}")
    void updateQuestionAnswerNum(@Param("question_id") Integer question_id);


}
