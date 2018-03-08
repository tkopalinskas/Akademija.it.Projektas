package lt.sveikata.medicalRecords;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
	Record findByRecordId(long recordId);
public interface RecordRepository extends JpaRepository<Record, Long>{
        List<Record> findAllByOrderByDateOfVisitDesc();
}
