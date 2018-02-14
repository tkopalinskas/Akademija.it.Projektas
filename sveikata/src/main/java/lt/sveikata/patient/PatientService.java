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
			pfc.setUserName(patient.getUserName());
			pfc.setRole(patient.getRole());
			pfc.setFirstName(patient.getFirstName());
			pfc.setLastName(patient.getLastName());
			return pfc;
		}).collect(Collectors.toList());
		return patientsForClient;
	}

	public List<PatientForClient> receiveAllPatients(String userName) {
		List<Patient> patientsFromDatabase = getPatientRepository().findByUserName(userName);
		List<PatientForClient> patientsForClient = patientsFromDatabase.stream().map((patient) -> {
			PatientForClient pfc = new PatientForClient();
			pfc.setRole(patient.getRole());
			pfc.setFirstName(patient.getFirstName());
			pfc.setLastName(patient.getLastName());
			pfc.setSuspended(patient.isSuspended());
			pfc.setDoctor(patient.getDoctor());
			pfc.setDateOfBirth(patient.getDateOfBirth());
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
//		pat.setDoctorsFullName(newPatient.getDoctorsFullName());
		pat.setUserName(newPatient.getUserName());
		pat.setPassword(passwordEncoder.encode(newPatient.getPassword()));
		pat.setRole("PATIENT");
		patientRepository.save(pat);

	}


	public void updatePatient(Patient patient, Long personalId) {
		Patient pat = patientRepository.findOne(personalId);
		pat.setFirstName(patient.getFirstName());
		pat.setLastName(patient.getLastName());
		pat.setDateOfBirth(patient.getDateOfBirth());
		pat.setPersonalId(patient.getPersonalId());
//		pat.setDoctorsFullName(patient.getDoctorsFullName());
//		pat.setNotSuspended(patient.isNotSuspended());
		patientRepository.save(pat);
	}
	
}
