package lt.sveikata.patient;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/admin")
@CrossOrigin(origins="*")
public class PatientController {
	@Autowired
	private PatientService patientService;

	@RequestMapping(value = "/allPatients", method = RequestMethod.GET)
	public List<PatientForClient> giveAllPatients() {
		return getPatientService().receiveAllPatients();
	}

	@RequestMapping(value = "/patient/{userName}", method = RequestMethod.GET)
	public List<PatientForClient> giveAllPatients(@PathVariable final String userName){
		return getPatientService().receiveAllPatients(userName);
	}

	@RequestMapping(value = "/patient", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createPatient(@RequestBody final AddNewPatient newPatient) {
		patientService.addNewPatient(newPatient);
	}

	@RequestMapping(value = "/admin/findUser/manageUser/{personalId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPatient(@RequestBody final Patient patient, @PathVariable final Long personalId) {
		patientService.updatePatient(patient, personalId);
	}

	public PatientService getPatientService() {
		return patientService;
	}

	public void setPatientService(PatientService patientService) {
		this.patientService = patientService;
	}
}