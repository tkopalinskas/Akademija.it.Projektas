package lt.sveikata.admin;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public List<AdminForClient> receiveAllAdmins() {
		List<Admin> adminsFromDatabase = getAdminRepository().findAll();
		List<AdminForClient> adminsForClient = adminsFromDatabase.stream().map((admin) -> {
			AdminForClient adm = new AdminForClient();
			adm.setRole(admin.getRole());
			adm.setFirstName(admin.getFirstName());
			adm.setLastName(admin.getLastName());
			adm.setSuspended(admin.isSuspended());
			adm.setUserName(admin.getUserName());
			return adm;
		}).collect(Collectors.toList());
		return adminsForClient;
	}

	public List<AdminForClient> receiveAllAdmins(String userName) {
		List<Admin> adminsFromDatabase = getAdminRepository().findByUserName(userName);
		List<AdminForClient> adminsForClient = adminsFromDatabase.stream().map((admin) -> {
			AdminForClient adm = new AdminForClient();
			adm.setFirstName(admin.getFirstName());
			adm.setLastName(admin.getLastName());
			adm.setUserName(admin.getUserName());
			adm.setRole(admin.getRole());
			adm.setSuspended(admin.isSuspended());
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
		adm.setPassword(passwordEncoder.encode(newAdmin.getPassword()));
		adm.setRole("ADMIN");
		adm.setSuspended(newAdmin.isSuspended());
		adminRepository.save(adm);

	}

	public void updateAdmin(Admin admin, Long id) {
		Admin adm = adminRepository.findOne(id);
		adm.setPassword(passwordEncoder.encode(admin.getPassword()));
		adminRepository.save(adm);
	}

}
