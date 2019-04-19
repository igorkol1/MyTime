package MyTimebackend.MyTimebackend.controllers;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import MyTimebackend.MyTimebackend.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/activities/{userId}")
    public List<ActivityEntity> getAllActivities(@PathVariable long userId) {
        return activityService.findByUserId(userId);
    }

    @GetMapping("/activities/getActivity/{activityId}")
    public ResponseEntity<ActivityEntity> getActivity(@PathVariable long activityId) {
        ActivityEntity activity = activityService.getActivity(activityId);
        if (activity != null) {
            return new ResponseEntity<ActivityEntity>(activity, HttpStatus.OK);
        } else {
            return new ResponseEntity<ActivityEntity>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/activities/{userId}/addActivity")
    public ResponseEntity<Void> saveActivity(@PathVariable long userId, @RequestBody ActivityEntity activity) {
        ActivityEntity createdActivity = activityService.createActivity(userId, activity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdActivity.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/activities/deleteActivity/{activityId}")
    public ResponseEntity<Void> deleteActivity(@PathVariable long activityId) {
        activityService.deleteActivity(activityId);
        return ResponseEntity.noContent().build();
    }
}