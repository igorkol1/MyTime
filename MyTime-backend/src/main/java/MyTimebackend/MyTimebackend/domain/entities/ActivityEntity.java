package MyTimebackend.MyTimebackend.domain.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;


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
    private LocalDate activityDate;
    private LocalTime startTime;
    private LocalTime finishTime;

    protected ActivityEntity() {
    };

    public ActivityEntity(UserEntity user, ActivityTypeEntity activityType, String description, LocalDate activityDate, LocalTime startTime, LocalTime finishTime) {
        this.user = user;
        this.activityType = activityType;
        this.description = description;
        this.activityDate = activityDate;
        this.startTime = startTime;
        this.finishTime = finishTime;
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

    public LocalDate getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(LocalDate activityDate) {
        this.activityDate = activityDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(LocalTime finishTime) {
        this.finishTime = finishTime;
    }
}
