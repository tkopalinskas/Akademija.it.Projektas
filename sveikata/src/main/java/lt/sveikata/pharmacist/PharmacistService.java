package lt.sveikata.pharmacist;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class PharmacistService {

	@Autowired
	private PharmacistRepository pharmacistRepository;

	public List<PharmacistForClient> receiveAllPharmacists() {
		List<Pharmacist> pharmacistsFromDatabase = getPharmacistRepository().findAll();
		List<PharmacistForClient> pharmacistsForClient = pharmacistsFromDatabase.stream().map((pharmacist) -> {
			PharmacistForClient phfc = new PharmacistForClient();
			phfc.setFirstName(pharmacist.getFirstName());
			phfc.setLastName(pharmacist.getLastName());
			phfc.setWorkplace(pharmacist.getWorkplace());
			phfc.setTypeOfWorkplace(pharmacist.getTypeOfWorkplace());
			return phfc;
		}).collect(Collectors.toList());
		return pharmacistsForClient;
	}

	public PharmacistRepository getPharmacistRepository() {
		return pharmacistRepository;
	}

	public void setPharmacistRepository(PharmacistRepository pharmacistRepository) {
		this.pharmacistRepository = pharmacistRepository;
	}

	public void addNewPharmacist(AddNewPharmacist newPharmacist) {
		Pharmacist pharm = new Pharmacist();
		pharm.setFirstName(newPharmacist.getFirstName());
		pharm.setLastName(newPharmacist.getLastName());
		pharm.setWorkplace(newPharmacist.getWorkplace());
		pharm.setTypeOfWorkplace(newPharmacist.getTypeOfWorkplace());
		pharmacistRepository.save(pharm);

	}

//	public void deletePharmacist(Long id) {
//		pharmacistRepository.delete(id);
//	}

	public void updatePharmacist(Pharmacist pharmacist, Long id) {
		Pharmacist pharm = pharmacistRepository.findOne(id);
		pharm.setFirstName(pharmacist.getFirstName());
		pharm.setLastName(pharmacist.getLastName());
		pharm.setWorkplace(pharmacist.getWorkplace());
		pharm.setTypeOfWorkplace(pharmacist.getTypeOfWorkplace());
		pharmacistRepository.save(pharm);
	}

}
