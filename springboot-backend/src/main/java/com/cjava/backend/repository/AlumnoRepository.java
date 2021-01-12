package com.cjava.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjava.backend.model.Alumno;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long>{

}
