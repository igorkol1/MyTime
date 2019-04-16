package MyTimebackend.MyTimebackend.services;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import MyTimebackend.MyTimebackend.domain.reporitories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    @Autowired
    ActivityRepository activityRepository;

    public List<ActivityEntity> findByUserId(Long id) {
        return activityRepository.findByUserId(id);
    }

    public ActivityEntity createActivity(long userId, ActivityEntity activity) {
        activity.setUserId(userId);
        return activityRepository.save(activity);
    }

    public void deleteActivity(long activityId) {
        activityRepository.deleteById(activityId);
    }
}
