package lt.sveikata.pharmacist;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value="/admin")
public class PharmacistController {

	@Autowired
	private PharmacistService pharmacistService;

	@RequestMapping(value = "/allPharmacists", method = RequestMethod.GET)
	public List<PharmacistForClient> giveAllPharmacists() {
		return getPharmacistService().receiveAllPharmacists();
	}

	@RequestMapping(value = "/pharmacist/{userName}", method = RequestMethod.GET)
	public List<PharmacistForClient> giveAllPharmacists(@PathVariable final String userName) {
		return getPharmacistService().receiveAllPharmacists(userName); }

	@RequestMapping(value = "/pharmacist", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createPharmacist(@RequestBody final AddNewPharmacist newPharmacist) {
		pharmacistService.addNewPharmacist(newPharmacist);
	}

//	@RequestMapping(/*value = "/admin/findUser/manageUser", */path = "/{id}", method = RequestMethod.DELETE)
//	@ResponseStatus(HttpStatus.NO_CONTENT)
//	public void deletePharmacistFromDatabase(@PathVariable final Long id) {
//		pharmacistService.deletePharmacist(id);
//	}

	@RequestMapping(value = "/admin/manageUser/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingPharmacist(@RequestBody final Pharmacist pharmacist, @PathVariable final Long id) {
		pharmacistService.updatePharmacist(pharmacist, id);
	}

	public PharmacistService getPharmacistService() {
		return pharmacistService;
	}

	public void setPharmacistService(PharmacistService pharmacistService) {
		this.pharmacistService = pharmacistService;
	}
}