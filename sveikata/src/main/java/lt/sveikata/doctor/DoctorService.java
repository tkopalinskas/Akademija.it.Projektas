package lt.sveikata.doctor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	

	public List<DoctorForClient> receiveAllDoctors() {
		List<Doctor> doctorsFromDatabase = getDoctorRepository().findAll();
		List<DoctorForClient> doctorsForClient = doctorsFromDatabase.stream().map((doctor) -> {
			DoctorForClient dfc = new DoctorForClient();
			dfc.setFirstName(doctor.getFirstName());
			dfc.setLastName(doctor.getLastName());
			dfc.setSpecialization(doctor.getSpecialization());
			// dfc.setWorkplace(doctor.getWorkplace());
			return dfc;
		}).collect(Collectors.toList());
		return doctorsForClient;
	}

	public DoctorRepository getDoctorRepository() {
		return doctorRepository;
	}

	public void setDoctorRepository(DoctorRepository doctorRepository) {
		this.doctorRepository = doctorRepository;
	}

	public void addNewDoctor(AddNewDoctor newDoctor) {
		Doctor doc = new Doctor();
		doc.setFirstName(newDoctor.getFirstName());
		doc.setLastName(newDoctor.getLastName());
		doc.setSpecialization(newDoctor.getSpecialization());
		// doc.setWorkplace(newDoctor.getWorkplace());
		doc.setUserName(newDoctor.getUserName());
		doc.setPassword(passwordEncoder.encode(newDoctor.getPassword()));
		doc.setNotSuspended(newDoctor.isNotSuspended());
		doc.setRole("DOCTOR");
		doc.setCodeOfUserRights("2");
		doctorRepository.save(doc);

	}

	public void updateDoctor(Doctor doctor, Long id) {
		Doctor doc = doctorRepository.findOne(id);
		doc.setFirstName(doctor.getFirstName());
		doc.setLastName(doctor.getLastName());
		doc.setSpecialization(doctor.getSpecialization());
		// doc.setWorkplace(doctor.getWorkplace());
		doc.setNotSuspended(doctor.isNotSuspended());
		doctorRepository.save(doc);
	}

}
