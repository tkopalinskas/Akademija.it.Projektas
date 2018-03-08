package lt.sveikata.prescription;

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
@RequestMapping(value = "/patient")
@CrossOrigin(origins="*")
public class PrescriptionController {

	@Autowired
	private PrescriptionService prescriptionService;

	/*gets all prescriptions from database*/
//	@RequestMapping(value = "/{patientId}/prescriptions", method = RequestMethod.GET)
//	public List<Prescription> getAllPrescriptions(@PathVariable("patientId") Long patientId) {
//		List<Prescription> prescriptions = prescriptionService.byUserId(patientId);
//		return prescriptions;
//	}
	
//	@RequestMapping(value = "/{userId}/prescriptions", method = RequestMethod.GET)
//	@PreAuthorize("hasRole('PHARMACIST')")
//	public List<Prescription> getPatientPrescriptions(@PathVariable("userId") Long userId) {
//		 
//		List<Prescription> prescriptions = prescriptionService.byPersonalId(userId);
//		return prescriptions;
//	}

	/*gets a specified prescription from database, searches by number*/
	@RequestMapping(value = "/prescriptions/{number}", method = RequestMethod.GET)
	public Prescription singlePrescription(@PathVariable("number") String Strnumber) {
		System.out.println(Strnumber);
		long number = Long.parseLong(Strnumber);
		return prescriptionService.receivePrescriptionInfo(number);
	}

	/*adds a new prescription to database*/
	@RequestMapping(value = "/addNewPrescription", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createPrescription(@RequestBody final AddNewPrescription newPrescription) {
		prescriptionService.addNewPrescription(newPrescription);
	}

	/*will be used to mark a prescription as used or invalid. doesn't work yet*/
	@RequestMapping(value = "/prescriptions/{number}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPrescription(@RequestBody final Prescription prescription,
			@PathVariable final Long number) {
		prescriptionService.updatePrescription(prescription, number);
	}

	public PrescriptionService getPrescriptionService() {
		return prescriptionService;
	}

	public void setPrescriptionService(PrescriptionService prescriptionService) {
		this.prescriptionService = prescriptionService;
	}
}
