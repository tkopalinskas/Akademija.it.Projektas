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
public class VisitController {

	@Autowired
	private VisitService visitService;

	@RequestMapping(value = "/medicalRecords", method = RequestMethod.GET)
	public List<VisitForClient> giveAllVisits() {
		return getVisitService().receiveAllVisits();
	}

	@RequestMapping(value = "/addNewRecord", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createVisit(@RequestBody final AddNewVisit newVisit) {
		visitService.addNewVisit(newVisit);
	}

	
	public VisitService getVisitService() {
		return visitService;
	}

	public void setVisitService(VisitService visitService) {
		this.visitService = visitService;
	}
}
