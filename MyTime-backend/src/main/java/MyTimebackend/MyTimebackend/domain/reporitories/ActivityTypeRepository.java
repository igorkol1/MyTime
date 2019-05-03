package MyTimebackend.MyTimebackend.domain.reporitories;

import MyTimebackend.MyTimebackend.domain.entities.ActivityTypeEntity;
import MyTimebackend.MyTimebackend.domain.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityTypeRepository extends JpaRepository<ActivityTypeEntity, Long> {

    List<ActivityTypeEntity> findByUser(UserEntity user);
}
