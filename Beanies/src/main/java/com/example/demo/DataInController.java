package com.example.demo;

import java.util.List;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DataInController {

    
    DataIn initData;
    @Autowired
    public DataInController(DataIn initData) {
    this.initData = initData;
        try {
        this.initData.loadData();    
    } catch (Exception e) {
        e.printStackTrace();
    }
    }
    
    @GetMapping("/locations")
    public List<Location> nearby(@RequestParam(value = "zipcode") String zipcode) {
       return this.initData.returnLocations(zipcode);
    }

    @GetMapping("/count")
    public List<Date> counts() {
       return this.initData.plzDontJudgeMe();
    }
}
