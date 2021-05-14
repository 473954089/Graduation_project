package com.wwc.question_answer.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class QuestionVO implements Serializable {

    //问题id
    private Integer question_id;

    //问题标题
    private String question_title;

    //问题内容
    private String question_content;

    //问题作者
    private String question_author;

    //问题回答数
    private Integer answer_num;

    //问题热度
    private Integer hot_rate;

    //是否删除
    private Integer question_is_delete;

    //问题发布时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date question_time;

    //问题修改时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date question_edit_time;

    //提问人昵称
    private String nickname;

    //提问人头像
    private String avatar;

    //个性签名
    private String personal_signature;

    public QuestionVO() {
    }

    public QuestionVO(Integer question_id, String question_title, String question_content, String question_author, Integer answer_num, Integer hot_rate, Integer question_is_delete, Date question_time, Date question_edit_time, String nickname, String avatar, String personal_signature) {
        this.question_id = question_id;
        this.question_title = question_title;
        this.question_content = question_content;
        this.question_author = question_author;
        this.answer_num = answer_num;
        this.hot_rate = hot_rate;
        this.question_is_delete = question_is_delete;
        this.question_time = question_time;
        this.question_edit_time = question_edit_time;
        this.nickname = nickname;
        this.avatar = avatar;
        this.personal_signature = personal_signature;
    }

    public Integer getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(Integer question_id) {
        this.question_id = question_id;
    }

    public String getQuestion_title() {
        return question_title;
    }

    public void setQuestion_title(String question_title) {
        this.question_title = question_title;
    }

    public String getQuestion_content() {
        return question_content;
    }

    public void setQuestion_content(String question_content) {
        this.question_content = question_content;
    }

    public String getQuestion_author() {
        return question_author;
    }

    public void setQuestion_author(String question_author) {
        this.question_author = question_author;
    }

    public Integer getAnswer_num() {
        return answer_num;
    }

    public void setAnswer_num(Integer answer_num) {
        this.answer_num = answer_num;
    }

    public Integer getHot_rate() {
        return hot_rate;
    }

    public void setHot_rate(Integer hot_rate) {
        this.hot_rate = hot_rate;
    }

    public Date getQuestion_time() {
        return question_time;
    }

    public void setQuestion_time(Date question_time) {
        this.question_time = question_time;
    }

    public Date getQuestion_edit_time() {
        return question_edit_time;
    }

    public void setQuestion_edit_time(Date question_edit_time) {
        this.question_edit_time = question_edit_time;
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

    public Integer getQuestion_is_delete() {
        return question_is_delete;
    }

    public void setQuestion_is_delete(Integer question_is_delete) {
        this.question_is_delete = question_is_delete;
    }

    public String getPersonal_signature() {
        return personal_signature;
    }

    public void setPersonal_signature(String personal_signature) {
        this.personal_signature = personal_signature;
    }

    @Override
    public String toString() {
        return "QuestionVO{" +
                "question_id=" + question_id +
                ", question_title='" + question_title + '\'' +
                ", question_content='" + question_content + '\'' +
                ", question_author='" + question_author + '\'' +
                ", answer_num=" + answer_num +
                ", hot_rate=" + hot_rate +
                ", question_is_delete=" + question_is_delete +
                ", question_time=" + question_time +
                ", question_edit_time=" + question_edit_time +
                ", nickname='" + nickname + '\'' +
                ", avatar='" + avatar + '\'' +
                ", personal_signature='" + personal_signature + '\'' +
                '}';
    }
}
