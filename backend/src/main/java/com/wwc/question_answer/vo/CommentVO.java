package com.wwc.question_answer.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wwc.question_answer.pojo.CommentReply;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class CommentVO implements Serializable {

    //评论的主键ID
    private Long comment_id;

    //评论的回答ID
    private Integer comment_answer;

    //评论内容
    private String comment_content;

    //评论人自身的用户ID
    private String from_uuid;

    //评论时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date comment_time;

    //点赞数
    private Integer like_num;

    //评论人的昵称
    private String nickname;

    //评论人的头像
    private String avatar;

    //二级评论
    private List<CommentReplyVO> commentReplyList;

    //是否已读
    private Integer is_read;

    public CommentVO() {

    }

    public CommentVO(Long comment_id, Integer comment_answer, String comment_content, String from_uuid, Date comment_time, Integer like_num, String nickname, String avatar, List<CommentReplyVO> commentReplyList, Integer is_read) {
        this.comment_id = comment_id;
        this.comment_answer = comment_answer;
        this.comment_content = comment_content;
        this.from_uuid = from_uuid;
        this.comment_time = comment_time;
        this.like_num = like_num;
        this.nickname = nickname;
        this.avatar = avatar;
        this.commentReplyList = commentReplyList;
        this.is_read = is_read;
    }

    public Long getComment_id() {
        return comment_id;
    }

    public void setComment_id(Long comment_id) {
        this.comment_id = comment_id;
    }

    public Integer getComment_answer() {
        return comment_answer;
    }

    public void setComment_answer(Integer comment_answer) {
        this.comment_answer = comment_answer;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public String getFrom_uuid() {
        return from_uuid;
    }

    public void setFrom_uuid(String from_uuid) {
        this.from_uuid = from_uuid;
    }

    public Date getComment_time() {
        return comment_time;
    }

    public void setComment_time(Date comment_time) {
        this.comment_time = comment_time;
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

    public List<CommentReplyVO> getCommentReplyList() {
        return commentReplyList;
    }

    public void setCommentReplyList(List<CommentReplyVO> commentReplyList) {
        this.commentReplyList = commentReplyList;
    }

    public Integer getIs_read() {
        return is_read;
    }

    public void setIs_read(Integer is_read) {
        this.is_read = is_read;
    }

    @Override
    public String toString() {
        return "CommentVO{" +
                "comment_id=" + comment_id +
                ", comment_answer=" + comment_answer +
                ", comment_content='" + comment_content + '\'' +
                ", from_uuid='" + from_uuid + '\'' +
                ", comment_time=" + comment_time +
                ", like_num=" + like_num +
                ", nickname='" + nickname + '\'' +
                ", avatar='" + avatar + '\'' +
                ", commentReplyList=" + commentReplyList +
                ", is_read=" + is_read +
                '}';
    }
}
