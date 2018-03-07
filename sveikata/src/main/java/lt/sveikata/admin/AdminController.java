package lt.sveikata.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/admin")
@CrossOrigin(origins="*")
public class AdminController {

	@Autowired
	private AdminService adminService;
	//private DoctorService doctorService;
	
	@RequestMapping(value = "/allAdmins", method = RequestMethod.GET)
	public List<AdminForClient> giveAllAdmins() {
		return getAdminService().receiveAllAdmins();
	}

	@RequestMapping(value = "/admin/{userName}", method = RequestMethod.GET)
	public List<AdminForClient> giveAllAdmins(@PathVariable final String userName) {
		return getAdminService().receiveAllAdmins( userName); }

	@RequestMapping(value = "/admin", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createAdmin(@RequestBody final AddNewAdmin newAdmin) {
		adminService.addNewAdmin(newAdmin);
	}

	@RequestMapping(value = "/admin/{id}/changePassword", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingAdmin(@RequestBody final Admin admin, @PathVariable final Long id) {
		adminService.updateAdmin(admin, id);
	}

	public AdminService getAdminService() {
		return adminService;
	}

	public void setAdminService(AdminService adminService) {
		this.adminService = adminService;
	}
}