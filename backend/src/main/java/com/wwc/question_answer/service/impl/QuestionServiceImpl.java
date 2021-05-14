package com.wwc.question_answer.service.impl;

import com.wwc.question_answer.dao.AnswerMapper;
import com.wwc.question_answer.dao.QuestionMapper;
import com.wwc.question_answer.pojo.Question;
import com.wwc.question_answer.service.QuestionService;
import com.wwc.question_answer.utils.DateUtils;
import com.wwc.question_answer.vo.QuestionVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {


    @Autowired
    private QuestionMapper questionMapper;

    //提出新问题
    @Override
    public QuestionVO uploadQuestion(Question question) {
        question.setQuestion_time(DateUtils.getDate());
        questionMapper.uploadQuestion(question);
        return selectByPrimaryKey(question.getQuestion_id());
    }

//    删除问题
    @Override
    public Boolean deleteQuestion(Integer question_id) {
        Question question=new Question();
        question.setQuestion_id(question_id);
        question.setQuestion_title("该问题已删除");
        question.setQuestion_content("该问题已删除");
        question.setQuestion_edit_time(DateUtils.getDate());
        question.setQuestion_is_delete(1);
        questionMapper.updateQuestion(question);
        return true;
    }


    //查询最新问题
    @Override
    public List<QuestionVO> selectNewQuestion(Integer offset, Integer pageSize) {
        return questionMapper.selectNewQuestion(offset,pageSize);
    }

    //查询最热问题
    @Override
    public List<QuestionVO> selectHotQuestion(Integer offset, Integer pageSize) {
        return questionMapper.selectHotQuestion(offset,pageSize);
    }

    @Override
    public QuestionVO selectByPrimaryKey(Integer id) {
        return questionMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<QuestionVO> selectByKeyWord(String keyword) {
        return questionMapper.selectByKeyWord(keyword);

    }

    @Override
    public List<QuestionVO> selectHistoryQuestion(String uuid) {
        return questionMapper.selectByUserId(uuid);
    }

    @Override
    public Boolean updateQuestion(Question question) {
        question.setQuestion_edit_time(DateUtils.getDate());
        questionMapper.updateQuestion(question);
        return true;
    }

//    @Override
//    public List<Question> selectAll() {
//        return questionMapper.selectAll();
//    }

}
