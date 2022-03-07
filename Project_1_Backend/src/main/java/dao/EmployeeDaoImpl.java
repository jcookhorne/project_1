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
	public EmployeeTo employeeLogin(String username, String password) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
			EmployeeTo employeeTo = null;
			Statement st;
			try {
				st = conn.createStatement();
			 
			String query = "SELECT * FROM employee_details WHERE username= '" + username
					+ "'AND password='" + password + "'";
			ResultSet rs = st.executeQuery(query);
			if(rs.next()) {
				employeeTo = new EmployeeTo(rs.getInt(1), rs.getString(2),
						rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6),
						rs.getString(7), rs.getString(8));
			}
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		return employeeTo;
	}
	
	

	@Override
	public EmployeeTo employeeInfo(int employeeId) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
		EmployeeTo employeeTo1 = null;
		Statement st;
		try {
			st = conn.createStatement();
		String query = "SELECT * FROM employee_details WHERE employee_id=" +employeeId;
		ResultSet rs = st.executeQuery(query);
		
		if(rs.next()) {
		employeeTo1 = new EmployeeTo(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8));
		
		}
		
		
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		
	
		return employeeTo1;
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
			String query = "SELECT * FROM _pending";
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
