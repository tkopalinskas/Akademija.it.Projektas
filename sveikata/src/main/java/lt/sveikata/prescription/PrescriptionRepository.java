package lt.sveikata.prescription;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{
	Prescription findByNumber(long number);
	 PrescriptionForClient findPrescriptionByNumber (long number);
}
