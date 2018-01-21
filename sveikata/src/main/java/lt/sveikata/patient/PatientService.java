package lt.sveikata.patient;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	

	public List<PatientForClient> receiveAllPatients() {
		List<Patient> patientsFromDatabase = getPatientRepository().findAll();
		List<PatientForClient> patientsForClient = patientsFromDatabase.stream().map((patient) -> {
			PatientForClient pfc = new PatientForClient();
			pfc.setFirstName(patient.getFirstName());
			pfc.setLastName(patient.getLastName());
			pfc.setDateOfBirth(patient.getDateOfBirth());
			pfc.setPersonalId(patient.getPersonalId());
			pfc.setDoctorsFullName(patient.getDoctorsFullName());
			//pfc.setNotSuspended(patient.isNotSuspended());
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
		pat.setDoctorsFullName(newPatient.getDoctorsFullName());
		pat.setUserName(newPatient.getUserName());
		pat.setPassword(passwordEncoder.encode(newPatient.getPassword()));
		pat.setRole("PATIENT");
		pat.setCodeOfUserRights("3");

		patientRepository.save(pat);

	}

//	public void deletePatient(Long id) {
//		patientRepository.delete(id);
//	}

	public void updatePatient(Patient patient, Long personalId) {
		Patient pat = patientRepository.findOne(personalId);
		pat.setFirstName(patient.getFirstName());
		pat.setLastName(patient.getLastName());
		pat.setDateOfBirth(patient.getDateOfBirth());
		pat.setPersonalId(patient.getPersonalId());
		pat.setDoctorsFullName(patient.getDoctorsFullName());
		//pat.setNotSuspended(patient.isNotSuspended());
		patientRepository.save(pat);
	}
	
}
