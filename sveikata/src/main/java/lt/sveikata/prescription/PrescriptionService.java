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
			prescr.setDoctorsFullName(prescription.getDoctorsFullName());
			prescr.setPrescriptionDate(prescription.getPrescriptionDate());
			prescr.setPatientsPersonalCode(prescription.getPatientsPersonalCode());
			prescr.setValidUntil(prescription.getValidUntil());
			prescr.setActiveIngredient(prescription.getActiveIngredient());
			prescr.setAmountPerDose(prescription.getAmountPerDose());
			prescr.setUnits(prescription.getUnits());
			prescr.setDescription(prescription.getDescription());
			prescr.setNumber(prescription.getNumber());
			prescr.setTimesUsed(prescription.getTimesUsed());
			return prescr;
		}).collect(Collectors.toList());
		return prescriptionsForClient;
	}
	
	public Prescription receivePrescriptionInfo(long number) {
	//	PrescriptionForClient prescription = prescriptionRepository.findPrescriptionByNumber(number);
		Prescription prescription = prescriptionRepository.findByNumber(number);
		return prescription;
	}

	public PrescriptionRepository getPrescriptionRepository() {
		return prescriptionRepository;
	}

	public void setPrescriptionRepository(PrescriptionRepository prescriptionRepository) {
		this.prescriptionRepository = prescriptionRepository;
	}

	public void addNewPrescription(AddNewPrescription newPrescription) {
		Prescription prescr = new Prescription();
		prescr.setDoctorsFullName(newPrescription.getDoctorsFullName());
		prescr.setPrescriptionDate(newPrescription.getPrescriptionDate());
		prescr.setPatientsPersonalCode(newPrescription.getPatientsPersonalCode());
		prescr.setValidUntil(newPrescription.getValidUntil());
		prescr.setActiveIngredient(newPrescription.getActiveIngredient());
		prescr.setAmountPerDose(newPrescription.getAmountPerDose());
		prescr.setUnits(newPrescription.getUnits());
		prescr.setDescription(newPrescription.getDescription());
		prescr.setNumber(newPrescription.getNumber()+1);
		prescr.setTimesUsed(newPrescription.getTimesUsed());
		prescriptionRepository.save(prescr);

	}

	public void updatePrescription(Prescription prescription, Long number) {
		Prescription prescr = prescriptionRepository.findOne(number);
		prescr.setTimesUsed(prescription.getTimesUsed()+1);
		// prescr.setNameOfHealthInstitution(prescription.getNameOfHealthInstitution());
//		prescr.setDoctorsFullName(prescription.getDoctorsFullName());
//		prescr.setPrescriptionDate(prescription.getPrescriptionDate());
//		prescr.setPatientsName(prescription.getPatientsName());
//		prescr.setPatientsPersonalCode(prescription.getPatientsPersonalCode());
//		prescr.setValidUntil(prescription.getValidUntil());
//		prescr.setActiveIngredient(prescription.getActiveIngredient());
//		prescr.setAmountPerDose(prescription.getAmountPerDose());
//		prescr.setUnits(prescription.getUnits());
//		prescr.setDescription(prescription.getDescription());
		prescriptionRepository.save(prescr);
	}

	public PrescriptionForClient receivePrescriptionForClient(Prescription prescription) {
		PrescriptionForClient prescriptionForClient = new PrescriptionForClient();
		prescriptionForClient.setValidUntil(prescription.getValidUntil());
		prescriptionForClient.setPrescriptionDate(prescription.getPrescriptionDate());
		prescriptionForClient.setDoctorsFullName(prescription.getDoctorsFullName());
		prescriptionForClient.setTimesUsed(prescription.getTimesUsed());
		prescriptionForClient.setActiveIngredient(prescription.getActiveIngredient());
		prescriptionForClient.setDescription(prescription.getDescription());
		return prescriptionForClient;
	}
}
