package MyTimebackend.MyTimebackend.services;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import MyTimebackend.MyTimebackend.domain.entities.UserEntity;
import MyTimebackend.MyTimebackend.domain.reporitories.ActivityRepository;
import MyTimebackend.MyTimebackend.domain.reporitories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    UserRepository userRepository;

    public List<ActivityEntity> findByUsername(String username) {
        UserEntity user = userRepository.findByUserName(username);
        if (user != null) {
            return activityRepository.findByUser(user);
        }
        return null;
    }

    public ActivityEntity createActivity(String username, ActivityEntity activity) {
        UserEntity user = userRepository.findByUserName(username);
        if (user != null) {
            activity.setUser(user);
            return activityRepository.save(activity);
        }
        return null;
    }

    public void deleteActivity(long activityId) {
        activityRepository.deleteById(activityId);
    }

    public ActivityEntity getActivity(long activityId) {
        Optional<ActivityEntity> optionalActivityEntity = activityRepository.findById(activityId);
        return optionalActivityEntity.orElse(null);
    }
}
