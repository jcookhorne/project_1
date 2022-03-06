package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import transferobjects.EmployeeTo;

public class EmployeeDaoImpl implements EmployeeDao {

	@Override
	public EmployeeTo employeeLogin(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
		
			Statement st;
			try {
				st = conn.createStatement();
			 
			String query = "SELECT * FROM employee_details WHERE username= '" + employeeTo.getEmployeeUserName()
					+ "'AND password='" + employeeTo.getEmployeePassword() + "'";
			ResultSet rs = st.executeQuery(query);
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		return null;
	}

	@Override
	public EmployeeTo employeeRequest(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<EmployeeTo> employeeViewMyPending() {
		// TODO Auto-generated method stub
		List<EmployeeTo> allPending = new ArrayList<EmployeeTo>();
		Connection conn = DBUtil.getConnected();

			Statement st;
			try {
				st = conn.createStatement();
			String query = "SELECT * FROM pending_details WHERE employee_id =";
			ResultSet rs = st.executeQuery(query);
//			
//			while (rs.next()) {
//				//EmployeeTo pending = new EmployeeTo()
//				//allPending.add(pending);
//			}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}

	@Override
	public List<EmployeeTo> employeeViewMyResolved() {
		// TODO Auto-generated method stub
		
		List<EmployeeTo> allPending = new ArrayList<EmployeeTo>();
		Connection conn = DBUtil.getConnected();

			Statement st;
			try {
				st = conn.createStatement();
			String query = "SELECT * FROM customer_pending";
			ResultSet rs = st.executeQuery(query);
//			
//			while (rs.next()) {
//				//EmployeeTo pending = new EmployeeTo()
//				//allPending.add(pending);
//			}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}

	@Override
	public EmployeeTo employeeInfo(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
		
		Statement st;
		try {
			st = conn.createStatement();
		 
		String query = "SELECT * FROM employee_details WHERE username= '" + employeeTo.getEmployeeUserName()
				+ "'AND password='" + employeeTo.getEmployeePassword() + "'";
		ResultSet rs = st.executeQuery(query);
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public EmployeeTo employeeUpdate(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
		
		Statement st;
		try {
			st = conn.createStatement();
		 
		String query = "SELECT * FROM employee_details WHERE username= '" + employeeTo.getEmployeeUserName()
				+ "'AND password='" + employeeTo.getEmployeePassword() + "'";
		ResultSet rs = st.executeQuery(query);
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}

}
