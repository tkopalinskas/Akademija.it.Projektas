package autotest.qa.ksalatka;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import page.MainPage;

@RunWith(Parameterized.class)
public class AdminRegistrationTest {
	WebDriver driver = new FirefoxDriver();
	MainPage mainPage = new MainPage(driver);
	private String usernames;

	public AdminRegistrationTest(String usernames) {
		this.usernames = usernames;
	}

	@Parameters
	public static List<String> data() throws IOException {

		return getTestData("src/test/resources/admin/AdminUsernames.csv");

	}

	@Before
	public void testSetup() {
		driver.get("http://localhost:3000/#/");
		mainPage.inputUsername("AdminUserName");
		mainPage.inputPassword("AdminPassword");
		mainPage.clickLogin();
		mainPage.clickRegisterNewUser();

	}

	@After
	public void CloseBrowser() {
		driver.close();
	}

	@Test
	public void AdminRegistration() {
		mainPage.clickRegisterAdmin();
		mainPage.inputFirstName("AdminName");
		mainPage.inputLastName("AdminSurname");
		mainPage.inputUsername(usernames);
		mainPage.inputPassword("adminpassword");
		mainPage.inputConfirmPassword("adminpassword");
		mainPage.clickRegister();
	}

	public static List<String> getTestData(String fileName) throws IOException {
		List<String> records = new ArrayList<String>();
		String record;

		BufferedReader file = new BufferedReader(new FileReader(fileName));
		while ((record = file.readLine()) != null) {
			records.add(record);
		}
		file.close();
		return records;

	}

}