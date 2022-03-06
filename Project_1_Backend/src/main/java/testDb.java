import service.EmployeeService;
import service.EmployeeServiceImpl;
import transferobjects.EmployeeTo;

public class testDb {

	
	public static void main(String[] args) {
		EmployeeTo employee = new EmployeeTo();
		EmployeeService login = new EmployeeServiceImpl();
//		login.employeeInfo(employee);
		System.out.println(login);
	}
}
