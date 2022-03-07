package Server;

import java.util.List;




import com.fasterxml.jackson.core.JsonParser.Feature;
import io.javalin.Javalin;
import service.EmployeeService;
import service.EmployeeServiceImpl;
import transferobjects.EmployeeTo;

public class Main_Reimbursement {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EmployeeService employeeService = new EmployeeServiceImpl();
		//Javalin myServer = Javalin.create().start(7070);
		Javalin myServer = Javalin.create((config)-> config.enableCorsForAllOrigins()).start(7070);
		System.out.println("Server listening at port 7070 . .");
		
		
		
		
		
		// Employee
		// endpoint for employeelogin
		myServer.get("/api/login/{username}/{password}", (ctx) -> {
			// there is an incomming book json in the requestbody, fetching the request body
			// and storing it in newBook
			String employeeUsername = ctx.pathParam("username");
			String employeePassword = ctx.pathParam("password");
			
			EmployeeTo returnLogin = employeeService.employeeLogin(employeeUsername, employeePassword);
			ctx.json(returnLogin);
		});
		// endpoint for employee Info
		myServer.get("/api/employee-Info/{bid}", (ctx) -> {

			String employeeId = ctx.pathParam("bid");
			EmployeeTo returnInfo = employeeService.employeeInfo(Integer.parseInt(employeeId));
			ctx.json(returnInfo);

		});
		// enpoint for employee update
		myServer.put("/api/employee-update", (ctx) -> {
			EmployeeTo update = ctx.bodyAsClass(EmployeeTo.class);
			EmployeeTo returnUpdate = employeeService.employeeUpdate(update);
			ctx.json(returnUpdate);

		});
		// enpoint for employee request
		myServer.get("/api/employee-request", (ctx) -> {
			EmployeeTo request = ctx.bodyAsClass(EmployeeTo.class);
			EmployeeTo returnRequest = employeeService.employeeRequest(request);
			ctx.json(returnRequest);
		});
		// enpoint for employee update
		myServer.get("/api/view-pending/{bid}", (ctx) -> {
			String employeeId = ctx.pathParam("bid");
			List<EmployeeTo> returnPending = employeeService.employeeViewMyPending(Integer.parseInt(employeeId));
			ctx.json(returnPending);

		});
		// enpoint for employee update
		myServer.get("/api/view-resolved/{bid}", (ctx) -> {
			String employeeId = ctx.pathParam("bid");
			List<EmployeeTo> returnResolved = employeeService.employeeViewMyResolved(Integer.parseInt(employeeId));
			ctx.json(returnResolved);

		});

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Manager
	}

}
