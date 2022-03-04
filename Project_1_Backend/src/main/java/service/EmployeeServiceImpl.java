package service;

import java.util.List;

import dao.EmployeeDao;
import transferobjects.EmployeeTo;
	
public class EmployeeServiceImpl implements EmployeeService {
	EmployeeDao employeeDao;
	
	@Override
	public EmployeeTo employeeLogin(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		return employeeDao.employeeLogin(employeeTo);
	}

	@Override
	public EmployeeTo employeeRequest(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		return employeeDao.employeeRequest(employeeTo);
	}

	@Override
	public List<EmployeeTo> employeeViewMyPending() {
		// TODO Auto-generated method stub
		return employeeDao.employeeViewMyPending();
	}

	@Override
	public List<EmployeeTo> employeeViewMyResolved() {
		// TODO Auto-generated method stub
		return employeeDao.employeeViewMyResolved();
	}

	@Override
	public EmployeeTo employeeInfo(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		return employeeDao.employeeInfo(employeeTo);
	}

	@Override
	public EmployeeTo employeeUpdate(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		return employeeDao.employeeUpdate(employeeTo);
	}

}
