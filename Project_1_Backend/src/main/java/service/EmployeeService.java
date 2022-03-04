package service;

import java.util.List;

import transferobjects.EmployeeTo;

public interface EmployeeService {
	EmployeeTo employeeLogin(EmployeeTo employeeTo);
	
	EmployeeTo employeeRequest(EmployeeTo employeeTo);
	
	List<EmployeeTo> employeeViewMyPending();
	
	List<EmployeeTo> employeeViewMyResolved();
	
	EmployeeTo employeeInfo(EmployeeTo employeeTo);
	
	EmployeeTo employeeUpdate(EmployeeTo employeeTo);

}
