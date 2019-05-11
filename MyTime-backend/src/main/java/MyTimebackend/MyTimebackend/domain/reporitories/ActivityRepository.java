package MyTimebackend.MyTimebackend.domain.reporitories;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import MyTimebackend.MyTimebackend.domain.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity, Long> {

    List<ActivityEntity> findByUser(UserEntity user);

    List<ActivityEntity> findByUserAndActivityDate(UserEntity user, LocalDate date);
}
