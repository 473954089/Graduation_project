package com.wwc.question_answer.controller;

import com.wwc.question_answer.pojo.Comment;
import com.wwc.question_answer.service.CommentService;
import com.wwc.question_answer.utils.ResultVOUtils;
import com.wwc.question_answer.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping("/upload")
    public ResultVO uploadComment(@RequestBody Comment comment){
        System.out.println(comment);
        return ResultVOUtils.success(commentService.uploadComment(comment));
    }

    @RequestMapping("/delete")
    public ResultVO deleteComment(@RequestParam Long comment_id){
        return ResultVOUtils.success(commentService.deleteComment(comment_id));
    }

    @RequestMapping("/query")
    public ResultVO queryAnswerComment(@RequestParam Integer answer_id){
        return ResultVOUtils.success(commentService.queryAnswerComment(answer_id));
    }

    @RequestMapping("/news")
    public ResultVO getNewComment(@RequestParam Map<String, Object> params){
        String uuid = (String) params.get("uuid");
        return ResultVOUtils.success(commentService.getNewComment(uuid));
    }

    @RequestMapping("/isread")
    public ResultVO isread(@RequestParam Map<String, Object> params){
        Integer comment_id = Integer.valueOf((String) params.get("comment_id"));
        return ResultVOUtils.success(commentService.isread(comment_id));
    }
}
