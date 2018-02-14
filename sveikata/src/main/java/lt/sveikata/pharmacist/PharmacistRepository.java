package lt.sveikata.pharmacist;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PharmacistRepository extends JpaRepository<Pharmacist, Long> {
    List<Pharmacist> findByUserName(String userName);

}
