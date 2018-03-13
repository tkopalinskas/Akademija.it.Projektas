package lt.sveikata.patient;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import lt.sveikata.user.User;
import lt.sveikata.user.UserForClient;

@RestController
@RequestMapping(value="/admin")
@CrossOrigin(origins="*")
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	

	private ModelMapper modelMapper = new ModelMapper();



	@RequestMapping(value = "/allPatients", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')") 
	public List<PatientForClient> giveAllPatients() {
		return getPatientService().receiveAllPatients();
	}

	@RequestMapping(value = "/patient/{userName}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')") 
	public PatientForClient giveAllPatients(@PathVariable final String userName){
		return getPatientService().receiveAllPatients(userName);
	}
	@RequestMapping(value = "/patientsWithoutDoctors", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')") 
	public List<PatientForClient> giveAllPatientsWithoutDoctors(){
		return getPatientService().recieveAllPatientsWithoutDoctors();
	}

	@RequestMapping(value = "/patient", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN')") 
	@ResponseStatus(HttpStatus.CREATED)
	public void createPatient(@RequestBody final AddNewPatient newPatient) {
		patientService.addNewPatient(newPatient);
	}


	@RequestMapping(value="/patientDoctorAssign/{patientUsername}/{doctorUserName}", method = RequestMethod.PUT)
	@PreAuthorize("hasRole('ADMIN')") 
	@ResponseStatus(HttpStatus.CREATED)
	public void assignDoctorToPatient( @PathVariable String patientUsername, @PathVariable  String doctorUserName){

		patientService.assignDoctor(patientUsername, doctorUserName);
	}
	
	@RequestMapping (value="/user/{userId}/firstName_lastName", method= RequestMethod.GET)
	public PatientForClient getName(@PathVariable long userId) {
		Patient patient = patientService.getByUserId(userId);
		return modelMapper.map(patient, PatientForClient.class);
		
	}

	
	public PatientService getPatientService() {
		return patientService;
	}

	public void setPatientService(PatientService patientService) {
		this.patientService = patientService;
	}
}