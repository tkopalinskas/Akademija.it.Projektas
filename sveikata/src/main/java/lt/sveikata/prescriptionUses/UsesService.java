package lt.sveikata.prescriptionUses;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.sveikata.pharmacist.Pharmacist;
import lt.sveikata.pharmacist.PharmacistRepository;
import lt.sveikata.prescription.Prescription;
import lt.sveikata.prescription.PrescriptionRepository;

@Transactional
@Service
public class UsesService {

	@Autowired
	private UsesRepository usesRepository;
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;
	
	@Autowired
	private PharmacistRepository pharmacistRepository;
	

	/* receives a list of all prescription uses from database */
	public List<UsesFactsForClient> receiveAllUses() {
		List<UsesFact> usesFromDatabase = getUsesRepository().findAllByOrderByPrescriptionUsesDate();
		List<UsesFactsForClient> usesForClient = usesFromDatabase.stream().map((use) -> {
			UsesFactsForClient fact = new UsesFactsForClient();
			fact.setPrescriptionUsesDate(use.getPrescriptionUsesDate());
			fact.setTimesUsed(use.getTimesUsed());
			return fact;
		}).collect(Collectors.toList());
		return usesForClient;
	}

	/* adds a new fact of prescription use*/
	public void addNewUse(AddNewUse newUse, long prescriptionId, long pharmacistId) {
		UsesFact usesFact = new UsesFact();
		usesFact.setPrescriptionUsesDate(newUse.getPrescriptionUsesDate());
//		usesFact.setTimesUsed(newUse.getTimesUsed()+1);
		Prescription prescription = prescriptionRepository.findByPrescriptionId(newUse.getPrescriptionId());
		usesFact.setPrescription(prescription);
		
		//usesFact.setPharmacistsFullName(newUse.getPharmacistsFullName());
		// usesFact.setValid(newUse.getIsValid());
		usesRepository.save(usesFact);
		Pharmacist pharm = pharmacistRepository.findOneByUserId(pharmacistId);
		usesFact.setPharmacist(pharm);
		
	}

	public UsesRepository getUsesRepository() {
		return usesRepository;
	}

	public void setUsesRepository(UsesRepository usesRepository) {
		this.usesRepository = usesRepository;
	}

}
