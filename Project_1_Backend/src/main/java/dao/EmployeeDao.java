package dao;

import java.util.List;

import transferobjects.EmployeeTo;

public interface EmployeeDao {
	
	EmployeeTo employeeLogin(String username, String password);
	
	EmployeeTo employeeRequest(EmployeeTo employeeTo);
	
	List<EmployeeTo> employeeViewMyPending(int employeeId);
	
	List<EmployeeTo> employeeViewMyResolved(int employeeId);
	
	EmployeeTo employeeInfo(int employeeId);
	
	EmployeeTo employeeUpdate(EmployeeTo employeeTo);

}
