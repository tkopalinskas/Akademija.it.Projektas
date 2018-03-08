package lt.sveikata.prescription;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/pharmacist")
@CrossOrigin(origins="*")
public class PrescriptionsForPharmacistController {

	@Autowired
	private PrescriptionService prescriptionService;

	/* gets all prescriptions for pharmacist */
	@RequestMapping(value = "/{personalId}/prescriptions", method = RequestMethod.GET)
	public List<PrescriptionForClient> giveValidPrescriptions(@PathVariable("personalId") Long personalId) {
		return getPrescriptionService().receiveAllPrescriptionsForPharmacist(personalId);
	}
	
	/*gets a specified prescription from database, searches by id*/
	@RequestMapping(value = "/{personalId}/prescriptions/{number}", method = RequestMethod.GET)
	public Prescription singlePrescription(@PathVariable("number") Long number) {
		return prescriptionService.receivePrescriptionInfo(number);
	}

	public PrescriptionService getPrescriptionService() {
		return prescriptionService;
	}

	public void setPrescriptionService(PrescriptionService prescriptionService) {
		this.prescriptionService = prescriptionService;
	}
}
