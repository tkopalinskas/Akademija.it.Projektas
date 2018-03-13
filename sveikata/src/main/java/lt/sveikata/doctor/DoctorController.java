package lt.sveikata.doctor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/admin")
@CrossOrigin(origins="*")
public class DoctorController {

	
	@Autowired
	private DoctorService doctorService;

	@RequestMapping(value="/allDoctors", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')") 
	public List<DoctorForClient> giveAllDoctors() {
		return getDoctorService().receiveAllDoctors();
	}

	@RequestMapping(value = "/doctor/{userName}", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')") 
	public List<DoctorForClient> giveAllDoctors(@PathVariable final String userName){
		return getDoctorService().receiveAllDoctors(userName);
	}

	@RequestMapping(value = "/familyDoctors", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ADMIN')") 
	public List<DoctorForClient> giveAllFamilyDoctors(){
		return getDoctorService().recieveAllFamilyDoctors();
	}

	@RequestMapping(value = "/doctor", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN')") 
	@ResponseStatus(HttpStatus.CREATED)
	public void createDoctor(@RequestBody final AddNewDoctor newDoctor) {
		doctorService.addNewDoctor(newDoctor);
	}


	public DoctorService getDoctorService() {
		return doctorService;
	}

	public void setDoctorService(DoctorService doctorService) {
		this.doctorService = doctorService;
	}
}
