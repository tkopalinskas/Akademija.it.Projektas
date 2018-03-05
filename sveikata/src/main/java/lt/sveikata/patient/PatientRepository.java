package lt.sveikata.patient;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByUserName(String userName);
    List<Patient> findAllByDoctorIsNull();
    List<Patient> findAllByDoctorUserName(String userName);

    Patient findAllByUserName(String userName);
}
