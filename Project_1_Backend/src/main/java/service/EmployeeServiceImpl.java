package service;

import java.util.List;

import dao.EmployeeDao;
import dao.EmployeeDaoImpl;
import transferobjects.EmployeeTo;
import transferobjects.ReimbursementPojo;
	
public class EmployeeServiceImpl implements EmployeeService {
	EmployeeDao employeeDao;
	
	
	
	
	public EmployeeServiceImpl() {
		employeeDao = new EmployeeDaoImpl();
		// TODO Auto-generated constructor stub
	}

	@Override
	public EmployeeTo employeeLogin(String username, String password) {
		// TODO Auto-generated method stub
		return employeeDao.employeeLogin(username, password);
	}

	@Override
	public EmployeeTo employeeRequest(ReimbursementPojo reimbursement) {
		// TODO Auto-generated method stub
		return employeeDao.employeeRequest(reimbursement);
	}

	@Override
	public List<ReimbursementPojo> employeeViewMyPending(int employeeId) {
		// TODO Auto-generated method stub
		return employeeDao.employeeViewMyPending(employeeId);
	}

	@Override
	public List<ReimbursementPojo> employeeViewMyResolved(int employeeId) {
		// TODO Auto-generated method stub
		return employeeDao.employeeViewMyResolved(employeeId);
	}

	@Override
	public EmployeeTo employeeInfo(int employeeId) {
		// TODO Auto-generated method stub
		return employeeDao.employeeInfo(employeeId);
	}

	@Override
	public EmployeeTo employeeUpdate(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		return employeeDao.employeeUpdate(employeeTo);
	}

}
