package com.wwc.question_answer.service.impl;

import com.wwc.question_answer.dao.FeedbackMapper;
import com.wwc.question_answer.dao.UserMapper;
import com.wwc.question_answer.pojo.Feedback;
import com.wwc.question_answer.pojo.User;
import com.wwc.question_answer.service.FeedbackService;
import com.wwc.question_answer.service.UserService;
import com.wwc.question_answer.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackMapper feedbackMapper;

    @Autowired
    private UserMapper userMapper;

    @Override
    public Boolean uploadFeedback(Feedback feedback) {
        feedback.setFeedback_time(DateUtils.getDate());
        User user=userMapper.selectById(feedback.getFeedback_author());
        feedback.setFeedback_author(user.getNickname());
        feedbackMapper.uploadFeedback(feedback);
        return true;
    }
}
