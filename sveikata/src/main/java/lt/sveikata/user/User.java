package lt.sveikata.user;

import javax.persistence.*;


@Entity
@Table(name="USERS")
@Inheritance (strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue(value = "SUPER_CLASS")
public abstract class User {
	
	private long id;
	private String userName;
	private String password;
	private boolean isNotSuspended;
	private String role;
	private String codeOfUserRights;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name ="id", updatable = false, nullable =false)
	
	public long getId() {
	return id;
			}

	public void setId(long id) {
		this.id=id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getCodeOfUserRights() {
		return codeOfUserRights;
	}

	public void setCodeOfUserRights(String codeOfUserRights) {
		this.codeOfUserRights = codeOfUserRights;
	}

	public boolean isNotSuspended() {
		return isNotSuspended;
	}

	public void setNotSuspended(boolean isNotSuspended) {
		this.isNotSuspended = isNotSuspended;
	}
	
}
