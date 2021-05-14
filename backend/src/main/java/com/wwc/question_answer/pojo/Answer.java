package com.wwc.question_answer.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class Answer implements Serializable {

//    回答ID
    private Integer answer_id;

//    回答内容
    private String answer_content;

//    回答时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date answer_time;

//    回答修改时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date answer_edit_time;

//    回答人
    private String answer_author;

//    所回答问题
    private Integer answer_question;

//    评论数
    private Integer comment_num;

//    点赞数
    private Integer like_num;

    public Answer() {
    }

    public Answer(Integer answer_id, String answer_content, Date answer_time, Date answer_edit_time, String answer_author, Integer answer_question, Integer comment_num, Integer like_num) {
        this.answer_id = answer_id;
        this.answer_content = answer_content;
        this.answer_time = answer_time;
        this.answer_edit_time = answer_edit_time;
        this.answer_author = answer_author;
        this.answer_question = answer_question;
        this.comment_num = comment_num;
        this.like_num = like_num;
    }

    public Integer getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(Integer answer_id) {
        this.answer_id = answer_id;
    }

    public String getAnswer_content() {
        return answer_content;
    }

    public void setAnswer_content(String answer_content) {
        this.answer_content = answer_content;
    }

    public Date getAnswer_time() {
        return answer_time;
    }

    public void setAnswer_time(Date answer_time) {
        this.answer_time = answer_time;
    }

    public Date getAnswer_edit_time() {
        return answer_edit_time;
    }

    public void setAnswer_edit_time(Date answer_edit_time) {
        this.answer_edit_time = answer_edit_time;
    }

    public String getAnswer_author() {
        return answer_author;
    }

    public void setAnswer_author(String answer_author) {
        this.answer_author = answer_author;
    }

    public Integer getAnswer_question() {
        return answer_question;
    }

    public void setAnswer_question(Integer answer_question) {
        this.answer_question = answer_question;
    }

    public Integer getComment_num() {
        return comment_num;
    }

    public void setComment_num(Integer comment_num) {
        this.comment_num = comment_num;
    }

    public Integer getLike_num() {
        return like_num;
    }

    public void setLike_num(Integer like_num) {
        this.like_num = like_num;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "answer_id='" + answer_id + '\'' +
                ", answer_content='" + answer_content + '\'' +
                ", answer_time=" + answer_time +
                ", answer_edit_time=" + answer_edit_time +
                ", answer_author='" + answer_author + '\'' +
                ", answer_question='" + answer_question + '\'' +
                ", comment_num=" + comment_num +
                ", like_num=" + like_num +
                '}';
    }
}
