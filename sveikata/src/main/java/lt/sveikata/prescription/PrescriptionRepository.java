package lt.sveikata.prescription;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{
	
	Prescription findByNumber(long number);
	
	List<Prescription> findByPersonalId(long personalId);
	
	
	@Query("SELECT prescription FROM Prescription prescription JOIN prescription.patient patient WHERE patient.personalId = :persId")
	List<Prescription> getPatientPrescriptionsById(@Param("persId") Long id);
	

	
}
