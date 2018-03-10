package lt.sveikata.patient;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt.sveikata.DTO.PatientDTO;
import lt.sveikata.DTO.PrescriptionDTO;
import lt.sveikata.prescription.Prescription;

@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins="*")
public class PatientControllerForDoctor {
	
	@Autowired
	private PatientService patientService;
	

	private ModelMapper modelMapper = new ModelMapper();

	@RequestMapping(value = "/findPatient/{personalId}", method = RequestMethod.GET)
	public PatientForClient giveAllPatients(@PathVariable("personalId") Long personalId) {
		return getPatientService().receivePatientFromDatabase(personalId);
	}
	
	@RequestMapping(value = "/patientsList/{doctorId}", method=RequestMethod.GET)
	public List<PatientForClient> getPatientList(@PathVariable("doctorId") Long doctorId) {
		
		List<Patient> patients = patientService.byDoctorId(doctorId);
		return modelMapper.map(patients, new TypeToken<List<PatientForClient>>() {
		}.getType());
		/**
		 * if you will return a single object instead of a list/collection return
		 * modelMapper.map(entityObject, EntityClass.class); example: return
		 * modelMapper.map(doctor, Doctor.class);
		 */
	}

	public PatientService getPatientService() {
		return patientService;
	}

	public void setPatientService(PatientService patientService) {
		this.patientService = patientService;
	}
}
