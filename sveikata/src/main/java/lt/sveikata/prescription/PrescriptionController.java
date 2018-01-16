package lt.sveikata.prescription;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/patient/visit/prescription")
public class PrescriptionController {

	@Autowired
	private PrescriptionService prescriptionService;

	@RequestMapping(value = "/allPrescriptions", method = RequestMethod.GET)
	public List<PrescriptionForClient> giveAllPrescriptions() {
		return getPrescriptionService().receiveAllPrescriptions();
	}

	@RequestMapping(value = "/addNew", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createPrescription(@RequestBody final AddNewPrescription newPrescription) {
		prescriptionService.addNewPrescription(newPrescription);
	}

	// @RequestMapping(value = "/doctor/prescription/managePrescription", path =
	// "/{id}", method = RequestMethod.DELETE)
	// @ResponseStatus(HttpStatus.NO_CONTENT)
	// public void deletePrescriptionFromDatabase(@PathVariable final Long id) {
	// prescriptionService.deletePrescription(id);
	// }

	@RequestMapping(value = "/doctor/prescription/managePrescription/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPrescription(@RequestBody final Prescription prescription, @PathVariable final Long id) {
		prescriptionService.updatePrescription(prescription, id);
	}

	public PrescriptionService getPrescriptionService() {
		return prescriptionService;
	}

	public void setPrescriptionService(PrescriptionService prescriptionService) {
		this.prescriptionService = prescriptionService;
	}
}
