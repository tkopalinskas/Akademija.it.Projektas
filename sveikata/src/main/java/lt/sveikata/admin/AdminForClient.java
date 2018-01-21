package lt.sveikata.admin;

import lt.sveikata.user.UserForClient;

public class AdminForClient extends UserForClient{

	private String firstName;
	private String lastName;
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

//	public boolean isNotSuspended() {
//		return isNotSuspended;
//	}
//
//	public void setNotSuspended(boolean isNotSuspended) {
//		this.isNotSuspended = isNotSuspended;
//	}
	
	
}
