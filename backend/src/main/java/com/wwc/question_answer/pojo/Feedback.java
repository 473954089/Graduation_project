package com.wwc.question_answer.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class Feedback implements Serializable {

//    反馈ID
    private Integer feedback_id;

//    反馈标题
    private String feedback_title;

//    反馈内容
    private String feedback_content;

//    反馈人
    private String feedback_author;

//    反馈时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+0",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date feedback_time;

    public Feedback() {
    }

    public Feedback(Integer feedback_id, String feedback_title, String feedback_content, String feedback_author, Date feedback_time) {
        this.feedback_id = feedback_id;
        this.feedback_title = feedback_title;
        this.feedback_content = feedback_content;
        this.feedback_author = feedback_author;
        this.feedback_time = feedback_time;
    }

    public Integer getFeedback_id() {
        return feedback_id;
    }

    public void setFeedback_id(Integer feedback_id) {
        this.feedback_id = feedback_id;
    }

    public String getFeedback_title() {
        return feedback_title;
    }

    public void setFeedback_title(String feedback_title) {
        this.feedback_title = feedback_title;
    }

    public String getFeedback_content() {
        return feedback_content;
    }

    public void setFeedback_content(String feedback_content) {
        this.feedback_content = feedback_content;
    }

    public String getFeedback_author() {
        return feedback_author;
    }

    public void setFeedback_author(String feedback_author) {
        this.feedback_author = feedback_author;
    }

    public Date getFeedback_time() {
        return feedback_time;
    }

    public void setFeedback_time(Date feedback_time) {
        this.feedback_time = feedback_time;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "feedback_id=" + feedback_id +
                ", feedback_title='" + feedback_title + '\'' +
                ", feedback_content='" + feedback_content + '\'' +
                ", feedback_author='" + feedback_author + '\'' +
                ", feedback_time=" + feedback_time +
                '}';
    }
}
