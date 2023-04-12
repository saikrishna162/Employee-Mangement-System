package com.springboot.back_end.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.back_end.exception.ResourceNotFoundException;
import com.springboot.back_end.model.Employee;
import com.springboot.back_end.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    private EmployeeRepository empRepo;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee() {
        return empRepo.findAll();
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = empRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Not found with ID : " + id));
        return ResponseEntity.ok(employee);
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return empRepo.save(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Employee employee = empRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Does Not Exist with ID :" + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());
        employee.setMobNo(employeeDetails.getMobNo());

        Employee updateEmployee = empRepo.save(employee);

        return ResponseEntity.ok(updateEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        Employee employee = empRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Not found with Id : " + id));

        empRepo.delete(employee);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Successfully", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
