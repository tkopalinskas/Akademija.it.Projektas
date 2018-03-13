package lt.sveikata.medicalRecords;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.sveikata.prescription.Prescription;

import java.util.List;
	
public interface RecordRepository extends JpaRepository<Record, Long>{
	
	//find by userId
	@Query("SELECT prescription FROM Prescription prescription JOIN prescription.patient patient WHERE patient.userId = :patId")
	List<Record> getPatientRecordByUserId(@Param("patId") Long id);
	
       Record findByRecordId(long recordId); 
       
 
       List<Record> findAllByOrderByDateOfVisitDesc();
}

