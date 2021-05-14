package com.wwc.question_answer.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class AnswerVO implements Serializable {

    //    回答ID
    private String answer_id;

    //    回答内容
    private String answer_content;

    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    //    回答时间
    private Date answer_time;

    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    // 回答修改时间
    private Date answer_edit_time;

    //    回答人
    private String answer_author;

    //    所回答问题
    private Integer answer_question;

    //    评论数
    private Integer comment_num;

    //    点赞数
    private Integer like_num;

    //    用户名
    private String nickname;

    //   用户头像
    private String avatar;

//    个性签名
    private String personal_signature;

    //问题标题
    private String question_title;

    public AnswerVO() {
    }

    public AnswerVO(String answer_id, String answer_content, Date answer_time, Date answer_edit_time, String answer_author, Integer answer_question, Integer comment_num, Integer like_num, String nickname, String avatar, String personal_signature, String question_title) {
        this.answer_id = answer_id;
        this.answer_content = answer_content;
        this.answer_time = answer_time;
        this.answer_edit_time = answer_edit_time;
        this.answer_author = answer_author;
        this.answer_question = answer_question;
        this.comment_num = comment_num;
        this.like_num = like_num;
        this.nickname = nickname;
        this.avatar = avatar;
        this.personal_signature = personal_signature;
        this.question_title = question_title;
    }

    public String getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(String answer_id) {
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

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getQuestion_title() {
        return question_title;
    }

    public void setQuestion_title(String question_title) {
        this.question_title = question_title;
    }

    public String getPersonal_signature() {
        return personal_signature;
    }

    public void setPersonal_signature(String personal_signature) {
        this.personal_signature = personal_signature;
    }

    @Override
    public String toString() {
        return "AnswerVO{" +
                "answer_id='" + answer_id + '\'' +
                ", answer_content='" + answer_content + '\'' +
                ", answer_time=" + answer_time +
                ", answer_edit_time=" + answer_edit_time +
                ", answer_author='" + answer_author + '\'' +
                ", answer_question='" + answer_question + '\'' +
                ", comment_num=" + comment_num +
                ", like_num=" + like_num +
                ", nickname='" + nickname + '\'' +
                ", avatar='" + avatar + '\'' +
                ", personal_signature='" + personal_signature + '\'' +
                ", question_title='" + question_title + '\'' +
                '}';
    }
}
