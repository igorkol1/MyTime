package MyTimebackend.MyTimebackend.domain.reporitories;

import MyTimebackend.MyTimebackend.domain.entities.ActivityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<ActivityEntity,Long> {

    List<ActivityEntity> findByUserId(long userId);

}
