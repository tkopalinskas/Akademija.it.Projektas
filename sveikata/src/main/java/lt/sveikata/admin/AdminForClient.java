package lt.sveikata.admin;

import lt.sveikata.user.UserForClient;

public class AdminForClient extends UserForClient{

	private String firstName;
	private String lastName;
	private String userName;
	private String role;
	//private boolean isNotSuspended;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() { return userName; }

	public void setUserName(String userName) { this.userName = userName; }

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	//	public boolean isNotSuspended() {
//		return isNotSuspended;
//	}
//
//	public void setNotSuspended(boolean isNotSuspended) {
//		this.isNotSuspended = isNotSuspended;
//	}
	
	
}
