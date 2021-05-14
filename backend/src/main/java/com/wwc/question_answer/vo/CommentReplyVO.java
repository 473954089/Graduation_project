package com.wwc.question_answer.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class CommentReplyVO implements Serializable {

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

    //评论用户
    private String from_user;

    //被评论用户
    private String to_user;

    public CommentReplyVO() {
    }

    public CommentReplyVO(Long comment_reply_id, Long comment_id, Long reply_id, Integer reply_type, String reply_content, String from_uuid, String to_uuid, Integer like_num, Date comment_reply_time, String from_user, String to_user) {
        this.comment_reply_id = comment_reply_id;
        this.comment_id = comment_id;
        this.reply_id = reply_id;
        this.reply_type = reply_type;
        this.reply_content = reply_content;
        this.from_uuid = from_uuid;
        this.to_uuid = to_uuid;
        this.like_num = like_num;
        this.comment_reply_time = comment_reply_time;
        this.from_user = from_user;
        this.to_user = to_user;
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

    public Integer getLike_num() {
        return like_num;
    }

    public void setLike_num(Integer like_num) {
        this.like_num = like_num;
    }

    public Date getComment_reply_time() {
        return comment_reply_time;
    }

    public void setComment_reply_time(Date comment_reply_time) {
        this.comment_reply_time = comment_reply_time;
    }

    public String getFrom_user() {
        return from_user;
    }

    public void setFrom_user(String from_user) {
        this.from_user = from_user;
    }

    public String getTo_user() {
        return to_user;
    }

    public void setTo_user(String to_user) {
        this.to_user = to_user;
    }

    @Override
    public String toString() {
        return "CommentReplyVO{" +
                "comment_reply_id=" + comment_reply_id +
                ", comment_id=" + comment_id +
                ", reply_id=" + reply_id +
                ", reply_type=" + reply_type +
                ", reply_content='" + reply_content + '\'' +
                ", from_uuid='" + from_uuid + '\'' +
                ", to_uuid='" + to_uuid + '\'' +
                ", like_num=" + like_num +
                ", comment_reply_time=" + comment_reply_time +
                ", from_user='" + from_user + '\'' +
                ", to_user='" + to_user + '\'' +
                '}';
    }
}
