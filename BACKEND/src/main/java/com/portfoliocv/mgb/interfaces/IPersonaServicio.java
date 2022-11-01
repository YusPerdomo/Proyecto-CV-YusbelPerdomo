/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliocv.mgb.interfaces;

import com.portfoliocv.mgb.entidad.Persona;
import java.util.List;

/**
 *
 * @author jhern
 */
public interface IPersonaServicio {
    //Buscar una persona
    
    public List<Persona> getPersona();
    
    //Guarda persona
    public void savePersona(Persona persona);
    
    //Eliminar por Id
    public void deletePersona(Long id);
    
    //Buscar persona por id
    
      public Persona primeraPersona(Long id);
    
}
