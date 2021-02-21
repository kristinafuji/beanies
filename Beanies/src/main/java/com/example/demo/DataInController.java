package com.example.demo;

import java.util.List;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DataInController {

    @Autowired
    DataIn initData;
    
    @GetMapping("/locations")
    public List<Location> nearby(@RequestParam(value = "zipcode") String zipcode) {
        return initData.returnLocations(zipcode);
    }
}
