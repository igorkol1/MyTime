package MyTimebackend.MyTimebackend.domain.entities;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "activities")
public class ActivityEntity {

    @Id
    @GeneratedValue
    private long id;
    @OneToOne
    private UserEntity user;
    @OneToOne
    private ActivityTypeEntity activityType;
    private String description;
    private Date start;
    private Date finish;

    protected ActivityEntity() {
    };

    public ActivityEntity(long id, UserEntity user, ActivityTypeEntity activityType, String description, Date start, Date finish) {
        this.id = id;
        this.user = user;
        this.activityType = activityType;
        this.description = description;
        this.start = start;
        this.finish = finish;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public ActivityTypeEntity getActivityType() {
        return activityType;
    }

    public void setActivityType(ActivityTypeEntity activityType) {
        this.activityType = activityType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getFinish() {
        return finish;
    }

    public void setFinish(Date finish) {
        this.finish = finish;
    }
}
