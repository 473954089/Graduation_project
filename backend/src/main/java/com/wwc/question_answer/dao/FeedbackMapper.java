package com.wwc.question_answer.dao;

import com.wwc.question_answer.pojo.Answer;
import com.wwc.question_answer.pojo.Feedback;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface FeedbackMapper {

//    写新反馈
    @Insert("insert into feedback (`feedback_id`, `feedback_title`, `feedback_content`, `feedback_author`, `feedback_time`) values (#{feedback.feedback_id}, #{feedback.feedback_title}, #{feedback.feedback_content}, #{feedback.feedback_author}, #{feedback.feedback_time})")
    void uploadFeedback(@Param("feedback") Feedback feedback);
}
