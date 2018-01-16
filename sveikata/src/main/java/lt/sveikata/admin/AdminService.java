package lt.sveikata.admin;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;

	public List<AdminForClient> receiveAllAdmins() {
		List<Admin> adminsFromDatabase = getAdminRepository().findAll();
		List<AdminForClient> adminsForClient = adminsFromDatabase.stream().map((admin) -> {
			AdminForClient adm = new AdminForClient();
			adm.setFirstName(admin.getFirstName());
			adm.setLastName(admin.getLastName());
			//adm.setNotSuspended(admin.isNotSuspended());
			return adm;
		}).collect(Collectors.toList());
		return adminsForClient;
	}

	public AdminRepository getAdminRepository() {
		return adminRepository;
	}

	public void setAdminRepository(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	public void addNewAdmin(AddNewAdmin newAdmin) {
		Admin adm = new Admin();
		adm.setFirstName(newAdmin.getFirstName());
		adm.setLastName(newAdmin.getLastName());
		adm.setUserName(newAdmin.getUserName());
		adm.setPassword(newAdmin.getPassword());
		//adm.setNotSuspended(newAdmin.isNotSuspended());
		adminRepository.save(adm);

	}

	public void deleteAdmin(Long id) {
		adminRepository.delete(id);
	}

	public void updateAdmin(Admin admin, Long id) {
		Admin adm = adminRepository.findOne(id);
		adm.setFirstName(admin.getFirstName());
		adm.setLastName(admin.getLastName());
		adm.setPassword(admin.getPassword());
		adm.setNotSuspended(admin.isNotSuspended());
		adminRepository.save(adm);
	}

}
