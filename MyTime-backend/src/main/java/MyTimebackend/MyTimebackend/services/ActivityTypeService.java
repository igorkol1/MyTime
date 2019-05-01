package MyTimebackend.MyTimebackend.services;

import MyTimebackend.MyTimebackend.domain.entities.ActivityTypeEntity;
import MyTimebackend.MyTimebackend.domain.entities.UserEntity;
import MyTimebackend.MyTimebackend.domain.reporitories.ActivityTypeRepository;
import MyTimebackend.MyTimebackend.domain.reporitories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityTypeService {

    @Autowired
    ActivityTypeRepository activityTypeRepository;

    @Autowired
    UserRepository userRepository;

    public List<ActivityTypeEntity> getActivityTypesForUser(String userName) {
        UserEntity user = userRepository.findByUserName(userName);
        if (user != null) {
            return activityTypeRepository.findByUserId(user.getId());
        }
        return null;
    }

    public ActivityTypeEntity createActivityType(ActivityTypeEntity activityType, String userName) {
        UserEntity user = userRepository.findByUserName(userName);
        if (user != null) {
            activityType.setUserId(user.getId());
            return activityTypeRepository.save(activityType);
        }
        return null;
    }

}
