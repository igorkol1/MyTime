package MyTimebackend.MyTimebackend.domain.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "activities")
public class ActivityEntity {

    @Id
    @GeneratedValue
    private long id;
    private long userId;
    private String title;
    private String description;
    private Date start;
    private Date finish;

    protected ActivityEntity() {
    }

    ;

    public ActivityEntity(long id, long userId, String title, String description, Date start, Date finish) {
        this.id = id;
        this.userId = userId;
        this.title = title;
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

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
