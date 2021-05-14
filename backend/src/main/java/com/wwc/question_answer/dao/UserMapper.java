package com.wwc.question_answer.dao;

import com.wwc.question_answer.pojo.Question;
import com.wwc.question_answer.pojo.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {

//    在数据库中创建新用户
//    @return
    @Insert("insert into users (`uuid`, `nickname`, `avatar`, `stu_num`, `major`, `gender`,`personal_signature`,`user_create_time`) values (#{user.uuid}, #{user.nickname}, #{user.avatar}, #{user.stu_num}, #{user.major}, #{user.gender},#{user.personal_signature},#{user.user_create_time})")
    void createNewUser(@Param("user") User user);

//    根据id查询用户
    @Select("select * from users where uuid=#{uuid}")
    User selectById(String uuid);

//     查询所有用户
//     @return
    @Select("select * from users")
    List<User> selectAll();

    //修改用户资料
    @Update("update users set nickname=#{user.nickname},avatar=#{user.avatar},gender=#{user.gender},stu_num=#{user.stu_num},major=#{user.major},personal_signature=#{user.personal_signature} where uuid=#{user.uuid}")
    void updateById(@Param("user") User user);

}
