package lt.sveikata.patient;

import java.util.List;
import java.util.stream.Collectors;

import lt.sveikata.doctor.DoctorRepository;

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
	private DoctorRepository doctorRepository;
	
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

	public PatientForClient receiveAllPatients(String userName) {
		List<Patient> patientsFromDatabase = getPatientRepository().findByUserName(userName);
		Patient patient = patientsFromDatabase.get(0);
		PatientForClient patientForClient = new PatientForClient();
		patientForClient.setRole(patient.getRole());
		patientForClient.setFirstName(patient.getFirstName());
		patientForClient.setLastName(patient.getLastName());
		patientForClient.setSuspended(patient.isSuspended());
		patientForClient.setDateOfBirth(patient.getDateOfBirth());
		patientForClient.setUserName(patient.getUserName());
		patientForClient.setDoctorsFullName(patient.getDoctor().getFirstName() + " " + patient.getDoctor().getLastName());

		return patientForClient;
	}

	public List<PatientForClient> recieveAllPatientsWithoutDoctors(){
		List<Patient> patientsWithoutDoctorFromDatabase = getPatientRepository().findAllByDoctorIsNull();
		List<PatientForClient> patientsWithoutDoctorForClient = patientsWithoutDoctorFromDatabase.stream().map((patient) -> {
			PatientForClient ptc = new PatientForClient();
			ptc.setFirstName(patient.getFirstName());
			ptc.setLastName(patient.getLastName());
			ptc.setUserName(patient.getUserName());
			return ptc;
		}).collect(Collectors.toList());
		return patientsWithoutDoctorForClient;
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

	public DoctorRepository getDoctorRepository() {
		return doctorRepository;
	}

	public void setDoctorRepository(DoctorRepository doctorRepository) {
		this.doctorRepository = doctorRepository;
	}

	public void assignDoctor(String patientUsername, String doctorUserName){
        Patient pat = patientRepository.findAllByUserName(patientUsername);
        pat.setDoctor(doctorRepository.findOneByUserName(doctorUserName));
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
