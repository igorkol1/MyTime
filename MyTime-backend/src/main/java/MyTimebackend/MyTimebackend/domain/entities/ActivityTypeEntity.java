package MyTimebackend.MyTimebackend.domain.entities;

import javax.persistence.*;

@Entity(name = "activitiesTypes")
public class ActivityTypeEntity {

    @Id
    @GeneratedValue
    private long id;
    private long userId;
    private String activityName;

    public ActivityTypeEntity() {
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }
}
