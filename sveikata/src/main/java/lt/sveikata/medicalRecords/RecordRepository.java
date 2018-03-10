package lt.sveikata.medicalRecords;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.sveikata.prescription.Prescription;

public interface RecordRepository extends JpaRepository<Record, Long>{

//	@Query("SELECT record FROM Record record JOIN record.patient patient WHERE patient.patientId=:patId")
//	List<Record>getPatientRecordsByUserId(@Param("patId") Long id);
	
    Record findByRecordId(long recordId); 
    List<Record> findAllByOrderByDateOfVisitDesc();
}
