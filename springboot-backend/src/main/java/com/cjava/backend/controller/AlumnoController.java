package com.cjava.backend.controller;

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

import com.cjava.backend.exception.ResourceNotFoundException;
import com.cjava.backend.model.Alumno;
import com.cjava.backend.repository.AlumnoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AlumnoController {

	@Autowired
	private AlumnoRepository alumnoRepository;
	
	// get all aLUMNOS
	@GetMapping("/alumnos")
	public List<Alumno> getAllalumnos(){
		return alumnoRepository.findAll();
	}		
	
	// create aLUMNO rest api
	@PostMapping("/alumnos")
	public Alumno createAlumno(@RequestBody Alumno alumno) {
		return alumnoRepository.save(alumno);
	}
	
	// get aLUMNO by id rest api
	@GetMapping("/alumnos/{id}")
	public ResponseEntity<Alumno> getAlumnoById(@PathVariable Long id) {
		Alumno alumno = alumnoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Alumno not exist with id :" + id));
		return ResponseEntity.ok(alumno);
	}
	
	// update aLUMNO rest api
	
	@PutMapping("/alumnos/{id}")
	public ResponseEntity<Alumno> updateAlumno(@PathVariable Long id, @RequestBody Alumno alumnoDetails){
		Alumno alumno = alumnoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Alumno not exist with id :" + id));
		
		alumno.setNombres(alumnoDetails.getNombres());
		alumno.setApellidos(alumnoDetails.getApellidos());
		alumno.setEmailId(alumnoDetails.getEmailId());
		alumno.setTipoAlumno(alumnoDetails.getTipoAlumno());
		
		Alumno updatedalumno = alumnoRepository.save(alumno);
		return ResponseEntity.ok(updatedalumno);
	}
	
	// delete aLUMNO rest api
	@DeleteMapping("/alumnos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAlumno(@PathVariable Long id){
		Alumno alumno = alumnoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("alumno not exist with id :" + id));
		
		alumnoRepository.delete(alumno);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
