package lt.sveikata.prescriptionUses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/pharmacist")
@CrossOrigin(origins = "*")
public class UsesController {
	
	@Autowired
	private UsesService usesService;
	
	
	/*creates a new use of a prescription*/
	@RequestMapping(value = "/{pharmacistId}/prescription/{prescriptionId}/markPrescriptionAsUsed", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
//	@PreAuthorize("hasRole('PRESCRIPTION')")
	@ResponseStatus(HttpStatus.CREATED)
	public @ResponseBody void addNewUseFact(@RequestBody final AddNewUse newUse,
			@PathVariable Long prescriptionId,
			@PathVariable Long pharmacistId ) {
		usesService.addNewUse(newUse, prescriptionId, pharmacistId);
	}

}
