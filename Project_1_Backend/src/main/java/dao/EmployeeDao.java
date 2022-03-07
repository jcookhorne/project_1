package dao;

import java.util.List;

import transferobjects.EmployeeTo;
import transferobjects.ReimbursementPojo;

public interface EmployeeDao {
	
	EmployeeTo employeeLogin(String username, String password);
	
	EmployeeTo employeeRequest(ReimbursementPojo reimbursement);
	
	List<ReimbursementPojo> employeeViewMyPending(int employeeId);
	
	List<ReimbursementPojo> employeeViewMyResolved(int employeeId);
	
	EmployeeTo employeeInfo(int employeeId);
	
	EmployeeTo employeeUpdate(EmployeeTo employeeTo);

}
