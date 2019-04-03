package MyTimebackend.MyTimebackend.controllers;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import MyTimebackend.MyTimebackend.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/activities/{id}")
    public List<ActivityEntity> getAllActivities(@PathVariable long id) {
        return activityService.findByUserId(id);
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
}
