package com.wwc.question_answer.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {

    //用户的openID
    private String uuid;

    //用户的昵称
    private String nickname;

    //用户的头像
    private String avatar;

    //用户的学号
    private String stu_num;

    //用户的专业
    private String major;

    //用户的性别
    private Integer gender;

    //用户的个性签名
    private String personal_signature;

    //用户创建时间
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8",pattern = "yyyy-MM-dd HH:mm:ss")
    private Date user_create_time;

    public User() {
    }

    public User(String uuid, String nickname, String avatar, String stu_num, String major, Integer gender, String personal_signature, Date user_create_time) {
        this.uuid = uuid;
        this.nickname = nickname;
        this.avatar = avatar;
        this.stu_num = stu_num;
        this.major = major;
        this.gender = gender;
        this.personal_signature = personal_signature;
        this.user_create_time = user_create_time;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
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

    public String getStu_num() {
        return stu_num;
    }

    public void setStu_num(String stu_num) {
        this.stu_num = stu_num;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getPersonal_signature() {
        return personal_signature;
    }

    public void setPersonal_signature(String personal_signature) {
        this.personal_signature = personal_signature;
    }

    public Date getUser_create_time() {
        return user_create_time;
    }

    public void setUser_create_time(Date user_create_time) {
        this.user_create_time = user_create_time;
    }

    @Override
    public String toString() {
        return "User{" +
                "uuid='" + uuid + '\'' +
                ", nickname='" + nickname + '\'' +
                ", avatar='" + avatar + '\'' +
                ", stu_num='" + stu_num + '\'' +
                ", major='" + major + '\'' +
                ", gender=" + gender +
                ", personal_signature='" + personal_signature + '\'' +
                ", user_create_time=" + user_create_time +
                '}';
    }
}
