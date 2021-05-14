package com.wwc.question_answer.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.wwc.question_answer.dao.UserMapper;
import com.wwc.question_answer.pojo.User;
import com.wwc.question_answer.service.UserService;
import com.wwc.question_answer.utils.DateUtils;
import com.wwc.question_answer.utils.WXConfig;
import com.wwc.question_answer.utils.WechatRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    //用户注册登录业务
    @Override
    public User dologin(String code) {
        User user = new User();

        //获取微信接口请求连接
        String openidUrl = WXConfig.getOpenidUrl(code);

        //向微信接口发起请求
        String res=WechatRequest.sendGet(openidUrl, "");
        //System.out.println(res);

        //从微信接口中返回的数据中取出openid以及session_key
        JSONObject jsonObject1 = JSONObject.parseObject(res);
        System.out.println(jsonObject1);
        String openid = (String)jsonObject1.get("openid");
        String session_key = (String)jsonObject1.get("session_key");

        User user1=userMapper.selectById(openid);

        //查询数据库中是否存在该用户,若不存在则在数据库中创建新用户
        if (user1==null){
            user.setUuid(openid);
            user.setUser_create_time(DateUtils.getDate());
            userMapper.createNewUser(user);
        }else {
            return user1;
        }

        return user;
    }

    @Override
    public User selectById(String uuid) {
        return userMapper.selectById(uuid);
    }

    @Override
    public List<User> selectAll() {
        return userMapper.selectAll();
    }

    @Override
    public User updateById(User user) {
        userMapper.updateById(user);
        return userMapper.selectById(user.getUuid());
    }


}
