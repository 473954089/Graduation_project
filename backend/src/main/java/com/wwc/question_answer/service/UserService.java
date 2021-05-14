package com.wwc.question_answer.service;

import com.wwc.question_answer.pojo.User;
import org.json.JSONException;

import java.util.List;

public interface UserService {

//    在数据库中创建新用户
//    @return
    User dologin(String code) ;

//    根据id查询用户
//    @param id
//    @return
    User selectById(String uuid);

//    查询所有用户
//    @return
    List<User> selectAll();

    User updateById(User user);


}
