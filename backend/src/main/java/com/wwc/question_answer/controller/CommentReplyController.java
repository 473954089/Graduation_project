package com.wwc.question_answer.controller;

import com.wwc.question_answer.pojo.CommentReply;
import com.wwc.question_answer.service.CommentReplyService;
import com.wwc.question_answer.utils.ResultVOUtils;
import com.wwc.question_answer.vo.ResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment_reply")
public class CommentReplyController {

    @Autowired
    private CommentReplyService commentReplyService;

    @RequestMapping("/upload")
    public ResultVO uploadCommentReply(@RequestBody CommentReply commentReply){

        return ResultVOUtils.success(commentReplyService.uploadCommentReply(commentReply));
    }

    @RequestMapping("/delete")
    public ResultVO deleteCommentReply(@RequestParam Long comment_reply_id){
        return ResultVOUtils.success(commentReplyService.deleteCommentReply(comment_reply_id));
    }

}
