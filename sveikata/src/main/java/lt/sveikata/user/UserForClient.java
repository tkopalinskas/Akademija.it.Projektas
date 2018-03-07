package lt.sveikata.user;


public  class UserForClient {

	private long id;
	private String userName;
	private boolean isSuspended = false;
	private String role;
	private  String codeOfUserRights;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
//	public String getCodeOfUserRights() {
//		return codeOfUserRights;
//	}
	public void setCodeOfUserRights(String codeOfUserRights) {
		this.codeOfUserRights = codeOfUserRights;
	}
	public boolean isSuspended() {
		return isSuspended;
	}
	public void setSuspended(boolean isSuspended) {
		this.isSuspended = isSuspended;
	}
		
}
