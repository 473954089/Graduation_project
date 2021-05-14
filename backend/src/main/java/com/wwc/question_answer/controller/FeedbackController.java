package com.wwc.question_answer.controller;

import com.wwc.question_answer.pojo.Feedback;
import com.wwc.question_answer.service.FeedbackService;
import com.wwc.question_answer.utils.ResultVOUtils;
import com.wwc.question_answer.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

//    提出反馈接口
    @RequestMapping("/upload")
    public ResultVO uploadFeedback(@RequestBody Feedback feedback){
        System.out.println(feedback);
        return ResultVOUtils.success(feedbackService.uploadFeedback(feedback));
    }

}
