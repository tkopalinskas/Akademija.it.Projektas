package lt.sveikata.patient;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;

	public List<PatientForClient> receiveAllPatients() {
		List<Patient> patientsFromDatabase = getPatientRepository().findAll();
		List<PatientForClient> patientsForClient = patientsFromDatabase.stream().map((patient) -> {
			PatientForClient pfc = new PatientForClient();
			pfc.setFirstName(patient.getFirstName());
			pfc.setLastName(patient.getLastName());
			pfc.setDateOfBirth(patient.getDateOfBirth());
			pfc.setPersonalId(patient.getPersonalId());
			return pfc;
		}).collect(Collectors.toList());
		return patientsForClient;
	}

	public PatientRepository getPatientRepository() {
		return patientRepository;
	}

	public void setPatientRepository(PatientRepository patientRepository) {
		this.patientRepository = patientRepository;
	}

	public void addNewPatient(AddNewPatient newPatient) {
		Patient pat = new Patient();
		pat.setFirstName(newPatient.getFirstName());
		pat.setLastName(newPatient.getLastName());
		pat.setDateOfBirth(newPatient.getDateOfBirth());
		pat.setPersonalId(newPatient.getPersonalId());
		pat.setUserName(newPatient.getUserName());
		pat.setPassword(newPatient.getPassword());
		patientRepository.save(pat);

	}
//
//	public void deletePatient(Long id) {
//		patientRepository.delete(id);
//	}

	public void updatePatient(Patient patient, Long personalId) {
		Patient pat = patientRepository.findOne(personalId);
		pat.setFirstName(patient.getFirstName());
		pat.setLastName(patient.getLastName());
		pat.setDateOfBirth(patient.getDateOfBirth());
		pat.setPersonalId(patient.getPersonalId());
		patientRepository.save(pat);
	}
	
}
