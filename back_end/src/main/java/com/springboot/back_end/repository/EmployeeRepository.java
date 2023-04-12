package com.springboot.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.springboot.back_end.model.Employee;

// @Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
