package lt.sveikata.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.sveikata.prescription.Prescription;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
	
    List<Patient> findByUserName(String userName);
    Patient findByPersonalId(Long personalId);
    List<Patient> findAllByDoctorIsNull();
    List<Patient> findAllByDoctorUserName(String userName);
    Patient findByUserId(long userId);
    

	@Query("SELECT patient FROM Patient patient JOIN patient.doctor doctor WHERE doctor.userId = :docId")
	List<Patient> getPatientById(@Param("docId") Long id);
	
    Patient findAllByUserName(String userName);
}
