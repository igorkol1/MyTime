package MyTimebackend.MyTimebackend.domain.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue
    private long id;
    private String userName;
    private String email;

    protected UserEntity() {
    }

    ;

    public UserEntity(long id, String userName, String email) {
        this.id = id;
        this.userName = userName;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
