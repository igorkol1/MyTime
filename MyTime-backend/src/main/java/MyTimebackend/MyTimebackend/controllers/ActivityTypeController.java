package MyTimebackend.MyTimebackend.controllers;

import MyTimebackend.MyTimebackend.domain.entities.ActivityTypeEntity;
import MyTimebackend.MyTimebackend.services.ActivityTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ActivityTypeController {

    @Autowired
    ActivityTypeService activityTypeService;

    @GetMapping("/activitytypes")
    public List<ActivityTypeEntity> getActivityTypes(Authentication authentication) {
        String userName = authentication.getName();
        return activityTypeService.getActivityTypesForUser(userName);
    }

    @PostMapping("/addactivitytype")
    public ResponseEntity<Void> addActivityType(Authentication authentication, @RequestBody ActivityTypeEntity activityType) {
        String userName = authentication.getName();
        ActivityTypeEntity createdActivityType = activityTypeService.createActivityType(activityType, userName);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createdActivityType.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
