package com.wwc.question_answer.service.impl;

import com.wwc.question_answer.dao.AnswerMapper;
import com.wwc.question_answer.dao.QuestionMapper;
import com.wwc.question_answer.pojo.Answer;
import com.wwc.question_answer.service.AnswerService;
import com.wwc.question_answer.utils.DateUtils;
import com.wwc.question_answer.vo.AnswerVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerMapper answerMapper;

    @Autowired
    private QuestionMapper questionMapper;

    @Transactional
    @Override
    public Answer uploadAnswer(Answer answer) {
        answer.setComment_num(0);
        answer.setLike_num(0);
        answer.setAnswer_time(DateUtils.getDate());
        answerMapper.uploadAnswer(answer);
        questionMapper.updateQuestionAnswerNum(answer.getAnswer_question());
        return answer;
    }

    @Override
    public AnswerVO deleteByAnswerId(Integer answer_id) {
        AnswerVO answervo=new AnswerVO();
        answervo=answerMapper.selectAnswerByAnswerId(answer_id);
        answerMapper.deleteByAnswerId(answer_id);
        //还需要删除回答之下的评论以及评论回复
        return answervo;
    }

    //用问题id筛选回答
    @Override
    public List<AnswerVO> selectAnswerByQuestionId(Integer question_id) {
        return answerMapper.selectAnswerByQuestionId(question_id);
    }

    @Override
    public List<AnswerVO> selectAnswerByUserId(String uuid) {
        return answerMapper.selectAnswerByUserId(uuid);
    }

    @Override
    public AnswerVO selectAnswerById(Integer answer_id) {
        return answerMapper.selectAnswerByAnswerId(answer_id);
    }

    @Override
    public AnswerVO addAnswerLike(Integer answer_id) {
        answerMapper.addAnswerLike(answer_id);
        return answerMapper.selectAnswerByAnswerId(answer_id);
    }

    @Override
    public AnswerVO updateAnswer(Answer answer) {
        answer.setAnswer_edit_time(DateUtils.getDate());
        answerMapper.updateAnswer(answer);
        return answerMapper.selectAnswerByAnswerId(answer.getAnswer_id());

    }
}
