package lt.sveikata.medicalRecords;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
	
public interface RecordRepository extends JpaRepository<Record, Long>{
       Record findByRecordId(long recordId); 
       List<Record> findAllByOrderByDateOfVisitDesc();
}
