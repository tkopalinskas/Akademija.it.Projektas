package lt.sveikata.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findByUserName(String userName);

    List<Doctor> findAllBySpecialization(String specialization);

    Doctor findOneByUserName(String userName);


}
