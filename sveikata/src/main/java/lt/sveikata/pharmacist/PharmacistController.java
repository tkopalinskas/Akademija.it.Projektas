package lt.sveikata.pharmacist;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/admin")
public class PharmacistController {

	@Autowired
	private PharmacistService pharmacistService;

	@RequestMapping(value = "/allPharmacists", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')")
	public List<PharmacistForClient> giveAllPharmacists() {
		return getPharmacistService().receiveAllPharmacists();
	}

	@RequestMapping(value = "/pharmacist/{userName}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')")
	public List<PharmacistForClient> giveAllPharmacists(@PathVariable final String userName) {
		return getPharmacistService().receiveAllPharmacists(userName);
	}

	@RequestMapping(value = "/pharmacist", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	public void createPharmacist(@RequestBody final AddNewPharmacist newPharmacist) {
		pharmacistService.addNewPharmacist(newPharmacist);
	}

	public PharmacistService getPharmacistService() {
		return pharmacistService;
	}

	public void setPharmacistService(PharmacistService pharmacistService) {
		this.pharmacistService = pharmacistService;
	}
}