package com.wwc.question_answer.controller;

import com.wwc.question_answer.pojo.Question;
import com.wwc.question_answer.service.QuestionService;
import com.wwc.question_answer.utils.ResultVOUtils;
import com.wwc.question_answer.vo.QuestionVO;
import com.wwc.question_answer.vo.ResultVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    //提出新问题
    @RequestMapping("/upload")
    public ResultVO uploadQuestion(@RequestBody Question question){
        System.out.println(question);
        return ResultVOUtils.success(questionService.uploadQuestion(question));
    }

    // 删除问题
    @RequestMapping("/delete")
    public ResultVO deleteQuestion(@RequestParam Map<String, Object> params){
        Integer question_id = Integer.valueOf((String) params.get("question_id"));
        return ResultVOUtils.success(questionService.deleteQuestion(question_id));
    }


//    查询最新问题
    @RequestMapping("/new")
    public ResultVO queryNewQuestion(@RequestParam Map<String, Object> params){
        Integer offset = Integer.valueOf((String) params.get("offset"));
        Integer pageSize =Integer.valueOf ((String) params.get("pageSize"));
        return ResultVOUtils.success(questionService.selectNewQuestion(offset,pageSize));
    }

//    查询最热问题
    @RequestMapping("/hot")
    public ResultVO queryHotQuestion(@RequestParam Map<String, Object> params){
        Integer offset = Integer.valueOf((String) params.get("offset"));
        Integer pageSize =Integer.valueOf ((String) params.get("pageSize"));
        return ResultVOUtils.success(questionService.selectHotQuestion(offset,pageSize));
    }


//    查询历史提问
    @RequestMapping("/history")
    public ResultVO queryHistoryQuestion(@RequestParam Map<String, Object> params){
        String uuid = (String) params.get("uuid");
        return ResultVOUtils.success(questionService.selectHistoryQuestion(uuid));
    }

    //查询某个问题
    @RequestMapping("/question")
    public ResultVO queryQuestionById(@RequestParam Map<String, Object> params){
        Integer question_id = Integer.valueOf((String) params.get("question_id"));
        return ResultVOUtils.success(questionService.selectByPrimaryKey(question_id));
    }


////    该接口用于查询所有问题
//    @RequestMapping("/findAll")
//    public ResultVO queryAllQuestion(){
//        return ResultVOUtils.success(questionService.selectAll());
//    }



//    该接口用于以关键词搜索问题
    @RequestMapping("/search")
    public ResultVO searchQuestion(@RequestParam Map<String, Object> params){
        System.out.println(params);
        String keyword = (String) params.get("searchText");
        return ResultVOUtils.success(questionService.selectByKeyWord(keyword));
    }

    //该接口用于修改问题
    @RequestMapping("/update")
    public ResultVO updateQuestion(@RequestBody Question question){
        return ResultVOUtils.success(questionService.updateQuestion(question));
    }


}
