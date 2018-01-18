package lt.sveikata.prescription;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class PrescriptionService {

	@Autowired
	private PrescriptionRepository prescriptionRepository;

	public List<PrescriptionForClient> receiveAllPrescriptions() {
		List<Prescription> prescriptionsFromDatabase = getPrescriptionRepository().findAll();
		List<PrescriptionForClient> prescriptionsForClient = prescriptionsFromDatabase.stream().map((prescription) -> {
			PrescriptionForClient prescr = new PrescriptionForClient();
			// prescr.setNameOfHealthInstitution(prescription.getNameOfHealthInstitution());
			prescr.setDoctorsFullName(prescription.getDoctorsFullName());
			prescr.setPrescriptionDate(prescription.getPrescriptionDate());
			// prescr.setPatientsName(prescription.getPatientsName());
			prescr.setPatientsPersonalCode(prescription.getPatientsPersonalCode());
			prescr.setValidUntil(prescription.getValidUntil());
			prescr.setActiveIngredient(prescription.getActiveIngredient());
			prescr.setAmountPerDose(prescription.getAmountPerDose());
			prescr.setUnits(prescription.getUnits());
			prescr.setDescription(prescription.getDescription());
			return prescr;
		}).collect(Collectors.toList());
		return prescriptionsForClient;
	}

	public PrescriptionRepository getPrescriptionRepository() {
		return prescriptionRepository;
	}

	public void setPrescriptionRepository(PrescriptionRepository prescriptionRepository) {
		this.prescriptionRepository = prescriptionRepository;
	}

	public void addNewPrescription(AddNewPrescription newPrescription) {
		Prescription prescr = new Prescription();
		// prescr.setNameOfHealthInstitution(newPrescription.getNameOfHealthInstitution());
		prescr.setDoctorsFullName(newPrescription.getDoctorsFullName());
		prescr.setPrescriptionDate(newPrescription.getPrescriptionDate());
		// prescr.setPatientsName(newPrescription.getPatientsName());
		prescr.setPatientsPersonalCode(newPrescription.getPatientsPersonalCode());
		prescr.setValidUntil(newPrescription.getValidUntil());
		prescr.setActiveIngredient(newPrescription.getActiveIngredient());
		prescr.setAmountPerDose(newPrescription.getAmountPerDose());
		prescr.setUnits(newPrescription.getUnits());
		prescr.setDescription(newPrescription.getDescription());
		prescriptionRepository.save(prescr);

	}
//
//	public void deletePrescription(Long id) {
//		prescriptionRepository.delete(id);
//	}

	public void updatePrescription(Prescription prescription, Long id) {
		Prescription prescr = prescriptionRepository.findOne(id);
		// prescr.setNameOfHealthInstitution(prescription.getNameOfHealthInstitution());
		prescr.setDoctorsFullName(prescription.getDoctorsFullName());
		prescr.setPrescriptionDate(prescription.getPrescriptionDate());
		// prescr.setPatientsName(prescription.getPatientsName());
		prescr.setPatientsPersonalCode(prescription.getPatientsPersonalCode());
		prescr.setValidUntil(prescription.getValidUntil());
		prescr.setActiveIngredient(prescription.getActiveIngredient());
		prescr.setAmountPerDose(prescription.getAmountPerDose());
		prescr.setUnits(prescription.getUnits());
		prescr.setDescription(prescription.getDescription());
		prescriptionRepository.save(prescr);
	}

}
