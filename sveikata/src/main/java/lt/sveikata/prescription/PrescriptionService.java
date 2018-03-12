package lt.sveikata.prescription;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.sveikata.doctor.Doctor;
import lt.sveikata.doctor.DoctorRepository;
import lt.sveikata.patient.Patient;
import lt.sveikata.patient.PatientForClient;
import lt.sveikata.patient.PatientRepository;

@Transactional
@Service
public class PrescriptionService {
	
	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private PrescriptionRepository prescriptionRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;

	/* receives a list of all prescriptions from database */
	public List<PrescriptionForClient> receiveAllPrescriptions() {
		List<Prescription> prescriptionsFromDatabase = getPrescriptionRepository().findAllByOrderByPrescriptionDate();
		List<PrescriptionForClient> prescriptionsForClient = prescriptionsFromDatabase.stream().map((prescription) -> {
			PrescriptionForClient prescr = new PrescriptionForClient();
			prescr.setPrescriptionDate(prescription.getPrescriptionDate());
			prescr.setValidUntil(prescription.getValidUntil());
			prescr.setActiveIngredient(prescription.getActiveIngredient());
			prescr.setNumber(prescription.getNumber());
			prescr.setTimesUsed(prescription.getTimesUsed());
			prescr.setNumber(prescription.getNumber());
			return prescr;
		}).collect(Collectors.toList());
		return prescriptionsForClient;
	}

	/* receives a list of patient's prescriptions from database */
	public List<PrescriptionForClient> receiveAllPrescriptionsForPharmacist(long personalId) {
		Patient patientFromDatabase = getPatientRepository().findByPersonalId(personalId);
		PatientForClient patientForClient = new PatientForClient();
		patientForClient.setPersonalId(patientFromDatabase.getPersonalId());
		
		List<Prescription> prescriptionsFromDatabase = getPrescriptionRepository().findByPersonalId(personalId);
		List<PrescriptionForClient> prescriptionsForClientPharmacist = prescriptionsFromDatabase.stream().map((prescription) -> {
			PrescriptionForClient prescr = new PrescriptionForClient();
			prescr.setDoctorsFullName(prescription.getDoctorsFullName());
			prescr.setPrescriptionDate(prescription.getPrescriptionDate());
			prescr.setPersonalId(prescription.getPersonalId());
			prescr.setValidUntil(prescription.getValidUntil());
			prescr.setActiveIngredient(prescription.getActiveIngredient());
			prescr.setAmountPerDose(prescription.getAmountPerDose());
			prescr.setUnits(prescription.getUnits());
			prescr.setTotalAmount(prescription.getTotalAmount());
			prescr.setTotalUnits(prescription.getTotalUnits());
			prescr.setDescription(prescription.getDescription());
			prescr.setTimesUsed(prescription.getTimesUsed());
			prescr.setNumber(prescription.getNumber());
			return prescr;
		}).collect(Collectors.toList());
		return prescriptionsForClientPharmacist;
	}
	
	/* receives info about a single prescription found by it's number */
	public Prescription receivePrescriptionInfo(long number) {
		Prescription prescription = prescriptionRepository.findByNumber(number);
		return prescription;
	}


	/*saves all information about a new prescription into database*/
//	public void addNewPrescription(AddNewPrescription newPrescription) {
//		Prescription prescr = new Prescription();
//		// you are using this one
//		//no
//		prescr.setDoctorsFullName(newPrescription.getDoctorsFullName());
//		prescr.setPrescriptionDate(newPrescription.getPrescriptionDate());
//		prescr.setPersonalId(newPrescription.getPersonalId());
//		prescr.setValidUntil(newPrescription.getValidUntil());
//		prescr.setActiveIngredient(newPrescription.getActiveIngredient());
//		prescr.setAmountPerDose(newPrescription.getAmountPerDose());
//		prescr.setUnits(newPrescription.getUnits());
//		prescr.setTotalAmount(newPrescription.getTotalAmount());
//		prescr.setTotalUnits(newPrescription.getTotalUnits());
//		prescr.setDescription(newPrescription.getDescription());
//		prescr.setTimesUsed(newPrescription.getTimesUsed());
//		prescriptionRepository.save(prescr);
//	}
	
//	public void assignDoctor(String patientUsername, String doctorUserName) {
//		Patient pat = patientRepository.findAllByUserName(patientUsername);
//		pat.setDoctor(doctorRepository.findOneByUserName(doctorUserName));
//		patientRepository.save(pat);
//	}
	
	public void addPrescription(AddNewPrescription newPrescription, long personalId, long doctorId) {
		Prescription prescr = new Prescription();
		prescr.setDoctorsFullName(newPrescription.getDoctorsFullName());
		prescr.setPrescriptionDate(newPrescription.getPrescriptionDate());	
		Patient patient = patientRepository.findByPersonalId(newPrescription.getPersonalId());
		prescr.setPatient(patient);
//		prescr.setPersonalId(newPrescription.getPersonalId());
		prescr.setValidUntil(newPrescription.getValidUntil());
		prescr.setActiveIngredient(newPrescription.getActiveIngredient());
		prescr.setAmountPerDose(newPrescription.getAmountPerDose());
		prescr.setUnits(newPrescription.getUnits());
		prescr.setTotalAmount(newPrescription.getTotalAmount());
		prescr.setTotalUnits(newPrescription.getTotalUnits());
		prescr.setDescription(newPrescription.getDescription());
		prescr.setTimesUsed(newPrescription.getTimesUsed());
		prescriptionRepository.save(prescr);
		Doctor doc = doctorRepository.findOneByUserId(doctorId);
		prescr.setDoctor(doc);
		Patient pat = patientRepository.findByPersonalId(personalId);
		prescr.setPatient(pat);
//		pat.getPrescription().add(prescr);
	}

	/*saves new information about specified prescription into database*/
	public void updatePrescription(Prescription prescription, Long number) {
		Prescription prescr = prescriptionRepository.findOne(number);
		prescr.setTimesUsed(prescription.getTimesUsed() + 1);
		// prescr.setNameOfHealthInstitution(prescription.getNameOfHealthInstitution());
		// prescr.setDoctorsFullName(prescription.getDoctorsFullName());
		// prescr.setPrescriptionDate(prescription.getPrescriptionDate());
		// prescr.setPatientsName(prescription.getPatientsName());
		// prescr.setPatientsPersonalCode(prescription.getPatientsPersonalCode());
		// prescr.setValidUntil(prescription.getValidUntil());
		// prescr.setActiveIngredient(prescription.getActiveIngredient());
		// prescr.setAmountPerDose(prescription.getAmountPerDose());
		// prescr.setUnits(prescription.getUnits());
		// prescr.setDescription(prescription.getDescription());
		prescriptionRepository.save(prescr);
	}

	/*collects all information about a single prescription to be returned to client*/
	public PrescriptionForClient receivePrescriptionForClient(Prescription prescription) {
		PrescriptionForClient prescriptionForClient = new PrescriptionForClient();
		prescriptionForClient.setValidUntil(prescription.getValidUntil());
		prescriptionForClient.setPrescriptionDate(prescription.getPrescriptionDate());
		prescriptionForClient.setDoctorsFullName(prescription.getDoctorsFullName());
		prescriptionForClient.setTimesUsed(prescription.getTimesUsed());
		prescriptionForClient.setActiveIngredient(prescription.getActiveIngredient());
		prescriptionForClient.setAmountPerDose(prescription.getAmountPerDose());
		prescriptionForClient.setUnits(prescription.getUnits());
		prescriptionForClient.setTotalAmount(prescription.getTotalAmount());
		prescriptionForClient.setTotalUnits(prescription.getTotalUnits());
		prescriptionForClient.setDescription(prescription.getDescription());
		prescriptionForClient.setNumber(prescription.getNumber());
		return prescriptionForClient;
	}
	//get user prescriptions
	public List<Prescription> getUserPrescriptionByUserName(String userName){
		return prescriptionRepository.getPatientPrescriptionsByUserName(userName);
	}
	//get prescription by personalId
//	public List<Prescription> byPersonalId(Long personalId){
//		return prescriptionRepository.getPatientPrescriptionsById(personalId);
//	}

//	public Prescription getSinglePrescription(long number) {
//		return prescriptionRepository.getSinglePrescription(number);
//	}	
	
	public PrescriptionRepository getPrescriptionRepository() {
		return prescriptionRepository;
	}

	public void setPrescriptionRepository(PrescriptionRepository prescriptionRepository) {
		this.prescriptionRepository = prescriptionRepository;
	}
	public PatientRepository getPatientRepository() {
		return patientRepository;
	}

	public void setPatientRepository(PatientRepository patientRepository) {
		this.patientRepository = patientRepository;
	}
}
