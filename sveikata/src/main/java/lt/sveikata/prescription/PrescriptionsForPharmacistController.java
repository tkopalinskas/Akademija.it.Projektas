package lt.sveikata.prescription;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt.sveikata.DTO.PrescriptionDTO;

@RestController
@RequestMapping(value = "/pharmacist")
@CrossOrigin(origins="*")
public class PrescriptionsForPharmacistController {

	@Autowired
	private PrescriptionService prescriptionService;
	

//	private ModelMapper modelMapper = new ModelMapper();

	/* gets all specified patient's prescriptions for pharmacist */
	@RequestMapping(value = "/{personalId}/prescriptions", method = RequestMethod.GET)
	public List<PrescriptionForClient> giveValidPrescriptions(@PathVariable("personalId") Long personalId) {
		return getPrescriptionService().receiveAllPrescriptionsForPharmacist(personalId);
	}
	
	/* Gets patient prescriptions.Same thing less code */
//	@RequestMapping("/{personalId}/prescriptions")
//	public List<PrescriptionForClient> getPatientPrescriptions(@PathVariable("personalId") Long personalId) {
//		List<Prescription> prescriptions = prescriptionService.byPersonalId(personalId);
//		return modelMapper.map(prescriptions, new TypeToken<List<PrescriptionForClient>>() {
//		}.getType());
//	}
	
	/*gets a specified prescription from database, searches by number*/
	@RequestMapping(value = "/prescriptions/{number}", method = RequestMethod.GET)
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
