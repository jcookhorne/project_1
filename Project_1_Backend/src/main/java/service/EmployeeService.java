package service;

import java.util.List;

import transferobjects.EmployeeTo;
import transferobjects.ReimbursementPojo;

public interface EmployeeService {
	EmployeeTo employeeLogin(String username, String password);
	
	EmployeeTo employeeRequest(ReimbursementPojo reimbursement);
	
	List<ReimbursementPojo> employeeViewMyPending(int employeeId);
	
	List<ReimbursementPojo> employeeViewMyResolved(int employeeId);
	
	EmployeeTo employeeInfo(int employeeId);
	
	EmployeeTo employeeUpdate(EmployeeTo employeeTo);

}
