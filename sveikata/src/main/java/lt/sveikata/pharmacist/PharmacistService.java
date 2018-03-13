package lt.sveikata.pharmacist;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.sveikata.user.User;

@Transactional
@Service
public class PharmacistService {

	@Autowired
	private PharmacistRepository pharmacistRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public List<PharmacistForClient> receiveAllPharmacists() {
		List<Pharmacist> pharmacistsFromDatabase = getPharmacistRepository().findAll();
		List<PharmacistForClient> pharmacistsForClient = pharmacistsFromDatabase.stream().map((pharmacist) -> {
			PharmacistForClient phfc = new PharmacistForClient();
			phfc.setUserName(pharmacist.getUserName());
			phfc.setRole(pharmacist.getRole());
			phfc.setFirstName(pharmacist.getFirstName());
			phfc.setLastName(pharmacist.getLastName());
			return phfc;
		}).collect(Collectors.toList());
		return pharmacistsForClient;
	}

	public List<PharmacistForClient> receiveAllPharmacists(String userName) {
		List<Pharmacist> pharmacistsFromDatabase = getPharmacistRepository().findByUserName(userName);
		List<PharmacistForClient> pharmacistsForClient = pharmacistsFromDatabase.stream().map((pharmacist) -> {
			PharmacistForClient phfc = new PharmacistForClient();
			phfc.setRole(pharmacist.getRole());
			phfc.setUserName(pharmacist.getUserName());
			phfc.setFirstName(pharmacist.getFirstName());
			phfc.setLastName(pharmacist.getLastName());
			phfc.setWorkplace(pharmacist.getWorkplace());
			phfc.setTypeOfWorkplace(pharmacist.getTypeOfWorkplace());
			phfc.setSuspended(pharmacist.isSuspended());
			return phfc;
		}).collect(Collectors.toList());
		return pharmacistsForClient;
	}

	public void addNewPharmacist(AddNewPharmacist newPharmacist) {
		Pharmacist pharm = new Pharmacist();
		pharm.setFirstName(newPharmacist.getFirstName());
		pharm.setLastName(newPharmacist.getLastName());
		pharm.setWorkplace(newPharmacist.getWorkplace());
		pharm.setTypeOfWorkplace(newPharmacist.getTypeOfWorkplace());
		pharm.setUserName(newPharmacist.getUserName());
		pharm.setPassword(passwordEncoder.encode(newPharmacist.getPassword()));
		pharm.setRole("PHARMACIST");
		pharmacistRepository.save(pharm);

	}

	public void updatePharmacist(Pharmacist pharmacist, Long userId) {
		Pharmacist pharm = pharmacistRepository.findOne(userId);
		pharm.setPassword(passwordEncoder.encode(pharmacist.getPassword()));
		pharmacistRepository.save(pharm);
	}

	public PharmacistRepository getPharmacistRepository() {
		return pharmacistRepository;
	}

	public void setPharmacistRepository(PharmacistRepository pharmacistRepository) {
		this.pharmacistRepository = pharmacistRepository;
	}

}
