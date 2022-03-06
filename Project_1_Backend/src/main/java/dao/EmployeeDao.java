package dao;

import java.util.List;

import transferobjects.EmployeeTo;

public interface EmployeeDao {
	
	EmployeeTo employeeLogin(String username, String password);
	
	EmployeeTo employeeRequest(EmployeeTo employeeTo);
	
	List<EmployeeTo> employeeViewMyPending();
	
	List<EmployeeTo> employeeViewMyResolved();
	
	EmployeeTo employeeInfo(int employeeId);
	
	EmployeeTo employeeUpdate(EmployeeTo employeeTo);

}
