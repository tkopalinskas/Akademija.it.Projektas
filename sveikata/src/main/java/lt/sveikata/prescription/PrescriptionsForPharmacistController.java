package lt.sveikata.prescription;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/pharmacist")
public class PrescriptionsForPharmacistController {

	@Autowired
	private PrescriptionService prescriptionService;

	/* gets all prescriptions for pharmacist */
	@RequestMapping(value = "/prescriptions", method = RequestMethod.GET)
	public List<PrescriptionForClient> giveValidPrescriptions() {
		return getPrescriptionService().receiveAllPrescriptionsForPharmacist();
	}

	public PrescriptionService getPrescriptionService() {
		return prescriptionService;
	}

	public void setPrescriptionService(PrescriptionService prescriptionService) {
		this.prescriptionService = prescriptionService;
	}
}
