package lt.sveikata.patient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins="*")
public class PatientControllerForDoctor {
	
	@Autowired
	private PatientService patientService;
	
	@RequestMapping(value = "/patientsList", method = RequestMethod.GET)
	public List<PatientForClient> giveAllPatients() {
		return getPatientService().receiveAllPatients();
	}

	@RequestMapping(value = "/findPatient/{personalId}", method = RequestMethod.GET)
	public PatientForClient giveAllPatients(@PathVariable("personalId") Long personalId) {
		return getPatientService().receivePatientFromDatabase(personalId);
	}

	public PatientService getPatientService() {
		return patientService;
	}

	public void setPatientService(PatientService patientService) {
		this.patientService = patientService;
	}
}
