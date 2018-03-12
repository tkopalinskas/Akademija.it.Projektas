package lt.sveikata.prescription;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{
	List<Prescription> findAllByOrderByPrescriptionDate();
	Prescription findByNumber(long number);
	List<Prescription> findByPersonalId(long personalId);
	Prescription findByPrescriptionId(long prescriptionId);
}
