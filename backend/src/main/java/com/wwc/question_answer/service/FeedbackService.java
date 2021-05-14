package com.wwc.question_answer.service;

import com.wwc.question_answer.pojo.Feedback;
import org.apache.ibatis.annotations.Param;

public interface FeedbackService {

    Boolean uploadFeedback(Feedback feedback);
}
