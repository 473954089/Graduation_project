package com.wwc.question_answer.service;

import com.wwc.question_answer.pojo.Question;
import com.wwc.question_answer.vo.QuestionVO;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface QuestionService {

//    提出新问题
    QuestionVO uploadQuestion(Question question);

//    删除问题
    Boolean deleteQuestion(Integer question_id);

//    查询最新问题
    List<QuestionVO> selectNewQuestion(Integer offset, Integer pageSize);

    //查询最热问题
    List<QuestionVO> selectHotQuestion(Integer offset, Integer pageSize);

//    以主键查询某个问题
    QuestionVO selectByPrimaryKey(Integer id);

//    以关键词查询问题
    List<QuestionVO> selectByKeyWord(String keyword);

//    查询历史提问
    List<QuestionVO> selectHistoryQuestion(String uuid);

////    查询所有问题
//    List<Question> selectAll();

    Boolean updateQuestion(Question question);

}
