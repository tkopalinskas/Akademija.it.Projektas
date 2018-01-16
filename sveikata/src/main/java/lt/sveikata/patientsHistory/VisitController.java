package lt.sveikata.patientsHistory;

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
@RequestMapping(value="/patient/visit")
public class VisitController {

	@Autowired
	private VisitService visitService;

	@RequestMapping(value = "/allVisits", method = RequestMethod.GET)
	public List<VisitForClient> giveAllVisits() {
		return getVisitService().receiveAllVisits();
	}

	@RequestMapping(value = "/addNew", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createVisit(@RequestBody final AddNewVisit newVisit) {
		visitService.addNewVisit(newVisit);
	}

	// @RequestMapping(value = "/doctor/visit/manageVisit", path =
	// "/{id}", method = RequestMethod.DELETE)
	// @ResponseStatus(HttpStatus.NO_CONTENT)
	// public void deleteVisitFromDatabase(@PathVariable final Long id) {
	// visitService.deleteVisit(id);
	// }

	@RequestMapping(value = "/doctor/visit/manageVisit/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingVisit(@RequestBody final Visit visit, @PathVariable final Long id) {
		visitService.updateVisit(visit, id);
	}

	public VisitService getVisitService() {
		return visitService;
	}

	public void setVisitService(VisitService visitService) {
		this.visitService = visitService;
	}
}
