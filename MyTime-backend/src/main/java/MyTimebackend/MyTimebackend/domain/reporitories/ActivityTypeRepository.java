package MyTimebackend.MyTimebackend.domain.reporitories;

import MyTimebackend.MyTimebackend.domain.entities.ActivityTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityTypeRepository extends JpaRepository<ActivityTypeEntity, Long> {

    List<ActivityTypeEntity> findByUserId(long userId);
}
