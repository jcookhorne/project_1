package Server;

import java.util.List;

import io.javalin.Javalin;
import service.EmployeeService;
import service.EmployeeServiceImpl;
import transferobjects.EmployeeTo;

public class Main_Reimbursement {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EmployeeService employeeService = new EmployeeServiceImpl();
		Javalin myServer = Javalin.create().start(7070);
		System.out.println("Server listening at port 7070 . .");
		// Employee
		// endpoint for employeelogin
		myServer.get("/api/login", (ctx) -> {
			// there is an incomming book json in the requestbody, fetching the request body
			// and storing it in newBook
			EmployeeTo login = ctx.bodyAsClass(EmployeeTo.class);
			EmployeeTo returnLogin = employeeService.employeeLogin(login);
			ctx.json(returnLogin);
		});
		// endpoint for employee Info
		myServer.get("/api/employee-Info/{bid}", (ctx) -> {
			EmployeeTo info = ctx.bodyAsClass(EmployeeTo.class);
			EmployeeTo returnInfo = employeeService.employeeInfo(info);
			ctx.json(returnInfo);

		});
		// enpoint for employee update
		myServer.get("/api/employee-update", (ctx) -> {
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
		myServer.get("/api/view-pending", (ctx) -> {
			
			List<EmployeeTo> returnPending = employeeService.employeeViewMyPending();
			ctx.json(returnPending);

		});
		// enpoint for employee update
		myServer.get("/api/view-resolved", (ctx) -> {
			List<EmployeeTo> returnResolved = employeeService.employeeViewMyResolved();
			ctx.json(returnResolved);

		});

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Manager
	}

}
