package com.wwc.question_answer.controller;

import com.wwc.question_answer.pojo.User;
import com.wwc.question_answer.service.UserService;
import com.wwc.question_answer.utils.LoginModel;
import com.wwc.question_answer.utils.ResultVOUtils;
import com.wwc.question_answer.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

//    用户登录
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public ResultVO doLogin(@RequestBody LoginModel loginModel) {
        return ResultVOUtils.success(userService.dologin(loginModel.getCode()));
}


////    该接口用于查询所有的用户列表
//    @RequestMapping("/findAll")
//    public List<User> getAll(){
//        return userService.selectAll();
//    }

//    查询用户个人资料
    @RequestMapping("/info")
    public ResultVO getUserInfo(@RequestParam Map<String, Object> params){
        String uuid = (String) params.get("uuid");
        System.out.println(uuid);
        return ResultVOUtils.success(userService.selectById(uuid));
    }

//    修改用户个人资料
    @RequestMapping("/update")
    public ResultVO updaUserInfo(@RequestBody User user){
        System.out.println(user);
        return ResultVOUtils.success(userService.updateById(user));
    }

}
