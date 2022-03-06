package service;

import java.util.List;

import transferobjects.EmployeeTo;

public interface EmployeeService {
	EmployeeTo employeeLogin(String username, String password);
	
	EmployeeTo employeeRequest(EmployeeTo employeeTo);
	
	List<EmployeeTo> employeeViewMyPending();
	
	List<EmployeeTo> employeeViewMyResolved();
	
	EmployeeTo employeeInfo(int employeeId);
	
	EmployeeTo employeeUpdate(EmployeeTo employeeTo);

}
