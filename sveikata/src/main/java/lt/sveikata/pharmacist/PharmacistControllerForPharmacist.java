package lt.sveikata.pharmacist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController
@RequestMapping(value="/pharmacist")
public class PharmacistControllerForPharmacist {
	
	@Autowired
	private PharmacistService pharmacistService;

	@RequestMapping(value = "/{userId}/changePassword", method = RequestMethod.PUT)
//	@PreAuthorize("hasRole('PHARMACIST')")
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPharmacist(@RequestBody final Pharmacist pharmacist, @PathVariable final Long userId) {
		pharmacistService.updatePharmacist(pharmacist, userId);
	}
	
	public PharmacistService getPharmacistService() {
		return pharmacistService;
	}

	public void setPharmacistService(PharmacistService pharmacistService) {
		this.pharmacistService = pharmacistService;
	}
}
