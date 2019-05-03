package MyTimebackend.MyTimebackend.domain.entities;

import javax.persistence.*;

@Entity(name = "activitiesTypes")
public class ActivityTypeEntity {

    @Id
    @GeneratedValue
    private long id;
    @OneToOne
    private UserEntity user;
    private String activityName;

    public ActivityTypeEntity() {
    }

    public ActivityTypeEntity(UserEntity user, String activityName) {
        this.user = user;
        this.activityName = activityName;
    }

    public void setUserId(UserEntity user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UserEntity getUserId() {
        return user;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }
}
