/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliocv.mgb.entidad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author jhern
 */

@Getter @Setter
@Entity
public class Persona {
@Id
@GeneratedValue(strategy =GenerationType.IDENTITY)
 private Long id;
@NotNull
@Size(min=1,max=50,message="Logitud no valida")
 private String nombre;

@NotNull
@Size(min=1,max=50,message="Logitud no valida")
 private String apellido;

@Size(min=1,max=50,message="Logitud no valida")
 private String img;

}