package com.wwc.question_answer.controller;


import com.wwc.question_answer.pojo.Answer;
import com.wwc.question_answer.service.AnswerService;
import com.wwc.question_answer.service.QuestionService;
import com.wwc.question_answer.utils.ResultVOUtils;
import com.wwc.question_answer.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/answer")
public class AnswerControllor {

    @Autowired
    private AnswerService answerService;

    //    写新回答
    @RequestMapping("/upload")
    public ResultVO uploadAnswer(@RequestBody Answer answer){
        System.out.println(answer);
        return ResultVOUtils.success(answerService.uploadAnswer(answer));
    }

    //    删除回答
    @RequestMapping("/delete")
    public ResultVO deleteAnswer(@RequestParam Map<String, Object> params){
        Integer answer_id = Integer.valueOf((String) params.get("answer_id"));
        return ResultVOUtils.success(answerService.deleteByAnswerId(answer_id));
    }

//    查询历史回答
    @RequestMapping("/history")
    public ResultVO queryHistoryAnswer(@RequestParam Map<String, Object> params){
        String uuid = (String) params.get("uuid");
        return ResultVOUtils.success(answerService.selectAnswerByUserId(uuid));
    }

//    给回答点赞
    @RequestMapping("/like")
    public ResultVO likeAnswer(@RequestParam Map<String, Object> params){
        Integer answer_id = Integer.valueOf((String) params.get("answer_id"));
        return ResultVOUtils.success(answerService.addAnswerLike(answer_id));
    }

//    查看某问题下的回答
    @RequestMapping("/question")
    public ResultVO questionAnswer(@RequestParam Map<String, Object> params){
        Integer question_id = Integer.valueOf((String) params.get("question_id"));
        return ResultVOUtils.success(answerService.selectAnswerByQuestionId(question_id));
    }

//    查看某回答
    @RequestMapping("/answer")
    public ResultVO AnswerById(@RequestParam Map<String, Object> params){
        Integer answer_id = Integer.valueOf((String) params.get("answer_id"));
        return ResultVOUtils.success(answerService.selectAnswerById(answer_id));
    }


//    修改回答
    @RequestMapping("/update")
    public ResultVO updateAnswer(@RequestBody Answer answer){
        return ResultVOUtils.success(answerService.updateAnswer(answer));
    }


}
