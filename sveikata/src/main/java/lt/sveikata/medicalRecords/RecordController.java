package lt.sveikata.medicalRecords;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/patient")
public class RecordController {

	@Autowired
	private RecordService visitService;

	@RequestMapping(value = "/medicalRecords", method = RequestMethod.GET)
	public List<RecordForClient> giveAllVisits() {
		return getVisitService().receiveAllVisits();
	}

	@RequestMapping(value = "/addNewRecord", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createVisit(@RequestBody final AddNewRecord newVisit) {
		visitService.addNewVisit(newVisit);
	}

//	@RequestMapping(value = "/doctor/visit/manageVisit/{id}", method = RequestMethod.PATCH)
//	@ResponseStatus(HttpStatus.CREATED)
//	public void updateExistingVisit(@RequestBody final Record visit, @PathVariable final Long id) {
//		visitService.updateVisit(visit, id);
//	}

	public RecordService getVisitService() {
		return visitService;
	}

	public void setVisitService(RecordService visitService) {
		this.visitService = visitService;
	}
}
