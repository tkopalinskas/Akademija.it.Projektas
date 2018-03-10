package lt.sveikata.prescription;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.sveikata.patient.Patient;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{
	
	Prescription findByNumber(long number);
	
	List<Prescription> findByPersonalId(long personalId);
	
	@Query("SELECT prescription FROM Prescription prescription JOIN prescription.patient patient WHERE patient.userId = :patId")
	List<Prescription> getPatientPrescriptionsByUserId(@Param("patId") Long id);
	
	
	@Query("SELECT prescription FROM Prescription prescription JOIN prescription.patient patient WHERE patient.userName = :userName")
	List<Prescription> getPatientPrescriptionsByUserName(@Param("userName") String userName);
	
//	@Query("SELECT prescription FROM Prescription prescription JOIN prescription.patient patient WHERE patient.personalId = :persId")
//	List<Prescription> getPatientPrescriptionsById(@Param("persId") Long id);
	
//	@Query("SELECT p FROM Patient patient JOIN patient.doctor doctor WHERE doctor.userId = :docId")
//	List<Patient> getPatientById(@Param("docId") Long id);
//	
	
}
