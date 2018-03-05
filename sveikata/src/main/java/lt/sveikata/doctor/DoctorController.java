package lt.sveikata.doctor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/admin")
public class DoctorController {

	
	@Autowired
	private DoctorService doctorService;

	@RequestMapping(value="/allDoctors", method = RequestMethod.GET)
	public List<DoctorForClient> giveAllDoctors() {
		return getDoctorService().receiveAllDoctors();
	}

	@RequestMapping(value = "/doctor/{userName}", method = RequestMethod.GET)
	public List<DoctorForClient> giveAllDoctors(@PathVariable final String userName){
		return getDoctorService().receiveAllDoctors(userName);
	}

	@RequestMapping(value = "/familyDoctors", method = RequestMethod.GET)
	public List<DoctorForClient> giveAllFamilyDoctors(){
		return getDoctorService().recieveAllFamilyDoctors();
	}

	@RequestMapping(value = "/doctor", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createDoctor(@RequestBody final AddNewDoctor newDoctor) {
		doctorService.addNewDoctor(newDoctor);
	}

//	@RequestMapping(/*value = "/manageUser", */path = "/{id}", method = RequestMethod.DELETE)
//	@ResponseStatus(HttpStatus.NO_CONTENT)
//	public void deleteDoctorFromDatabase(@PathVariable final Long id) {
//		doctorService.deleteDoctor(id);
//	}

//	@RequestMapping(value = "doctor/{doctorUserName}", method=RequestMethod.PUT)
//	@ResponseStatus(HttpStatus.CREATED)
//	public void findDoctor(@PathVariable final String doctorUserName){
//		doctorService.findDoctor(doctorUserName);
//	}

	@RequestMapping(value = "/admin/findUser/manageUser/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingDoctor(@RequestBody final Doctor doctor, @PathVariable final Long id) {
		doctorService.updateDoctor(doctor, id);
	}

	public DoctorService getDoctorService() {
		return doctorService;
	}

	public void setDoctorService(DoctorService doctorService) {
		this.doctorService = doctorService;
	}
}
