package MyTimebackend.MyTimebackend.controllers;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import MyTimebackend.MyTimebackend.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/activities/{id}")
    public List<ActivityEntity> getAllActivities(@PathVariable long id){
        return activityService.findByUserId(id);
    }
}
