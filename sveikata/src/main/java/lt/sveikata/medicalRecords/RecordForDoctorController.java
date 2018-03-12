package lt.sveikata.medicalRecords;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "*")
public class RecordForDoctorController {
	
	@Autowired
	private RecordService recordService;

	@RequestMapping(value = "/patient/medicalRecords", method = RequestMethod.GET)
	@PreAuthorize("hasRole('DOCTOR')") 
	public List<RecordForClient> giveAllVisits() {
		return getRecordService().receiveAllVisits();
	}

	/* gets a specified record from database, searches by recordId */
	@RequestMapping(value = "/patient/medicalRecords/{recordId}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('DOCTOR')") 
	public RecordForClient singleRecord(@PathVariable("recordId") final Long recordId) {
		return recordService.receiveRecordInfo(recordId);
	}

	/*adds a new record to database*/
	@RequestMapping(value = "{doctorId}/patient/{personalId}/addNewRecord", method = RequestMethod.POST,
 consumes = MediaType.APPLICATION_JSON_VALUE)
//	@PreAuthorize("hasRole('DOCTOR')") 
	@ResponseStatus(HttpStatus.CREATED)
	public 	@ResponseBody void createPrescrition(@RequestBody final AddNewRecord newRecord,
			@PathVariable Long personalId,
			@PathVariable Long doctorId ) {

		recordService.addNewRecord(newRecord, personalId, doctorId);
	}

	public RecordService getRecordService() {
		return recordService;
	}

	public void setRecordService(RecordService recordService) {
		this.recordService = recordService;
	}
}
