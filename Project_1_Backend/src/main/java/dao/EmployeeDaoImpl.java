package dao; 

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import transferobjects.EmployeeTo;
import transferobjects.ReimbursementPojo;

public class EmployeeDaoImpl implements EmployeeDao {

	@Override
	public EmployeeTo employeeLogin(EmployeeTo employee) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
			//EmployeeTo employeeTo = null;
			Statement st;
			try {
				st = conn.createStatement();
			 
			String query = "SELECT * FROM employee_details WHERE username= '" + employee.getEmployeeUserName()+ "'AND password='" + employee.getEmployeePassword() + "'";
			ResultSet rs = st.executeQuery(query);
			if(rs.next()) {
				employee = new EmployeeTo(rs.getInt(1), rs.getString(2),
						rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6),
						rs.getString(7), rs.getString(8));
			}
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		return employee;
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
	public EmployeeTo employeeUpdate(EmployeeTo employeeTo) {
		// TODO Auto-generated method stub
		Connection conn = DBUtil.getConnected();
		
		Statement st;
		try {
			st = conn.createStatement();
		 
		String query = "UPDATE employee_details SET email= '" + employeeTo.getEmployeeEmail()+"', contact='"+ employeeTo.getEmployeePhoneNumber()
		+"', address='" + employeeTo.getEmployeeAddress() 
		+ "', username='"+ employeeTo.getEmployeeUserName()
		+"', password='"+employeeTo.getEmployeePassword()+"' WHERE employee_id = " + employeeTo.getEmployeeId();
		
		ResultSet rs = st.executeQuery(query);
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return employeeTo;
	}



	@Override
	public ReimbursementPojo employeeRequest(ReimbursementPojo reimbursement) {
		// TODO Auto-generated method stub
		
Connection conn = DBUtil.getConnected();
		reimbursement.setStatus("pending");
		Statement st;
		try {
			st = conn.createStatement();
		 
		String query = "INSERT INTO pending_details(employee_id, reimbursement_reason, reimbursement_amount, status) VALUES(" +reimbursement.getEmployeeId()  +  ",'"+ reimbursement.getReimbursementReason()
		+"'," + reimbursement.getReimbursementAmount()
		+ ",'"+ reimbursement.getStatus()+"')";
		
		int rs = st.executeUpdate(query);
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return reimbursement;
	}
	@Override
	public List<ReimbursementPojo> employeeViewMyPending(int employeeId) {
		// TODO Auto-generated method stub
		List<ReimbursementPojo> allPending = new ArrayList<ReimbursementPojo>();
		Connection conn = DBUtil.getConnected();

			Statement st;
			try {
				st = conn.createStatement();
			String query = "SELECT * FROM pending_details WHERE employee_id =" + employeeId;
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				ReimbursementPojo pending = new ReimbursementPojo(rs.getInt(1),rs.getInt(2),
						rs.getFloat(3),rs.getString(4),rs.getString(5),rs.getString(6));
				allPending.add(pending);
			}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return allPending;
	}

	@Override
	public List<ReimbursementPojo> employeeViewMyResolved(int employeeId) {
		// TODO Auto-generated method stub
		
		List<ReimbursementPojo> allResolved = new ArrayList<ReimbursementPojo>();
		Connection conn = DBUtil.getConnected();

			Statement st;
			try {
				st = conn.createStatement();
			String query = "SELECT * FROM Reimbursement_details WHERE employee_Id="+ employeeId;
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				ReimbursementPojo Resolved = new ReimbursementPojo(rs.getInt(1),rs.getInt(2),
						rs.getFloat(3),rs.getString(4),rs.getString(5),rs.getString(6));
				allResolved.add(Resolved);
			}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return allResolved;
	}
}
	
