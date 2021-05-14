package com.wwc.question_answer.utils;

import com.wwc.question_answer.vo.ResultVO;
import com.wwc.question_answer.enums.ErrorEnum;


public class ResultVOUtils {
    public static ResultVO success(Object data){

        ResultVO resultVO = new ResultVO();
        resultVO.setData(data);
        resultVO.setStatusCode(200);
        resultVO.setMsg("成功");
        return resultVO;
    }
    public static ResultVO success(Object data,ErrorEnum statusEnum){
        ResultVO resultVO = new ResultVO();
        resultVO.setData(data);
        resultVO.setStatusCode(statusEnum.getCode());
        resultVO.setMsg(statusEnum.getMsg());
        return resultVO;
    }
    public static ResultVO fail(){
        ResultVO resultVO = new ResultVO();
        resultVO.setData(null);
        resultVO.setStatusCode(500);
        resultVO.setMsg("请求失败");
        return resultVO;
    }
    public static ResultVO fail(Integer code,String msg){
        ResultVO resultVO = new ResultVO();
        resultVO.setData(null);
        resultVO.setStatusCode(code);
        resultVO.setMsg(msg);
        return resultVO;
    }
    public static ResultVO fail(ErrorEnum statusEnum){
        ResultVO resultVO = new ResultVO();
        resultVO.setData(null);
        resultVO.setStatusCode(statusEnum.getCode());
        resultVO.setMsg(statusEnum.getMsg());
        return resultVO;
    }
}
