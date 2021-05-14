package com.wwc.question_answer.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class CommentReply implements Serializable {

    //二级评论ID
    private Long comment_reply_id;

    //该回复挂载的根评论ID
    private Long comment_id;

    //回复目标ID
    private Long reply_id;

    //0代表回复的是评论，1代表回复的是回复
    private Integer reply_type;

    //回复内容
    private String reply_content;

    //回复用户id
    private String from_uuid;

    //目标用户id
    private String to_uuid;

    //点赞数
    private Integer like_num;

    //回复时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date comment_reply_time;

    public CommentReply() {
    }

    public CommentReply(Long comment_reply_id, Long comment_id, Long reply_id, Integer reply_type, String reply_content, String from_uuid, String to_uuid, Integer like_num, Date comment_reply_time) {
        this.comment_reply_id = comment_reply_id;
        this.comment_id = comment_id;
        this.reply_id = reply_id;
        this.reply_type = reply_type;
        this.reply_content = reply_content;
        this.from_uuid = from_uuid;
        this.to_uuid = to_uuid;
        this.like_num = like_num;
        this.comment_reply_time = comment_reply_time;
    }

    public Long getComment_reply_id() {
        return comment_reply_id;
    }

    public void setComment_reply_id(Long comment_reply_id) {
        this.comment_reply_id = comment_reply_id;
    }

    public Long getComment_id() {
        return comment_id;
    }

    public void setComment_id(Long comment_id) {
        this.comment_id = comment_id;
    }

    public Long getReply_id() {
        return reply_id;
    }

    public void setReply_id(Long reply_id) {
        this.reply_id = reply_id;
    }

    public Integer getReply_type() {
        return reply_type;
    }

    public void setReply_type(Integer reply_type) {
        this.reply_type = reply_type;
    }

    public String getReply_content() {
        return reply_content;
    }

    public void setReply_content(String reply_content) {
        this.reply_content = reply_content;
    }

    public String getFrom_uuid() {
        return from_uuid;
    }

    public void setFrom_uuid(String from_uuid) {
        this.from_uuid = from_uuid;
    }

    public String getTo_uuid() {
        return to_uuid;
    }

    public void setTo_uuid(String to_uuid) {
        this.to_uuid = to_uuid;
    }

    public Date getComment_reply_time() {
        return comment_reply_time;
    }

    public void setComment_reply_time(Date comment_reply_time) {
        this.comment_reply_time = comment_reply_time;
    }

    public Integer getLike_num() {
        return like_num;
    }

    public void setLike_num(Integer like_num) {
        this.like_num = like_num;
    }

    @Override
    public String toString() {
        return "CommentReply{" +
                "comment_reply_id=" + comment_reply_id +
                ", comment_id=" + comment_id +
                ", reply_id=" + reply_id +
                ", reply_type=" + reply_type +
                ", reply_content='" + reply_content + '\'' +
                ", from_uuid='" + from_uuid + '\'' +
                ", to_uuid='" + to_uuid + '\'' +
                ", like_num=" + like_num +
                ", comment_reply_time=" + comment_reply_time +
                '}';
    }
}
