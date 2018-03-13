package lt.sveikata.prescriptionUses;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsesRepository extends JpaRepository<UsesFact, Long> {
	
	List<UsesFact> findAllByOrderByPrescriptionUsesDate();
}
