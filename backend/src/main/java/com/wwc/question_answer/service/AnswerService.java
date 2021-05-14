package com.wwc.question_answer.service;

import com.wwc.question_answer.pojo.Answer;
import com.wwc.question_answer.vo.AnswerVO;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface AnswerService {

    //    写新回答
    Answer uploadAnswer(Answer answer);

    //    删除回答
    AnswerVO deleteByAnswerId(Integer answer_id);

    //    根据问题id查询筛选回答
    List<AnswerVO> selectAnswerByQuestionId(Integer question_id);

    //    根据用户id查询筛选回答
    List<AnswerVO> selectAnswerByUserId(String uuid);

    //根据回答id查询筛选回答
    AnswerVO selectAnswerById(Integer answer_id);

    //    给回答加赞
    AnswerVO addAnswerLike(Integer answer_id);

    //    修改回答
    AnswerVO updateAnswer(Answer answer);
}
