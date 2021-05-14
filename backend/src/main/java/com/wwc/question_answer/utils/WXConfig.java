package com.wwc.question_answer.utils;

public class WXConfig {
    public static String appid= "wxd9feb8e5df813389";//小程序appid
    public static String secret="9a8433a00945d5bcabd0178dec1c7eba";//小程序密钥
    public static String openidUrl="https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRECT&js_code=CODE&grant_type=authorization_code";

    public static String getOpenidUrl(String code) {
        return openidUrl.replace("APPID",appid).replace("SECRECT",secret).replace("CODE",code);
    }
}