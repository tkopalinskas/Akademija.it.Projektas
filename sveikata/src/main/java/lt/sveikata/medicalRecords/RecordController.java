package lt.sveikata.medicalRecords;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value = "/patient")
@CrossOrigin(origins = "*")
public class RecordController {

	@Autowired
	private RecordService recordService;
	
	private ModelMapper modelMapper = new ModelMapper();


	@RequestMapping(value = "/medicalRecords", method = RequestMethod.GET)
	@PreAuthorize("hasRole('PATIENT')") 
	public List<RecordForClient> giveAllVisits() {
		return getRecordService().receiveAllVisits();
	}

	/*gets  all user prescriptions from database*/
	
	@RequestMapping(value = "/{patientId}/medicalRecords", method = RequestMethod.GET)
	@PreAuthorize("hasRole('PATIENT')") 
	public List<RecordForClient> getPatientRcords(@PathVariable("patientId") long patientId) {
		List<Record> records = recordService.getRecordsByUserId(patientId);
		return modelMapper.map(records, new TypeToken<List<RecordForClient>>() {
		}.getType());
		/**
		 * if you will return a single object instead of a list/collection return
		 * modelMapper.map(entityObject, EntityClass.class); example: return
		 * modelMapper.map(doctor, Doctor.class);
		 */
	}

	/* gets a specified record from database, searches by recordId */
	@RequestMapping(value = "/medicalRecords/{recordId}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('PATIENT')") 
	public RecordForClient singleRecord(@PathVariable("recordId") final Long recordId) {
		return recordService.receiveRecordInfo(recordId);
	}

//	@RequestMapping(value = "/addNewRecord", method = RequestMethod.POST)
//	@ResponseStatus(HttpStatus.CREATED)
//	public void createVisit(@RequestBody final AddNewRecord newVisit) {
//		visitService.addNewVisit(newVisit);
//	}

	public RecordService getRecordService() {
		return recordService;
	}

	public void setVisitService(RecordService visitService) {
		this.recordService = visitService;
	}
}
