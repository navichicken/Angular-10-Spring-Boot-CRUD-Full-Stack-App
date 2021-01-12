package com.cjava.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Alumno {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nombres")
	private String nombres;

	@Column(name = "apellido")
	private String apellidos;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "tipo_alumno")
	private int tipoAlumno;
	
	public Alumno() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public int getTipoAlumno() {
		return tipoAlumno;
	}

	public void setTipoAlumno(int tipoAlumno) {
		this.tipoAlumno = tipoAlumno;
	}
	

}
