package lt.sveikata.medicalRecords;

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
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "*")
public class RecordForDoctorController {
	@Autowired
	private RecordService visitService;

	@RequestMapping(value = "/patient/medicalRecords", method = RequestMethod.GET)
	public List<RecordForClient> giveAllVisits() {
		return getVisitService().receiveAllVisits();
	}

	/* gets a specified record from database, searches by recordId */
	@RequestMapping(value = "/patient/medicalRecords/{recordId}", method = RequestMethod.GET)
	public RecordForClient singleRecord(@PathVariable("recordId") final Long recordId) {
		return visitService.receiveRecordInfo(recordId);
	}

	@RequestMapping(value = "/addNewRecord", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createVisit(@RequestBody final AddNewRecord newVisit) {
		visitService.addNewVisit(newVisit);
	}

	public RecordService getVisitService() {
		return visitService;
	}

	public void setVisitService(RecordService visitService) {
		this.visitService = visitService;
	}
}
