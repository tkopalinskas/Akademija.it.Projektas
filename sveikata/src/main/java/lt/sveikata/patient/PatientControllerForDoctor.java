package lt.sveikata.patient;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "*")
public class PatientControllerForDoctor {

	@Autowired
	private PatientService patientService;

	private ModelMapper modelMapper = new ModelMapper();

	@RequestMapping(value = "/findPatient/{personalId}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('DOCTOR')")
	public PatientForClient giveAllPatients(@PathVariable("personalId") Long personalId) {
		return getPatientService().receivePatientFromDatabase(personalId);
	}

	// get doctor patients list
	@RequestMapping(value = "/patientsList/{doctorId}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('DOCTOR')")
	public List<PatientForClient> getPatientList(@PathVariable("doctorId") Long doctorId) {

		List<Patient> patients = patientService.byDoctorId(doctorId);
		return modelMapper.map(patients, new TypeToken<List<PatientForClient>>() {
		}.getType());

	}

	public PatientService getPatientService() {
		return patientService;
	}

	public void setPatientService(PatientService patientService) {
		this.patientService = patientService;
	}
}
