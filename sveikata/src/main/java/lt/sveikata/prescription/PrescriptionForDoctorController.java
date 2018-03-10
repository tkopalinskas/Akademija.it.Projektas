package lt.sveikata.prescription;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "*")
public class PrescriptionForDoctorController {
	@Autowired
	private PrescriptionService prescriptionService;

	/* gets all specified patient's prescriptions for doctor */
	@RequestMapping(value = "/patient/prescriptions", method = RequestMethod.GET)
	public List<PrescriptionForClient> giveAllPrescriptions() {
		return getPrescriptionService().receiveAllPrescriptions();
	}

	/* gets a specified prescription from database, searches by number */
	@RequestMapping(value = "/patient/prescriptions/{number}", method = RequestMethod.GET)
	public Prescription singlePrescription(@PathVariable Long number) {
		return prescriptionService.receivePrescriptionInfo(number);
	}

	public PrescriptionService getPrescriptionService() {
		return prescriptionService;
	}

	public void setPrescriptionService(PrescriptionService prescriptionService) {
		this.prescriptionService = prescriptionService;
	}
}
